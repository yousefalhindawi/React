
function Checkbox({image,title}) {
    return (
<div className="container-fluid d-flex ">
<img src={image} alt={title}/>
        <div className="form-check mx-3 d-flex align-items-center">
  <input className="form-check-input mx-3" type="checkbox" value="" id="flexCheckDefault"/>
  <label className="form-check-label" for="flexCheckDefault">
    {title}
  </label>
</div>
</div>
    );
};
export default Checkbox;