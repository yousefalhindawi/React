import React from "react";
import ComponentC from './ComponentC'


class ComponentB  extends React.Component {
    render() {
        return (
            <div>
                <h1>ComponentB</h1>
                <ComponentC />
            </div>
            )
    }
}

export default ComponentB