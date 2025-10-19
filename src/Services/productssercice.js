import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetchproducts = async ()=>{
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response.data)
    return response.data
}

const useProducts =()=>{
    return useQuery({
        queryKey : ['products'],
        queryFn : fetchproducts,
        staleTime : 1000 * 60 * 10,
        retry : 3,
    })
}

export {useProducts}