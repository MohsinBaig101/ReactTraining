import React,{useEffect, useContext, useState} from 'react';
import {Context} from '../../../context/index'
import AdsComponent from '../Ads'
import {getAllAds,getLatestAds} from '../../../actions/index'
import SearchBarContainer from '../../shared/searchBar/container/SearchBarContainer'
import _ from 'lodash';


const AdsContainer = () => {
    const [state,dispatch] = useContext(Context);
    // const [ads,setAds]  = useState([]);
    // const [noRecord, setNoRecord] = useState(false)

    useEffect(() => {
        dispatch({type:'loader',payload:true})
        if(!_.isEmpty(state.country)){
            getDataWithPagination(1);
            // getLatestAds(1,{country_code : state.country.id}).then((res) => {
            //     dispatch({type:'ads',payload:res})
            //     if(!_.isEmpty(res.data)){
            //         dispatch({type:'no_record',payload:false})
            //     }else{
            //         dispatch({type:'no_record',payload:true})
            //     }
            //     dispatch({type:'loader',payload:false})
            // }).catch((err) => {
                
            // })
        }
    },[state.country]);
    const getDataWithPagination = async (num) => {
        
        dispatch({type:'loader',payload:true})
        try{
            const res = await getLatestAds(num,{country_code : state.country.id});
          
            dispatch({type:'ads',payload:res.data})
            dispatch({type:'loader',payload:false})
            if(!_.isEmpty(res.data.data)){
                dispatch({type:'no_record',payload:false})
            }else{
                dispatch({type:'no_record',payload:true})
            }
        }catch(err){
            dispatch({type:'no_record',payload:true})
            console.log('Failed Request')
        }
    }
    return ( 
        <>
           <AdsComponent 
            posts = {state.ads.data}
            meta = {state.ads.meta}
            loader = {state.loader}
            links = {state.ads.links}
            pagination = {getDataWithPagination}
            noRecord = {state.noRecord}
           />
        </>
    )
}
export default AdsContainer;