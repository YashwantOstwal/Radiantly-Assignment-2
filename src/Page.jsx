import { useState } from 'react'
import {motion,useAnimation } from 'framer-motion'
import useFetchMovies from './CustomHooks/useFetchMovies';
import Template from './components/Template';

export default function Page() {
  const [focusId,setFocusId] = useState(1);
  const movies = useFetchMovies('https://dummyapi.online/api/movies');

  return (
    <>
      <div className = 'relative flex justify-center flex-wrap bg-[#00FEFE] gap-16'>
        <div className = 'z-20 sticky top-0 w-screen flex justify-center backdrop-blur-3xl text-3xl sm:text-3xl lg:text-5xl text-[#007F7F] uppercase anton-regular '>
          Radiantly assignment
        </div>
        {movies?.map((movie,i)=> {
          return <Template key = {i} movie = {movie} focusId = {focusId} setFocusId = {setFocusId}/>})}
      </div>
    </>
  )
}

