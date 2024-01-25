import React from 'react'
import Movie from './Movie';

export const ListComponent = ({type, data}) => {
    
    const filteredResults = type==="Watched"?data.filter((movie)=>movie.watched===true):data.filter((movie)=>movie.watched===false)
  return (
    <div>
        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        {type}
        <span class="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-white text-black">{filteredResults.length}</span>
        </button>
        {filteredResults.map(item=>{
            return(
                <Movie title={item.title} id={item.id} status={type}/>
            )
        })}
    </div>
  )
}


export default ListComponent;