import { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import styledForm from "../userData/LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    // Estados locales para los inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (email && password) {
            setIsLoggedIn(true); // Cambia el estado global
            navigate("/"); // Redirige al usuario
        } else {
            alert("Por favor, ingrese un email y contraseña válidos.");
        }
    };

    return (
        <div className={`${styledForm.container}`}>
            <form className={`${styledForm.formContainer}`} onSubmit={handleLogin}>
                <h2>Inicia Sesión</h2>
                <label htmlFor="emailInput" className={`${styledForm.inputContainer}`}>
                    Email
                    <input
                        type="text"
                        placeholder="Ingrese su email"
                        id="emailInput"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado local
                    />
                </label>
                <label
                    htmlFor="passwordInput"
                    className={`${styledForm.inputContainer}`}
                >
                    Contraseña
                    <input
                        type="password"
                        placeholder="Ingrese su contraseña"
                        id="passwordInput"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado local
                    />
                </label>
                <button type="submit">Iniciar Sesión</button>
                <label htmlFor="termsConditions" className="font-serif flex gap-2">
                    Acepto los términos y condiciones
                    <input type="checkbox" id="termsConditions" />
                </label>
                <label className="font-serif text-[16px]">
                    Si no tienes una cuenta{" "}
                    <Link
                        to={"/register"}
                        className="font-serif text-[16px] text-[#ff7d00]"
                    >
                        Crea una aquí
                    </Link>
                </label>
            </form>
        </div>
    );
};