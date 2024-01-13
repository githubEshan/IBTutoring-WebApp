import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated &&(
            <nav className="flex w-full justify-center bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 top-50 z-50 relative">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white font-bold text-xl">
                        <a href="/Home">TutorIB</a>
                    </div>

                    <div className="flex space-x-4">
                        <a href="/Resources" className="text-white hover:text-gray-500">Resources</a>
                        <a href="/About" className="text-white hover:text-gray-500">About</a>
                        <a onClick={() => loginWithRedirect()} className="text-white hover:text-gray-500">Login</a>
                    </div>
                </div>
            </nav>
        )
    );
};

export default Navbar;
