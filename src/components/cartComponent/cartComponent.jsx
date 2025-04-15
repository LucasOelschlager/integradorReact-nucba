import { X } from "lucide-react"
import styledCart from "../cartComponent/cartComponent.module.css"
export const CartComponent = ({ children }) => {
    return (
        <>
            <div className={`${styledCart.carrito}`}>
                <X />
                <h2>Carrito</h2>
                <ul>
                    {children}
                </ul>
            </div>
        </>
    )
}