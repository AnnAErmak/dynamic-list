import React, { useState } from "react";
import {HeaderTable} from "../header-table";
import {ItemTable} from "../item-table";
import { useSelector } from "react-redux";
import {sortByIdActionASC, sortByIdActionDESC} from '../../store/reducers/postsReducer'
import {useDispatch} from 'react-redux';

export const Table = () => {
    const { visiblePosts } = useSelector((state) => state.postsReducer)
    const dispatch = useDispatch()
    const [direction, setDirection] = useState(true)

    const onChangeSortById = () => {
        setDirection(!direction)
        
        if(!direction){
            dispatch(sortByIdActionASC())
        }else{
            dispatch(sortByIdActionDESC())
        }


    }
    const onChangeSort = () => {

    }
    return (
        <div className="table">
            <HeaderTable onChangeSortById={onChangeSortById} onChangeSort={onChangeSort} />
            {!visiblePosts.length
                ? <h2>Нет ни одного поста</h2>
                : visiblePosts.map(post => <ItemTable key={post.id} id={post.id} title={post.title} body={post.body}/>)
            }
        </div>
    );
};