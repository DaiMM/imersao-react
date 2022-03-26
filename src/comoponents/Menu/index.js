import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoMain.png'
import Button from '../Button';
//import ButtonLink from "../ButtonLink";
import '../Menu/Menu.css'

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
            <img className="Logo" src={Logo} alt="AluraFlix logo"/>
            </Link>

            <Button as ={Link} className="ButtonLink" to="/cadastro/video">
                Alguma coisa
            </Button>

        </nav>
    );
}

export default Menu;