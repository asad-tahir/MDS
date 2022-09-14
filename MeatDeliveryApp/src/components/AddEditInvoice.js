import React from "react";
import { ScrollView, Text, View, TextInput, TouchableOpacity } from "react-native";
import DatePicker from "./DatePicker";
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';


const invoiceTemp =
{
    //Id: '',
    TimeCreated: '',
    Date: '',
    Day: '',
    ShopId: '',
    ShopName: '',
    Deleted: '',
    Location: '',
    ItemCount: '',
    Items: [
    ]
}

//Later make one new for view invoice
export default function AddEditInvoice({ navigation }) {
    const [date, setDate] = React.useState(new Date());
    const [selectedShop, setSelectedShop] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState('');
    const [weight, onChangeWeight] = React.useState('');
    const [price, onChangePrice] = React.useState('');
    const [invoice, setInvoice] = React.useState(invoiceTemp);
    const [item, setItem] = React.useState({
        Id: '0',
        Title: '',
        ItemTypeId: '',
        Quantity: '0',
        PricePerKg: '0',
        Weights: [
        ]
    });
    // const [errorBorderColor, setErrorBorderColor] = React.useState({
    //     ShopError: 'black',
    //     SelectItemError: 'black',
    //     PriceError: 'black',
    //     WeightError: 'black'
    // });
    //const InvoicesStatus = useSelector((state) => state.invoices.addEditInvoice);

    //console.log(InvoicesStatus);
    function addWeight() {
        if (weight !== '') {
            item.Weights = [weight, ...(item.Weights)]
            setItem(item);
            onChangeWeight('');
            //console.log(item);
        }
        else {
            // console.log('zzz');
            // var tempErrorBorderColor = errorBorderColor;
            // tempErrorBorderColor.WeightError = 'red';
            // setErrorBorderColor(tempErrorBorderColor);
            // console.log(errorBorderColor);
        }
    }
    function editItem(itm) {
        setSelectedItem(itm.ItemTypeId);
        setItem({
            Id: itm.Id,
            Title: itm.Title,
            ItemTypeId: itm.ItemTypeId,
            Quantity: itm.Quantity,
            PricePerKg: itm.PricePerKg,
            Weights: itm.Weights
        })
    }

    function addItem() {
        if (item.Weights !== []) {
            if (item.Id === '0') {
                item.ItemTypeId = selectedItem;
                item.PricePerKg = price;
                item.Quantity = item.Weights.length;
                let tempInvoice = invoice;
                tempInvoice.ItemCount++;
                item.Id = tempInvoice.ItemCount;
                tempInvoice.Items = [item, ...tempInvoice.Items];
                setInvoice(tempInvoice);
                setSelectedItem('0');
                onChangeWeight('');

                setItem({
                    Id: '0',
                    Title: '',
                    ItemTypeId: '',
                    Quantity: '0',
                    PricePerKg: '0',
                    Weights: [
                    ]
                });
            } else {
                let tempInvoice = invoice;
                tempInvoice.Items = tempInvoice.Items.filter(i => {
                    if(i.Id !== item.Id)
                    return i;
                });
                tempInvoice.Items = [item, ...tempInvoice.Items];
                setInvoice(tempInvoice);
                setSelectedItem('0');
                onChangeWeight('');

                setItem({
                    Id: '0',
                    Title: '',
                    ItemTypeId: '',
                    Quantity: '0',
                    PricePerKg: '0',
                    Weights: [
                    ]
                });
                // setItem({
                //     Id: '0',
                //     Title: '',
                //     ItemTypeId: '',
                //     Quantity: '0',
                //     PricePerKg: '0',
                //     Weights: [
                //     ]
                // });
            }
        } else {

        }
    }

    return (
        <ScrollView keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag" style={{}}>
            <View style={{ backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 20, marginBottom: 2, flexDirection: 'row', height:100}}>
            <View style={{ flex: 4, borderWidth: .7, borderRadius: 8, marginRight: 10 }}>
                    <Picker
                        selectedValue={selectedShop}
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) => {
                            invoice.ShopId = itemValue;
                            setInvoice(invoice);
                            return setSelectedShop(itemValue)
                        }
                        }>
                        <Picker.Item label={'Select Shop'} value={'0'} />
                        <Picker.Item label={'Home'} value={'1'} />
                        <Picker.Item label={'A1'} value={'2'} />
                        <Picker.Item label={'Home'} value={'3'} />
                        <Picker.Item label={'A1'} value={'4'} />
                        {/* {
                            
                        // shops.map((shop) =>
                        //     <Picker.Item label={shop.Name} value={shop.Id} />
                        // )
                        
                        } */}


                    </Picker>
                </View>
                <View style={{flex:2}}><DatePicker date={date} setDate={setDate} /></View>
            </View>
            <View style={{  }}>
                

                {/* <View style={{flex:3, borderWidth: .5}}>
            <Text>PriceInput</Text>
            
            </View> */}
                {/* <TouchableOpacity onPress={() => { }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center',borderWidth: .5 }}><Text>Done</Text></TouchableOpacity> */}
            </View>
            <View style={{ backgroundColor: '#fff', padding: 10, marginBottom: 2, flexDirection: 'row' }}>
                <View style={{ flex: 3, borderWidth: .7, marginLeft: 2, borderRadius: 8 }}>
                    <Picker
                        selectedValue={selectedItem}
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedItem(itemValue)
                        }>
                        <Picker.Item label={'Select Item'} value={'0'} />
                        <Picker.Item label={'Ewe'} value={'EWE'} />
                        <Picker.Item label={'Lamb'} value={'LAMB'} />
                        <Picker.Item label={'Plain Ewe'} value={'PLAIN-EWE'} />
                        <Picker.Item label={'Feet'} value={'FEET'} />
                        {/* {
                            
                        // shops.map((shop) =>
                        //     <Picker.Item label={shop.Name} value={shop.Id} />
                        // )
                        
                        } */}


                    </Picker>

                </View>
                <View style={{ justifyContent: 'center', padding: 10 }}><Text >Price:</Text></View>
                <TextInput
                    style={{
                        height: 60,
                        borderWidth: .7,
                        flex: 1,
                        padding: 15,
                        borderRadius: 8
                    }}
                    onChangeText={text => onChangePrice(text)}
                    value={price}
                    keyboardType={"numeric"}
                    placeholder={'PRICE'}
                />
            </View>
            <View style={{ backgroundColor: '#fff', padding: 10, marginBottom: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={{
                        height: 60,
                        borderWidth: .7,
                        flex: 6,
                        padding: 15,
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8
                    }}
                    onChangeText={text => onChangeWeight(text)}
                    value={weight}
                    keyboardType={"numeric"}
                    onEndEditing={() => { }
                        //addItem
                    }
                    placeholder={'WEIGHT'}

                />
                <TouchableOpacity onPress={addWeight} style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderWidth: .7, borderTopRightRadius: 8, borderBottomRightRadius: 8 }}><Ionicons name="ios-add-circle" size={28} color="white" /></TouchableOpacity>

            </View>
            {item.Weights.length !== 0 ? <View style={{ marginHorizontal: 5, padding: 10, marginBottom: 2, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {item.Weights.map((weight, index) => {
                    return <Text style={{ backgroundColor: index === 0 ? '#66FADC' : '#fff', paddingHorizontal: 18, paddingVertical: 12, fontSize: 18, margin: 5, borderRadius: 8, borderWidth: index === 0 ? 0 : 0 }} key={index}>{weight}</Text>
                }
                )}
            </View> : <></>}
            <View style={{ height: 3, backgroundColor: '#666', marginTop: 1 }}></View>
            {item.Weights.length !== 0 ?
                <View style={{ backgroundColor: '#fff', marginHorizontal: 5, padding: 10, marginBottom: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={addItem} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderWidth: .7, borderRadius: 8 }}><Text style={{ color: '#fff', padding: 15, fontWeight: '600', fontSize: 16 }}>ADD ITEM</Text></TouchableOpacity>
                    <View style={{ width: 10 }}></View>
                    <TouchableOpacity onPress={() => { }} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', borderWidth: .7, borderRadius: 8 }}><Text style={{ color: '#fff', padding: 15, fontWeight: '600', fontSize: 16 }}>CANCEL ITEM</Text></TouchableOpacity>
                </View> : <></>
            }
            {
                invoice.Items.map((itm, index) => {
                    return (<TouchableOpacity onLongPress={() => { editItem(itm) }} key={index} style={{ marginBottom: 1 }}>
                        <Text style={{ backgroundColor: '#fff', fontSize: 26, marginBottom: 1, padding: 15, paddingBottom: 1, fontWeight: '700' }}><Text style={{fontWeight:'600'}}> {itm.Quantity} </Text>| {itm.ItemTypeId}</Text>
                        <Text style={{ backgroundColor: '#fff', fontSize: 18, marginBottom: 1, padding: 15, paddingBottom: 5 }}>{itm.Weights.map((weight) => weight + '  +  ')}</Text>
                        <View style={{ height: 3, backgroundColor: '#666', marginTop: 1 }}></View>
                    </TouchableOpacity>)
                })
            }
            {/* <Text>AddItem</Text>
            <Text>ItemsView</Text>
            <Text>Done</Text>
            <Text>Discard or Done on exit</Text> */}
        </ScrollView>
    );
}