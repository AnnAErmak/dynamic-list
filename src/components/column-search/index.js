import "./style.css";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";

export const ColumnSearch = ({ onChangeInput, text }) => {
  return (
    <div className="column-search">
      <input
        className="column-search-item"
        onChange={(event) => onChangeInput(event.target.value)}
        value={text}
        placeholder="Поиск"
      />
      <SearchIcon className="column-search-icon" />
    </div>
  );
};