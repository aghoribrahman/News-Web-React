
import React, { Component, useState } from 'react';
import './newscomponent.css';

export class Loadings extends Component{   
    
 render(){
    return(
    <div className="spinner-box">
        <div className="blue-orbit leo">
            <div className="green-orbit leo"></div>
            <div className="red-orbit leo"></div>
        </div>
    </div>
)
}
    
}
export default Loadings