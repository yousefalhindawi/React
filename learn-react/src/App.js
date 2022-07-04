import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Api from "./component/Api";
import Post from "./component/Post";
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./component/Login";
import UpdatePost from "./component/UpdatePost";
import AddPost from "./component/AddPost";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { Redirect } from 'react-router-dom'

// import { useState } from 'react';

class App extends React.Component {
  // const [test, setTest] = useState('yousefalhindawi');

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      post: {},
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("http://localhost:5000/posts/");
    const posts = await response.json();
    this.setState((this.state.posts = posts));
  };

  deleteHandler = async (id) => {
    // console.log(id)
    // console.log(this.state.posts)
    await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    this.fetchPosts();
    // this.componentDidMount()
    //  this.setState(this.state.posts = this.state.posts.filter((post)=> post.id !== id))
  };
  updateHandler = async (updatedPost) => {
    // console.log(addedPost.id)
    await fetch(`http://localhost:5000/posts/${updatedPost.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });
    // this.fetchPosts();
    window.location.href = "/";
    // <Navigate to="/" replace={true} />
    // return <Link to="/">Home</Link>
    // addedPost.isEdit = true
  };

  editHandler = (data) => {
    this.setState({ post: data });
  };

  addHandler = async (addedPost) => {
    // console.log(addedPost);
    await fetch(`http://localhost:5000/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedPost),
    });
    window.location.href = "/";
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route
              path="/"
              element={
                <Api
                  posts={this.state.posts}
                  onDelete={this.deleteHandler}
                  onEdit={this.editHandler}
                />
              }
            />
            <Route
              path="/update"
              element={
                <UpdatePost
                  post={this.state.post}
                  onUpdate={this.updateHandler}
                />
              }
            />
            <Route path="/add" element={<AddPost onAdd={this.addHandler} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/Login" element={<Login  />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
