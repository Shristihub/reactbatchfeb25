function ActivityCard({activity}) {
    return ( 
     <>
        <h2>Name:{activity.activityName}</h2>
        <p>Goal: {activity.goal}</p>
        <p>Frequency: {activity.frequency}</p>
        <h3>count: {activity.count}</h3>
     </>


     );
}

export default ActivityCard;