import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Post = (props) => {

  const deletee = (id) => {
    props.onDelete(id);
  };

  const update = (post) => {
    props.onEdit(post);
  };
 

    //   console.log(this.state.id)
    return (
      <div className="container">
        <Link to="/add" className="btn btn-success">
          Add
        </Link>
        <table className="table container">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">title</th>
              <th scope="col">author</th>
              <th scope="col">update</th>
              <th scope="col">delete</th>
            </tr>
          </thead>
          <tbody>
            {props.posts.map((post) => (
              <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>
                  {/* <button  className="btn btn-primary" onClick={(e,post)=>{this.updatehandle(e,post)}}>update</button> */}
                  <Link
                    to="/update "
                    className="btn btn-primary"
                    onClick={() => {
                      update(post);
                    }}
                  >
                    update
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deletee(post.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Post;
