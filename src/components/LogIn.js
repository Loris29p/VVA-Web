import '../assets/styles/LogIn.scss';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
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
        fetch('http://localhost:8888/api/receive_react.php', {
                method: 'POST',
                body: JSON.stringify({
                    secretWord: "43Hjsdq0",
                    type: "SELECT",
                    request: "SELECT * FROM users WHERE email='" + document.getElementById("email").value + "'"
                })
            }).then(function(response) {
                if (response.status >= 200 && response.status < 300) {
                    return response.text()
                }
                throw new Error(response.statusText)
            })
            .then(function(response) {
                const responseJson = JSON.parse(response);

                if (responseJson.error === true) {
                    toast.error("Impossible de trouver votre compte.", {
                        autoClose: 5000,
                        closeOnClick: true,
                        progress: undefined,
                        icon: true,
                    });
                } else {
                    if (responseJson.data != null && responseJson.data != "") {
                        if (responseJson.data[0].password === document.getElementById("password").value) {
                            localStorage.setItem("user", JSON.stringify(responseJson.data[0]));
                            localStorage.setItem("isLogged", "true");
                            fadeScreen();
                            setTimeout(() => {
                                navigate("/");
                            }, 1000);
                        } else {
                            toast.error("Mot de passe incorrect. Réessayez ou cliquez sur 'Mot de passe oublié' pour le réinitialiser.", {
                                autoClose: 5000,
                                closeOnClick: true,
                                progress: undefined,
                                icon: true,
                            });
                        }
                    } else {
                        toast.error("Impossible de trouver votre compte.", {
                            autoClose: 5000,
                            closeOnClick: true,
                            progress: undefined,
                            icon: true,
                        });
                    }
                }
            })
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
                                    <input type = 'text' name = 'email' id = 'email' />
                                </div>
                                <div>
                                    <label htmlFor = 'password' > Mot de passe </label> 
                                    <input type = 'password' name = 'password' id = 'password' />
                                    <a id = 'show_password' onClick = { changeTypePasswordInput } >
                                        <img className = 'img_show_password' id = 'img_show_password' src = '/eye.svg' alt = 'Show password' />
                                    </a> 
                                </div>
                            </div>
                            <div className = 'form__group__button' >
                                <button type = 'button' onClick = { sumbitForm } >
                                    <a> Se connecter </a>
                                    <img className = 'first_img' src = '/person.badge.plus.svg' />
                                    <img className = 'second_img' src = '/arrow.right.circle.svg' />
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