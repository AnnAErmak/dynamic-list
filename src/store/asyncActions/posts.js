import {addPostsAction} from '../reducers/postsReducer'
import {loaderOffAction} from '../../store/reducers/loaderReducer'

export const fetchPosts = () => {
    return async (dispatch) => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json())
        dispatch(loaderOffAction());
        dispatch(addPostsAction(posts))
    }
}