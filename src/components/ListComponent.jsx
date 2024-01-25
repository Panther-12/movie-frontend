import React from 'react'
import Movie from './Movie';

export const ListComponent = ({type, data}) => {
    console.log(data)
    let filteredResults = null
    if(data!==null){
        filteredResults = type==="Watched"?data.filter((movie)=>movie.watched===true):data.filter((movie)=>movie.watched===false)
    }
    
  return (
    <div>
        <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        {type}
        <span className="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-white text-black">{filteredResults.length}</span>
        </button>
        <div className="border-wrapper border border-gray-300 mt-3">
            <div className="topItem border border-gray-300 flex flex-row justify-between p-3">
                <div className="white-space border-r-gray-300"></div>
                <div className="text text-gray-400">Search movies...</div>
            </div>
            <div className="items p-5">
                {filteredResults!==null?filteredResults.map((item,index)=>{
                    return(
                        <div>
                            <Movie title={item.title} id={item.id} status={type} key={index}/>
                            <hr/>
                        </div>
                    )
                }):"No data available"}
            </div>
        </div>
    </div>
  )
}


export default ListComponent;