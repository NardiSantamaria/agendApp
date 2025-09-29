import React from "react";
import imagination from '../images/imagination.png';
class Footer extends React.Component{
    render(){
        return <footer className="footer">
            <div id="" className="row">
                <div className="footerColumn">
                    <ul>
                        <li>ACERCA AgendaAPP</li>
                        <li>Trabaja con nosotros</li>
                        <li>App android</li>
                        <li>App ios</li>
                    </ul>
                </div>
                <div className="footerColumn">
                    <ul>
                        <li>SOPORTE</li>
                        <li>Términos y condiciones</li>
                        <li>Políticas de privacidad</li>
                        <li>Guía de convivencia Natura</li>
                        <li>Política de cookies</li>
                        <li>Solicita tu factura</li>
                    </ul>
                </div>
                <div className="footerColumn">
                    <ul>
                        <li>AYUDA</li>
                        <li>Preguntas frecuentes</li>
                        <li>Contacto</li>
                    </ul>
                </div>
                <div className="footerColumn">
                    <ul>
                        <li>
                            <img src={imagination} className="App-logo imgBoard"  /> 
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    }
};
export default Footer;