import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import {BackgroundAnimation} from '../BackgrooundAnimation/BackgroundAnimation'

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Dobro dosli na<br></br>
        Moju profilnu stranicu
      </SectionTitle>
      <SectionText>
        Zdravo, ja sam programer zainteresovan za rad sa Javascript programskim jezikom. <br></br>
      </SectionText>
      <Button onclick={()=>window.location=""}>Kontakt</Button>
    </LeftSection>
  </Section>
);

export default Hero;