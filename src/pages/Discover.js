import '../assets/styles/Discover.scss';
import DelayLink from '../DelayLink';

function Discover() {

    function fadeScreen() {
        const container = document.getElementById("container2");
        container.classList.add("fade");
    }

    function showParagraph() {
        const paragraphe = document.getElementById("paragraphe");
        const paragraphe2 = document.getElementById("paragraphe2");
        const img_change_view_paragraphe = document.getElementById("img_change_view_paragraphe");
        
        if (paragraphe.style.opacity === "0") {
            paragraphe.style.opacity = "1";
            paragraphe.style.visibility = "visible";
            paragraphe2.style.opacity = "0";
            paragraphe2.style.visibility = "hidden";
            paragraphe2.classList.remove("active");
            setTimeout(() => {
                paragraphe.classList.add("active");
            });
            img_change_view_paragraphe.classList.remove("top");
        } else {
            paragraphe2.style.opacity = "1";
            paragraphe2.style.visibility = "visible";
            setTimeout(() => {
                paragraphe2.classList.add("active");
            });
            if (paragraphe.classList.contains("active")) {
                paragraphe.classList.remove("active");
                setTimeout(() => {
                    paragraphe.style.opacity = "0";
                    paragraphe.style.visibility = "hidden";
                }, 1000);
            }
            img_change_view_paragraphe.classList.add("top");
        }
    }

    setTimeout(() => {
        const paragraphe = document.getElementById("paragraphe");
        paragraphe.style.opacity = "1";
        paragraphe.style.visibility = "visible";

        setTimeout(() => {
            paragraphe.classList.add("active");
        });
    }, 1000);

    return (
        <div className='Discover'>
            <div className='container' id='container2'>
                <div className='container_text'>
                    <div className='header'>
                        <h1>
                            Description de l'Association VVA
                        </h1>
                        <div className='paragraph__global'>
                            <div className='paragraphe' id='paragraphe'>
                                <p>
                                    L???association VVA (Village Vacances Alpes) g??re, en relation avec les collectivit??s territoriales propri??taires de villages de vacances, les sites qui lui sont confi??s.<br/> Ces <DelayLink delay={1000} to="/destinations" style={{ textDecoration: 'none' }}><span onClick={fadeScreen} id="span_sites"><a>sites</a></span></DelayLink> sont essentiellement situ??s dans les Alpes en haute, moyenne et basse montagne. Son d??veloppement est constant et VVA commence ?? d??velopper son activit?? sur les autres massifs fran??ais : les Pyr??n??es, les Vosges, le Jura et le Massif Central.
                                </p>
                                <p>
                                    L'association s'assure des bonnes pratiques des uns et des autres villages et travaille sur les moyens ?? mettre en ??uvre pour renforcer la pertinence des??villages dans l???offre touristique du territoire de montagne.
                                </p>
                                <p>
                                    L'association VVA est ??galement partenaire des labels ?? Famille Plus ?? et ?? Station Verte ?? ainsi que de ?? L???Association Nationale des Maires des Stations Class??es et des Communes Touristiques de montagne??.
                                </p>
                            </div>
                            <div className='paragraphe2' id='paragraphe2'>
                                <p>
                                    L'association VVA propose un tourisme plus humain, plus authentique, plus respectueux de la plan??te.<br/> Cette responsabilit?? sociale, ??conomique et ??cologique est dans l'ADN de la marque. Elle vient d'??tre traduite par une charte d'engagements.
                                </p>
                                <p>
                                    L'objectif de l'association est de constituer dans chaque village une ??quipe comp??tente et accueillante qui permette de passer des vacances en toute s??r??nit??, d'??tre attentif aux demandes des clients d??s le premier contact, puis tout au long du s??jour et de garantir un accueil chaleureux et personnalis??.????
                                </p>
                                <p>
                                    L'association VVA propose d'offrir au quotidien et ?? tous les niveaux une excellente qualit?? de service, d'offrir des moments de rencontre et d?????change entre les vacanciers et de mesurer chaque ann??e la satisfaction des clients pour am??liorer ses prestations.
                                </p>
                            </div>
                        </div>
                        <img onClick={showParagraph} className='img_change_view_paragraphe' id='img_change_view_paragraphe' src='/arrow.down.square.svg' alt='arrow down' />
                    </div>
                </div>

                <div className='container_img' id='container_img'>
                    <div className='screen'>
                        <p>"La montagne nous offre le d??cor ... A nous d'inventer l'histoire qui va avec !"</p>
                        <img src='/card1.svg' alt='Card user' />
                        <div className='buttons'>
                            <DelayLink delay={1000} to="/login">
                                <button className='button' onClick={fadeScreen}>
                                    <a href='#'>Se connecter</a>
                                    <img src='/arrow.right.circle.svg' />
                                </button>
                            </DelayLink>
                            <DelayLink delay={1000} to="/signup">
                                <button className='button2' onClick={fadeScreen}>
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

export default Discover;