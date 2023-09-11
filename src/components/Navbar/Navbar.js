import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    return (
        <div className='d-flex justify-content-space-btw padding-2rem'>
            <div className='font-family-raleaway'>LOGO</div>
            <div className='d-flex column-gap-sm'>
                <div>Search</div>
                <ShoppingCartIcon />
                <div>
                    {isLoggedIn ?
                        <AccountCircleIcon />
                        :
                        <button>Login/Signup</button>
                    }
                </div>

            </div>

        </div>
    )
}

export default Navbar