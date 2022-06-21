import React from "react";
class Card extends React.Component {
  render() {
    return (
        // <div className="col-sm-6">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src={this.props.image}
              alt={this.props.title}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.title}</h5>
              <p className="card-text">{this.props.description}</p>
              <a href="yousef" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        // </div>
    );
  }
}

export default Card;
