function ActivityCard({activity,onIncrement}) {
    return ( 
     <>
        <h2>Name:{activity.activityName}</h2>
        <p>Goal: {activity.goal}</p>
        <p>Frequency: {activity.frequency}</p>
        <p>count: {activity.count}</p>
        <button onClick={()=>onIncrement(activity.id)}>+</button>
        <button onClick={()=>alert('decrement')}>-</button>
        <button onClick={()=>alert('reset')}>*</button>
     </>


     );
}

export default ActivityCard;