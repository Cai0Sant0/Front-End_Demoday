import React, { useState } from 'react';
import './style.css';
import NavbarPadrao from '../../components/navbar';
import Popo from '../../components/BtnIaArmacao/btnArmacao';
import { Link } from 'react-router-dom';


const AnalisadorFacial = () => {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [resultado, setResultado] = useState(null);

  const apiKey = "AIzaSyBT1a5jIy30HWmlRLmas9eUNja5g_yH7FI";

  const analisarImagem = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImagemSelecionada(reader.result);
    };
    reader.readAsDataURL(file);

    setLoading(true);
    setErro(null);
    setResultado(null);

    try {
      const base64Image = await converterParaBase64(file);
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `Você é uma funcionalidade em um site e deve, analisar se há um rosto na imagem, caso haja, verifique o formato dos rostos e categorize eles entre (Redondo, Quadrado, Oval e Coração), leve em consideração a largura da testa, formato do queixo e tamanho do nariz. Agora retorne um desses tipos de armação (quadrado, redondo, gatinho ou aviador) que combine com tal rosto, retorne a resposta somente no formato JSON: 
                {
                  "MelhorArmacao": "<tipo de armação recomendada>"
                }`
              },
              {
                inline_data: {
                  mime_type: file.type,
                  data: base64Image
                }
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          topK: 32,
          topP: 1,
          maxOutputTokens: 4096
        }
      };

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody)
        }
      );

      if (!response.ok) {
        throw new Error('Falha ao analisar a imagem');
      }

      const data = await response.json();
      let DataErrado = data.candidates[0].content.parts[0].text;

      if (DataErrado.includes("json")) {
        DataErrado = DataErrado.slice(8, 41);
        const result = JSON.parse(DataErrado);
        exibirResultados(result);
      } else {
        const result = JSON.parse(data.candidates[0].content.parts[0].text);
        exibirResultados(result);
      }

    } catch (error) {
      console.log(error);
      setErro('Erro ao analisar a imagem! Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const converterParaBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const exibirResultados = (result) => {
    setResultado(result);
  };

  return (
    <>

    <NavbarPadrao/>


    <section className='explicacaoIA'>
      <h1 className='tituloTesteIA'>Análise Facial</h1>
      <p className='descTesteIA'>Escolha uma imagem para analisar a expressão facial.</p>
    </section>


    <section className="containerIA">
      <div className="BtnEinputIA">
        <button className="btnEscolheImg">Escolher Imagem</button>
        <input
          type="file"
          id="inputImagem"
          accept="image/*"
          onChange={analisarImagem}
        />
        
      </div>
      <div id="imagem-preview" className="imagem-preview">
        {imagemSelecionada && (
          <img
            className='imgSelecionada'
            id="imagemSelecionada"
            alt="Imagem selecionada"
            src={imagemSelecionada}
          />
        )}
      </div>
      {loading && <div id="loading" className="loadingIA">Analisando imagem...</div>}
      {erro && <div id="error" className="error">{erro}</div>}
      {resultado && (
        <div id="resultado">

          <Popo armacao = {resultado.MelhorArmacao} className = "popoverTelaTesteIA"/>
          {<Link to={"/filtro"} className='linkFiltroTelaTesteIA'>Testar Armação</Link>}

          
          {/* <h2>Resultados da Análise:</h2>
          <p><strong>Melhor Armação:</strong> <span id="melhorArmacao">{resultado.MelhorArmacao}</span></p> */}
        </div>
      )}
    </section>



    </>
  );
};

export default AnalisadorFacial;
