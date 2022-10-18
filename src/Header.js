import './Header.scss';
import { Routes, Route, Link } from "react-router-dom"
import DelayLink from './DelayLink';

function Header() {
    var canDropDownClicked = true;
    
    function fadeElement(id) {
        const element = document.getElementById(id);
        element.classList.add("fade");

        setTimeout(() => {
            element.classList.remove("fade");
        }, 1000);
    }

    function checkUser() {
        const role_user = JSON.parse(localStorage.getItem("user")).id_role;
        if (localStorage.getItem("isLogged") === "true") {
            const account = document.getElementById("account_li");
            account.style.display = "block";
        } else {
            const account = document.getElementById("account_li");
            const dropDownAccount = document.getElementById("dropDownAccount");
            if (account != null) {
                account.style.display = "none";
            }
            if (dropDownAccount != null) {
                dropDownAccount.style.display = "none";
            }
        }

        if (role_user == 2) {
            const admin = document.getElementById("admin_span");
            admin.style.display = "block";
        }

        const signed_as_in_span = document.getElementById("signed_as_in_span");
        if (signed_as_in_span.innerHTML !== JSON.parse(localStorage.getItem("user")).firstname + " " + JSON.parse(localStorage.getItem("user")).lastname) {
            signed_as_in_span.innerHTML = JSON.parse(localStorage.getItem("user")).firstname + " " + JSON.parse(localStorage.getItem("user")).lastname;
        }
    }

    setInterval(checkUser, 1000);

    function showDropDownAccount() {
        const dropDownAccount = document.getElementById("dropDownAccount");
        if (canDropDownClicked === true) {
            if (dropDownAccount.style.display === "flex") {
                canDropDownClicked = false;
                const dropDownAccount__body = document.getElementById("dropDownAccount__body");
                dropDownAccount__body.classList.add("small");
                setTimeout(() => {
                    dropDownAccount__body.classList.remove("small");
                    dropDownAccount.style.display = "none";
                    canDropDownClicked = true;
                }, 1000);
            } else {
                canDropDownClicked = false;
                dropDownAccount.style.display = "flex";
                const dropDownAccount__body = document.getElementById("dropDownAccount__body");
                dropDownAccount__body.classList.add("small");
                setTimeout(() => {
                    canDropDownClicked = true;
                    dropDownAccount__body.classList.remove("small");
                });
            }
        }
    }

    function logout() {
        const account = document.getElementById("account_li");
        const dropDownAccount = document.getElementById("dropDownAccount");
        if (dropDownAccount != null) {
            const dropDownAccount__body = document.getElementById("dropDownAccount__body");
            dropDownAccount__body.classList.add("small");
            setTimeout(() => {
                dropDownAccount__body.classList.remove("small");
                dropDownAccount.style.display = "none";
            }, 1000);
        }
        setTimeout(() => {
            const dropDownAccount__body = document.getElementById("dropDownAccount__body");
            dropDownAccount__body.classList.add("small");
            setTimeout(() => {
                dropDownAccount__body.classList.remove("small");
                dropDownAccount.style.display = "none";
            }, 1000);
        }, 1000);

        if (account != null) {
            setTimeout(() => {
                fadeElement("account_li")
                setTimeout(() => {
                    account.style.display = "none";

                    setTimeout(() => {
                        localStorage.setItem("isLogged", "false");
                        localStorage.setItem("user", JSON.stringify({}));
                        checkUser();
                    });
                }, 1000);
            }, 1000);
        }
    }

    window.onclick = function (event) {
        const dropDownAccount__body = document.getElementById("dropDownAccount__body");
        const account_li = document.getElementById("account_li");
        if (!dropDownAccount__body.contains(event.target) && !account_li.contains(event.target)) {
            const dropDownAccount = document.getElementById("dropDownAccount");
            if (dropDownAccount != null) {
                if (dropDownAccount.style.display === "flex") {
                    canDropDownClicked = false;
                    const dropDownAccount__body = document.getElementById("dropDownAccount__body");
                    dropDownAccount__body.classList.add("small");
                    setTimeout(() => {
                        dropDownAccount__body.classList.remove("small");
                        dropDownAccount.style.display = "none";
                        canDropDownClicked = true;
                    }, 1000);
                }
            }
        }
    }

    return (
        <div className="Header">
            <div className='header'>
                <DelayLink delay={500} to="/" style={{ textDecoration: 'none' }}><li id='logo' onClick={event => fadeElement('logo')}><a>V<span>illage</span>V<span>acances</span>A<span>lpes</span></a></li></DelayLink>
                <ul>
                    <DelayLink delay={500} to="/discover" style={{ textDecoration: 'none' }}><li id='discover' onClick={event => fadeElement('discover')}><a>Découvrir VVA</a></li></DelayLink>
                    <DelayLink delay={500} to="/destination" style={{ textDecoration: 'none' }}><li id='destination' onClick={event => fadeElement('destination')}><a>Destination</a></li></DelayLink>
                    <li className='account_li' id='account_li' style={{display: 'none'}} onClick={showDropDownAccount}>
                        <a>Mon compte</a>
                        <img src='/arrow.right.circle.black.svg' alt='arrow-down' />
                    </li>
                </ul>
            </div>
            <div className='dropDownAccount' id='dropDownAccount'>
                <div className='dropDownAccount__body' id='dropDownAccount__body'>
                    <div className='dropDownAccount__body__header'>
                        <a>Connecté avec: <br/> <span id='signed_as_in_span'></span></a>
                    </div>
                    <div className='dropDownAccount__body__content'>
                        <span>
                            <img src='/star.svg' alt='star' />
                            <a>Vos favoris</a>
                            <img src='/arrow.right.circle.black.svg' />
                        </span>
                        <span>
                            <img src='/gear.svg' alt='star' />
                            <a>Paramètres</a>
                            <img src='/arrow.right.circle.black.svg' />
                        </span>
                        <span id='admin_span' style={{display: 'none'}}>
                            <img src='/xmark.seal.svg' alt='star' />
                            <a>Admin</a>
                            <img src='/arrow.right.circle.black.svg' />
                        </span>
                    </div>
                    <div className='dropDownAccount__body__footer'>
                        <span onClick={logout}>
                            <img src='/rectangle.portrait.and.arrow.forward.svg' alt='star' />
                            <a>Se déconnecter</a>
                            <img src='/arrow.right.circle.black.svg' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;