// import logo from './logo.svg';
// import './App.css';
import Mapping from "./component/Mapping";
import Filtring from "./component/Filtring";
import Sorting from "./component/Sorting";
import Search from "./component/Search";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {

  const people = [
    { id: 1, name: "ali", age: 25 },
    { id: 20, name: "ahmad", age: 23 },
    { id: 5, name: "salah", age: 30 },
    { id: 4, name: "hamid", age: 45 }
  ];

  return(
  <div>
    <Mapping people = {people}/>
    <Sorting people = {people}/>
    <Filtring people = {people}/>
    <Search />
  </div>)
}
export default App;
