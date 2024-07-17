import axios from 'axios'
import { useEffect, useState } from 'react'
export default function useFetchMovies(url){
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        (async()=>{
            const {data} = await axios.get(url);
            setMovies(data);
        })();
    },[])
    return movies;
}