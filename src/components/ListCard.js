import React from 'react'
import Grid from '@material-ui/core/Grid';

import Movie from './miniCard'


const arraylistMovies = [
    {

        title: "ZAPATOS",
        img: "https://cdn.forbes.com.mx/2019/09/vans.jpg1_-640x360.jpg"
    },
    {
        title: "BUSOS",
        img: "https://ventaspop-images.staticgnt.com/yPnSaMuXOEmWRdyGX9orLa5nRas=/filters:quality(100)/files/products/167/6651/229882-b-2.jpg"
    },
    {
        title: "CAMISETAS",
        img: "https://ae01.alicdn.com/kf/HTB1Y47bSpXXXXbTXVXXq6xXFXXX7.jpg?size=33964&height=584&width=551&hash=010a27143a8fa0b7775f355ae968b332"
    }
]


function ListMovies() {
    return (
        <Grid container>
            
            {
                arraylistMovies.map(movie => {
                    return <Movie title={movie.title} description={movie.description} img={movie.img} />
                })
            }
        
            
        </Grid>

    )
}

export default ListMovies;