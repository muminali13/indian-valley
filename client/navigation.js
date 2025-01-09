import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Order" component={OrderScreen}/>
        </Stack.Navigator>
    )
}
