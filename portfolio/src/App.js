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
          <Col md={1} xsHidden sHidden style={{ height: '100px' }}></Col>
          <Col md={10} sm={12}>
            <Row style={{ borderBottom: 'solid 1px black', marginBottom: '20px' }}>
              <Col md={4} sm={12}>
                <Title>Madeleine Griffin</Title>
              </Col>
              <Col md={3} sm={12}>
                <About>a full stack web developer based in Chicago</About>
              </Col>
              <Col md={5} sm={12}>
                <Contact>
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
          <Col md={1} xsHidden sHidden style={{ height: '100px' }}></Col>
        </Row>

        <Row>
          <Col md={2} xsHidden sHidden style={{ height: '100px' }}></Col>
          <Col md={8} sm={12}>
            <Row style={{ borderBottom: 'solid 1px black', marginBottom: '20px', paddingBottom: '10px' }}>
              <Col md={6} sm={12}>
                <ToggleApp onClick={() => this.changeApp("app")}>FULLSTACK APPS</ToggleApp>
              </Col>
              <Col md={6} sm={12}>
                <ToggleApp onClick={() => this.changeApp("game")}>GAMES / EXERCISES</ToggleApp>
              </Col>
            </Row >
            <Row>
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
            </Row>
          </Col>
          <Col md={2} xsHidden sHidden style={{ height: '100px' }}></Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
