import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseQuantity, removeItem, clearCart } from '../slices/slice'
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector(state => state.Cart.cart)
    const total = useSelector(state => state.Cart.total)
    const quantity = useSelector(state => state.Cart.quantity)
    const dispatch = useDispatch()

    const handleIncrease = (item) => {
        dispatch(addToCart(item))
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(decreaseQuantity(item))
        } else {
            dispatch(removeItem(item))
        }
    }

    const handleRemove = (item) => {
        dispatch(removeItem(item))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <>
            <div className='w-full relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
                <div className='py-20 pb-40 sm:py-24 max-w-7xl mx-auto px-2 sm:px-4 relative z-10'>
                    
                    {/* Header */}
                    <div className='flex items-center justify-between mb-8'>
                        <h1 className='text-3xl sm:text-4xl font-bold text-white'>Shopping Cart</h1>
                        {cartItems.length > 0 && (
                            <button
                                onClick={handleClearCart}
                                className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium'
                            >
                                Clear Cart
                            </button>
                        )}
                    </div>

                    {cartItems.length === 0 ? (
                        /* Empty Cart State */
                        <div className='flex flex-col items-center justify-center py-20'>
                            <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center max-w-md'>
                                <ShoppingBag className='w-24 h-24 mx-auto text-gray-500 mb-6' />
                                <h2 className='text-2xl font-bold text-white mb-4'>Your cart is empty</h2>
                                <p className='text-gray-400 mb-6'>Add some products to get started</p>
                                <Link
                                    to='/shop'
                                    className='inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200'
                                >
                                    Start Shopping
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Cart with Items */
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                            
                            {/* Cart Items List */}
                            <div className='lg:col-span-2 space-y-4'>
                                {cartItems.map((item) => (
                                    <div key={item.id} className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-slate-600 transition-colors duration-200'>
                                        <div className='flex gap-4'>
                                            
                                            {/* Product Image */}
                                            <div className='flex-shrink-0'>
                                                <img
                                                    src={item.thumbnail}
                                                    alt={item.title}
                                                    className='w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg'
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className='flex-1 min-w-0'>
                                                <div className='flex items-start justify-between gap-2 mb-2'>
                                                    <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
                                                    <button
                                                        onClick={() => handleRemove(item)}
                                                        className='text-red-400 hover:text-red-300 transition-colors duration-200 flex-shrink-0'
                                                        title='Remove item'
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </div>

                                                <p className='text-sm text-gray-400 mb-3 line-clamp-2'>{item.description}</p>

                                                <div className='flex items-center justify-between flex-wrap gap-4'>
                                                    {/* Quantity Controls */}
                                                    <div className='flex items-center gap-3'>
                                                        <span className='text-sm text-gray-400'>Quantity:</span>
                                                        <div className='flex items-center gap-2 bg-slate-900/50 border border-slate-600 rounded-lg px-2 py-1'>
                                                            <button
                                                                onClick={() => handleDecrease(item)}
                                                                className='w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-white rounded transition-colors duration-200'
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className='text-white font-semibold min-w-[30px] text-center'>{item.quantity}</span>
                                                            <button
                                                                onClick={() => handleIncrease(item)}
                                                                className='w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-white rounded transition-colors duration-200'
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Price */}
                                                    <div className='text-right'>
                                                        <p className='text-sm text-gray-400'>Price</p>
                                                        <p className='text-xl font-bold text-blue-400'>${item.price}</p>
                                                    </div>

                                                    {/* Subtotal */}
                                                    <div className='text-right'>
                                                        <p className='text-sm text-gray-400'>Subtotal</p>
                                                        <p className='text-xl font-bold text-white'>${(item.price * item.quantity).toFixed(2)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className='lg:col-span-1'>
                                <div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 sticky top-24'>
                                    <h2 className='text-xl font-bold text-white mb-6'>Order Summary</h2>
                                    
                                    <div className='space-y-3 mb-6'>
                                        <div className='flex items-center justify-between text-gray-400'>
                                            <span>Items ({quantity})</span>
                                            <span className='text-white font-semibold'>${total.toFixed(2)}</span>
                                        </div>
                                        <div className='flex items-center justify-between text-gray-400'>
                                            <span>Shipping</span>
                                            <span className='text-green-400 font-semibold'>Free</span>
                                        </div>
                                        <div className='border-t border-slate-700 pt-3'>
                                            <div className='flex items-center justify-between'>
                                                <span className='text-lg font-semibold text-white'>Total</span>
                                                <span className='text-2xl font-bold text-blue-400'>${total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 mb-3'>
                                        Proceed to Checkout
                                    </button>
                                    
                                    <Link
                                        to='/shop'
                                        className='block w-full text-center bg-slate-700/50 hover:bg-slate-700 text-white py-3 rounded-lg font-semibold border border-slate-600 hover:border-blue-400 transition-colors duration-200'
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Cart