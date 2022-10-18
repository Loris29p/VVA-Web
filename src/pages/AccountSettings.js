import '../assets/styles/AccountSettings.scss';
import DelayLink from '../DelayLink';

function AccountSettings() {

    function fadeScreen() {
        const container = document.getElementById("container");
        container.classList.add("fade");
    }

    function sumbitForm() {
    }

    return (
        <div className="AccountSettings">
            <div className='container' id='container'>
                <div className='container_left'>
                    <form>
                        <div className = 'header' >
                            <div className = 'active'> <a> Modifier son compte </a></div>
                        </div> 
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
                <div className='container_right'>

                </div>
            </div>
        </div>
    )
}

export default AccountSettings