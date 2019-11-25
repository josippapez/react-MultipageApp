import React,{Component} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
import NewsPaper from '../Pile-of-newspapers.jpg'

class Home extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                console.log(res);
                this.setState({
                    posts:res.data.slice(0,20)
                })
            });
    }
    render(){
        const {posts}=this.state;
        const postList=posts.length ? (posts.map(post=>{
            return(
                <div className="post card" key={post.id}>
                    <img src={NewsPaper} alt="A newspaper"/>
                    <div className="content">
                        <Link to={'/'+post.id}>
                        <span className="card-title purple-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )
        })): (
            <div className="center">No posts yet</div>)  
    return (
        <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
        </div>
    )
    }
}

export default Home;