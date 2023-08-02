

import { Component } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import Loding from "./component/Loding";

 
export default class App extends Component{
    render(){
        return(
            <>
               <Navbar/>
               {/* <Loding/> */}
               <News pageSize={12} apiKey={"14c338f4668b4b64a24d28c9c17ec31b"}/>
            </>
        )
    }
}