import React from "react";
import ComponentB from './ComponentB'

class ComponentA  extends React.Component {
    render() {
        return (
            <div>
                <h1>ComponentA</h1>
                <ComponentB />
            </div>
            )
    }
}

export default ComponentA