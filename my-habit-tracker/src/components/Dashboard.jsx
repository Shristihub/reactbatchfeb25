import { useState } from "react";
import ActivityCard from "./ActivityCard";

function Dashboard({activityList}) {
    const [activities,setActivities] = useState(activityList);

   const handleIncrement = (id)=>{
    setActivities(preActivities=>{
        preActivities.map(activity=>activity.id==id?{...activity,count:activity.count+1}:activity)
    })
   }
   const handleDecrement = (id)=>{
    setActivities(preActivities=>{
        preActivities.map(activity=>activity.id==id?{...activity,count:activity.count-1}:activity)
    })
   }
     const handleReset =(id)=>{
        setActivities(pre=>
            pre.map(activity=> activity.id===id?{...activity, count:0}:activity ))
      }     
    return ( 
        <div className="dashboard">
            {activityList.map((myactivity,index)=>
             <ActivityCard activity={myactivity} key={index}
                    onIncrement={()=>handleIncrement(myactivity.id)}
                    
             />
            )}

        </div>
     );
    }

export default Dashboard;