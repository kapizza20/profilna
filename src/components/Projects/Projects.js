import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
      <SectionTitle main>Projekti</SectionTitle>
        <GridContainer>
          {projects.map(({id,image,title,description,tags,source,visit})=> (
            <BlogCard style={{padding:'10px'}} key={id}>
            <Img style={{width:'15rem',height:'auto'}} src={image}/>
              <TitleContent>
                <HeaderThree title>{title}</HeaderThree>
                <Hr/>
              </TitleContent>
              <CardInfo>{description}</CardInfo>
            
            <div>
          <TitleContent>---</TitleContent>
          <TagList>
            {tags.map((tag,i)=>{
              <Tag key={id}>{tag}</Tag>
            })}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks>Code</ExternalLinks>
          <ExternalLinks>Projekat</ExternalLinks>
        </UtilityList>
        </BlogCard>
          ))}
        </GridContainer>
        
  </Section>
);

export default Projects;