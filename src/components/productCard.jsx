import { useDispatch, useSelector } from "react-redux"
import { addToCart, decreaseQuantity, removeItem  } from "../slices/slice"
import { Plus, Minus } from "lucide-react"
import { memo } from "react"

const ProductCard = ({item}) => {

    const dispatch = useDispatch()

    const itemQuantity = useSelector(state =>
        state.Cart.cart.find((cartItem) => cartItem.id === item.id)?.quantity || 0
    )
    
    const handleAddToCart = () => {
        dispatch(addToCart(item))
    }

    const handleIncrease = () => {
        dispatch(addToCart(item))
    }

    const handleDecrease = () => {
        if (itemQuantity > 1) {
            dispatch(decreaseQuantity(item))
        } else {
            dispatch(removeItem(item))
        }
    }
    
    return(

        <>
            <div className="group relative overflow-hidden hover:scale-105 transition-transform duration-300 bg-gradient-to-t from-black/50 via-black/30 to-black/5">
               
                <div className=" aspect-square overflow-hidden w-full h-full flex  justify-center">
                    <img src={item?.thumbnail} alt="Product Image" className="w-50 h-50 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
            
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg font-semibold">{item?.title}</h3>
                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">${item?.price}</p>
                            
                            {itemQuantity > 0 ? (
                                /* Quantity Controls */
                                <div className="flex items-center gap-2 bg-white/90 rounded-full px-2 py-1">
                                    <button
                                        onClick={handleDecrease}
                                        className="w-7 h-7 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors duration-200"
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span className="text-black font-bold min-w-[24px] text-center">{itemQuantity}</span>
                                    <button
                                        onClick={handleIncrease}
                                        className="w-7 h-7 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors duration-200"
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                            ) : (
                                /* Add to Cart Button */
                                <button
                                    onClick={handleAddToCart}
                                    className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            
            </div>
        </>

    )
}

export default memo(ProductCard)