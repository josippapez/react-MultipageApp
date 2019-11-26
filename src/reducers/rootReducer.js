const initState={
    posts:[
        {id: '1',title:'First title',body:"pdgphkosfksodfkods"},
        {id: '2',title:'Second title',body:"sodgodkfos"},
        {id: '3',title:'Third title',body:"idjosd"}
    ]
}
const rootReducer= (state=initState,action) =>{
    if(action.type==='DELETE_POST'){
        let newPosts=state.posts.filter(post=>{
            return action.id !=post.id
        });
        return{
            ...state,
            posts:newPosts
        }
    }
    return state;
}

export default rootReducer;