import Challenge1 from "../challenge/Challenge1";
import Challenge2 from "../challenge/Challenge2";
import Form from "./Form";
const About = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  const names = ["ali", "fadi", "shadi", "sami"];
  const namesCapitalized = names.map((name, index) => (
    <h3 key={index}>{`${name[0].toUpperCase()}${name.slice(1)}`}</h3>
  )); //returns array of objects
  // console.log(namesCapitalized)

  return (
    <div className="container my-5">
      <h1>About</h1>

      {namesCapitalized.map((name) => name)}
      <div>
        {nums.map((num) => (
          <span key={num}> {num * num}</span>
        ))}
      </div>

      <Challenge1 />
      <Challenge2 Username="alaa" Email="alaa@gmail.com" image="logo.svg" />
      <Challenge2 Username="ali" Email="ali@gmail.com" />
      <Challenge2 Username="sami" />
      <Challenge2 Email="fadi@gmail.com" />
      {/* <Form /> */}
    </div>
  );
};
export default About;
