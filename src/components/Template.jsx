import { motion } from 'framer-motion'
import MagicOnHover from './MagicOnHover.jsx'

export default function Template({movie,focusId,setFocusId}){
    const handleMouseEnter = ()=>{
      setFocusId(movie.id);
    }
    return (
      <div onMouseEnter = {handleMouseEnter} className = 'relative w-fit rounded-xl'>
        {movie.id == focusId &&
          <motion.div layoutId = 'focus' className = 'z-0 absolute -inset-5 bg-teal-700 rounded-xl'/>}
        <div className = 'relative z-10 w-60 h-72 bg-white rounded-xl py-4 px-2 shadow-2xl shadow-[#007F7F] flex flex-col justify-around anton-regular uppercase text-3xl text-[#007F7F]'>
            <span className = 'text-center'>"{movie.movie}"</span>
            <MagicOnHover movie = {movie} />
        </div>
      </div>
    );
  }