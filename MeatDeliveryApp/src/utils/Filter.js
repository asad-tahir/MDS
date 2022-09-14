import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import { useSelector } from 'react-redux';
export default function DatePicker({ date, setDate, selectedFilter, setSelectedFilter, selectedShop,setSelectedShop }) {

    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    
    const shops = useSelector((state) => state.invoices.shops);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    // const showTimepicker = () => {
    //     showMode('time');
    // };
    return (
        <View>
            <View>
                <Picker
                    selectedValue={selectedFilter}
                    mode={'dropdown'}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedFilter(itemValue)
                    }>
                    <Picker.Item label="By Shop" value="shop" />
                    <Picker.Item label="By Date" value="date" />
                </Picker>
                {
                    selectedFilter === 'date' ? <Button onPress={showDatepicker} title={date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()} /> : <Picker
                        selectedValue={selectedShop}
                        mode={'dropdown'}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedShop(itemValue)
                        }>
                        {/* <Picker.Item label={'shop.Name'} value={'shop.Id'} /> */}
                        {
                            
                        shops.map((shop) =>
                            <Picker.Item label={shop.Name} value={shop.Id} />
                        )
                        
                        }


                    </Picker>

                }




            </View>
            {/* <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View> 
            <Text>selected: {date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()}</Text>*/}
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                />
            )}
        </View>
    );
}