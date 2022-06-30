import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UpdatePost = (props)=>{
  const [updatedPost, setupdatedPost] = useState({
    id: props.post.id,
        title: props.post.title ?? '',
        author: props.post.author ?? '',
  });

  const location = useNavigate();
  
  const changeHandler = (e) => {
    setupdatedPost({...updatedPost,[e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValidation()){
      // send form data to App component
      props.onUpdate(updatedPost,location)
    }
  }

  const formValidation = () => {
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

  
        // console.log(this.props.post.id)
        // console.log(this.state.updatedPost)
        return(
            <div className="container my-5">
                <form onSubmit={submitHandler}> 
  <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={updatedPost.title} onChange={changeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Post Author</label>
    <input type="text" name="author" className="form-control" id="exampleInputPassword1" value={updatedPost.author} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{/* { this.state.updatedPost.isEdit && <Link to="/">Submit</Link> } */}
            </div>
            )
    }


export default UpdatePost;