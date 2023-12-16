import React from "react";
import imagination from '../images/imagination.png';
class Footer extends React.Component{
    render(){
        return <footer className="footer">
            <div id="" className="row">
                <div className="footerColumn">
                    <ul>
                        <li>ACERCA DE NATURA</li>
                        <li>Bien estar bien</li>
                        <li>Sustentabilidad</li>
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
                        <li>Encuentra Natura</li>
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
            <div className="row">
                <p>
                    © 2023 NATURA COSMÉTICOS. Todos los derechos reservados.NATURA DISTRIBUIDORA DE MÉXICO SA DE CV, RFC:NDM041125NT7, Boulevard Manuel Avila Camacho 32, piso 10, Col. <br/>
                    Lomas de Chapultepec 1 sección, Alc. Miguel Hidalgo, C.P.11000, Ciudad de México. Todos los precios y condiciones de este sitio son válidos sólo para compras en el sitio. <br/>
                    Precios y promociones pueden cambiar sin previo aviso. Los precios mostrados en el sitio prevalecen a los demás anunciados en otros medios de comunicación y/o sitios de búsquedas.<br/> 
                    El precio válido es el que se informa en la bolsa de compras.Las imágenes son sólo ilustrativas. <br/>
                    </p>
            </div>
        </footer>
    }
};
export default Footer;