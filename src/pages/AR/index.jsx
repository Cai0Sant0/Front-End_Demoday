// import { useRef, useEffect } from 'react';
// import * as tf from "@tensorflow/tfjs";
// import * as facemesh from "@tensorflow-models/facemesh";
// import Webcam from "react-webcam";
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
// import './App.css';

// function App() {
//   const webcamRef = useRef(null);
//   const isFaceDetected = useRef(false); // Estado de detecção de rosto

//   //  leftEye = [0,0,0];
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
//     camera.position.z = 5;
//     camera.position.x = 0;
//     camera.position.y = 0;

//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(640, 480);
//     renderer.domElement.style.position = "absolute";
//     renderer.domElement.style.top = "0";
//     renderer.domElement.style.left = "0";
//     renderer.domElement.style.zIndex = 9; // Coloca o renderer acima da webcam

//     const webcamContainer = document.getElementById('webcam-container');
//     if (webcamContainer) {
//       webcamContainer.appendChild(renderer.domElement);
//     }

//     let glasses;

//     const loadGlassesModel = () => {
//       const mtlLoader = new MTLLoader();
//       mtlLoader.load('/frames/frame2/oculos.mtl', (materials) => {
//         materials.preload();

//         const objLoader = new OBJLoader();
//         objLoader.setMaterials(materials);
//         objLoader.load('/frames/frame2/oculos.obj', (object) => {
//           object.scale.set(0.1, 0.1, 0.1); // Ajuste de escala conforme necessário
//           object.visible = false; // Inicialmente invisível
//           scene.add(object);
//           glasses = object;
//         });
//       });
//     };

//     const updateGlassesPosition = (keypoints, videoWidth, videoHeight) => {
//       if (!glasses) return;

//       // Keypoints principais
//       const nose = keypoints[6];
//       // console.log(nose);

//       const leftEye = keypoints[33];
//       // console.log(leftEye);

//       const rightEye = keypoints[263];
//       // console.log(rightEye);

//       const leftEar = keypoints[234]; // Ponto próximo à orelha esquerda
//       // console.log(leftEar);

//       const rightEar = keypoints[454]; // Ponto próximo à orelha direita
//       // console.log(rightEar);

//       // Cálculo da distância entre os olhos (para escala)
//       const rightEyeDist = rightEye[1] - leftEye[1];
//       const rightLeftEye = rightEye[0] - leftEye[0];

//       const eyeDistance = Math.hypot(rightLeftEye, rightEyeDist);

//       // Rotação em torno do eixo Z (inclinando com base na linha dos olhos)
//       const angleZ = Math.atan2(rightEyeDist, rightLeftEye);

//       // Rotação lateral (inclinação da cabeça com base nos pontos das orelhas)
//       const earDistance = rightEar[0] - leftEar[0];
//       const angleY = Math.atan2(rightEar[2] - leftEar[2], earDistance);

//       // Escala dos óculos com base na distância entre os olhos
//       const scale = eyeDistance * 0.013;

//       // Posição dos óculos X, Y e Z
//       glasses.position.set(
//         -(nose[0] - videoWidth / 2) / 100,
//         -(nose[1] - videoHeight / 2) / 100,
//         -(nose[2] || 0) / 100
//       );

//       // Combinação das rotações no eixo X, Y e Z
//       glasses.rotation.set(0, angleY, angleZ);

//       // Scala do óculos eixos X, Y e Z
//       glasses.scale.set(scale, scale * (1 + angleY / 2), scale);
//       console.log(scale * (1 + angleY));

//       // Tornar os óculos visíveis
//       glasses.visible = true;
//     };


//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();
//     loadGlassesModel();

//     const loadModel = async () => {
//       await tf.setBackend('webgl');
//       await tf.ready();

//       const net = await facemesh.load({
//         inputResolution: { width: 640, height: 480 },
//         scale: 0.8,
//       });

//       const detect = async () => {
//         if (webcamRef.current && webcamRef.current.video.readyState === 4) {
//           const video = webcamRef.current.video;
//           const videoWidth = video.videoWidth;
//           const videoHeight = video.videoHeight;

//           const face = await net.estimateFaces(video);

//           if (face.length > 0) {
//             isFaceDetected.current = true; // Atualiza estado de detecção
//             updateGlassesPosition(face[0].scaledMesh, videoWidth, videoHeight);
//           } else {
//             isFaceDetected.current = false; // Nenhum rosto detectado
//             if (glasses) glasses.visible = false; // Torna os óculos invisíveis
//           }
//         }
//       };

//       const detectionLoop = () => {
//         detect();
//         requestAnimationFrame(detectionLoop);
//         // return(<div className="ponto" style={{left:`${leftEye[0]}px`, top:`${-leftEye[1]}px`, width:`10px`, height:`10px`, backgroundColor:`blue`, borderRadius:`90px`, position:`absolute`, transform:"translate(-50%, -50%)"}}/>)
//       };

//       detectionLoop();
//     };

//     loadModel();
//   }, []);

//   return (
//     <div className="app">
//       <header className="App-header">
//         <div id="webcam-container" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 640, height: 480 }}>
//           {/* <Webcam ref={webcamRef} style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             zIndex: 8,
//             width: 640,
//             height: 480,
//             transform: "scaleX(-1)"
//           }} /> */}

