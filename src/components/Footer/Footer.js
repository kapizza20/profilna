import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
     <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Kontakt</LinkTitle>
          <LinkItem href="tel:314-343-3432">Uskoro sluzbeni</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:knemanja00@gmail.com">
            knemanja00@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Dok Vi sumnjate u sebe i svoj potencijal, neko strahuje od toga da cete ga iskoristiti.<br></br>
          Pocni danas a ne sutra.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/kapizza20'>
        <AiFillGithub size="3rem">
        </AiFillGithub>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nemanja-kaplanovic-1581b6226/'>
        <AiFillLinkedin size="3rem">
        </AiFillLinkedin>
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
