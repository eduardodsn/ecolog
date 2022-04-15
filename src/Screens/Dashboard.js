import React from 'react';
import DashboardInfo from '../Components/DashboardInfo';


export default function Dashboard({navigation, route}) {
    const token = route.params.token;
    
    return <>
        <DashboardInfo token={token}/>
    </>
}