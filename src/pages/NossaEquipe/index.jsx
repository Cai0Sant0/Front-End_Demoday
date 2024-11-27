import './style.css';
import CardEquipe from '../../components/CardEquipe/CardEquipe';
import NavbarPadrao from '../../components/navbar';
import FooterPadrao from '../../components/footer';
import Libras from '../../components/VLibras';
import Topo from "../../components/ComponenteEscrolaPraCima";


function NossaEquipe(){
    return(
        <>

          <Topo/>

          <NavbarPadrao/>

          <Libras/>

          <div className='AlinhaTextoNossaEquipe'>
            <h1 className='tituloNossaEquipe'>CONHEÇA NOSSA EQUIPE</h1>
          </div>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Gustavo"} funcao={"Product Owner"} imgPerfil={"https://s3-alpha-sig.figma.com/img/3d75/95dc/df9a61c67741bbe5d1dc4a893e865447?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkIstnCR1wV~ud7l0R2GSitPsGY0nSgSDBi7x2Zr3BD~J~AyWW1f86vIF-l2PMRhRO5iN3bjai2EG3jxbyqvvSVG36gnTGwXfNmzlVmlZ6aGHxvlA7722-xR5R04mbpB-LJsITNdsOEOTnoUkEYRS9IgAdvYvb1HRpeuhCt9epVLmb8gs-iNIB2EcNQzKWQgqk2rhfDl45HdrYTe625EcVEHQ~68yK1s8uSsgU3rVzVdu~h84E2qyjdH0DP837mOh8a33-F94yY-IZwdgHSKgA-k6VihWdYrEx9UGT3LL4jMflpBGMeGPdyUWhupzEkwox9KTSj81yUu2m~QlMlCjw__"} linkGithub={"https://github.com/gusantos7"} linkInsta={"https://www.instagram.com/gu.santos7_/"} linkLinkedin={"https://www.linkedin.com/in/gustavosantossilva09/"}/> }

            {<CardEquipe className = "cardsPerfil" nome={"Gabriel"} funcao={"Scrum Master"} imgPerfil={"https://s3-alpha-sig.figma.com/img/7698/a3c2/f1e4470622f1fc4c8fee087fa8361c34?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QaqipXCUPNvUUZwbLQX-WMgEx11D2ehhIUXtCmvevZwvWkQqNk4Kk3pZg91EDNgIZ60UwWmNCp0EigK0bLSvRDoP7YR4yJmXRH2kmMMUPKNgvvFZWuIpPSvSYiqS3K70FkiFrxN9fgAXC-kt7APJmLkOW8~qcN1x-gC6FPFZhI0fEP4T6OmMb9yw7K2~tXCGbBwkMJrRKTB2etFH8Xu65eohEQ2TRt58EkXiE3Lu187lYFolmqHGRRIXLuDKiq6mPtmn4oJkg1Rwk7K0Fn72D4CeJdpbiwLGztgbVOICsM~TNYmzDO7FZtR6T3jXbib4XtVtHtBkKcnb0~q1shM~fg__"} linkGithub={"https://github.com/Rirfit"} linkInsta={"https://www.instagram.com/rirfit/"} linkLinkedin={"https://www.linkedin.com/in/rirfit/"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Pedro"} funcao={"Dev Front-End"} imgPerfil={"https://s3-alpha-sig.figma.com/img/f2ca/f967/b732dd068ee8a7894c8abf62ced9816f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jeDZBbk~HGK87AAXn-3iPSK3wNCO75rpcsodjMJK3sKv-NVMQTc1yVZNt0-hwDPWwuBwEKkbRFgdW9siLq1n5XWGfBvXEG5oabT10iOok~GhKltoOsOLujfznKWcDHvRt3VtzWgZehyFnDKxCN7525kAwGQzqoI3qRknIr-SR~3tegM6NgmrGDJuQx2VE-kpCu-vIoe5VnlU0VYEU2xKY3rvO0ErilzDzokkv~ctwQsyV1zzkHJcrTd7LEhgXgECJuTJWuzgk2z-jODSNLRb2D2m5VNplziT~OyEA4y5nj-XszZihsO-U9MyOi89MBANKXzJu~ePPgt95pYHqVfT7Q__"} linkGithub={"https://github.com/Pedro-HTS"} linkLinkedin={"https://www.linkedin.com/in/pedrohenriquetorianisilva/"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Lívea"} funcao={"Dev Back-End"} imgPerfil={"https://s3-alpha-sig.figma.com/img/0174/28e7/a6c3001b2201e11e6ff278ad146786f4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8rL~fJ6Y0TdzUCGiGw81CJFDdgqCU0-~D-S~V7sdbcVf8deti4xewMuxaZp0SFLpJM26Cn7s5KFjua~jPlCg4MDcyU75hY841qFOhXMqu2ImP8vvxHz1t7Tf5hPzb2NReru74c9TLlYtA6blL0K0~VBER26WxchbFXBzC3~j-ok9cCH4KHGHDm~aTFpR0uhe8WgrQM59yY~cF0rk2il76woslYeQNkQMHHcnxlvPqidp86HU3awMeh4vvp3dmg1-YIWEAYdaBtZuKj2JZ0QXfyt-ksxV8cOofB~ALfvtoLjjkcyyTz1c3rXE9eMdrAJXrQBGMhAjDE8lbgb7jdg7Q__"} linkGithub={"https://github.com/LiveaBrito"} linkInsta={"https://www.instagram.com/livea_brito/"} linkLinkedin={"https://www.linkedin.com/in/livea-brito-3092b3297"}/>}
            
          </div>

          <div className='linhaCard'>

            {<CardEquipe className = "cardsPerfil" nome={"Caio"}  funcao={"Dev Front-End"} imgPerfil={"https://s3-alpha-sig.figma.com/img/58b4/3a31/efbe5302590a387beb84caa9d6e7f5fb?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6AUnEN8eHmT99hxIt0sitxRqgoc0o2oV8ewIhDNSnIdTQp36JHl6K96AtgAmhQd0ET49KjsmXvw4gfRMzOLPTh6tfHiWiZ78VCwlOR1m9Huhxbq-pY63lk6Lp2cIBwoh8Ahe4MJJWVSy7DQFf98vKtEq4I0ATPaeugkNXG6SRXXYmlhSxEY3VJjOEsNIVgldRQRjQEr~ix7MvJ5n~9vLGOcwFxHjkGeYbNXR9RAXh7RhEfEqkSPHvYu2ZPk0Q5o488-SWJrWRiJzvyEQ5PvdfT6VqkkBpeRNGN6Bx3w6PmCUUZuivoe8KRpVIJRuwuPqQaBf7TTnC98h~LTJe5d6g__"} linkGithub={"https://github.com/Cai0Sant0"} linkLinkedin={"https://www.linkedin.com/in/caio-barbosa-104santo/"} linkInsta = {"https://www.instagram.com/cai0.sant0/?next=%2F"}/>}

            {<CardEquipe className = "cardsPerfil" nome={"Melissa"}  funcao={"Designer UI/UX"} imgPerfil={"https://s3-alpha-sig.figma.com/img/7e0a/b49d/bdece110883222c51412328e32c2b761?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TaVU5-shizKSEDFHEsZulBGzcNVntXIzx2edm0y-Qv4F8yA0W4t6Suad4BZCYCV22MWrsoukM1fTafivRBsNvTq5r2OQ3nDvikDP5NfyKN-0i7pyvWJVvtnyZF-RYePA3RLVn3dOvIUlrmwr64JOFCrp6j2YPff--okCbb1iOEBpvmDnWNmpDRUIuigQ3ssN2N1Pt46K9Gd1j6kJjHhI3Crxf~Crh31vqpXQBxRmOy-gOGzI9vtcSSk6LlHm9RSa~~aGQNte5xdgndDVUpXJk4Ou9gMeCULEExPldIOmtYlaH~jFeNrk~Q1U8HjfLMmwStesdcuSAJRr07pIJK4zCg__"} linkLinkedin={"https://www.linkedin.com/in/melissa-de-almeida-dias-techlissa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} linkGithub={"https://github.com/lissalissa-hub"} linkInsta={"https://www.instagram.com/me_lissalissa/profilecard/?igsh=ejRuZDR6bnk3dWx6"}/>}


            {<CardEquipe className = "cardsPerfil" nome={"Davi"}  funcao={"Dev Front-End"} imgPerfil={"https://s3-alpha-sig.figma.com/img/7d02/4316/490650e1ec319be698e93c547c4c5428?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lpwag2-xhJ8Uu0LyQRSto8SgnWAE75qglCp5eYaawCU0OiFkmYAq3BgmVJlRwDgMAPym31BtDIPnAXWxmdAxGm5Kb-BxKiGxg5DzCmWc3mdIeyahXALX5LsU~iDvO8h9Dtgep2dujnI1VrKXMfba1YbGVtOeetmSA5ZEUpvR~yq5NT9Fw5BkO-vSBnRh6NhCFb6u5Wyenv8u9ickS~CS876--JY5xllYHlnqiiiKtsX~KlRWsaNziHtG~Dn5YAldP-7RmzntLXmVD-DhffxBwWKYJxW5cwG2Qn62hjkHp63JTFC5BxBaPIqTtUhTdtQa4CWx6vqObzU1WFL3fQFHzA__"} linkLinkedin={"https://www.linkedin.com/in/davi-barbosa-nunes-b990972a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"} linkGithub={"https://github.com/Braz4BR"} linkInsta={"https://www.instagram.com/dv.nnunes/"}/>}


            {<CardEquipe className = "cardsPerfil" nome={"Sônia"} funcao={"Designer UI/UX"} imgPerfil={"https://s3-alpha-sig.figma.com/img/69ed/2ecc/20ce462aa0c07bc9cd0f840520841161?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WCO6GbLvQ8UE~UUGRzK-O5DX-C5-92y0ujIOD34Vaq0s9CT4ytcsJAQVSn4ryRdB02Hw6oSj06H6JA3ihX58VUeuiosyRVEiB36daW7xzmlXDdsASk5oyk4Iiuzb8lURbGqg3Qb7Z37lKtbyMZLhKfWXt8PQ6EiMWLNdczgVet4N9cDiKtgRKSmjlZEtixHKKLc8w26ui2iRJm-gSOiFSC1tL~sMzU77xhckWKTRStgiGJS83xLynPOxOjxvIZ9Zkm5TL9Y0C0K2Qv54fprR2UkrC0kdzNnkcTjks6SjWEotEKQ3EuwlMy-R9A9fJ~ms2zaohdF1YqyJ4d9HwxqhAg__"}/>}
            
          </div>

          <FooterPadrao/>
        </>
    )
}


export default NossaEquipe;