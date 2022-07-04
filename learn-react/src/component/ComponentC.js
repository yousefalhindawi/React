import React from "react";
import userContext from './userContext'

class ComponentC  extends React.Component {

    static contextType = userContext
    
    render() {
        return (
            <div>
            <h1>ComponentC {this.context.name}</h1>
            {/* <input type="text" name = "inputName" value="" onChange={(e)=>}/> */}
            </div>
            )
    }
}

export default ComponentC