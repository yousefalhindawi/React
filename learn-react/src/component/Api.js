import React from "react";
import { Link } from 'react-router-dom';
import Post from "./Post";
import { BrowserRouter , Routes , Route } from 'react-router-dom'
class Api extends React.Component {

  deleteHandler =  (id) => {
        // console.log(id)
        this.props.onDelete(id)
}

editHandler =  (post) => {
    // console.log(post)
    this.props.onEdit(post)
}
addHandler =  (post) => {
    // console.log(post)
    this.props.onAdd(post)
}

  render() {
    return (
        <Post posts={this.props.posts} onDelete={this.deleteHandler} onEdit={this.editHandler} />
    );
  }
}
export default Api;
