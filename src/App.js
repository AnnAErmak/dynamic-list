import './App.css';
import {ColumnSearch} from "./components/column-search";
import {Table} from "./components/table";
import {Pagination} from "./components/pagination";

function App() {
    return (
        <div className="App">
            <ColumnSearch/>
            <Table/>
            <Pagination />
        </div>
    );
}

export default App;
