import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ModuleList from "./ModuleList";
import {useDispatch, useSelector} from "react-redux";
import {selectModulesByUserId} from "../store/selectors";
import {fetchUserModules} from "../store/allUsersSlice";

const SelectedUserModuleList = () => {
        const params = useParams()
        const modules = useSelector((state) => selectModulesByUserId(state, { userId:params.id }));
        const dispatch = useDispatch()

    if(!modules){
        dispatch(fetchUserModules(params.id))
    }




    return <ModuleList modules={modules}/>

};

export default SelectedUserModuleList;