import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import NewsPaper from '../Pile-of-newspapers.jpg';
import {connect} from 'react-redux';

class Home extends Component{
    render(){
        console.log(this.props)
        const {posts}=this.props;
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

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home);