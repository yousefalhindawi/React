// let sorting = people.sort((a,b) => {
//     return ((a.id>b.id) ? 1 : ( (a.id<b.id) ? -1:0 ) );
// });
// console.log(sorting);

// let sortingNumber = [11,2,22,1,11].sort((a, b) => a - b);
// console.log(sortingNumber);

function Sorting(props) {
  return (
    <div className="container">
      <h2>Sorting</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {props.people
            .sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
            .map((person) => (
              <tr key={person.id}>
                <th scope="row">{person.id}</th>
                <td>{person.name}</td>
                <td>{person.age}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sorting;
