import React from "react";
import { View, Text, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import AddShop from "../components/AddShop";
import { getShops,addShopToLocalStorage } from "../AsyncStorage";

const Shop = ({ name, date }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: '#fff', marginHorizontal: 5, padding: 10, marginBottom: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: '500', fontSize: 20 }}>{name}</Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>Date-Created: {date}</Text>
        </TouchableOpacity>
    )
}

export default function ShopsScreen({ navigation }) {

    const [shops, setShops] = React.useState([]);
    const [shopsCount, setShopsCount] = React.useState(0);
    
    React.useEffect(()=>{
        const shopsFromLocalStorage = async() => {
            const _shops = await getShops("SHOPS")
            setShops(_shops.List)
            setShopsCount(_shops.ShopsIdCount);
        }
        shopsFromLocalStorage();
    },[]);

    async function addShop(location, name, date){
        const shop = {
            Id: shopsCount,
            Name: name,
            DateCreated: date,
            Location: location
        }
        addShopToLocalStorage("SHOPS", {
            ShopsIdCount: shopsCount+1,
            List: [...shops, shop]
        })
        await setShopsCount(shopsCount+1);
        
        await setShops([...shops, shop])
        
        
    }

    const renderItem = ({ item }) => (
        <Shop name={item.Name} date={item.DateCreated} />
    );

    return (
        <View style={{ flex: 1, }}>
            <AddShop addShop={addShop}/>
            <FlatList
                data={shops}
                renderItem={renderItem}
                keyExtractor={item => item.Id}
            />
        </View>
    );
}