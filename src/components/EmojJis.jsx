import React from "react";

function Emojjis(props){
    return(
        <div className="term">
            <dt>
                <span className="emoji" role="img">
                    {props.img}
                </span>
                <span>{props.name}</span>
            </dt>
            <dd>
                {props.mean}
            </dd>
        </div>
    );              
}
export default Emojjis;