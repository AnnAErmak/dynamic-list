import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { HeaderTable } from "../header-table";
import { ItemTable } from "../item-table";
import {
  sortByIdActionASC,
  sortByIdActionDESC,
  sortByIdActionTextASC,
  sortByIdActionTextDESC,
} from "../../store/reducers/postsReducer";

export function Table({ filterPosts, visiblePosts }) {
  const dispatch = useDispatch();
  const [direction, setDirection] = useState(true);

  const onChangeSortById = () => {
    setDirection(!direction);

    if (!direction) {
      dispatch(sortByIdActionASC());
    } else {
      dispatch(sortByIdActionDESC());
    }
  };
  const onChangeSort = (param) => {
    setDirection(!direction);
    if (!direction) {
      dispatch(sortByIdActionTextASC(param));
    } else {
      dispatch(sortByIdActionTextDESC(param));
    }
  };
  return (
    <div className="table">
      <HeaderTable
        onChangeSortById={onChangeSortById}
        onChangeSort={onChangeSort}
      />

      {filterPosts.length
        ? filterPosts.map((post) => (
            <ItemTable
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))
        : visiblePosts.map((post) => (
            <ItemTable
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
    </div>
  );
}