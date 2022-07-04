import React from "react";

import { testContext } from "./UserContext";
class testDetails extends React.Component {
    // static contextType = UserContext;


    //contextType is a properity assigned the context object that was created
    //through React.createContext()     
    // userDetails = this.context;
    // userDetails2 = this.context;



    render() {
        //   console.log(UserContext);

        return (<>



            <testContext.Consumer>
                {


                    ({ state, updateUserData }) => (

                        // <UserContext2.Consumer>
                        // {(user2) =>

                        <>

                            <div>Name : {state.user.name}</div>
                            <div>Age : {state.user.age}</div>
                            <div>major : {state.user2.major}</div>
                            <div>gender : {state.user2.gender}</div>
                            <div>Counter : {state.counter}</div>
                            <div > {state.user3}</div>
                            <button onClick={updateUserData} >name </button>

                        </>



                        // }

                        // </UserContext2.Consumer>



                    )

                }

            </testContext.Consumer>


        </>
        )
    }
}
export default testDetails;