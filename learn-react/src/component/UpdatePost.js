import React from "react";
import Api from "./Api";
import { Link } from 'react-router-dom';
// import {useLocation} from "react-router-dom";
class UpdatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedPost:{
        id: this.props.post.id,
        title: this.props.post.title ?? '',
        author: this.props.post.author ?? '',
        // isEdit: this.props.post.isEdit,
      }
    }
  }

  changeHandler = (e) => {
    this.setState({updatedPost:{...this.state.updatedPost,[e.target.name]: e.target.value}})
  }

  submitHandler = (e) => {
    e.preventDefault();
    if (this.formValidation()){
      // send form data to App component
      this.props.onUpdate(this.state.updatedPost)
    }
  }

  formValidation = () => {
    const titleInput = document.getElementsByName('title')[0];
    const authorInput = document.getElementsByName('author')[0];
    if (titleInput.value === '') {
      alert('Please enter a title');
       return false;
      } 
    if (authorInput.value === '') {
      alert('Please enter a author');
       return false;
      } 
   return true;
  }

    render() {
        // console.log(this.props.post.id)
        // console.log(this.state.updatedPost)
        return(
            <div className="container my-5">
                <form onSubmit={this.submitHandler}> 
  <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.updatedPost.title} onChange={this.changeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Post Author</label>
    <input type="text" name="author" className="form-control" id="exampleInputPassword1" value={this.state.updatedPost.author} onChange={this.changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{/* { this.state.updatedPost.isEdit && <Link to="/">Submit</Link> } */}
            </div>
            )
    }
}

export default UpdatePost;