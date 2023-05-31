import '../assets/styles/SignUp.scss';
import { useNavigate } from "react-router-dom"
import DelayLink from '../DelayLink';
import { ToastContainer, toast } from 'react-toastify';
import '../assets/styles/toastify.css';

function SignUp() {
    const navigate = useNavigate()

    function changeTypePasswordInput() {
        const passwordInput = document.getElementById("password");
        const img = document.getElementById("img_show_password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            img.src = "/eye.slash.svg";
        } else {
            passwordInput.type = "password";
            img.src = "/eye.svg";
        }
    }

    function fadeScreen() {
        const SignUp__body = document.getElementById("SignUp__body");
        SignUp__body.classList.add("fade");
    }

    function sumbitForm() {
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const condition_utilisation = document.getElementById("condition_utilisation").checked;

        if (email === "" || password === "" || firstname === "" || lastname === "") {
            toast.error("Veuillez remplir tous les champs.");
        } else {
            if (condition_utilisation === true) {
                const register = window.classUsers.register(email, password, firstname, lastname);
                setTimeout(() => {
                    if (register.registered === true) {
                        navigate("/login");
                    } else if (register.error === true) {
                        toast.error(register.message);
                    }
                }, 100);
            } else {
                toast.error("Veuillez accepter les conditions d'utilisation.");
            }
        }
    }

    return (
        <div className='SignUp'>
            <div className='SignUp__body' id='SignUp__body'>
                <ToastContainer />
                <div className='header'>
                    <h1>Inscription</h1>
                    <h6>Ceci est la page d'inscription à VVA</h6>
                </div>
                <div className='form'>
                    <div className='header'>
                        <DelayLink delay={1000} to="/login" style={{ textDecoration: 'none' }}><div onClick={fadeScreen}><a>Se connecter</a></div></DelayLink>
                        <div className='active'><a>S'enregistrer</a></div>
                    </div>
                    <form>
                        <div className='form__group'>
                            <div className='form__group__input'>
                                <div className='form__group__input__names'>
                                    <div className='left'>
                                        <label htmlFor='firstname'>Prénom</label>
                                        <input type='text' name='firstname' id='firstname'  />
                                    </div>
                                    <div className='right'>
                                        <label htmlFor='lastname'>Nom</label>
                                        <input type='text' name='lastname' id='lastname' />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input type='email' name='email' id='email'  />
                                </div>

                                <div>
                                    <label htmlFor='password'>Mot de passe</label>
                                    <input type='password' name='password' id='password'  />
                                    <a id='show_password' onClick={changeTypePasswordInput}>
                                        <img className='img_show_password' id='img_show_password' src='/eye.svg' alt='Show password' />
                                    </a>
                                </div>
                            </div>

                            <div className='form__group__checkbox'>
                                <div>
                                    <div className='checkbox'>
                                        <input type="checkbox" id="condition_utilisation" name='condition_utilisation' required/>
                                        <label htmlFor="condition_utilisation"><div className="tick"></div></label>
                                    </div>
                                    <p>J’ai pris connaissance et j’accepte les termes des <DelayLink delay={0} to="/" style={{ textDecoration: 'none' }}><span>Conditions générales d’utilisation</span></DelayLink>.</p>
                                </div>
                            </div>

                            <div className='form__group__button'>
                                <button type = 'button' onClick = { sumbitForm }>
                                    <a>S'inscrire</a>
                                    <img className='first_img' src='/person.badge.plus.svg' />
                                    <img className='second_img' src='/arrow.right.circle.svg' />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;