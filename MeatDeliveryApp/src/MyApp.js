import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { initStateFromApi } from './store/invoiceSlice';
import StackNavigation from './navigation/StackNavigation';
//import Data from './services/Data.json';
import getDataFromServer from './services/services';

export default function MyApp() {
    const InvoicesStatus = useSelector((state) => state.invoices.status);
    const dispatch = useDispatch();
    useEffect( () => {
        async function GetData(){
            const data = await getDataFromServer()
            dispatch(initStateFromApi(data))
        }
        if(InvoicesStatus === 'waiting')
        {
            GetData()
        }
    },[]);
    return (
        <StackNavigation />
    );
}