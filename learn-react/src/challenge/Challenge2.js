
const Challenge2 = (props) =>{
    return (
    <>
    <hr />
    {props.image && <img src={`../images/${props.image}`} alt="userpic" width="100" />}
    <h1 style={{ display: props.Username ? 'block' :'none' }}>Username: {props.Username}</h1>
    { props.Email && <h2>Email: {props.Email}</h2> }
    <hr />
    </>)
}
export default Challenge2;