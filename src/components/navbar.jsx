import { Link } from 'react-router-dom'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decreaseQuantity, removeItem } from '../slices/slice'
import { Plus, Minus, Trash2, Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const quantity = useSelector(state => state.Cart.quantity)
    const cartItems = useSelector(state => state.Cart.cart)
    const total = useSelector(state => state.Cart.total)
    const dispatch = useDispatch()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4">
            
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 backdrop-blur-xs bg-slate-900/95 shadow-lg rounded-2xl sm:rounded-3xl mt-2 sm:mt-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <h1 className="text-xl sm:text-2xl font-bold text-white">
                                Neo<span className="text-blue-400">Vault</span>
                            </h1>
                        </Link>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <Link 
                                to="/" 
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link 
                                to="/shop" 
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Shop
                            </Link>
                            <Link 
                                to="/cart" 
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Cart
                            </Link>
                        </div>
                    </div>

                    {/* Right side: Cart Popover & Mobile Menu */}
                    <div className="flex items-center gap-2">
                        {/* Cart Popover */}
                        <Popover className="relative">
                            <PopoverButton className="flex items-center text-gray-300 hover:text-white hover:bg-slate-700 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7" />
                                </svg>
                                <span className="hidden xs:inline">Cart </span>({quantity})
                            </PopoverButton>

                            <PopoverPanel className="absolute right-0 top-12 w-[calc(100vw-2rem)] max-w-sm sm:w-96 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden">
                                {cartItems.length === 0 ? (
                                    <div className="text-center py-8 px-4">
                                        <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7" />
                                        </svg>
                                        <p className="text-gray-400 mb-4">Your cart is empty</p>
                                        <Link 
                                            to="/shop" 
                                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Start Shopping
                                        </Link>
                                    </div>
                                ) : (
                                    <>
                                        {/* Cart Items */}
                                        <div className="max-h-96 overflow-y-auto p-4 space-y-3">
                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                                                    {/* Product Image */}
                                                    <img 
                                                        src={item.thumbnail} 
                                                        alt={item.title} 
                                                        className="w-16 h-16 object-cover rounded"
                                                    />
                                                    
                                                    {/* Product Details */}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-medium text-white truncate">{item.title}</h4>
                                                        <p className="text-sm text-blue-400 font-semibold">${item.price}</p>
                                                        
                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-2 mt-2">
                                                            <button
                                                                onClick={() => handleDecrease(item)}
                                                                className="w-6 h-6 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors duration-200"
                                                            >
                                                                <Minus size={14} />
                                                            </button>
                                                            <span className="text-sm text-white font-medium min-w-[20px] text-center">{item.quantity}</span>
                                                            <button
                                                                onClick={() => handleIncrease(item)}
                                                                className="w-6 h-6 flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white rounded transition-colors duration-200"
                                                            >
                                                                <Plus size={14} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* Delete Button */}
                                                    <button
                                                        onClick={() => handleRemove(item)}
                                                        className="text-red-400 hover:text-red-300 transition-colors duration-200"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Cart Footer */}
                                        <div className="border-t border-slate-700 p-4 bg-slate-900/50">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-gray-400">Total:</span>
                                                <span className="text-xl font-bold text-white">${total.toFixed(2)}</span>
                                            </div>
                                            <Link 
                                                to="/cart" 
                                                className="block w-full bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
                                            >
                                                View Full Cart
                                            </Link>
                                        </div>
                                    </>
                                )}
                            </PopoverPanel>
                        </Popover>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-gray-300 hover:text-white hover:bg-slate-700 p-2 rounded-md transition-colors duration-200"
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-slate-700 py-3">
                        <div className="flex flex-col space-y-2">
                            <Link
                                to="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/shop"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Shop
                            </Link>
                            <Link
                                to="/cart"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-gray-300 hover:text-white hover:bg-slate-700 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                            >
                                Cart
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar