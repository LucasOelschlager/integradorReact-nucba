import styledCategorys from "../Categorys/Categorys.module.css"
import categorias from "../../data/categorys.json"
export const Categorys = () => {
    return (
        <>
            {console.log(categorias)}
            <div className={styledCategorys.container}>
                <div className={styledCategorys.cardsContainer}>

                </div>
            </div>
        </>
    )
}