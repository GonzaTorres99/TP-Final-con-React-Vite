import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
    return (
        <>
            <div className="container">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom border-ligth pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Inicio</a></li>
                        <li className="nav-item"><a href="favoritos" className="nav-link px-2 text-white">Favoritos</a></li>
                        <li className="nav-item"><a href="https://www.instagram.com/gonzalopoti/" target='blank' className="nav-link px-2  text-white">Instagram</a></li>
                        <li className="nav-item"><a href="https://www.linkedin.com/in/gonzalo-torres-67160327b/" target='blank' className="nav-link px-2  text-white">Linkedin</a></li>
                        <li className="nav-item"><a href="https://www.facebook.com/gonza.torres.165?locale=es_LA" target='blank' className="nav-link px-2  text-white">Facebook</a></li>
                    </ul>
                    <p className="text-center text-white">© 2023 By Gonzalo Torres</p>
                </footer>
            </div>











        </>
    );
};

export default Footer;
