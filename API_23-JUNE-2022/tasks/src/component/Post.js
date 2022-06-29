import React from "react";
import { Link } from "react-router-dom";
class Post extends React.Component {
  delete = (id) => {
    this.props.onDelete(id);
  };
  update = (post) => {
    this.props.onEdit(post);
  };
 

  render() {
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
            {this.props.posts.map((post) => (
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
                      this.update(post);
                    }}
                  >
                    update
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.delete(post.id);
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
}
export default Post;
