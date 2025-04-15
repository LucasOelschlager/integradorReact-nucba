import React from 'react'
import { Menu } from 'lucide-react'
export const menuComponent = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between items-center gap-5">
                    <button type="button"> <ShoppingCart color="#FF7D00" size={30} className="cursor-pointer" /></button>
                    <button type="button"> <User color="#FF7D00" size={30} className="cursor-pointer" /></button>
                </div>
            </nav >
            <Menu color="#FF7D00" size={30} />
        </>
    )
}
