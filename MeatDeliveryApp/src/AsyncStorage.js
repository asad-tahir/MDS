import AsyncStorage from '@react-native-async-storage/async-storage';
export const addShopToLocalStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
        console.log('value saved: '+ value.List)
    } catch (error) {
        // Error saving data
    }
};
export const getShops = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        //console.log('getData from asyncstorage: ' + jsonValue + '\n');
        if (jsonValue === null) {
            const data = {
                ShopsIdCount: 0,
                List: [
                ]
            }
            addShopToLocalStorage("SHOPS", data)
        }
        return jsonValue != null ? JSON.parse(jsonValue) : null;

    } catch (error) {
        // Error retrieving data
    }
};