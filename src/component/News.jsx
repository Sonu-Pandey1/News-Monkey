/* eslint-disable react/prop-types */
import { Component } from "react";
import NewsItems from "../NewsItems";
import Loding from "./Loding";
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css"



export default class News extends Component {

    static defaultProps = {
        country: 'in',
        page: 12,
        category: "sports"
    }

    static propTypes = {
        country: PropTypes.string,
        page: PropTypes.number,
        category: PropTypes.string
    }

    captlizeFirstLatter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);

    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loding: true,
            page: 1,
            totalResults:0

        }
        document.title = `${this.captlizeFirstLatter(this.props.category)} - NewsMonkey`;
    }


    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        // this.setState({ loding: true })
        let data = await fetch(url)
        this.props.setProgress(35)
        let data2 = await data.json()
        this.props.setProgress(75);
        // console.log(data2)
        this.setState({
            articles: data2.articles,
            totalResults: data2.totalResults,
            loding: false
        })
        this.props.setProgress(100);

    }

    async componentDidMount() {
        this.updateNews();
    }


    handleNextBtn = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }


    handlePreviousBtn = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }


    fetchMoreData = async() => {
        
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        // this.setState({ loding: true })
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url)
        let data2 = await data.json()
        // console.log(data2)
        this.setState({
            articles: this.state.articles.concat(data2.articles),
            totalResults: data2.totalResults,
            // loding: false
        })
        
      };


    render() {
        return (
            <div className="mt-3 ">

                
                    <h1 className=" text-center mainTitle ">NewsMonkey-Top {this.captlizeFirstLatter(this.props.category)} Headlines </h1>
                    <div className="imgWrapper text-center ">
                        <img className="" src="data:image/png;base64,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" alt="" />
                    </div>
                    {this.state.loding && <Loding />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loding/>}
                    >
                      <div className="container">
                        <div className="row " >
                            {this.state.articles.map((items) => {
                                return <div key={items.urlToImage} className=" col-md-4"><NewsItems author={items.author ? items.author : "Sonu Pandey"} title={items.title ? items.title.slice(0, 80) : ""} content={items.description ? items.description.slice(0, 80) : "There Are Three Gates To Self-destruction And Hell: Lust, Anger & Greed.” Lord Krishna..."} imgUrl={items.urlToImage ? items.urlToImage : "https://t4.ftcdn.net/jpg/05/71/81/85/240_F_571818551_ZSKAUfkPMzHJKXQUIGJPyRqQ2wi20UG7.jpg"} newsUrl={items.url ? items.url : ""} Author={items.author} date={items.publishedAt} source={items.source.name} category={this.props.category} /></div>
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>

                    {/* <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousBtn}> 	&larr; Prevoius</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextBtn}> 	&rarr; Next</button>
                    </div> */}
                {/* </div> */}
            </div>
        )
    }
}