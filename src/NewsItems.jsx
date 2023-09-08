/* eslint-disable react/prop-types */
import { Component } from "react";
export default class NewsItems extends Component {

    render() {
        let { title, content, imgUrl, newsUrl, author, date, source, category } = this.props
        return (
            <>
                <div className="card my-3"  >
                  <div style={{right:"0" , position:"absolute"}}>
                  <span className={` d-flex justify-content-end  badge rounded-pill bg-${(category == "general") ? "danger" : (category == "sports" ? "info" : (category == "health" ? "warning" : (category == "science" ? "success" : (category == "technology" ? "secondary" : (category == "business" ? "dark" : (category == "entertainment" ? "primary" : "light"))))))}`} style={{ left: "87%", zIndex: 1 }}>
                        {source}
                    </span>
                  </div>
                    
                    <div className="ddd">
                    <img src={imgUrl} className="card-img-top img-fluid img-thumbnail img" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title titlefont">{title}...</h5>
                        {/* <h6 className="card-title">{author}</h6> */}
                        <p className="card-text titlefontt">{content}...</p>
                        <p className="card-text textBold"><small className="text-body-secondary">By {author} on {new Date(date).toUTCString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Reed More</a>
                    </div>
                </div>
            </>
        )
    }
}