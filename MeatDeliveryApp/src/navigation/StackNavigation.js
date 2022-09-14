import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "../screens/MainScreen";
import MenuScreen from "../screens/MenuScreen";
import { Ionicons } from '@expo/vector-icons';
import ShopsScreen from "../screens/ShopsScreen";
import ItemsScreen from "../screens/ItemsScreen";
import AddInvoiceScreen from '../screens/InvoiceScreen/AddEditInvoiceScreen'
import PrintInvoice from '../utils/PrintInvoice';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="AddInvoice" screenOptions={{
            headerStyle: {
                backgroundColor: '#121212',
            },
            headerTintColor: '#fff',
        }}>
            <Stack.Screen name="Home" component={MainScreen} options={({ navigation }) => ({
                headerTitle: 'HOME',
                headerRight: () => (
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('AddInvoice')}>
                            {/* <Ionicons name="ios-settings" size={24} color="black" /> */}
                            <Ionicons name="ios-add-circle" size={35} color="#fff" />
                        </TouchableOpacity>
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginHorizontal: 5 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <Ionicons name="ios-menu" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                ),
            })}/>
            <Stack.Screen name="Menu" component={MenuScreen} />
            <Stack.Screen name="Shops" component={ShopsScreen} />
            <Stack.Screen name="Items" component={ItemsScreen} />
            <Stack.Screen name="AddInvoice" component={AddInvoiceScreen} options={{title:'Add Invoice'}} />
            <Stack.Screen name="PrintInvoice" component={PrintInvoice} options={{title:'Print Invoice'}} />
            {/* 
                StackMainScreen 
                ADD/edit/view ITEM headerRight button for home
                ADD/eidt/view Shop headerRight button for home
                View Invoice
                New Invoice (add item) headerRight button for home 
            */}
        </Stack.Navigator>
    );
}