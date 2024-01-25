import React from 'react'
import axios from 'axios'



export const Movie = ({title, status, id, updateState}) => {
    const endpoint = "http://localhost:8000/movies/"+id

    const data = {
        id:id,
        title:title,
        watched:status==="Watched"?false:true
    }
    const changeState = ()=>{
        try{
            axios.put(endpoint,data).then(response=>{
                console.log("Movie state updated successfully")
                window.localStorage.setItem("text","Movie state updated successfully")
                updateState()
            })
        } catch(error){
            console.log(`Error encountered:${error.message}`)
        }
    }
    const deleteMovie = ()=>{
        axios.delete(endpoint).then(response=>{
            console.log("Movie deleted successfully")
            window.localStorage.setItem("text","Movie deleted successfully")
            updateState()
        })
    }

  return (
    <div className="movies-wrapper py-4 flex flex-row w-auto">
        <div className="title-wrapper mr-10">
            <span className="text-gray-400">{title}</span>
        </div>
        <div className="buttons-wrapper float-right">
            <button type="button" className="mr-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-dark-200 bg-slate-500 hover:cursor-pointer text-gray-300 shadow-sm hover:bg-slate-900 hover:text-white" onClick={changeState}>
                {status==="Watched"?"Unwatch":"Watched"}
            </button>
            <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-200 bg-red-500 hover:cursor-pointer text-gray-300 shadow-sm hover:bg-red-500 hover:text-white" onClick={deleteMovie}>
                Delete
            </button>
        </div>
    </div>
  )
}


export default Movie;