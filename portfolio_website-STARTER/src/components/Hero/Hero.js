import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcom To <br />
        My Personal Porfolio <br />
        Hien Dinh
      </SectionTitle>
      <SectionText>
        A Software Engineer
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/hiendinh22/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;