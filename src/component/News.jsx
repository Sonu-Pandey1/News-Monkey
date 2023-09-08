/* eslint-disable react/prop-types */
import { Component } from "react";
import NewsItems from "../NewsItems";
import Loding from "./Loding";
import PropTypes from "prop-types"
import InfiniteScroll from "react-infinite-scroll-component";


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
            <>

                
                    <h1 className=" text-center m-3">NewsMonkey-Top {this.captlizeFirstLatter(this.props.category)} Headlines </h1>
                    {this.state.loding && <Loding />}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Loding/>}
                    >
                      <div className="container">
                        <div className="row" >
                            {this.state.articles.map((items) => {
                                return <div key={items.urlToImage} className="col col-4"><NewsItems author={items.author ? items.author : "Sonu Pandey"} title={items.title ? items.title : ""} content={items.description ? items.description.slice(0., 90) : "Sonu Pandey"} imgUrl={items.urlToImage ? items.urlToImage : "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-28-at-1.57.08-PM-copy-H-2023.jpg?w=1024"} newsUrl={items.url ? items.url : ""} Author={items.author} date={items.publishedAt} source={items.source.name} category={this.props.category} /></div>
                            })}
                        </div>
                        </div>
                    </InfiniteScroll>

                    {/* <div className="d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousBtn}> 	&larr; Prevoius</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextBtn}> 	&rarr; Next</button>
                    </div> */}
                {/* </div> */}
            </>
        )
    }
}