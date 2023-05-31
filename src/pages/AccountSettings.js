import '../assets/styles/AccountSettings.scss';
import DelayLink from '../DelayLink';
import { ToastContainer, toast } from 'react-toastify';

function AccountSettings() {
    function getAllVillages() {
        return window.classSites.getSites();
    }

    function fadeScreen() {
        const container = document.getElementById("container");
        container.classList.add("fade");
    }

    function submitForm() {
        const email = document.getElementById("email").value;
        const firstname = document.getElementById("firstname").value;
        const lastname = document.getElementById("lastname").value;

        if (email !== "") {
            const changeEmail = window.classUser.changeEmail(email);
            setTimeout(() => {
                if (changeEmail.changed === true) {
                    fadeScreen();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else if (changeEmail.error === true) {
                    toast.error(changeEmail.message);
                }
            }, 100);
        }
        
        if (firstname !== "") {
            const changeFirstname = window.classUser.changeFirstname(firstname);
            setTimeout(() => {
                if (changeFirstname.changed === true) {
                    // fadeScreen();
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 1000);
                } else if (changeFirstname.error === true) {
                    toast.error(changeFirstname.message);
                }
            }, 100);
        }

        if (lastname !== "") {
            const changeLastname = window.classUser.changeLastname(lastname);
            setTimeout(() => {
                if (changeLastname.changed === true) {
                    fadeScreen();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                } else if (changeLastname.error === true) {
                    toast.error(changeLastname.message);
                }
            }, 100);
        }
    }
    
    setInterval(() => {
        const firstname_input = document.getElementById("firstname");
        const lastname_input = document.getElementById("lastname");
        const email_input = document.getElementById("email");

        if (firstname_input !== null && lastname_input !== null && email_input !== null) {
            if (firstname_input.placeholder !== JSON.parse(localStorage.getItem("user")).firstname) {
                firstname_input.placeholder = JSON.parse(localStorage.getItem("user")).firstname;
            }
            if (lastname_input.placeholder !== JSON.parse(localStorage.getItem("user")).lastname) {
                lastname_input.placeholder = JSON.parse(localStorage.getItem("user")).lastname;
            }
            if (email_input.placeholder !== JSON.parse(localStorage.getItem("user")).email) {
                email_input.placeholder = JSON.parse(localStorage.getItem("user")).email;
            }
        }
    }, 1500);

    return (
        <div className="AccountSettings">
            <div className='container' id='container' onLoad={getAllVillages}>
                <div className='container_top' id='container_top'>
                    <h1>Paramètres</h1>
                    <button onClick={submitForm} type = 'button'>
                        <a> Confirmer </a>
                        <img className = 'first_img' src = '/person.crop.circle.fill.badge.checkmark.svg' alt='person' />
                        <img className = 'second_img' src = '/arrow.right.circle.svg' alt='arrow right' />
                    </button> 
                </div>
                <div className='container_center'>
                    <div className='container_center__left'>
                        <h3>Informations personnelles</h3>
                        <p>Saisissez les informations ci-dessous pour modifier votre compte.</p>
                        <br />

                        <h5>Email</h5>
                        <input type = 'email' name = 'email' id = 'email'/>
                        <br />
                        <h5>Nom et prénom</h5>
                        <div className='input_full_name'>
                            <input placeholder='Nom' type='text' name='firstname' id='firstname'/>
                            <input placeholder='Prénom' type='text' name='lastname' id='lastname'/>
                        </div>
                    </div>
                    <div className='container_center__right'>
                        <select>
                            <option value=''>Select a village</option>
                            {
                                getAllVillages().map((village, index) => {
                                    return (
                                        <option key={index} value={village.id}>{village.name}</option>
                                    )
                                }
                            )}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSettings