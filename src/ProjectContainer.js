import React from "react";
import Project from "./Project.js";



export default class ProjectContainer extends React.Component {

    componentDidMount () {
        const projectId = this.props.projectId; //this is the id taken from the URL path for the current page
        const activeObj = this.props.activeObj; //this is the object for the current product page being displayed
        const rawData = this.props.rawData; //this is the raw data from the RawData-1 module export

        //evaluate to ensure state gets updated with the current object that has been rendered on page
        if(activeObj.projID !== projectId){
            const currentObj = rawData.find(obj => obj.projID === projectId);
            this.props.changeState(currentObj);
        }
    }
    render() {

        return (
                <Project rawData={this.props.rawData} currentId={this.props.projectId} 
                slideId={this.props.slideId} />
        );
    }
}

