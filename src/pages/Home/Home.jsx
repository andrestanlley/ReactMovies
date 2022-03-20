import { useEffect, useState } from 'react';
import { Container, MovieList, Movie, NavButtons } from './styles';
import './global.css'
import api from '../../api'
import APIKEY from '../../key';
import { useParams } from 'react-router-dom';


function Home() {
    let {page = 1} = useParams()
    const imagesUrl = "https://image.tmdb.org/t/p/w500/"
    const [movies, setMovies] = useState([])

    useEffect(async()=>{
        const req = await api.get(`/popular?api_key=${APIKEY}&language=pt-BR&page=${page}`)
        setMovies(req.data.results)
    }, [])
    
    return (
        <Container>
            <h1>Filmes populares</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href={`/movie/${movie.id}`}><img src={`${imagesUrl}${movie.poster_path}`} alt={movie.title} /></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
            <NavButtons>
            {page > 1 &&(
                <a href={`/${Number(page)-1}`}><button>Anterior</button></a>
                )}
            <a href={`/${Number(page)+1}`}><button>Próxima</button></a>
            </NavButtons>
        </Container>
    )
}

export default Home;