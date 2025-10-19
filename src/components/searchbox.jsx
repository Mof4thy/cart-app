import { Search } from 'lucide-react';

const Searchbox = ({handleSearch}) => {
return(
    <>
        <div className='flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6'>

            <div className="w-full flex items-center text-md bg-slate-900/50 border border-slate-600 px-4 py-3 rounded-lg gap-2 focus-within:border-blue-500 transition-colors duration-200">
                <Search
                    className="flex-shrink-0 text-gray-400" />
                <input 
                    onChange={(e)=> handleSearch(e.target.value)} 
                    type='text' 
                    placeholder='Search for products by name' 
                    className='w-full bg-transparent border-none focus:outline-none text-sm sm:text-base text-white placeholder-gray-400' />
            </div>

            {/* <button className='bg-slate-900 text-white text-sm sm:text-lg px-4 py-2 rounded-4xl hover:bg-slate-800 transition-colors duration-200 hover:cursor-pointer w-full sm:w-auto flex-shrink-0' >Search</button> */}
    
        </div>
    </>

    )

}

export default Searchbox