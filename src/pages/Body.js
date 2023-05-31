import '../assets/styles/Body.scss';
import DelayLink from '../DelayLink';

function Body() {

    function fadeScreen() {
        const container = document.getElementById("container2");
        container.classList.add("fade");
    }

    function checkConnected() {
        if (window.classUsers.isLogged()) {
            const button_login = document.getElementById("button_login");
            if (button_login != null) {
                button_login.style.display = "none";
            }
            const button_activities = document.getElementById("button_activities");
            if (button_activities != null) {
                button_activities.style.display = "flex";
            }
        } else {
            const button_login = document.getElementById("button_login");
            if (button_login != null) {
                button_login.style.display = "flex";
            }
            const button_activities = document.getElementById("button_activities");
            if (button_activities != null) {
                button_activities.style.display = "none";
            }
        }
    }

    setInterval(checkConnected, 1000);

    return (
        <div className="Body">
            <div className='container' id='container2'>
                <div className='container_text'>
                    <div className='header'>
                        <h1>
                            Le moyen le plus simple de voyager
                        </h1>
                        <h4>
                            "J'aimerais pouvoir chaque jour me réjouir que le soleil se lève, scruter la nuit cousue d'étoiles et, pétri de gratitude, prendre place parmi les vivants, passer ma vie comme en vacances."
                        </h4>
                    </div>
                    <div className='cta'>
                        <DelayLink delay={1000} to="/discover" style={{ textDecoration: 'none' }}>
                            <span onClick={fadeScreen}>
                                <a href='#'>Commencez</a>
                            </span>
                        </DelayLink>
                    </div>
                </div>

                <div className='container_img' id='container_img'>
                    <div className='screen'>
                        <h3>Des loisirs ? <span>Vacances</span></h3>
                        <p>La meilleure condition de travail, c'est les vacances.</p>
                        <img src='/card_user.svg' alt='Card user' />
                        <div className='buttons' id='buttons'>
                            <DelayLink delay={1000} to="/login" id='button_login'>
                                <button className='button' onClick={fadeScreen}>
                                    <a href='#'>Se connecter</a>
                                    <img src='/arrow.right.circle.svg' />
                                </button>
                            </DelayLink>
                            <DelayLink delay={1000} to="/activity" id='button_activities' style={{display: 'none'}}>
                                <button className='button' onClick={fadeScreen}>
                                    <a href='#'>Activités</a>
                                    <img src='/arrow.right.circle.svg' />
                                </button>
                            </DelayLink>
                            <DelayLink delay={1000} to="/signup">
                                <button className='button2' id='register' onClick={fadeScreen}>
                                    <a href='#'>S'enregistrer</a>
                                    <img src='/arrow.right.circle.black.svg' />
                                </button>
                            </DelayLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;