import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react';
import {themeColors} from "@/theme";
import { useRouter} from "expo-router";

export default function CartIcon() {
    const navigation =  useRouter();

    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                onPress={() => {navigation.navigate("/checkout")}}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="flex-row justify-between items-center mx-5 rounded-full px-4 py-3 shadow-lg">
                <View className="py-2 px-4 rounded-full" style={{backgroundColor: 'rgba(255,255,255,.3)'}}>
                    <Text className="text-white font-extrabold text-lg">3</Text>
                </View>
                <Text className="flex-1 text-center text-lg font-extrabold text-white">View Cart</Text>
                <Text className="text-lg font-extrabold text-white">£{23}</Text>
            </TouchableOpacity>
        </View>
    )
}