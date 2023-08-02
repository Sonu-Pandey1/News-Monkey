/* eslint-disable react/prop-types */
import { Component } from "react";
import NewsItems from "../NewsItems";


export default class News extends Component{

     
    constructor(){
        super();
        this.state={
            articles : [],
            loding: false,
            page:1
        }
    }
    async componentDidMount(){
    //    try 
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14c338f4668b4b64a24d28c9c17ec31b&page=${this.state.page}${this.props.pageSize}`
        let data = await fetch(url)
        let data2 =  await data.json()
        console.log(data2)
        // console.log(this.state.articles)
        this.setState({articles:data2.articles,totalResults:data2.totalResults})
      
        
        
    //    } catch (error) {
    //     console.log(error.name +" failed to fetch ")
        
    //    }
     
    }
     handleNextBtn= async ()=>{
       
        
        console.log("next clicked")
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
          console.log("bus ab khtm")
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14c338f4668b4b64a24d28c9c17ec31b&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            let data = await fetch(url)
            let data2 =  await data.json()
            console.log(data2)
            // console.log(this.state.articles)
    
            this.setState({
                page:this.state.page+1,
                articles:data2.articles
            })
            // console.log(this.state.page)
        }
       
    }
     handlePreviousBtn = async ()=>{
       
       
        console.log("previous clicked")
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=14c338f4668b4b64a24d28c9c17ec31b&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let data2 =  await data.json()
        console.log(data2)
        // console.log(this.state.articles)

        this.setState({
            page:this.state.page-1,
            articles:data2.articles 
        })
        // this.setState({page:this.state.page-1})
        // console.log(this.state.page)
    }

   

    //  handlePrevClick = async ()=>{
    //     console.log("Previous");
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=20`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     console.log(parsedData);  
    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles
    //     })

    // }

    //  handleNextClick = async ()=>{
    //     console.log("Next"); 
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    //     }
    //     else{
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=20`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         console.log(parsedData);  
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles
    //         })
    // }
    // }
    
    render(){
       

            // this.state.articles.map((items)=>{
            //     console.log(items.title)
            // })
        // console.log(article)
        return(
            <>
                <h1>News component</h1>
                <div className="container my-3">
                    <div className="row" >
                        {this.state.articles.map((items)=>{
                            return  <div key={items.urlToImage} className="col col-4"><NewsItems author={items.author?items.author:"sonu pandey"} title={items.title?items.title:""} content={items.description?items.description.slice(0.,90):"null"} imgUrl={items.urlToImage?items.urlToImage:"https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-28-at-1.57.08-PM-copy-H-2023.jpg?w=1024"} newsUrl={items.url?items.url:""}/></div>
                        })}
                    </div>
                    <div className="d-flex justify-content-between">
                        <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousBtn}> 	&larr; Prevoius</button>
                        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextBtn}> 	&rarr; Next</button>
                    </div>
                   
                   
                </div>
            </>
        )
    }
}