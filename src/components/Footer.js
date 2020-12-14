import React from 'react';
import Instagram from '../components/img/insta.png';
import './footer.css'

function Footer() {
    return(
        <>
        <div className="container-footer">
            <div className="social-media">
            <a href='https://www.instagram.com/marianas.s.g/?hl=pt-br' target='_blank'><img src={Instagram} /></a>
            </div>
            <h2>Mariana Gonzalez da Silva</h2>
        </div>
        </>
    );
}

export default Footer;