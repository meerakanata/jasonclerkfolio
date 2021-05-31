import React from "react";
import {Link} from "react-router-dom";
import Collapsible from "./Collapsible.js";
import NewCarousel from "./NewCarousel.js";
import LeftArrow from "./LeftArrow.js";
import RightArrow from "./RightArrow.js";
import FeatCarousel from "./FeatCarousel.js";
import sr from './scrollReveal.js';


export default class Project extends React.Component {

//using ScrollReveal package to handle fade in animation on component mount/update
componentDidMount = () => {
    const config = {
        duration: 2500,
        delay: 400,
    }
    sr.reveal('.projectContainer', config)
    }
componentDidUpdate = () => {
    const config = {
        duration: 2500,
        delay: 400,
    }
    sr.reveal('.projectContainer', config)
}

//function to find the current project
//uses id from params props to search within rawData and locate current project
currentProject = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);
    return currentObj;
}

//function triggered when user selects previous project (left) arrow
//uses id from params props to search within rawData and locate current project
//then if statement evaluates which project is the previous one
//returns the project ID for the previous project in the array
backProjID = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);
    if (currentObj.projNUM === 1){
        const prevProjNum = 13;
        const prevObj = rawData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
    else if (currentObj.projNUM >1 && currentObj.projNUM <= 13){
        const prevProjNum = currentObj.projNUM-1;
        const prevObj = rawData.find(obj => obj.projNUM === prevProjNum);
        return prevObj.projID;
    }
}
//function triggered when user selects next project (right) arrow
//uses id from params props to search within rawData and locate current project
//then if statement evaluates which project is the next one
//returns the project ID for the next project in the array
nextProjID = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);

    if (currentObj.projNUM === 13){
        const nextProjNum = 1;
        const nextObj = rawData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }
    else if (currentObj.projNUM >= 1 && currentObj.projNUM <= 12){
        const nextProjNum = currentObj.projNUM+1;
        const nextObj = rawData.find(obj => obj.projNUM === nextProjNum);
        return nextObj.projID;
    }

}

//function to handle the conditional rendering of the top carousel progress slider
//this function takes in the project id for the current project from params props
//then finds the current object's index in the raw data array
//then a new pages array is declared, each object in the array holds value of projects in order
//class of "selectedBox" is applied to the page object that is active to show location
//along progress slider. function returns the pages array mapped to allow for conditional rendering
//of the slider, with the selected page indicated.
displayPagination = (currentProjID) => {
    const rawData = this.props.rawData;
    const currentObj = rawData.find(obj => obj.projID === currentProjID);
    const selectedPage = currentObj.projNUM-1;
    const uB = "unselectedBox";
        const pagesArr = [{box: <div className={uB} id={1}></div>, id: 1, proj: "sittris",}, 
        {box: <div className={uB} id={2}></div>, id: 2, proj: "roka",}, {box: <div className={uB} id={3}></div>, id: 3, proj: "xdclaymore",},
        {box: <div className={uB} id={4}></div>, id: 4, proj: "cuisipro",}, {box: <div className={uB} id={5}></div>, id: 5, proj: "rideconcepts",},
        {box: <div className={uB} id={6}></div>, id: 6, proj: "gourmet-settings",}, {box: <div className={uB} id={7}></div>, id: 7, proj: "revant",},
        {box: <div className={uB} id={8}></div>, id: 8, proj: "+1",}, {box: <div className={uB} id={9}></div>, id: 9, proj: "switch-vision",},
        {box: <div className={uB} id={10}></div>, id: 10, proj: "bangerz",}, {box: <div className={uB} id={11}></div>, id: 11, proj: "thermos",},
        {box: <div className={uB} id={12}></div>, id: 12, proj: "revo",}, {box: <div className={uB} id={13}></div>, id: 13, proj: "foldinglawnchair",},
    ];
    pagesArr[selectedPage].box = <div className="selectedBox"></div>;
    return pagesArr.map((page)=><Link to={"/work/"+page.proj+"/1"} key={page.id} onClick={this.resetThumbs}><div key={page.id}>{page.box}</div></Link>);
}
//function to show the top carousel feature images for desktop
//desktop images have rounded corners on the right side
displayFeaturedImageCarouselDesk = (currentObj) =>{
    if((currentObj.featureImage[0].image !== " ")&&(currentObj.featureImage[1].image === " ")){
        return <img alt={"need to add text here"} src={currentObj.featureImage[0].image}/>;
    }
    else if((currentObj.featureImage[0].image !== " ")&&(currentObj.featureImage[1].image !== " ")){
        return <FeatCarousel key={currentObj.projNUM} currentObjArr={currentObj.featureImage}/>   
    }
    else{
        console.log("something is wrong with the desktop featured image render")
    }
}
//function to show the top carousel feature images for mobile
//mobile images have rounded corners on the top side
displayFeaturedImageCarouselMob = (currentObj) =>{
    if((currentObj.featureImageMob[0].image !== " ")&&(currentObj.featureImageMob[1].image === " ")){
        return <img alt={"need to add text here"} src={currentObj.featureImageMob[0].image}/>;
    }
    else if((currentObj.featureImageMob[0].image !== " ")&&(currentObj.featureImageMob[1].image !== " ")){
        return <FeatCarousel key={currentObj.projNUM} currentObjArr={currentObj.featureImageMob}/>   
    }
    else{
        console.log("something is wrong with the featured image render")
    }

}

    render() {

        return (
            <div className="projectContainer">
                <div className="newProjNavigationUI">
                    <div className="Prev">
                        <Link to={"/work/"+ this.backProjID(this.props.currentId)+"/1"} 
                        onClick={this.resetThumbs} onTouchStart={this.resetThumbs}><LeftArrow className="leftArrow"/></Link>
                    </div>
                    <div className="paginationContainer">
                        {this.displayPagination(this.props.currentId)}
                    </div>
                    <div className="Next">
                        <Link to={"/work/"+ this.nextProjID(this.props.currentId)+"/1"} 
                        onClick={this.resetThumbs} onTouchStart={this.resetThumbs}><RightArrow className="rightArrow"/></Link>
                    </div>
                    <div className="pageCount">{this.currentProject(this.props.currentId).number}<div className="angledLine"></div>13</div>
                </div>
                <div className="projMain">
                    <div className="projMain__Left">
                        <div className="Num">
                            {this.currentProject(this.props.currentId).number}
                        </div>
                        <div className="projMain__Left-Info">
                            <div className="Name">{this.currentProject(this.props.currentId).name}</div>
                            <div className="Heading">{this.currentProject(this.props.currentId).heading}</div>
                            <div className="Description">{this.currentProject(this.props.currentId).description}</div>
                        </div>
                    </div>
                    <div className="projMain__Image">
                        <div className="landscapeImgOrient">
                            {this.displayFeaturedImageCarouselDesk(this.currentProject(this.props.currentId))}
                        </div>
                        <div className="portraitImgOrient">
                            {this.displayFeaturedImageCarouselMob(this.currentProject(this.props.currentId))}
                        </div>
                    </div>
                </div>
                <div className="projDetailTab">
                    <div className="lineDetail"></div>
                    <Collapsible trigger="Development &amp; Production" open={false} onOpen={()=> window.scrollTo({
                        top: 1200,
                        left: 0,
                        behavior: 'smooth'
                        })}>
                        <NewCarousel currentObj={this.currentProject(this.props.currentId)} />
                    </Collapsible>
                </div>
            </div>
        );
    }
}

