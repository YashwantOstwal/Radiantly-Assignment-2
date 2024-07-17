import { motion ,useAnimation } from 'framer-motion'
import Imdb from './imdb.jsx'

export default function MagicOnHover({movie}) {

    const animateText = useAnimation();
    const animateCluster = useAnimation();
    const handleMouseEnter = ()=>{
      animateText.start({y:"0",opacity:0,transition:{
        opacity:{duration:0.3,ease:'easeOut'},
      }});
      animateCluster.start({y:"0",opacity:1,transition:{
        y:{duration:0.3}
      }});
    }
  
    const handleMouseLeave = ()=>{
      animateText.start({y:"10px",opacity:1,transition:{
        ease:'easeOut',duration:0.3
      }
      })
      animateCluster.start({y:'10px',opacity:0,transition:{
        y:{duration:0.3}
      }})
    }

    return (
        <motion.div className = 'flex justify-center text-4xl text-[#007F7F] anton-regular border-b border-[#007F7F] overflow-hidden'
          onMouseEnter = {handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
            <div className = 'flex justify-center relative'>
                <motion.div className = 'text-nowrap '
                  initial = {{y:"10px"}}
                  animate = {animateText}
                >
                    DESCRIPTION
                </motion.div>
                <motion.div className = 'absolute inset-0'
                  initial = {{y:'10px',opacity:0}} 
                  animate = {animateCluster}
                >
                    <Cluster rating = {movie.rating} imdb_url={movie.imdb_url}/>
                </motion.div>
            </div>
        </motion.div>
    )
  }
  function Cluster({rating,imdb_url}){
    return (
      <div className = 'h-full text-bold capitalize'>
        <span className = 'poppins-bold text-xs bg-[#BBBDFA] ring-[#BBBDFA]/60  text-black ring-4 border-2 text-nowrap border-black absolute px-1 rounded-full top-3 left-0'>Rating:{rating}</span>
        <a href = {imdb_url} className = 'flex gap-1 underline items-center poppins-bold text-xs bg-[#C1ED42] ring-[#C1ED42]/60 text-black ring-4 border-2 text-nowrap border-black absolute px-1 decoration-1 rounded-full right-0 bottom-3'><Imdb />IMDb ➜</a>
      </div>
    );
  }
  