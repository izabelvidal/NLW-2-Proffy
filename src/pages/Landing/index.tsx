import React from 'react';

//tem que importar imagens para poder usar
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

//linkando a stylesheet
import './styles.css';

function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img 
                    src={landingImg} 
                    alt="Plataforma de estudo" 
                    className="hero-img"
                />
                <div className="buttons-container">
                    <a href="/" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                            Estudar
                    </a>

                    <a href="/" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aula"/>
                            Dar aula
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas 
                    <img 
                    src={purpleHeartIcon} 
                    alt="Total de conexões"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;