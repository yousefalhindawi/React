import React from "react";
import userContext from './userContext'
import ComponentA from './ComponentA'
class Contact extends React.Component {


    // console.log(userContext)
    // console.log(userProvider)
    // console.log(userConsumer)

    state = {
        name: "yousef",
        setName: this.setName,
}

// setName = (name) => {
//     this.setState({name})
// };

    render(){

    
    return (
        <userContext.Provider value={this.state}>

        <div>
            <h1>Contact</h1>
            <ComponentA />
        </div>
        </userContext.Provider>
    )
}
};
export default Contact;