import { useEffect, useState } from 'react';
import { Container, MovieList, Movie } from './styles';
import './global.css'
import APIKEY from '../../key';


function Home() {
    const dataUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=pt-BR&page=1`
    const imagesUrl = "https://image.tmdb.org/t/p/w500/"
    const [movies, setMovies] = useState([])

    useEffect(async()=>{
        const request = await fetch(dataUrl)
        const result = await request.json()
        setMovies(result.results)
    }, [])
    
    return (
        <Container>
            <h1>Filmes populares</h1>
            <MovieList>
                {movies.map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <a href={`/details/${movie.id}`}><img src={`${imagesUrl}${movie.poster_path}`} alt={movie.title} /></a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    )
}

export default Home;