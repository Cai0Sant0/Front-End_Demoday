import VLibras from "@djpfs/react-vlibras";

function Libras() {
  return (
    <>
      <div className="App">
          <VLibras forceOnload>
            <header className="app-header">
                <img src="https://logodownload.org/wp-content/uploads/2018/05/libras-logo-liguagem-de-sinais-logo.png" alt="Imagem VLibras" />
            </header>
          </VLibras>
      </div>
    </>
  );
}

export default Libras;
