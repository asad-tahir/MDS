import {View, Text} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import DailyInvoices from "../screens/MainScreenTabs/DailyInvoices";
import WeeklyInvoices from "../screens/MainScreenTabs/WeeklyInvoices";


const Tab = createBottomTabNavigator();

export default function TabNavigation(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'DailyInvoices') {
                iconName = focused
                  ? 'ios-pencil-sharp'
                  : 'ios-pencil-outline';
              } else if (route.name === 'WeeklyInvoices') {
                iconName = focused ? 'ios-bar-chart-sharp' : 'ios-bar-chart-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#121212',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                
            },
            headerShown: false
          })}>
        <Tab.Screen name="DailyInvoices" component={DailyInvoices} options={{title: "DAILY"}} />
        <Tab.Screen name="WeeklyInvoices" component={WeeklyInvoices} options={{title: "WEEKLY"}} />
      </Tab.Navigator>
    );
}