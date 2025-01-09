import {View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView} from 'react-native';
import React from 'react'
import {StatusBar} from "expo-status-bar";
import * as Icon from "react-native-feather"
import {themeColors} from "@/theme";
import Categories from "@/components/categories";

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder="Search Item..." />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                        <Icon.MapPin height={20} width={20} color="gray" />
                        <Text className="text-gray-600">Gravesend, Kent</Text>
                    </View>
                </View>
                <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
                    <Icon.Sliders height="20" width="20" stroke="white" />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}