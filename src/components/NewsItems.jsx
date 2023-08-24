import {React, Component} from "react";


export class NewsItems extends Component{

    render(){
        let { title , description , imgUrl , newUrl} = this.props
        return( 
            <div>
                <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={imgUrl?imgUrl:
"https://static.toiimg.com/thumb/msid-102916104,width-1070,height-580,imgsize-71400,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newUrl} className="btn btn-primary">Read More</a>
                </div>
                </div>
            </div>
        )
    }
}