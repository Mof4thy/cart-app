import ProductCard from "./productCard";
import { useMemo } from "react";


const Products = ({products, isLoading, isError, filterCategory, searchtext}) => {
    

    const filteredproductsdata = useMemo(()=>{
        if(searchtext){
            return products.filter(p=> p.title.toLowerCase().includes(searchtext.toLowerCase()))
        }else{
            return products
        }
    },
    [searchtext, products])


    if(isLoading){
        return <div className="text-white text-center text-xl">Loading...</div>
    }
    if(isError){
        return <div className="text-red-400 text-center text-xl">Error loading products...</div>
    }

    return(
        <>
            <div className="flex flex-col gap-4 items-center justify-center w-full ">
                <h2 className="text-2xl font-bold text-white capitalize"> {filterCategory? filterCategory : "All products"}   </h2>

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    
                    {/* <ProductCard /> */}
                    {filteredproductsdata && filteredproductsdata.map((p) => (
                        <ProductCard key={p.id} item={p}  />
                    ))}
                                
                </div>

            </div>
        </>
    )

}

export default Products