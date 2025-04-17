import { List } from "../List/List";
import { useState } from "react";
import styledNavbar from "../Navbar/Navbar.module.css";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false)
    const { isLoggedIn } = useContext(UserContext)
    const { setIsLoggedIn } = useContext(UserContext)

    return (
        <header className={`${styledNavbar.header}`}>
            <div className="flex items-center w-[40%]">
                <img
                    src="./src/assets/navbar/logoNavbar.png"
                    alt=""
                    className="size-25"
                />
                <h1 className={`${styledNavbar.title}`}>Rosario Guitar Store</h1>
            </div>

            <nav className={`${styledNavbar.navbar}`}>
                <List className={`${styledNavbar.list}`}>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <Link to={"/"}>Inicio</Link>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <Link to={"/nosotros"}>Nosotros</Link>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <a href="">Productos</a>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <Link to={'/contacto'}>Contacto</Link>
                    </li>
                </List>
                <div className="flex justify-between items-center gap-5">
                    <button type="button">
                        {/* BOTON PARA ABRIR EL CARRITO*/}
                        <ShoppingCart
                            color="#FF7D00"
                            size={30}
                            className="cursor-pointer"
                            onClick={() => setIsCartOpen(!isCartOpen)}
                        />
                    </button>
                    <button type="button">
                        {!isLoggedIn ? (
                            <Link to="/login" className={`${styledNavbar.logginButton}`}>
                                Inicia Sesión
                            </Link>
                        ) : (
                            <User color="#FF7D00" size={30} className="cursor-pointer" onClick={() => setIsOptionsMenuOpen(!isOptionsMenuOpen)} />
                        )}
                    </button>
                </div>
                <div className={isOptionsMenuOpen ? `${styledNavbar.optionsMenuAct}` : `${styledNavbar.optionsMenu}`}>
                    <List query={`${styledNavbar.listMenu}`}>
                        <li>Perfil</li>
                        <li>Configuración</li>
                        <li onClick={() => {
                            setIsLoggedIn(false)
                            setIsOptionsMenuOpen(!isOptionsMenuOpen)
                        }}>Cerrar Sesión</li>
                    </List>
                </div>
            </nav>

            {/* Menú Responsive */}
            <nav
                className={
                    isMenuOpen
                        ? `${styledNavbar.navbarResAct}`
                        : `${styledNavbar.navbarRes}`
                }
            >
                <List className="flex">
                    <li className={`${styledNavbar.navbar_link}`}>
                        <a href="">Inicio</a>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <a href="">Nosotros</a>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <a href="">Productos</a>
                    </li>
                    <li className={`${styledNavbar.navbar_link}`}>
                        <a href="">Contacto</a>
                    </li>
                </List>
                <div className="flex justify-between items-center gap-5">
                    <button type="button">
                        <ShoppingCart
                            color="#FF7D00"
                            size={30}
                            className="cursor-pointer"
                            onClick={() => {
                                setIsCartOpen(!isCartOpen);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        />
                    </button>
                    <button type="button">

                    </button>
                </div>
            </nav>

            {/* Botón para abrir/cerrar el menú */}
            <Menu
                className={`${styledNavbar.menu}`}
                color="#FF7D00"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Carrito */}
            <div
                className={
                    isCartOpen == true
                        ? `${styledNavbar.cartActive}`
                        : `${styledNavbar.cart} `
                }
            >
                <div className="flex gap-4 cursor-pointer">
                    {/*BOTON PARA CERRAR EL CARRITO */}
                    <X
                        color="#FF7D00"
                        className="cursor-pointer"
                        size={30}
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    />
                    <h2 className="text-2xl text-[#FF7D00]">Carrito...</h2>
                </div>
                <List></List>
                <div className="absolute bottom-[10px] flex items-center justify-around w-[100%] right-0">
                    <h4 className="text-2xl text-[#FF7D00]">Total:</h4>
                    <button className={`${styledNavbar.buttonCart}`}>Comprar</button>
                </div>
            </div>
        </header >

    );
};