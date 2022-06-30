import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

const Movie = (props) => {
    let {title,id} = useParams()
    const [movie, setMovie] = useState({});

    const fetchMovie = async ()=> {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab9ae6f4f09635a061ce19661cd57229`)
        const movie = await response.json();
        setMovie(movie)
        
      }

      useEffect(()=> {
        fetchMovie();
      }
      ,[])
      

    console.log(title,id)
    return (

        <div className="container">
        <div className="col-lg-12 mt-3">
          <div className="latest_product_inner">
            <div className="row d-flex justify-content-center">
            
            
              <div className="col-lg-7 col-md-7  mb-3" key={movie.id}>
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
                      <p className="text-muted" data-abc="true">
                      {movie.original_language}
                      </p>
                      <p className="text-dark" data-abc="true">
                    {movie.overview}
                    </p>
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Movie;