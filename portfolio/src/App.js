import React, { Component } from 'react';
import logo from './logo.svg';

import { Grid, Row, Col } from 'react-bootstrap';
import Title from "./components/Title";
import About from "./components/About";
import Contact from "./components/Contact";
import List from "./components/List";
import ListItem from "./components/ListItem";
import ListTitle from "./components/ListTitle";
import ListLink from "./components/ListLink";
import ToggleApp from "./components/ToggleApp";
import projects from "./projects.json";

import './App.css';

class App extends Component {

  state = {
    projects,
    displayType: "app",
    displayProjects: [],
  }

  //determines which type of project to diplay
  whichProj = (projects, newApp) => {

    var hold = [];

    for (let i = 0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].type == newApp) {
        hold.push(projects[i]);
      }
    }

    this.setState({ displayProjects: hold });
  }

  changeApp = (newApp) => {

    this.setState({ displayType: newApp });
    this.whichProj(this.state.projects, newApp);

  }

  componentDidMount() {
    this.whichProj(this.state.projects, this.state.displayType);
  }


  render() {
    return (
      <Grid componentClass="Container">
        <Row>
          <Col md={1} sm={1} style={{ height: '10px' }}></Col>
          <Col md={10} sm={10}>
            <Row style={{ borderBottom: 'solid 1px black', }}>
              <Col md={7} sm={12}>
                <Row>
                  <Col md={12} sm={12}>
                    <Title>Madeleine Griffin</Title>
                  </Col>
                </Row>
                <Row style={{ paddingBottom: '5px' }}>
                  <Col md={12} sm={12}>
                    <About><h5>a full stack web developer based in Chicago</h5></About>
                  </Col>
                </Row>
              </Col>
              <Col md={5} sm={12}>
                <Contact>
                  <Row style={{ height: '15px' }}></Row>
                  <Row>
                    <Col md={6} sm={12}>
                      <ListLink href={'https://www.linkedin.com/in/madeleinegriffin'}>LINKEDIN</ListLink>
                    </Col>
                    <Col md={6} sm={12}>
                      <ListLink href={'https://github.com/madeleinecgriffin'}>GITHUB</ListLink>
                    </Col>
                  </Row>
                </Contact>
              </Col>
            </Row>
          </Col>
          <Col md={1} sm={1} style={{ height: '10px' }}></Col>
        </Row>

        <Row>
          <Col md={2} sm={1} style={{ height: '10px' }}></Col>
          <Col md={8} sm={10}>
            <Row style={{ borderBottom: 'solid 1px black', marginBottom: '20px', marginTop: '10px', paddingBottom: '10px', paddingTop: '10px' }}>
              <Col md={12} sm={12}>

                <Row>
                <Col md={3} sm={1} style={{ height: '10px' }}></Col>
                  <Col md={6} sm={10}>
                    <About>
                      <h4><p style={{ textAlign: 'center', paddingTop: '20px'}}>Which projects would you like to view?</p></h4>
                    </About>
                  </Col>
                  <Col md={3} sm={1} style={{ height: '10px' }}></Col>

                </Row>
                <Row>
                  <Col md={6} sm={12}>
                    <ToggleApp onClick={() => this.changeApp("app")}>FULLSTACK APPS</ToggleApp>
                  </Col>
                  <Col md={6} sm={12}>
                    <ToggleApp onClick={() => this.changeApp("game")}>GAMES / EXERCISES</ToggleApp>
                  </Col>
                </Row>
              </Col>
            </Row >
            <Col md={2} sm={1} style={{ height: '10px' }}></Col>

            <Row>
              <Col md={1} sm={1} style={{ height: '10px' }}></Col>
              <Col md={10} sm={10}>
                <List>
                  {this.state.displayProjects.map(project => (
                    <Row>
                      <ListItem
                        key={project.id}
                        id={project.id}
                      >
                        <Row>
                          <Col md={8} sm={12}>
                            <ListTitle><h2>{project.title}</h2></ListTitle>
                            <ListTitle>Tools: {project.tools}</ListTitle>
                            <ListTitle>Completed: {project.date}</ListTitle>
                          </Col>
                          <Col md={4} sm={12}>
                            <ListLink href={project.github}>GITHUB</ListLink>
                            <ListLink href={project.live}>LIVE</ListLink>
                          </Col>
                        </Row>
                      </ListItem>
                    </Row>
                  ))}
                </List>
              </Col>
              <Col md={1} sm={1} style={{ height: '10px' }}></Col>

            </Row>
          </Col>
          <Col md={2} xsHidden sHidden style={{ height: '100px' }}></Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
