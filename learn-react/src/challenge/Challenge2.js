
const Challenge2 = (props) =>{
    return (
    <>
    {props.image && <img src={`../images/${props.image}`} alt="userpic" />}
    <h1 style={{ display: props.Username ? 'block' :'block' }}>Username: {props.Username}</h1>
    { props.Email && <h2>Email: {props.Email}</h2> }
    </>)
}
export default Challenge2;