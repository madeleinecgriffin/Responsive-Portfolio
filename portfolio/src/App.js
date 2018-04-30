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
  whichProj = (projects) => {

    var hold = [];

    for (let i = 0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].type == this.state.displayType) {
        hold.push(projects[i]);
      }
    }

    this.setState({ displayProjects: hold });
  }

  changeApp = (newApp) => {

    this.setState({ displayType: newApp });
    this.whichProj(this.state.projects);

  }

  componentDidMount() {
    this.whichProj(this.state.projects);
  }


  render() {
    return (
      <Grid componentClass="Container">


        <Row>
          <Col md={1} sm={0} style={{ height: '100px' }}></Col>
          <Col md={10} sm={12}>
            <Row style={{ borderBottom: 'solid 1px black', marginBottom: '20px' }}>
              <Col md={4} sm={12}>
                <Title>Madeleine Griffin</Title>
              </Col>
              <Col md={4} sm={12}>
                <About>an engineer turned web-developer</About>
              </Col>
              <Col md={4} sm={12}>
                <Contact>
                  <a className="link" href="https://www.linkedin.com/in/madeleinegriffin" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
                  <a className="link" href="https://github.com/madeleinecgriffin" target="_blank" rel="noopener noreferrer">GITHUB</a>
                </Contact>
              </Col>
            </Row>
          </Col>
          <Col md={1} sm={0} style={{ height: '100px' }}></Col>
        </Row>

        <Row>
          <Col md={2} sm={0} style={{ height: '100px' }}></Col>
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
                      <Col md={8} sm={12}>
                        <ListTitle>{project.title}</ListTitle>
                        <ListTitle>{project.date}</ListTitle>
                      </Col>
                      <Col md={4} sm={12}>
                        <ListLink href={project.github}>GITHUB</ListLink>
                        <ListLink href={project.live}>LIVE</ListLink>
                      </Col>
                    </ListItem>
                  </Row>
                ))}
              </List>
            </Row>
          </Col>
          <Col md={2} sm={0} style={{ height: '100px' }}></Col>
        </Row>

      </Grid>
    );
  }
}

export default App;
