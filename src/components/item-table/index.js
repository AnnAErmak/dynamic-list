import './style.css'

export const ItemTable = ({id, title, body}) => {
    return (
        <div className="table-list">
            <div className="table-item">
                {id}
            </div>
            <div className="table-item">
                {title}
            </div>
            <div className="table-item">
                {body}
            </div>
        </div>
    );
};