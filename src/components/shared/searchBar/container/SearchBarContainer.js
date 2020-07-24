import React,{useState,useEffect,useContext} from 'react';
import SearchBar from '../index';
import { Grid
    } from "@material-ui/core";
import {getCity,Categories} from '../../../../actions/index'
import {Context} from '../../../../context/index';
import _ from 'lodash';

import {getLatestAds} from '../../../../actions/index';
 
const SearchBarContainer = (props) => {
    const [state,dispatch] = useContext(Context);
    const [cities,setCities] = useState();
    const [categories,setCategories] = useState();
    const [search,setSearch] = useState({
        city_id : '',
        category_id : '',
        title : '',
        country_code : state.country.id
    });

    useEffect(()=>{
        cityGet();
        setSearch({
            city_id : '',
            category_id : '',
            title : '',
            country_code : state.country.id
        })
    },[state.country])

    useEffect(()=>{
        /** We need to add categories in context store.
         */
        getCategories();
    },[])
    
    const cityGet = async () => {
        if(!_.isEmpty(state.country)){
            try{
                const res = await getCity(state.country.id)
                console.log(res)
                setCities(res.data.data);
            }catch(err){
                console.log('Failed to load the City')
            }
        }
    }

    const getCategories = async () => {
        try{
            const res = await Categories()
            setCategories(res.data.data);
        }catch(err){
            console.log('Failed to load the Category')
        }
    }
    const searchResult = async (num) => {
        
        dispatch({type:'loader',payload:true})
        dispatch({type:'no_record',payload:false})
        try{
            const res = await getLatestAds(1,search);
          
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
    

    const changeHandler = (e,key) => {
        setSearch({
            ...search,
            [key] : e.target.value
        })
    } 
   
    return (
        <>
         
            <SearchBar
                cities = {cities}
                categories = {categories}
                search = {search}
                searchResult = {searchResult}
                changeHandler = {changeHandler}
            />
        </>
    )
}
export default SearchBarContainer;