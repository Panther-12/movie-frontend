import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListComponent from './ListComponent';

export const AddMovie = () => {
    const [title, setTitle] = useState("")
    const [movies, setMovies] = useState(null)
    const [request, setRequest] = useState(false)

    const endpoint = "http://localhost:8000/movies"

    const handleInputChange = (e)=>{
        setTitle(e.target.value)
    }

    const addMovie = ()=>{
        const data = {
            id:Math.floor(Math.random*60),
            title:title,
            watched: false
        }

        axios.post(endpoint,data).then(response=>{
            console.log("Movie added successfuly")
            setRequest(!request)
        })
    }

    useEffect(()=>{
        axios.get(endpoint).then(response=>{
            console.log(response.data)
            setMovies(response.data)
        })
    },[request])

  return (
    <div className="movie-wrapper">
        <div>
            <label for="hs-trailing-multiple-add-on" class="sr-only">Multiple add-on</label>
            <div class="flex rounded shadow-sm">
                <input type="text" id="hs-trailing-multiple-add-on" name="inline-add-on" class="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-lg rounded-e-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg:white dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Movie..." onChange={handleInputChange}/>
                <div class="px-4 inline-flex items-center min-w-fit rounded-e-md border border-s-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <span class="items-center py-0.5 px-1.5 text-xs font-medium bg-inherit text-white hover:cursor-pointer" onClick={addMovie}>Add</span>
                </div>
            </div>
        </div>
        <ListComponent type="WatchList" data={movies}/>
        <ListComponent type="Watched" data={movies}/>
    </div>


  )
}

export default AddMovie;
