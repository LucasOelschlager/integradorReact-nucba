import { List } from "../List/List"
import { createContext, useState } from "react"
import styledNavbar from '../Navbar/Navbar.module.css'
import { ShoppingCart, User, Menu, X, Car } from 'lucide-react'
import { CartComponent } from "../cartComponent/cartComponent"
import { useContext } from "react"


export const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navContext = createContext()

    return (
        <>
            <navContext.Provider >
                <header className={`${styledNavbar.header}`}>
                    <div className="flex items-center w-[40%] z-20">
                        <img src="./src/assets/navbar/logoNavbar.png" alt="" className="size-25" />
                        <h1 className={`${styledNavbar.title}`}>Rosario Guitar Store</h1>
                    </div>
                    <nav className={`${styledNavbar.navbar}`}>
                        <List className={`${styledNavbar.list}`}>
                            <li className={`${styledNavbar.navbar_link}`}><a href="">Inicio</a></li>
                            <li className={`${styledNavbar.navbar_link}`}><a href="">Nosotros</a></li>
                            <li className={`${styledNavbar.navbar_link}`}><a href="">Productos</a></li>
                            <li className={`${styledNavbar.navbar_link}`}><a href="">Contacto</a></li>
                        </List>
                    </nav>
                </header >
            </navContext.Provider>
        </>
    )
}