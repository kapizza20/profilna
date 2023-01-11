import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Logo=()=>{
  return <Div2>
    <img src='./Logo/7.png' alt="Logo" width='32px' height='32px'></img>
  </Div2>
}

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{display:"flex", alignitems:"center", color:"white"}}>
          <Logo></Logo><Span>Profil</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects" >
          <NavLink>Projekti</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech" >
          <NavLink>Tehnologije</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about" >
          <NavLink>O meni</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/kapizza20'>
        <AiFillGithub size="3rem">
        </AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nemanja-kaplanovic-1581b6226/'>
        <AiFillLinkedin size="3rem">
        </AiFillLinkedin>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
