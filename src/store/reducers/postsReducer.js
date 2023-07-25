const initialState = {
    posts: [], 
    page: 1,
    visiblePosts: [],
    count: 0,
    waiting: false,
}

const ADD_POSTS = 'ADD_POSTS'
const NEXT_POSTS = 'NEXT_POSTS'
const SORT_BY_ID_ASC = 'SORT_BY_ID_ASC'
const SORT_BY_ID_DESC = 'SORT_BY_ID_DESC'

export const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POSTS:
            return {
                ...state,
                posts: action.payload,
                visiblePosts: action.payload.slice(0, 10),
                count: action.payload.length,
            }
        case NEXT_POSTS:
            return {
                ...state,
                visiblePosts: state.posts.slice(action.payload*10 - 10, action.payload*10),
                page: action.payload,
            }
        case SORT_BY_ID_ASC:
            console.log(...state.visiblePosts)
            return {
                ...state,
                visiblePosts: [...state.visiblePosts.sort((a, b) => a.id - b.id)],
            }
        case SORT_BY_ID_DESC:
            console.log(...state.visiblePosts)
            return {
                ...state,
                visiblePosts: [...state.visiblePosts.sort((a, b) => a.id - b.id)],
            }
        default:
            return state
    }
}

export const addPostsAction = (payload) => ({
    type: ADD_POSTS,
    payload,
})
export const nextPostsAction = (payload) => ({
    type: NEXT_POSTS,
    payload,
})
export const sortByIdActionASC = () => ({
    type: SORT_BY_ID_ASC,
})
export const sortByIdActionDESC = () => ({
    type: SORT_BY_ID_DESC,
})