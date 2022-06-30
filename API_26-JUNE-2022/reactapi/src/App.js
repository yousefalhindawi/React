import { useState, useEffect } from "react";
import "./App.css";
// import Form from "./component/Form";
import Nav from "./component/Nav";
import Post from "./component/Post";
import UpdatePost from "./component/UpdatePost";
import AddPost from "./component/AddPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Redirect } from 'react-router-dom'

// import { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const fetchPosts = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/posts");
    const posts = await response.json();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, [post]);

  const deleteHandler = async (id) => {
    // console.log(id)
    // console.log(this.state.posts)
    await fetch(`http://127.0.0.1:8000/api/post/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    // fetchPosts();
    // this.componentDidMount()
    setPosts(posts.filter((post) => post.id !== id));
  };
  const updateHandler = async (updatedPost, location) => {
    // console.log(updatedPost.id)
    await fetch(`http://127.0.0.1:8000/api/post/${updatedPost.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedPost),
    });
    // this.fetchPosts();
    setPost(updatedPost);
    location("/");
    // window.location.href = "/";
    // <Navigate to="/" replace={true} />
    // return <Link to="/">Home</Link>
    // addedPost.isEdit = true
  };

  const editHandler = (data) => {
    setPost(data);
  };

  const addHandler = async (addedPost, location) => {
    // console.log(addedPost);
    await fetch(`http://127.0.0.1:8000/api/insert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addedPost),
    });
    setPost(addedPost);
    location("/");
    // window.location.href = "/";
  };

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Post
                posts={posts}
                onDelete={deleteHandler}
                onEdit={editHandler}
              />
            }
          />
          <Route
            path="/update"
            element={<UpdatePost post={post} onUpdate={updateHandler} />}
          />
          <Route path="/add" element={<AddPost onAdd={addHandler} />} />

          {/* <Route path="/form" element={<Form />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
