import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react'
import {useRoute} from "@react-navigation/native";
import * as Icon from "react-native-feather"
import {themeColors} from "@/theme";
import { useRouter} from "expo-router";


export default function OffersScreen() {
    const navigation = useRouter();
    const {params} = useRoute()
    let item = params;
    return (
        <SafeAreaView>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity onPress={()=>{ navigation.back() }} className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow">
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}></Icon.ArrowLeft>
                    </TouchableOpacity>
                </View>
                <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="bg-white -mt-12 pt-6">
                    <Text className="text-3xl font-bold">Menu</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}