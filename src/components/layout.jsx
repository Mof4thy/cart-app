import { Outlet } from 'react-router-dom'
import Navbar from './navbar'

const Layout = () => {
    return(
        <>
            <div className='bg-gray-100 h-screen w-full  flex flex-col'>
                <Navbar />
                <main className='min-h-screen w-full'>
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Layout