import {HeaderTable} from "../header-table";
import {ItemTable} from "../item-table";

export const Table = () => {
    return (
        <div className="table">
            <HeaderTable />
            <ItemTable />
            <ItemTable />
            <ItemTable />
            <ItemTable />
            <ItemTable />
        </div>
    );
};