import styled from 'styled-components'


export const Container = styled.div`

    background: linear-gradient(to bottom, rgba(0,0,0,0.8), black),
    url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-size: cover;
    

    padding: 0 3rem;

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    img{
        width: 300px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: normal;
        font-size: 120%;
        margin-bottom: 1rem;
        line-height: 130%;
    }

    #release-date{
        margin: 0 0 3rem 0;
        font-size: .9rem;
        opacity: 0.5;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 6rem;
        max-width: 50%;
    }

    button {
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: all .3s;
    }

    button:hover{
        background: #5848c2;
    }

    @media (max-width:900px){
        .movie{
            padding: 3rem 0;
            flex-direction: column;
            height: auto;
        }

        h1{
            text-align: left;
        }
        .details {
            max-width: 300px;
            margin-left: 0;
            text-align: justify;
        }
    }

`