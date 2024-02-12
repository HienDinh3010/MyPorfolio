import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const handleButtonClick = () => {
  window.location.href = '/Hien Dinh - Software Engineer - Resume.pdf';
};

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom To <br />
        My Personal Porfolio <br />
        Hien Dinh
      </SectionTitle>
      <img src="images/Hien Dinh.jpeg" alt="Hien Dinh" height="380px" width="350px"/>
      <SectionText>
        A Software Engineer
      </SectionText>
      <Button onClick={handleButtonClick}>
        <a href="/Hien Dinh - Software Engineer - Resume.pdf" download="HienDinh_Resume.pdf">Download CV</a>
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;