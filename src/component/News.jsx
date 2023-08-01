import { Component } from "react";
import NewsItems from "../NewsItems";


export default class News extends Component{
    render(){
        return(
            <>
                <h1>News component</h1>
                <NewsItems title={"khushi"} content={"para"} imgUrl={""}/>
            </>
        )
    }
}