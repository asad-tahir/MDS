import React, {useState} from "react";
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import Filter from "../../utils/Filter";
//Recieve invoice id int Item and perform edit from here
const Item = ({ item, customNavigate }) => (
  <TouchableOpacity
    onLongPress={() => {
      customNavigate('PrintInvoice', { shopName: item.ShopName })
    }
    }
    style={{
      backgroundColor: '#fff', marginHorizontal: 5, padding: 10, marginBottom: 2, justifyContent: 'space-between'
    }}>
    <Text style={{ fontWeight: '400', fontSize: 20, padding: 5 }}>{item.ShopName}</Text>
    <Text style={{ fontWeight: '400', fontSize: 14, color: 'grey', padding: 5 }}>{item.Day} {item.Date}</Text>
  </TouchableOpacity>
);

export default function DailyInvoices({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState();
  const [selectedShop, setSelectedShop] = useState();

  const InvoicesStatus = useSelector((state) => state.invoices.status);
  const Invoices = useSelector((state) => state.invoices.invoices);
  //console.log(InvoicesStatus)
  function customNavigate(screenName, params) {
    navigation.navigate(screenName, params);
  }
  const renderItem = ({ item }) => (
    <Item item={item} customNavigate={customNavigate} />
  );

  return (
    InvoicesStatus === 'waiting' ? <View style={{ flex: 1, justifyContent: 'center' }}><ActivityIndicator /></View> :
      <View>
        <Filter date={date} setDate={setDate} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} selectedShop={selectedShop} setSelectedShop={setSelectedShop} />
        <FlatList
          data={Invoices}
          renderItem={renderItem}
          keyExtractor={item => item.Id}
        />
      </View>
  );
}