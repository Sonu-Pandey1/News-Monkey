/* eslint-disable react/prop-types */
import { Component } from "react";

export default class NewsItems extends Component {
    
    render() {
        // let data =fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=a6ef13ff38a94004b7d0e0786b522fd9")
        // data.then((result)=>{
        //     return result.json()
        // })
        // .then((res)=>{
        //     console.log(res.articles[1])
        // })
           let {title,content,imgUrl}=this.props
        return (
            <>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imgUrl} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <a href="/itemas" className="btn btn-primary">See More</a>
                    </div>
                </div>
            </>
        )
    }
}