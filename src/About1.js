import React from "react";
import sr from './scrollReveal.js';


export default class About1 extends React.Component {
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
    render() {

        return (
            <div className="projectContainer">
                <div className="projMain" id="aboutPage">
                    <div className="projMain__Left">
                        <div id="hideProjNav" className="projMain__Left-Nav">
                        </div>
                        <div id="aboutInfo" className="projMain__Left-Info">
                            <div className="Name">jason clerk</div>
                            <div className="Heading">Senior Industrial Designer - Toronto, CA</div>
                            <div id="AboutHeadingMob">Senior Industrial Designer <p>Toronto, CA</p></div>
                            <div className="Description">My work within consultancies over the past 20 years has provided me with the opportunity to gain experience with a wide variety of product categories. <p>I love solving problems and pride myself on my visualization skills and attention to detail. There's a certain balance in any good design that is brought about by accounting for all factors and finding the most elegant solution.</p></div>
                        </div>
                    </div>
                    <div className="projMain__Image">
                        <img id="bioImg" src={this.props.aboutData[0].bioImage} alt="baseball players"/>
                    </div>
                </div>
            </div>
        );
    }
}
