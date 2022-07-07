export const like = (like) =>{
    return{
        type: "like",
        payload: like
    }
}


export const dislike = (dislike) =>{
    return{
        type: "dislike",
        payload: dislike
    }
}

