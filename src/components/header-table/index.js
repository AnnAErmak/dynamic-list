import {ReactComponent as ArrowDown} from "../../assets/images/arrow-down.svg";
import './style.css'

export const HeaderTable = ({onChangeSortById, onChangeSort}) => {
    return (
        <div className="header-table">
            <div className="header-table-item" onClick={() => onChangeSortById()}>
                <p>ID</p>
                <ArrowDown />
            </div>
            <div className="header-table-item" onClick={() => onChangeSort('title')}>
                <p>Заголовок</p>
                <ArrowDown />
            </div>
            <div className="header-table-item" onClick={() => onChangeSort('body')}>
                <p>Описание</p>
                <ArrowDown />
            </div>
        </div>
    );
};