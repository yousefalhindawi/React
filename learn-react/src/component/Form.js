import React from 'react'

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            search: '',
            userId: '', 
            title: '', 
            body: '',
            posts: [],
        };
    }

    changeHandler = (e)=>{
        this.setState( {[e.target.name] : e.target.value});
    }

    // submitHandler = (e)=>{
    //     e.preventDefault();
    //     console.log(this.state)
    // }


    componentDidMount (){
        this.fetchPosts();
    }

fetchPosts = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const posts = await JSON.parse(response);
        const posts = await response.json();
        // console.log(posts);
        this.setState( this.state.posts = posts);
    }
//   fetchPosts = async ()=>{
//             const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify([this.state.userId, this.state.title, this.state.body])
                
//             });
//             const posts = await response.json();
//             console.log(posts);
//             this.setState( this.state.posts = posts);
//         }


    // clickHandler = ()=>{
        
    //     const fetchPosts = async ()=>{
    //         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //         // const posts = await JSON.parse(response);
    //         const posts = await response.json();
    //         // console.log(posts);
    //         this.setState( this.state.posts = posts);
    //     }
    //     fetchPosts()
    // }
    
    clickHandlerAdd = (e)=>{
        e.preventDefault();
        const addPosts = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({userId : Number(this.state.userId), title: this.state.title, body:this.state.body})
                
            });
            const addedPost = await response.json();
            // console.log(response);
            // console.log(addedPost);
            this.setState({userId:'', title: '', body:'', posts:[
                    ...this.state.posts,
                    addedPost
                ]});
            }
            addPosts()
            console.log(this.state);
        //     const addedPost = {userId : Number(this.state.userId), title: this.state.title, body:this.state.body};
        // this.setState({userId:'', title: '', body:'', posts:[
        //     ...this.state.posts,
        //     addedPost
        // ]});
    }


    searchHandler = (e)=>{
        this.setState({search : e.target.value})
    }

    render() {
        const {search,userId,title,body,posts} = this.state;
        return (
            <div>
            <form onSubmit={this.clickHandlerAdd}>
                <label htmlFor="userId">userId</label>
                {/* <input type="text" name="userId" id='userId' value={userId} onChange={(e)=>this.setState((state)=>({...state, userId:e.target.value}))}/> */}
                <input type="number" name="userId" id='userId' value={userId} onChange={this.changeHandler}/>
                <label htmlFor="title">title</label>
                {/* <input type="text" name='title' id='title' value={title} onChange={(e)=>this.setState((state)=>({...state, title:e.target.value}))}/> */}
                <input type="text" name='title' id='title' value={title} onChange={this.changeHandler}/>
                <label htmlFor="body">body</label>
                {/* <input type="text" name='body' id='body' value={body} onChange={(e)=>this.setState({...this.state, body:e.target.value})}/> */}
                <input type="text" name='body' id='body' value={body} onChange={this.changeHandler}/>
                <button type="submit">Add</button>
            </form>
            {/* <button onClick={this.clickHandlerAdd}>Add</button> */}
            {/* <button onClick={this.clickHandler}>Show</button> */}
            <input type="text" name="search" placeholder="search for title" value={this.state.email} onKeyUp={this.searchHandler}/>
            {posts.filter((post) => (post.title.toLowerCase()).includes(search.toLowerCase())).map((post, i) => 
                <ul key={i}>
                <h2 >{post.id}- {post.title}</h2>
                <li >{post.body}</li>
                </ul>
            )}
            </div>
            )
    }
};

export default Form;