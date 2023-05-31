import DelayLink from '../DelayLink';

const Activity = () => {
    
    return (
        <div className='Activity'>
            <div className="w-full h-full p-5 mt-10 shadow-lg rounded-xl border border-gray-50 border-solid flex flex-col">
                <h1 className='text-4xl font-SFProTextSemibold text-[#3D9090]'>Activités</h1>
                <h4 className='text-lg font-SFProTextRegular text-slate-500'>Activités disponibles dans votre village favoris: <a className='text-xl font-bold'>{
                    window.classUsers.getSiteName()
                }</a></h4>

                {
                    window.classActivities.getActivitiesBySite(window.classUsers.getSiteId()).map((activity, index) => (
                        <div className='w-full h-full shadow-lg p-5 mt-10 rounded-xl border border-gray-50 border-solid flex flex-row justify-between' key={index}>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl font-SFProTextSemibold text-[#3D9090]'>{activity.name}</h1>
                                <h4 className='text-lg font-SFProTextRegular text-slate-500'>Description: {activity.description}</h4>
                                <h4 className='text-lg font-SFProTextRegular text-slate-500'>Durée: {activity.duration}H</h4>
                                <h4 className='text-lg font-SFProTextRegular text-slate-500'>Date: {activity.date}</h4>
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <button className="text-black p-2 rounded-md border border-[#3D9090] font-SFProRoundedRegular text-lg hover:border-dashed"
                                onClick={() => {
                                    window.classUserActivities.addUserActivity(window.classUsers.getUserId(), parseInt(activity.id));
                                }}
                                >Participer</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Activity;