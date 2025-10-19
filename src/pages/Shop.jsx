import Searchbox from '../components/searchbox'
import FilterBox from '../components/filterBox'
import Products from '../components/products'   
import { useProducts } from "../Services/productssercice";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Shop = () => {

    const {data, isLoading, isError} = useProducts()

    const [filteredproducts , Setfilteredproducts] = useState(data?.products)
    console.log(filteredproducts)
    const [searchtext, Setsearchtext] = useState("")   
    
    const {slug} = useParams()
    const navigate = useNavigate()

    const handelselectcategory = (item)=>{
        if(item === 'All'){
            navigate(`/shop`)
        }else{
            navigate(`/category/${item}`)
        }       
    }

    useEffect(()=>{
        if(slug){
                Setfilteredproducts(data?.products.filter((product)=> product.category === slug))

        }else{
            Setfilteredproducts(data?.products)
        }
    },[slug, data])


    
    const handleSearch = (value)=>{
        console.log("searchtext>>>>>>>>>>>>>>>>>>>>>.", value)
        Setsearchtext(value)
    }



    return(
        <>  
        <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
            <div className='py-20 pb-40 sm:py-24 max-w-7xl mx-auto px-2 sm:px-4 relative z-10'>
                <div className='flex flex-col gap-8 p-4'>
                   
                    <div className='flex flex-col bg-slate-800/50 backdrop-blur-sm border border-slate-700 mx-15 px-4 py-6 rounded-xl gap-4'>
                        <Searchbox handleSearch={handleSearch} />
                        <FilterBox handelselectcategory={handelselectcategory} currenttab={slug} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <Products searchtext={searchtext}  products={filteredproducts} isLoading={isLoading} isError={isError} filterCategory={slug} />
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )

}

export default Shop