import React from "react";
import {View, Text, } from "react-native";
//Later make one new for view invoice
export default function ViewInvoiceScreen({navigation,id = 0}){
    return(
        id === 0 ? <View><Text>Add Invoice Screen!</Text></View> : <></>
    );
}