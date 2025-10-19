

const FilterBox = ({handelselectcategory , currenttab}) => {
    
    const categories = ['All', 'beauty', 'fragrances', 'furniture', 'groceries']


    const cuurenttab = currenttab || 'All'
    console.log(cuurenttab)

    
    return(
        <>
            <div className="w-full">
               
                <div className=" w-full mx-auto flex flex-wrap  gap-2 sm:gap-3">  
                    
                   {categories.map((item, index) => (
                    <button 
                        onClick={()=> handelselectcategory(item)}
                        key={index} 
                        className={`text-sm sm:text-md px-4 py-2 capitalize rounded-lg transition-all 
                            duration-200 hover:cursor-pointer font-medium
                            ${cuurenttab.toLowerCase() === item.toLowerCase() 
                                ? 'bg-blue-600 text-white border border-blue-500' 
                                : 'bg-slate-700/50 text-gray-300 border border-slate-600 hover:bg-slate-700 hover:border-blue-400'} `}
                            >
                        {item}
                    </button>
                   ))}

                </div>
            </div>        
        </>
    )


}

export default FilterBox