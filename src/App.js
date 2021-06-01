//importing all packages, and components
import React, { Component } from "react";
import { HashRouter as Router, NavLink, Route, Switch, Redirect, Link} from 'react-router-dom';
import Work2 from "./Work2";
import ProjectContainer from "./ProjectContainer.js"
import Branding from "./Branding.js";
import About1 from "./About1";
import Footer from "./Footer";
import Close from "./Close.js";
import Burger from './Burger.js';
import ButtonMailto from "./ButtonMailto";
import ScrollRestore from "./ScrollRestore";
import sr from './scrollReveal.js';

//importing styling
import "./App.css";

//importing data arrays
var rawData = require('./RawData-1.js'); //data for all projects
var grid_images = require('./RawData_grid_images.js'); //data for the homepage image grid
var aboutData = require('./AboutData.js'); //data for the About page



class App extends Component {

  state = {
    footerSelector: "footer",
    contentSelector: "content__container",
    navMenuSelector: "navigation__desk",
    mobileMenuOpen: false,
    clickCounter: 0,
    activeObj:{},
    rawProjectData: rawData,
    grid_images: grid_images,
    aboutData: aboutData,
  };

  //using lifecycle methods with Scroll Reveal package to 
  //fade in footer component on component mount/update
  componentDidMount = () => {
    const config = {
        duration: 2500,
        delay: 400,
    }
    sr.reveal('.footer', config)
    }
  componentDidUpdate = () => {
      const config = {
          duration: 2500,
          delay: 400,
      }
      sr.reveal('.footer', config)
  }

  //function to update state with the project that has been 
  //rendered on the page. function is invoked from 
  //ProjectContainer component
  changeState = (obj) => {
    this.setState({
      activeObj: obj,
    });
  };

  //function to keep track of state of the burger menu, if it is open or closed
  //function is called onClick/touchStart of burger menu/close icon
  burgerMenuClick = () =>{
    
    let clickCounter = this.state.clickCounter;
    clickCounter = clickCounter+1;
    console.log(clickCounter);
    if (clickCounter%2 === 0){
      this.setState({
        mobileMenuOpen: false,
        clickCounter: 0,
        navMenuSelector: "navigation__desk",
        contentSelector: "content__container",
        footerSelector: "footer",
      });
    }
    else{
      this.setState({
        mobileMenuOpen: true,
        clickCounter: clickCounter,
        navMenuSelector: "navigation__mob",
        contentSelector: "contentHidden",
        footerSelector: "footerHidden",
        
      });
    }
  }

  //function to handle the conditional rendering if the menu is open on mobile.
  showOpenMenu = () => {

    if(this.state.mobileMenuOpen === true){
        return <div className={this.state.contentSelector}></div>;
    }
    else {
      return <div className={this.state.contentSelector}>
      <ScrollRestore>
        <Switch>
          <Route exact path="/" render={() =><Redirect to='/work'/>}/>
          <Route path="/work" exact render={ () => { return <Work2 grid_images={this.state.grid_images} /> }} /> 
          <Route path="/about" exact render={ () => { return <About1 aboutData={this.state.aboutData}/> }} />
          <Route path="/work/:projectID?/:slideID?" exact render={ (props) => { return <ProjectContainer 
          activeObj={this.state.activeObj} rawData={this.state.rawProjectData} projectId={props.match.params.projectID} 
          slideId={props.match.params.slideID} changeState={this.changeState} />} } />
        </Switch>
      </ScrollRestore>
    </div>;
    }
  }

  //function to update various selectors in state for conditional rendering
  //function is called within the navigation links in this component
  pageHandler = (page) =>{
    this.setState({
      mobileMenuOpen: false,
      clickCounter: 0,
      navMenuSelector: "navigation__desk",
      contentSelector: "content__container",
      footerSelector: "footer",
    });
  }

  //function to determine whether to display the mobile menu open, 
  //with a close button OR mobile menu closed with the burger button
  //onclick triggers function that updates state for conditional rendering
  burgerOrClose = () => {
    if(this.state.mobileMenuOpen === true){
      return <button className="burgerButton" type="button" onClick={this.burgerMenuClick}>
      <Close className="v3Close" />
    </button>;
    }
    else {
      return <button className="burgerButton" type="button" onClick={this.burgerMenuClick}>
      <Burger className="v3Burger" />
    </button>;
    }
  }

  render() {

    return (

      <Router>
        <div className="app">
          <div className="body">
            <div className="navigation">
              <div className={this.state.navMenuSelector}>
                <div className="menu">
                  <NavLink to="/work" onClick ={() => this.pageHandler("work")} activeClassName="current" className="notCurrent">work<div className="navLinksUI"></div></NavLink> 
                  <NavLink exact to="/about" onClick ={() => this.pageHandler("about")} activeClassName="current" className="notCurrent">about<div className="navLinksUI"></div></NavLink>
                </div>
                <div className="jayEmail">
                  <ButtonMailto label="jayclerk@gmail.com" mailto="mailto:jayclerk@gmail.com" />
                </div>
              </div>
            </div>
            <div className="main">
              <div className="header">
                  <Branding />
                <div className="burgerMenu">
                      {this.burgerOrClose()}
                </div>
                <div className="smallBranding">
                <Link to="/work"><div className="topLine">jc</div>
                  <div className="bottomLine">id</div></Link>
                </div>
              </div>
              <div className="content">
                {this.showOpenMenu()}
              </div>
            </div>
          </div>
          <div className={this.state.footerSelector}>
            <Footer />
          </div>

        </div>
      </Router>

    );
  }
}

export default App;


