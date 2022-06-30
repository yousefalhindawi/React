import '../App.css';
import { Link } from "react-router-dom";

const Movies = (props) => {
 


  return (
    <div className="container">


 <div id="carouselExampleIndicators" className="carousel slide"  data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



      <div className="col-lg-12 my-5">
      <h3 className="text-center my-5">Our Movies</h3>
        <div className="latest_product_inner">
          <div className="row">
          {props.movies.map((movie)=> 
          
            <div className="col-lg-4 col-md-6  mb-3" key={movie.id}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className="card-img-top "
                  width="400"
                  height="250"
                  alt=""
                />

                <div className="card-body bg-light text-center">
                  <div className="mb-2">
                    <h6
                      className="font-weight-semibold mb-2"
                      // className="text-default mb-2"
                      data-abc="true"
                      style={{ fontSize:'20px' }}
                    >
                      {movie.title}
                    </h6>
                    <p className="text-muted" data-abc="true">
                    {movie.release_date}
                    </p>
                   
                  </div>
                  <div>
                    <Link to={`/movie/${(movie.title).replace(/ /g, '')}/${movie.id}`} className="btn btn-outline-primary">
                      Show
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
