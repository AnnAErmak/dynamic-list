import React, { useState } from "react";
import {HeaderTable} from "../header-table";
import {ItemTable} from "../item-table";
import { useSelector } from "react-redux";
import {sortByIdActionASC, sortByIdActionDESC, sortByIdActionTextASC, sortByIdActionTextDESC} from '../../store/reducers/postsReducer'
import {useDispatch} from 'react-redux';

export const Table = ({filterPosts, visiblePosts}) => {
    // const { visiblePosts } = useSelector((state) => state.postsReducer)
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
    const onChangeSort = (param) => {
        setDirection(!direction)
        if(!direction) {
            dispatch(sortByIdActionTextASC(param))
        }else{
            dispatch(sortByIdActionTextDESC(param))
        }
    }
    return (
        <div className="table">
            <HeaderTable onChangeSortById={onChangeSortById} onChangeSort={onChangeSort} />

            {filterPosts.length
                ? (filterPosts.map(post => <ItemTable key={post.id} id={post.id} title={post.title} body={post.body}/>))
                : (visiblePosts.map(post => <ItemTable key={post.id} id={post.id} title={post.title} body={post.body}/>))
            }
        </div>
    );
};