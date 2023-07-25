import {addPostsAction} from '../reducers/postsReducer'

export const fetchPosts = () => {
    return async (dispatch) => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json())
        dispatch(addPostsAction(posts))
    }
}