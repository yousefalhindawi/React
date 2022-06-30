import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddPost = (props) =>{
  
  const location = useNavigate();

  const [addedPost, setaddedPost] = useState({
    title:'',
    author:'',
  });
  
  const changeHandler = (e) => {
    setaddedPost({...addedPost,[e.target.name]: e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
        props.onAdd(addedPost,location);
      }


        return(
             <div className="container my-5">
                <form onSubmit={submitHandler}> 
  <div className="my-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post Title</label>
    <input type="text" name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={addedPost.title} onChange={changeHandler}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Post Author</label>
    <input type="text" name="author" className="form-control" id="exampleInputPassword1" value={addedPost.author} onChange={changeHandler}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
{/* { this.state.addedPost.isEdit && <Link to="/">Submit</Link> } */}
            </div>
            )
        

    }


export default AddPost;