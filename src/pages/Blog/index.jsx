import './style.css'
import NavbarPadrao from '../../components/navbar'
import FooterPadrao from '../../components/footer'
import LerMais from '../../components/btnLerMais/btnLerMais'
import LerMais2 from '../../components/btnLerMais/btnLerMais2'
import LerMais3 from '../../components/btnLerMais/btnLerMais3'
import LerMais4 from '../../components/btnLerMais/btnLerMais4'
import LerMais5 from '../../components/btnLerMais/btnLerMais5'
import LerMais6 from '../../components/btnLerMais/btnLerMais6'
import imgPaiFilhoBlog from '../../assets/images/imagemBlog/imgPaiFilhoBlog.svg'
import imgBlog01 from '../../assets/images/imagemBlog/imgBlog01.svg'
import imgBlog02 from '../../assets/images/imagemBlog/imgblog02.svg'
import imgBlog03 from '../../assets/images/imagemBlog/imgblog03.svg'
import imgBlog04 from '../../assets/images/imagemBlog/imgblog04.svg'
import imgBlog05 from '../../assets/images/imagemBlog/imgblog05.svg'
import imgBlog06 from '../../assets/images/imagemBlog/imgblog06.svg'
import Libras from '../../components/VLibras'


function Blog() {
    return (
        <>
            <NavbarPadrao />
            <Libras/>
            <div className="control">

                <br />
                

                <div className="controlDeImg">  
                    <div className='chamadaControl'>
                        <h2 className='chamadaPais'>Dicas e cuidados para <br /> a visão do seu filho.</h2>
                    </div>
                    <img src={imgPaiFilhoBlog} alt="" className='fotoCapaBlog' />
                </div>
                

                <hr className='divisaoSombra' />

            <br />
            <br />

            <div id="blogs">

                
                <div className="ConsultaOftalmo" id="contentBlogs">
                    <img src={imgBlog01} alt="" id="fotoBlogsConfig" />

                    <div className='primeiroPost' id="backgroundBlogs">
                        <h3 id='titleBlogs'>Quando consultar um oftalmologista:</h3>
                        <p id='paragraphBlogs'>Os pais devem estar atentos a certos comportamentos que podem indicar problemas de visão nas crianças.</p>
                        <div id="btnLerMais1"><LerMais /></div>
                        
                    </div>
                </div>

                <div className="ConsultaOftalmo" id="contentBlogs"> 
                    <div className="segundoPost" id="backgroundBlogs">
                        <h3 id='titleBlogs'>A Importância da luz natural para a visão das crianças:</h3>
                        <p id='paragraphBlogs'>A exposição à luz natural é fundamental para o desenvolvimento saudável da visão.</p>
                        <div id="btnLerMais2"><LerMais2 /></div>
                    </div>
                    <img src={imgBlog02} alt="" id="fotoBlogsConfig" />
                </div>

                <div className="ConsultaOftalmo" id="contentBlogs">
                    <img src={imgBlog03} alt="" id="fotoBlogsConfig" />
                    <div className='terceiroPost' id="backgroundBlogs">
                        <h3 id='titleBlogs'>Dicas para criar um ambiente favorável à saúde ocular em casa</h3>
                        <p id='paragraphBlogs'>Manter a iluminação adequada em casa é crucial, especialmente durante atividades que exigem concentração visual.</p>
                        <div id="btnLerMais3"><LerMais3 /></div>
                        
                    </div>
                </div>

                <div className="ConsultaOftalmo" id="contentBlogs"> 
                    <div className="quartoPost" id="backgroundBlogs">
                        <h3 id='titleBlogs'>Jogos e atividades para estimular a saúde ocular</h3>
                        <p id='paragraphBlogs'>A exposição à luz natural é fundamental para o desenvolvimento saudável da visão.</p>
                        <div id="btnLerMais4"><LerMais4 /></div>
                    </div>
                    <img src={imgBlog04} alt="" id="fotoBlogsConfig" />
                </div>

                <div className="ConsultaOftalmo" id="contentBlogs">
                    <img src={imgBlog05} alt="" id="fotoBlogsConfig" />
                    <div className='quintoPost' id="backgroundBlogs">
                        <h3 id='titleBlogs'>Como escolher a armação de óculos ideal para seu filho</h3>
                        <p id='paragraphBlogs'>A escolha da armação dos óculos pode ser uma tarefa divertida!</p>
                        <div id="btnLerMais5"><LerMais5 /></div>
                        
                    </div>
                </div>

                <div className="ConsultaOftalmo" id="contentBlogs"> 
                    <div className="sextoPost" id="backgroundBlogs">
                        <h3 id='titleBlogs'>Mitos e Verdades sobre a Saúde Ocular Infantil</h3>
                        <p id='paragraphBlogs'>Existem muitos mitos sobre a saúde ocular que podem gerar confusão.</p>
                        <div id="btnLerMais6"><LerMais6 /></div>
                    </div>
                    <img src={imgBlog06} alt="" id="fotoBlogsConfig" />
                </div>

            <br />
            <br />
            <br />

            </div>


            </div>

            <FooterPadrao />
        </>
    )
}

export default Blog