import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortTable from './components/SortTable';
import FilterTable from './components/FilterTable';
import PaginationTable from './components/PaginationTable';

function App() {
  return (
    <div className="App">
 {/*      <BasicTable/> 
      <SortTable/> 
      <FilterTable/>*/}
      <PaginationTable/>
    </div>
  );
}

export default App;
