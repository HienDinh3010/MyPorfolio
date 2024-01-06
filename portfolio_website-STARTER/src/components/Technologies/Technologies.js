import React from 'react';
import { DiFirebase, DiGoogleCloudPlatform, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    Hands-on experience in developing backend services, frontend, and utilizing Google Cloud Platform (GCP)
    </SectionText>
    <List>
    <ListItem>
        <DiJava size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Spring, Vertx, Java, Kotlin and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Angular, HTML, CSS and JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>      <ListItem>
        <DiGoogleCloudPlatform size="3rem"/>
        <ListContainer>
          <ListTitle>Cloud</ListTitle>
          <ListParagraph>
            Experience with <br />
            GCP and learning AWS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
