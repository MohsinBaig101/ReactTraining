import React,{useContext, useEffect} from 'react'
import ProfileComponent from '../index'
import {Context} from '../../../context/index';
import {getAuthUser} from '../../../actions/index';
import _ from 'lodash'
const ProfileContainer = () => {
    const [state,dispatch] = useContext(Context)
    
    useEffect(() => {
        if(_.isEmpty(state.authUser)){
            user();
        }
    },[])
    const user = async () => {
        try{
            const res = await getAuthUser();
            dispatch({type:'authUser',payload:res.data})
        }catch(err){
            console.log('Failed to load Authnticate User')
        }
    }
    return (
        <>
            <ProfileComponent
            auth = {state.authUser}
            />
        </>
    )
}
export default ProfileContainer;