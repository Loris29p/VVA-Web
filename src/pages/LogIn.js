import '../assets/styles/LogIn.scss';
import { useNavigate } from "react-router-dom"
import DelayLink from '../DelayLink';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/styles/toastify.css';

function LogIn() {
    const navigate = useNavigate()

    function changeTypePasswordInput() {
        const passwordInput = document.getElementById("password");
        const img = document.getElementById("img_show_password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            img.src = "/eye.slash.svg";
            passwordInput.focus();
        } else {
            passwordInput.type = "password";
            img.src = "/eye.svg";
            passwordInput.focus();
        }
    }

    setTimeout(() => {
        if (localStorage.getItem("isLogged") === "true") {
            fadeScreen();
            setTimeout(() => {
                navigate("/");
            }, 1000);
        }
    });

    function fadeScreen() {
        const LogIn__body = document.getElementById("LogIn__body");
        LogIn__body.classList.add("fade");
    }

    function sumbitForm() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            toast.error("Veuillez remplir tous les champs.");
        } else {
            const login = window.classUser.login(email, password);
            setTimeout(() => {
                if (login.connected === true) {
                    fadeScreen();
                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else if (login.error === true) {
                    toast.error(login.message);
                }
            }, 100);
        }
    }

    return ( 
        <div className = 'LogIn' >
            <div className = 'LogIn__body' id = 'LogIn__body' >
                <ToastContainer />
                <div className = 'header' >
                    <h1> Connexion </h1> 
                    <h6> Ceci est la page de connexion à VVA </h6> 
                </div> 
                <div className = 'form' >
                    <div className = 'header' >
                        <div className = 'active'> <a> Se connecter </a></div>
                        <DelayLink delay = { 1000 } to = "/signup" style = {{ textDecoration: 'none' } } > < div onClick = { fadeScreen } > < a > S 'enregistrer</a></div></DelayLink> 
                    </div> 
                    <form>
                        <div className = 'form__group' >
                            <div className = 'form__group__input'>
                                <div>
                                    <label htmlFor = 'email' > Email </label> 
                                    <input type = 'email' name = 'email' id = 'email' required />
                                </div>
                                <div>
                                    <label htmlFor = 'password' > Mot de passe </label> 
                                    <input type = 'password' name = 'password' id = 'password' required />
                                    <a id = 'show_password' onClick = { changeTypePasswordInput } >
                                        <img className = 'img_show_password' id = 'img_show_password' src = '/eye.svg' alt = 'Show password' />
                                    </a> 
                                </div>
                            </div>
                            <div className = 'form__group__button' >
                                <button type = 'button' onClick = { sumbitForm } >
                                    <a> Se connecter </a>
                                    <img className = 'first_img' src = '/person.badge.plus.svg' alt='person' />
                                    <img className = 'second_img' src = '/arrow.right.circle.svg' alt='arrow right' />
                                </button> 
                            </div> 
                        </div> 
                    </form> 
                </div> 
            </div> 
        </div>
    );
}

export default LogIn;