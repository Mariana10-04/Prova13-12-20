import React from 'react';
import './landingPage.css';
import foto3 from './img-site/3.png'

const LandingPage = () => (
    <div className="landingpage">
            <div className="img-div">
             <img className="img-landingpage" src={foto3}></img>
            </div>
        <section className="landing-section1">
            <div className="txt-div">
                <h1 className="landing-title">
                    Bahh! 
                 </h1>
                <p className="landing-txt">
                    Oi! eu sou  a Mariana e estou fazendo uma prova que contem react então para me animar a
                    eu escoli fazer um site sobre as minhas Make e outras coias que eu gosto!
                 </p>
                <div className="txt-div2">
                    <p className="landing-txt2">
                        Então é isso tadam!kkk
                    </p>
                </div>
            </div>
        </section>
        <section className="lading-section2">
        </section>

    </div>
)

export default LandingPage