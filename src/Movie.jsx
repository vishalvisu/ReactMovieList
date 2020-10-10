import React from 'react';
export default function Movie(props)
{
    function HandleLike()
    {
        props.handleLike(props.title);
    }

    function HandleWatchlist()
    {
        props.handleWatchList(props.title);
    }
  
    function HandleDelete()
    {
        props.handleDelete(props.title);
    }
      
    return (
    <div className="movie">
          <h1>{props.title}</h1>
         <h2>Rating: {props.rating}</h2>
         <h3>Cast: {props.actor}</h3>
        <button onClick={HandleLike} className={props.isLiked?"blue":"red"}>
        {props.isLiked?"unlike":"Like"}
        </button>
        <button onClick={HandleWatchlist} className={props.isWatchlisted?"blue":"red"}>
        {props.isWatchlisted?"-Remove From WAtchList":"+Add to WatchList"}
        </button>
        <button onClick={HandleDelete}>
          Delete
        </button>
    </div>)
}

