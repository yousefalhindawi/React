// import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Title from './component/Title';
import Description from './component/Description';
import Checkbox from './component/Checkbox';
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

// export default App;

function App(){
  
  
  return (
    <div>
  <Header/>
  <Title/>
 < Description/>
 <Checkbox image = 'https://picsum.photos/200' title = 'HTML'/>
 <Checkbox image = 'https://picsum.photos/201' title = 'CSS'/>
 <Checkbox image = 'https://picsum.photos/202' title = 'JS'/>
    </div>
  );
};

export default App;