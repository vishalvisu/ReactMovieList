import React, { useState } from 'react';
import data from './data.js';
import Movie from './Movie.jsx';
import  './index.css';

export default function Movies_list()
{
const[movie,setmovie]= useState(data);

const handleLike= function (id)
   {
       console.log(id);
       let movie_copy=[...movie];
       for(let i=0;i<movie_copy.length;i++)
       {
           let item= movie_copy[i];
           if(item.title==id)
           {
              item.isLiked=item.isLiked?false:true;
              console.log(item);
           }
           console.log(item);
       }
       setmovie(movie_copy);
   } ; 

   const HandleWatchList= function (id)
   {
       console.log(id);
       let movie_copy=[...movie];
       for(let i=0;i<movie_copy.length;i++)
       {
           let item= movie_copy[i];
           if(item.title==id)
           {
              item.isWatchlisted=item.isWatchlisted?false:true;
              console.log(item);
           }
           console.log(item);
       }
       setmovie(movie_copy);
   } ; 

   const HandleDelete= function(id)
   {
    let movie_copy=[];
    for(let i=0;i<movie.length;i++)
    {
        if(movie[i].title!=id)
          movie_copy.push(movie[i]);
    }
    setmovie(movie_copy);
   };



  
   function fun(obj)
   {
   //    console.log(obj);
       return (
    <Movie title={obj.title}
    rating={obj.rating}
    isLiked={obj.isLiked}
    key={obj.title}
    id={obj.title}
    isWatchlisted={obj.isWatchlisted}
    handleLike={handleLike}
    handleWatchList={HandleWatchList}
    handleDelete={HandleDelete}
    actor={obj.actors}
    />
    );
   }

    return(
        
        <div className="list">
        {movie.map(fun)}
        </div>

    )



}