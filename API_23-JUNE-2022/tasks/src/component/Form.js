import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      title: "",
      body: "",
      posts: [],
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    // console.log(posts);
    return this.setState((this.state.posts = posts));
  };

  changeHandler1 = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Search for title"
          value={this.state.email}
          onKeyUp={this.changeHandler1}
        />
        { 
      
      this.state.posts.filter((post) => post.title.toLowerCase().includes(this.state.title.toLowerCase())).map((post, i) => (
          <ul key={i}>
            <h2>
              {post.id}- {post.title}
            </h2>
            <li>{post.body}</li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Form;
