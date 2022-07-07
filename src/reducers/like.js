const likeReducer = (state = 0, action) =>{
    switch(action.type){
        case "like":
            return state + action.payload;
        case "dislike":
            return state - action.payload;
        default:
            return state;
    }
}

export default likeReducer