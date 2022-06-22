// let filtering1 = ["Khozama","Mohammad","Lujain","Nada","Ayman"].filter((name) => name.includes("n"));
// console.log(filtering1);
// {
//     filtering1.map((person,index) => (
//       <tr>
//         <th scope="row">{person}</th>

//       </tr>
//     ))}

import { useState } from "react";




function Search() {  
    let arrayName = ["Khozama", "Mohammad", "Lujain", "Nada", "Ayman"];

    const [search,searchHandler] = useState("");

      function yousef(e){
        let value = e.target.value;
        let array1 = arrayName.filter((name) => name.includes(value)).map((name,index) =>(<tr key={index}><th>{name}</th></tr>));
        searchHandler(array1);
    };
    
    // console.log(search);

  return (


    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        Search
      </span>
      <input
        type="text"
        className="form-control"
        onKeyUp={yousef}
      />
      <table className="table">
        <tbody>
              {console.log(typeof(search))}
                      {search}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
