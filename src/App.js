import './App.css';
import {ColumnSearch} from "./components/column-search";
import {Table} from "./components/table";
import {Pagination} from "./components/pagination";
import {useDispatch} from 'react-redux';
import {useEffect} from "react";
import {fetchPosts} from './store/asyncActions/posts'
import {nextPostsAction} from './store/reducers/postsReducer'
import { useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const {count, page} = useSelector((state) => state.postsReducer)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const replaceURL = (page) => {
        let urlSearch = new URLSearchParams({page: page}).toString()
        const url = window.location.pathname + '?' + urlSearch + window.location.hash;
        window.history.replaceState({}, '', url)
    }

    const onChangePage = (page) => {
        dispatch(nextPostsAction(page))
        replaceURL(page)
    }
    const onChangeBack = (page) => {
        dispatch(nextPostsAction(page - 1))
        replaceURL(page - 1)
    }
    const onChangeNext = (page) => {
        dispatch(nextPostsAction(page + 1))
        replaceURL(page + 1)
    }

    return (
        <div className="App">
            <ColumnSearch/>
            <Table/>
            <Pagination
                count={count}
                page={page}
                onChange={onChangePage}
                onChangeBack={onChangeBack}
                onChangeNext={onChangeNext}/>
        </div>
    );
}

export default App;
