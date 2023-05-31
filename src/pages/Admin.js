import '../assets/styles/Admin.scss';
import DelayLink from '../DelayLink';
import { ToastContainer, toast } from 'react-toastify';

function Admin() {

    function create_site() {
        const site_name = document.getElementById("site_name").value;
        window.classSites.createSite(site_name);
    }

    function create_animation() {
        const animation_name = document.getElementById("animation_name").value;
        const animation_description = document.getElementById("animation_description").value;
        window.classAnimations.createAnimation({name: animation_name, description: animation_description});
    }

    function create_type() {
        const type_name = document.getElementById("type_name").value;
        window.classTypes.createType(type_name);
    }

    function create_activity() {
        const village = document.getElementById("activity_village").value;
        const animation = document.getElementById("activity_animation").value;
        const type = document.getElementById("activity_type").value;
        const activity_name = document.getElementById("activity_name").value;
        const activity_description = document.getElementById("activity_description").value;
        const activity_date = document.getElementById("activity_date").value;
        const activity_start = document.getElementById("activity_start").value;
        const activity_duration = document.getElementById("activity_duration").value;
        const activity_max_participants = document.getElementById("activity_max_participants").value;
        const users = [];

        window.classActivities.createActivity({
            id_site: village,
            id_animation: animation,
            id_type: type,
            name: activity_name,
            description: activity_description,
            date: activity_date,
            users: JSON.stringify(users),
            hours: activity_start,
            duration: activity_duration,
            max_users: activity_max_participants
        });
    }

    return (
        <div>
            <ToastContainer />

            <div className="w-full h-full p-5 mt-10 shadow-lg drop-shadow rounded-xl border border-gray-50 border-solid flex flex-col">
                <h1 className='text-4xl font-SFProTextSemibold text-[#3D9090]'>Administration</h1>
                <h4 className='text-xl font-SFProTextRegular text-slate-500 decoration-wavy underline'>Création:</h4>
                
                <div className='flex flex-col gap-7 mt-8 w-full'>
                    <div className='flex flex-col gap-2'>
                        <h1>Créer un <a className='text-[#3D9090]'>village</a></h1>
                        <div className='flex flex-row gap-5 w-full h-14 max-h-14'>
                            <input type="text" placeholder='Nom du site' name="site_name" id="site_name" className="block w-[70%] px-3 py-2 h-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            <button onClick={create_site} className="text-black p-2 rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed">Créer le site</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1>Créer une <a className='text-[#3D9090]'>animation</a></h1>
                        <div className='flex flex-row gap-5 w-full h-14 max-h-14'>
                            <input type="text" placeholder="Nom de l'animation" name="animation_name" id="animation_name" className="block w-[70%] px-3 py-2 h-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            <button onClick={create_animation} className="text-black p-2 rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed">Créer l'animation</button>
                        </div>
                    </div>
                    
                    <div className='flex flex-col gap-2'>
                        <h1>Créer un <a className='text-[#3D9090]'>type d'animation</a></h1>
                        <div className='flex flex-row gap-5 w-full h-14 max-h-14'>
                            <input type="text" placeholder="Nom du type" name="type_name" id="type_name" className="block w-[70%] px-3 py-2 h-full bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                            "/>
                            <button onClick={create_type} className="text-black p-2 rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed">Créer le type</button>
                        </div>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h1>Créer une <a className='text-[#3D9090]'>activitée</a></h1>
                        <div className='flex flex-col gap-2 w-full h-auto'>
                            <div className='flex flex-row gap-5 w-full'>
                                <select name="activity_village" id="activity_village" className="block appearance-none w-[20%] px-3 h-8 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]">
                                    <option value=''>Sélectionner un village</option>
                                    {
                                        window.classSites.getSites().map((village, index) => {
                                            return (
                                                <option value={village.getId()}>{village.getName()}</option>
                                            );
                                        }
                                    )}
                                </select>
                                <select name="activity_animation" id="activity_animation" className="block appearance-none w-[20%] px-3 h-8 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]">
                                    <option value=''>Sélectionner une animation</option>
                                    {
                                        window.classAnimations.getAnimations().map((village, index) => {
                                            return (
                                                <option value={village.getId()}>{village.getName()}</option>
                                            );
                                        }
                                    )}
                                </select>
                                <select name="activity_type" id="activity_type" className="block appearance-none w-[20%] px-3 h-8 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]">
                                    <option value=''>Sélectionner un type</option>
                                    {
                                        window.classTypes.getTypes().map((village, index) => {
                                            return (
                                                <option value={village.getId()}>{village.getName()}</option>
                                            );
                                        }
                                    )}
                                </select>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <input type="text" placeholder="Nom de l'activitée" name="activity_name" id="activity_name" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                                <input type="text" placeholder="Description de l'activitée" name="activity_description" id="activity_description" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                                <input type="text" placeholder="Durée de l'activitée" name="activity_duration" id="activity_duration" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                            </div>

                            <div className='flex flex-row gap-5'>
                                <input type="time" placeholder="Début de l'activitée" name="activity_start" id="activity_start" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                                <input type="date" placeholder="Date de l'activitée" name="activity_date" id="activity_date" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                                <input type="text" placeholder="Maximum de participants" name="activity_max_participants" id="activity_max_participants" className="block w-[20%] px-3 py-2 h-10 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-[#3D9090] focus:ring-1 focus:ring-[#3D9090]
                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                invalid:border-pink-500 invalid:text-pink-600
                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                                "/>
                                <button onClick={create_activity} className="text-black h-10 pr-2 pl-2 items-center rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed">Créer l'activité</button>
                            </div>
                        </div>
                    </div>

                    <h4 className='text-xl font-SFProTextRegular text-slate-500 decoration-wavy underline'>Visualisation:</h4>
                    
                    <div className='w-full flex flex-col gap-2'>
                        <h2 className=''>Liste des <a className='text-[#3D9090]'>villages</a>:</h2>  
                        <table className='table-auto w-full border-separate border-spacing-2 border p-1 shadow-md rounded-md'>
                            <thead>
                                <tr className='text-left font-SFProTextRegular antialiased font-thin text-md text-[#3D9090]'>
                                    <th className='border-b border-slate-300/50'>Nom</th>
                                    <th className='border-b border-slate-300/50'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    window.classSites.getSites().map((village, index) => {
                                        return (
                                            <tr>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{village.getName()}</td>
                                                <td className='flex flex-row gap-2'>
                                                    <button className='h-7 w-7 bg-trashsquare bg-contain bg-no-repeat' onClick={() => window.classSites.deleteSite(village.getId())}></button>
                                                    <button className='h-7 w-7 bg-squareandpencil bg-contain bg-no-repeat' onClick={() => window.classSites.editSite(village.getId())}></button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <h2 className=''>Liste des <a className='text-[#3D9090]'>animations</a>:</h2>  
                        <table className='table-auto w-full border-separate border-spacing-2 border p-1 shadow-md rounded-md'>
                            <thead>
                                <tr className='text-left font-SFProTextRegular antialiased font-thin text-md text-[#3D9090]'>
                                    <th className='border-b border-slate-300/50'>Nom</th>
                                    <th className='border-b border-slate-300/50'>Description</th>
                                    <th className='border-b border-slate-300/50'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    window.classAnimations.getAnimations().map((animation, index) => {
                                        return (
                                            <tr>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{animation.getName()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{animation.getDescription()}</td>
                                                <td className='flex flex-row gap-2'>
                                                    <button className='h-7 w-7 bg-trashsquare bg-contain bg-no-repeat' onClick={() => window.classAnimations.deleteAnimation(animation.getId())}></button>
                                                    <button className='h-7 w-7 bg-squareandpencil bg-contain bg-no-repeat' onClick={() => window.classAnimations.editAnimation(animation.getId())}></button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <h2 className=''>Liste des <a className='text-[#3D9090]'>types</a>:</h2>
                        <table className='table-auto w-full border-separate border-spacing-2 border p-1 shadow-md rounded-md'>
                            <thead>
                                <tr className='text-left font-SFProTextRegular antialiased font-thin text-md text-[#3D9090]'>
                                    <th className='border-b border-slate-300/50'>Nom</th>
                                    <th className='border-b border-slate-300/50'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    window.classTypes.getTypes().map((type, index) => {
                                        return (
                                            <tr>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{type.getName()}</td>
                                                <td className='flex flex-row gap-2'>
                                                    <button className='h-7 w-7 bg-trashsquare bg-contain bg-no-repeat' onClick={() => window.classTypes.deleteType(type.getId())}></button>
                                                    <button className='h-7 w-7 bg-squareandpencil bg-contain bg-no-repeat' onClick={() => window.classTypes.editType(type.getId())}></button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <h2 className=''>Liste des <a className='text-[#3D9090]'>activités</a>:</h2>
                        <table className='table-auto w-full border-separate border-spacing-2 border p-1 shadow-md rounded-md'>
                            <thead>
                                <tr className='text-left font-SFProTextRegular antialiased font-thin text-md text-[#3D9090]'>
                                    <th className='border-b border-slate-300/50'>Nom</th>
                                    <th className='border-b border-slate-300/50'>Description</th>
                                    <th className='border-b border-slate-300/50'>Durée</th>
                                    <th className='border-b border-slate-300/50'>Heure</th>
                                    <th className='border-b border-slate-300/50'>Date</th>
                                    <th className='border-b border-slate-300/50'>Maximum de participants</th>
                                    <th className='border-b border-slate-300/50'>Village</th>
                                    <th className='border-b border-slate-300/50'>Animation</th>
                                    <th className='border-b border-slate-300/50'>Type</th>
                                    <th className='border-b border-slate-300/50'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    window.classActivities.getActivities().map((activity, index) => {
                                        return (
                                            <tr>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getName()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getDescription()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getDuration()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getHours()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getDate()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getMaxUsers()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getSite().getName()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getAnimation().getName()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{activity.getType().getName()}</td>
                                                <td className='flex flex-row gap-2'>
                                                    <button className='h-7 w-7 bg-trashsquare bg-contain bg-no-repeat' onClick={() => window.classActivities.deleteActivity(activity.getId())}></button>
                                                    <button className='h-7 w-7 bg-squareandpencil bg-contain bg-no-repeat' onClick={() => window.classActivities.editActivity(activity.getId())}></button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className='w-full flex flex-col gap-2'>
                        <h2 className=''>Liste des <a className='text-[#3D9090]'>utilisateurs</a>:</h2>
                        <table className='table-auto w-full border-separate border-spacing-2 border p-1 shadow-md rounded-md'>
                            <thead>
                                <tr className='text-left font-SFProTextRegular antialiased font-thin text-md text-[#3D9090]'>
                                    <th className='border-b border-slate-300/50'>Nom</th>
                                    <th className='border-b border-slate-300/50'>Prénom</th>
                                    <th className='border-b border-slate-300/50'>Email</th>
                                    <th className='border-b border-slate-300/50'>Village favoris</th>
                                    <th className='border-b border-slate-300/50'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    window.classUsers.getUsers().map((user, index) => {
                                        return (
                                            <tr>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{user.getLastname()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{user.getFirstname()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{user.getEmail()}</td>
                                                <td className='border-b border-slate-300/50 text-slate-400'>{user.getSite().getName()}</td>
                                                <td className='flex flex-row gap-2'>
                                                    <button className='h-7 w-7 bg-trashsquare bg-contain bg-no-repeat' onClick={() => window.classUsers.deleteUser(user.getId())}></button>
                                                    <button className='h-7 w-7 bg-squareandpencil bg-contain bg-no-repeat' onClick={() => window.classUsers.editUser(user.getId())}></button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;