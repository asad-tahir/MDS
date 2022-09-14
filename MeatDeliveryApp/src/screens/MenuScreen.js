import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MenuScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Shops')} style={{backgroundColor:'#fff', marginHorizontal:5, padding: 10, marginBottom:1,}}>
                <Text style={{fontWeight: '500', fontSize: 20}}>Shops</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Items')} style={{backgroundColor:'#fff', marginHorizontal:5, padding: 10, marginBottom:1,}}>
                <Text style={{fontWeight: '500', fontSize: 20}}>Items</Text>
            </TouchableOpacity>
        </View>
    );
}