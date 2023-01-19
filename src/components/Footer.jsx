import React from "react";

const year= new Date().getFullYear();
function Footer(){
    return <div className="footer">
        <p>copyright &#169; {year} </p>
    </div> 
}
export default Footer;