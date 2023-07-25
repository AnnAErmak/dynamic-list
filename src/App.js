import './App.css';
import React, { useState } from "react";
import {ColumnSearch} from "./components/column-search";
import {Table} from "./components/table";
import {Pagination} from "./components/pagination";
import {useDispatch} from 'react-redux';
import {useEffect} from "react";
import {fetchPosts} from './store/asyncActions/posts'
import {nextPostsAction} from './store/reducers/postsReducer'
import {loaderOnAction} from './store/reducers/loaderReducer'
import { useSelector } from "react-redux";

function App() {
    const dispatch = useDispatch()
    const {count, page, visiblePosts} = useSelector((state) => state.postsReducer)
    const {loading} = useSelector((state) => state.loaderReducer)
    const [text, setText] = useState('')
    const [filterPosts, setFilterPosts] = useState([])

    useEffect(() => {
        dispatch(loaderOnAction());
        dispatch(fetchPosts())
    }, [])

    const replaceURL = (page) => {
        let urlSearch = new URLSearchParams({page: page}).toString()
        const url = window.location.pathname + '?' + urlSearch + window.location.hash;
        window.history.replaceState({}, '', url)
    }

    const onChangeInput = (value) => {
        setText(value)
        const filterPosts = visiblePosts.filter(el => String(el.id).includes(value) || el.title.includes(value) || el.body.includes(value))
        setFilterPosts(filterPosts)
    }

    const onChangePage = (page) => {
        dispatch(nextPostsAction(page))
        setFilterPosts([])
        setText('')
        replaceURL(page)
    }
    const onChangeBack = (page) => {
        dispatch(nextPostsAction(page - 1))
        setFilterPosts([])
        setText('')
        replaceURL(page - 1)
    }
    const onChangeNext = (page) => {
        dispatch(nextPostsAction(page + 1))
        setText('')
        setFilterPosts([])
        replaceURL(page + 1)
    }

    return (
        <div className={`App ${loading && 'disable'}`}>
            <ColumnSearch onChangeInput={onChangeInput} text={text}/>
            <Table filterPosts={filterPosts} visiblePosts={visiblePosts}/>
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
