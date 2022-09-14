import React from "react";
import {View, Text, } from "react-native";
import AddEditInvoice from "../../components/AddEditInvoice";
//Later make one new for view invoice
export default function AddInvoiceScreen({navigation, id = 0}){
    //IF id !== 0 thn search for already existing invoice and update it in redux state
    return(
        <AddEditInvoice /> 
    );
}