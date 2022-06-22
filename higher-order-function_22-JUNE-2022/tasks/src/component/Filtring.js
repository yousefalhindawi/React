// let flitring = people.filter((person) => {
//   return person.id % 2 === 0;
// });
// console.log(flitring);


function Filtring(props) {
  return (
    <div className="container">
      <h2>Filtring</h2>
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
            .filter((person) => person.id % 2 === 0)
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

export default Filtring;
