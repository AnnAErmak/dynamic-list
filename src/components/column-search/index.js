import './style.css'
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg'
export const ColumnSearch = () => {
    return (
        <div className= 'column-search'>
            <input className='column-search-item' placeholder="Поиск"/>
            <SearchIcon className='column-search-icon'/>
        </div>
    );
};