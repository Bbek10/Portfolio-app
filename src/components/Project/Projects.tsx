import React from 'react'
import {Card, CardContent,Icon, CardDescription, CardHeader, CardMeta, Grid, Image, GridColumn, Container, Button } from 'semantic-ui-react'
import projectImage from '../../images/dog.png'
import { projects } from './data'
 
  const scrollToTop=()=>{
    window.scroll(0,0)
  }
const Projects = () => {
  return (
    <div className='project-container'>
      <div><Button color='red' size='big' className='floating-button' circular icon='arrow up' onClick={scrollToTop} /></div>
        <Container textAlign='center'>
            <h1 className='project-header'>Projects</h1>
            <Grid stackable columns={2}>
            {projects.map((project) => (
                 
                 <GridColumn>
                   <Card centered className='project-card'>
                 <Image className='project-img'src={project.image} wrapped ui={false} /> 
                 <CardContent className='card=content'>
                   <CardHeader className='card-header'>{project.title}</CardHeader>
                   <CardMeta>
                     <p className='card-tech'>React.js, Next.js, MongoDB</p>
                   </CardMeta>
                   <CardDescription>
                   <p className='card-desc'> {project.description}</p>
                   </CardDescription>
             
                 <Button onClick={()=> window.location.href="https://github.com/rikkesh/major_project"} secondary className='links-button'>See More</Button>
                 </CardContent>
               </Card>
                 </GridColumn>
              
            ))}
 </Grid>
 
  </Container>
  </div>

  )
}

export default Projects