import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { Container } from "./styles"
import { useEffect } from "react"
import APIKEY from '../../key'
import './Details.css'


export default function Details(){
    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR`
    const imageUrl = "https://image.tmdb.org/t/p/w500/"
    const [movie, setMovie] = useState([])

    useEffect(async()=>{
        const request = await fetch(url)
        const result = await request.json()
        const { title, poster_path, release_date, overview } = result
        const releaseDate = new Date(release_date).toLocaleDateString("pt-BR")
        const movie = {
            title,
            poster: `${imageUrl}${poster_path}`,
            sinopse: overview,
            releaseDate,
        }
        setMovie(movie)
    }, [id])

    return (
            <Container url={movie.poster}>
            <div className="movie">
                <img src={movie.poster} alt={movie.sinopse} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span id="release-date">{movie.releaseDate}</span>
                    <span>{movie.sinopse}</span>
                    <Link to="/" ><button>Voltar</button></Link>
                </div>
            </div>
        </Container>
        )
}