//           <Webcam
//             ref={webcamRef}
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               zIndex: 8,
//               width: 640,
//               height: 480,
//               transform: "scaleX(-1)"
//             }}
//             videoConstraints={{
//               facingMode: "user", // Optionally specify constraints if needed
//             }}
//             audio={false}
//             screenshotFormat="image/webp" // Ensures the webcam doesn't use a canvas internally
//             onUserMedia={(media) => {
//               // Optional: Handle the media stream if needed
//             }}
//           />
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

import { useRef, useEffect } from 'react';
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';



function AR() {
    // const webcamRef = useRef(null);
    const isFaceDetected = useRef(false); // Estado de detecção de rosto
    const videoRef = useRef(null); // Referência para o elemento <video>

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
        camera.position.z = 5;
        camera.position.x = 0;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(640, 480);
        renderer.domElement.style.position = "absolute";
        renderer.domElement.style.top = "0";
        renderer.domElement.style.left = "0";
        renderer.domElement.style.zIndex = 9; // Coloca o renderer acima da webcam

        const webcamContainer = document.getElementById('webcam-container');
        if (webcamContainer) {
            webcamContainer.appendChild(renderer.domElement);
        }

        let glasses;

        const loadGlassesModel = () => {
            const mtlLoader = new MTLLoader();
            mtlLoader.load('../../../public/frames/frame2/oculos.mtl', (materials) => {
                materials.preload();

                const objLoader = new OBJLoader();
                objLoader.setMaterials(materials);
                objLoader.load('../../../public/frames/frame2/oculos.obj', (object) => {
                    object.scale.set(0.1, 0.1, 0.1); // Ajuste de escala conforme necessário
                    object.visible = false; // Inicialmente invisível
                    scene.add(object);
                    glasses = object;

                    console.log("Modelo carregado:", object);
                    if (!object.geometry || !object.geometry.attributes.position) {
                        console.error("O modelo não possui atributo de posição válido.");
                    }
                });
            });
        };

        const updateGlassesPosition = (keypoints, videoWidth, videoHeight) => {
            if (!glasses || !keypoints || keypoints.length < 468) return;

            const nose = keypoints[6];
            const leftEye = keypoints[33];
            const rightEye = keypoints[263];
            const leftEar = keypoints[234];
            const rightEar = keypoints[454];

            if (!nose || !leftEye || !rightEye || !leftEar || !rightEar) {
                console.error("Keypoints are missing or invalid");
                glasses.visible = false;
                return;
            }

            const eyeDistance = Math.hypot(rightEye[0] - leftEye[0], rightEye[1] - leftEye[1]) || 1; // Previne NaN
            const scale = eyeDistance * 0.013;
            if (isNaN(scale) || scale <= 0) {
                console.error("Computed scale is invalid");
                glasses.visible = false;
                return;
            }

            const angleZ = Math.atan2(rightEye[1] - leftEye[1], rightEye[0] - leftEye[0]);
            const earDistance = rightEar[0] - leftEar[0];
            const angleY = Math.atan2(rightEar[2] - leftEar[2], earDistance);

            glasses.position.set(
                -(nose[0] - videoWidth / 2) / 100,
                -(nose[1] - videoHeight / 2) / 100,
                -(nose[2] || 0) / 100
            );
            glasses.rotation.set(0, angleY, angleZ);
            glasses.scale.set(scale, scale, scale);
            glasses.visible = true; // Torna os óculos visíveis após validações
        };

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();
        loadGlassesModel();

        const loadModel = async () => {
            await tf.setBackend('webgl');
            await tf.ready();

            const net = await facemesh.load({
                inputResolution: { width: 640, height: 480 },
                scale: 0.8,
            });

            const detect = async () => {
                if (videoRef.current && videoRef.current.readyState === 4) {
                    const video = videoRef.current;
                    const videoWidth = video.videoWidth;
                    const videoHeight = video.videoHeight;

                    const face = await net.estimateFaces(video);

                    if (face.length > 0) {
                        isFaceDetected.current = true; // Atualiza estado de detecção
                        updateGlassesPosition(face[0].scaledMesh, videoWidth, videoHeight);
                    } else {
                        isFaceDetected.current = false; // Nenhum rosto detectado
                        if (glasses) glasses.visible = false; // Torna os óculos invisíveis
                    }
                }
            };

            const detectionLoop = () => {
                detect();
                requestAnimationFrame(detectionLoop);
            };

            detectionLoop();
        };

        loadModel();

        // Get webcam stream
        const getWebcamStream = async () => {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480 },
            });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        };

        getWebcamStream();

    }, [0]);

    return (
        <div className="app">
            <header className="App-header">
                <div id="webcam-container" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 640, height: 480 }}>
                    {/* Video element for webcam stream */}
                    <video
                        ref={videoRef}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 8,
                            width: 640,
                            height: 480,
                            transform: "scaleX(-1)", // Flip horizontally for mirror effect
                        }}
                        autoPlay
                        muted
                        playsInline
                    />
                </div>
            </header>
        </div>
    );
}

export default AR;
