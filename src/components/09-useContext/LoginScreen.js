import React , {useContext}from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {user,setUser} = useContext(UserContext);
    return <div>
    <h1>LoginScreen</h1>
    <hr/>
    <button className='btn btn-primary' onClick={()=>setUser({id:1,name:'camilo'})} > Login</button>
</div>
};
