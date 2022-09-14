import React from "react";
import { View, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
// Add Map for drivers
export default function AddShop({addShop}) {
    const [text, onChangeText] = React.useState("");
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    const getCurrentDate = ()=>{

        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
  
        //Alert.alert(date + '-' + month + '-' + year);
        // You can turn it in to your desired format
        return date + '/' + month + '/' + year;//format: dd-mm-yyyy;
  }

    React.useEffect(() => {
        (async () => {
            console.log('getting location');
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let status = 'Waiting..';
    if (errorMsg) {
        status = errorMsg;
    } else if (location) {
        status = JSON.stringify(location);
    }
    return (
        <View style={{ backgroundColor: '#fff', marginHorizontal: 5, padding: 10, marginBottom: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
                style={{
                    height: 30,
                    borderWidth: 1,
                    flex: 6,
                    padding: 5
                }}
                onChangeText={onChangeText}
                value={text}
            />
            <TouchableOpacity onPress={()=>{addShop(JSON.stringify(location), text, getCurrentDate()); onChangeText("")}} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Ionicons name="ios-add-circle" size={28} color="#121212" /></TouchableOpacity>
        </View>
    );
}