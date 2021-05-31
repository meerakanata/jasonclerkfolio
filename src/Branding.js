import React from "react";
import {Link} from "react-router-dom";


export default class Branding extends React.Component {

    render() {
        return (
            <Link to="/work"><div className="branding">
                <div className="jayName">jason clerk</div>
                <div className="industry">
                    <div className="line1">industrial</div>
                    <div className="line2">design</div>
                </div>
            </div></Link>
        );
    }
}