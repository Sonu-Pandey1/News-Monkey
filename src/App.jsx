
import { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
// import Loding from "./component/Loding";
import { Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import "./App.jsx"


export default class App extends Component {
    apiKey ="a6ef13ff38a94004b7d0e0786b522fd9"

    state={
        progress:0
    }

    setProgress = (progress)=>{
        this.setState({progress:progress})
    }
    render() {
        return (
            <>
                <Navbar />
                <LoadingBar
                    color='#4eb3c7'
                    height={3}
                    progress={this.state.progress}
                    // onLoaderFinished={() => setProgress(0)}
                />

                <Routes>
                    <Route path="/" element={<News setProgress={this.setProgress}  key={"general"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"general"} />} />

                    <Route path="/business" element={<News setProgress={this.setProgress}  key={"business"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"business"} />} />

                    <Route path="/entertainment" element={<News setProgress={this.setProgress}  key={"intertainment"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"entertainment"} />} />

                    <Route path="/general" element={<News setProgress={this.setProgress}  key={"general"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"general"} />} />

                    <Route path="/science" element={<News setProgress={this.setProgress}  key={"science"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"science"} />} />

                    <Route path="/health" element={<News setProgress={this.setProgress}  key={"health"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"health"} />} />

                    <Route path="/sports" element={<News setProgress={this.setProgress}  key={"sports"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"sports"} />} />

                    <Route path="/technology" element={<News setProgress={this.setProgress}  key={"technology"} pageSize={12} apiKey={this.apiKey} country={"in"} category={"technology"} />} />

                    <Route path="/contact" element={<h1 >contact us</h1>} />
                </Routes>
            </>
        )
    }
}