import React from 'react'

class Form extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userId: '', 
            title: '', 
            body: '',
            posts: [],
        };
    }

    changeHandler = (e)=>{
        this.setState( {[e.target.name] : e.target.value});
    }
    


    componentDidMount (){
        this.fetchPosts();
    }

fetchPosts = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        // console.log(posts);
        return this.setState( this.state.posts = posts);
    }


    clickHandler = ()=>{
        
        const fetchPosts = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            return this.setState( this.state.posts = posts);
        }
        fetchPosts()
    }



    changeHandler1 = (e)=>{
        const fetchPosts = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const posts = await response.json();
            
        
        
        this.setState({title : e.target.value})
        let value = (this.state.title).toLowerCase();
        console.log(value);
        let array1 = posts.filter((post) => (post.title.toLowerCase()).includes(value));
        // console.log(array1);
         this.setState({posts : array1});
    }
        fetchPosts()
    }

    render() {
       
        return (
            <div>
           
            <input type="text" value={this.state.email} onKeyUp={this.changeHandler1}/>
            {this.state.posts.map((post, i) => 
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