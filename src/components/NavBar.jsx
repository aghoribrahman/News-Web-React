import React, {Component, useEffect, useState} from "react";

export class Navbar extends Component{

render() 
{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">News Web</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className="nav-link" href="General">General<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="technology">technology</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="entertainment">entertainment</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="science">science</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="business">business</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="sports">sports</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}
}


export default Navbar