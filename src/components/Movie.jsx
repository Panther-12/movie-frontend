import React from 'react'

export const Movie = ({title, status, id}) => {
  return (
    <div className="movies-wrapper py-4">
        <span>{title}</span>
        <button type="button" class="mr-10 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-dark-200 bg-white text-gray-800 shadow-sm">
            {status==="Watched"?"Unwatch":"Watched"}
        </button>
        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-red-200 bg-white text-gray-800 shadow-sm ">
            Delete
        </button>
    </div>
  )
}


export default Movie;