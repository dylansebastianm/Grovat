import React from "react";
import "./Nav.css"
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import {  message } from 'antd';




export default function Nav () {
/*      const [messageApi, contextHolder] = message.useMessage();
     const info = () => {
        messageApi.info('¡El modo oscuro estará disponible pronto!');
      }; */

      const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const handleButtonClick = (id: string) => {
        return () => {
          scrollToSection(id);
        };
      };  
    

    return (
        <div className="nav-component">
            <div className="links-container">
                 <div className="rutas">
                    <div onClick={handleButtonClick('Servicios')}>
                    <p  className="links"> 
                    Servicios
                    </p>
                    </div>
                    
              
                    <div onClick={handleButtonClick('Nosotros')}>
                    < p className="links"> 
                    Nosotros
                    </p>
                    </div>
                    <div onClick={handleButtonClick('Precios')}>
                    < p className="links"> 
                    Precios
                    </p>
                    </div>

                   
                    
                </div> 
                
                <div className="barrita">|</div>
                <div className="iconsNav">
                <a href="https://www.linkedin.com/in/dylan-sebastian-03706316b/" className="icons-redes2"><BsLinkedin/></a>
                <a href="https://github.com/dylansebastianm?tab=repositories" className="icons-redes2"><div><BsGithub/></div></a>
                    {/*  {contextHolder} 
                    <div 
                      onClick={info} 
                      className="icons-redes2">
                      <MdDarkMode/>
                    </div> */}
                </div>
            </div>          
       </div>
        
    )
}
