
import React from "react";
import { ThemeContext } from "./ThemeContext";
class Theme extends React.Component {
    state = { inputColor: '' }


    render() {
        return (
            
            <ThemeContext.Consumer>
                {
                    ({ state, changeColorHandler }) => (
                        <div style={{ backgroundColor: state.color }}>
                            <h1 >Hello from the Theme</h1>
                            <input value={this.state.inputColor} onChange={(e) => {this.setState({ inputColor: e.target.value })}} />
                            <input type="button" value={'Change'} onClick={() => changeColorHandler(this.state.inputColor)} />
                        </div>
                    )
                }

            </ThemeContext.Consumer>

        );
    }
}
export default Theme