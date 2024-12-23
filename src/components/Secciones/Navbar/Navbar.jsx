// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { UserContext } from '../../usercontent'

function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <NavContainer>
      <Link to={"/home"} className='EcosTitle'>ECOS</Link>
      <nav className='NavLinks'>
        <li><Link to={"/about"} className='links'>Nosotros</Link></li>
        <li><Link to={"/Gallery"} className='links'>Galeria</Link></li>
        <li><Link to={"/Contacts"} className='links'>Contactanos</Link></li>
      </nav>
      <div className='Buttons'>
        {user ? (
          <span className="welcome-text">Bienvenido EcosFamily</span>
        ) : (
          <>
            <button className='Btns'><Link to={"/Login"} className='ButtonTxt'>Login</Link></button>
            <button className='Btns RegisterBtn'><Link to={"/register"} className='ButtonTxt'>Registro</Link></button>
          </>
        )}
      </div>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
    .welcome-text{
        color: rgb(254, 249, 195);
        padding-right: 1rem;
        font-weight: 600;
        font-size: 1.3rem;
    }
    .ButtonTxt{
        text-decoration: none;
    }
    .EcosTitle{
        margin: 15px;
        text-decoration: none;
        font-size: 1.3rem;
        color: #ffffff;
    }
    .NavLinks{
        display: flex;
        margin-left: auto;
        justify-content: center;
        list-style: none;
    }

    .links{
        display: flex;
        margin: 15px;
        text-decoration: none;
        cursor: pointer;
        color: rgb(255, 215, 0);
    }
    .links:hover{
        opacity: .7; 
    }

    .Buttons{
        display: flex;
        gap: 15px;
        .Btns{
            border-radius: 5px;
            cursor: pointer;    
            padding: 8px;
        }
        .RegisterBtn{
            margin-right: 15px;
            background-color: rgb(255, 215, 0);
            color: rgb(10, 10, 10);
        }
    }

    .Btns:hover {
        background-color: rgb(255, 235, 122);
    }
    @media (max-width: 768px) {
        justify-content: center;
    }
    @media (max-width: 500px){
        .NavLinks{
            margin: auto;
        }
        .EcosTitle{
            display: none;
        }
        .Btns{
            margin-bottom: 20px;
            margin-right: 0px;
        }
        flex-direction: column;
    }
    width: 100%;
    gap: 15px;
    min-height: 5rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background-color: rgb(10, 10, 10);
    font-family: Pussycat, Algerian, Broadway, Monospace;

`