import {ReactComponent as ArrowDown} from "../../assets/images/arrow-down.svg";
import './style.css'

export const HeaderTable = ({onChangeSortById}) => {
    return (
        <div className="header-table">
            <div className="header-table-item" onClick={() => onChangeSortById()}>
                <p>ID</p>
                <ArrowDown />
            </div>
            <div className="header-table-item">
                <p>Заголовок</p>
                <ArrowDown />
            </div>
            <div className="header-table-item">
                <p>Описание</p>
                <ArrowDown />
            </div>
        </div>
    );
};