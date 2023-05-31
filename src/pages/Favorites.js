import DelayLink from '../DelayLink';

const Favorites = () => {
    
    return (
        <div className='Favorites'>
            <div className="w-full h-full p-5 mt-10 shadow-lg rounded-xl border border-gray-50 border-solid flex flex-col">
                <h1 className='text-4xl font-SFProTextSemibold text-[#3D9090]'>Activités</h1>
                <h4 className='text-lg font-SFProTextRegular text-slate-500'>Vos activités favorites:</h4>

               {
                window.classUserActivities.getUserActivitiesByUserId(window.classUsers.getUserId()).map((userActivity, index) => (
                    <div className='w-full h-full shadow-lg p-5 mt-10 rounded-xl border border-gray-50 border-solid flex flex-row justify-between' key={index}>
                        <div className='flex flex-col'>
                            <h1 className='text-2xl font-SFProTextSemibold text-[#3D9090]'>{window.classActivities.getActivityById(userActivity.activityId).name}</h1>
                            <h4 className='text-lg font-SFProTextRegular text-slate-500'>Description: {window.classActivities.getActivityById(userActivity.activityId).description}</h4>
                            <h4 className='text-lg font-SFProTextRegular text-slate-500'>Durée: {window.classActivities.getActivityById(userActivity.activityId).duration}H</h4>
                            <h4 className='text-lg font-SFProTextRegular text-slate-500'>Date: {window.classActivities.getActivityById(userActivity.activityId).date}</h4>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className="text-black p-2 rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed"
                            onClick={() => {
                                window.classUserActivities.deleteUserActivity(userActivity.id);
                            }
                            }>Supprimer</button>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
    );
}

export default Favorites;