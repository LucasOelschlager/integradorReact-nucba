import styledCategorys from "../Categorys/Categorys.module.css";
import categorias from "../../data/categorys.json";

export const Categorys = () => {
    return (
        <div className={`${styledCategorys.container}`}>
            <ul className={`${styledCategorys.list}`}>
                {categorias.map((e) => (
                    <li key={e.id} className={`${styledCategorys.categoryItem}`}>
                        <img src={`${e.image}`} alt={e.name} className={`${styledCategorys.categoryImg}`} />
                        <h4>{e.name}</h4>
                        <p>{e.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};