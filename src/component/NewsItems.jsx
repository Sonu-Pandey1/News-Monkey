/* eslint-disable react/prop-types */
import { Component } from "react";



export default class NewsItems extends Component {
    
    render() {
        const {title , discription , img,newsUrl}=this.props;
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="error" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{ discription}</p>
                        <a href={newsUrl}  target="_blank" className="btn btn-primary">Reed More</a>
                    </div>
                </div>
            </>
        )
    }

}