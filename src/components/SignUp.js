import '../assets/styles/SignUp.scss';
import { Routes, Route, Link, useNavigate } from "react-router-dom"
import DelayLink from '../DelayLink';

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

    return (
        <div className='SignUp'>
            <div className='SignUp__body' id='SignUp__body'>
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
                                <div>
                                    <label for='email'>Email</label>
                                    <input type='text' name='email' id='email'  />
                                </div>

                                <div>
                                    <label for='password'>Mot de passe</label>
                                    <input type='password' name='password' id='password'  />
                                    <a id='show_password' onClick={changeTypePasswordInput}>
                                        <img className='img_show_password' id='img_show_password' src='/eye.svg' alt='Show password' />
                                    </a>
                                </div>
                            </div>

                            {/* <div className='form__group__checkbox'>
                                <div>
                                    <div className='checkbox'>
                                        <input type="checkbox" id="condition_utilisation" name='condition_utilisation' required/>
                                        <label for="condition_utilisation"><div className="tick"></div></label>
                                    </div>
                                    <p>I have read and agree to everything I have to for the risk I am accepting by checking this useless checkbox for your satisfaction. And for sure I did not read <Link to="/" style={{ textDecoration: 'none' }}><span>Terms of Use</span></Link></p>
                                </div>
                            </div> */}

                            <div className='form__group__button'>
                                <button type='button'>
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