import React from "react";

class AddPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          addedPost:{
            title: '',
            author: '',
            // isEdit: this.props.post.isEdit,
          }
        }
      }
      changeHandler = (e) => {
        this.setState({addedPost:{...this.state.addedPost,[e.target.name]: e.target.value}})
      }
      submitHandler = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.addedPost);
      }

    render() {
        return(
             <div className="container my-5">
                <form onSubmit={this.submitHandler}> 
  <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.addedPost.title} onChange={this.changeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Post Author</label>
    <input type="text" name="author" className="form-control" id="exampleInputPassword1" value={this.state.addedPost.author} onChange={this.changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{/* { this.state.addedPost.isEdit && <Link to="/">Submit</Link> } */}
            </div>
            )
        

    }
}

export default AddPost;