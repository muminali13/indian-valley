import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, {Component, useState} from 'react';
import {categories} from "@/constants";
import {themeColors} from "@/theme";
import * as Icon from "react-native-feather"

export default function DishRow({item}) {
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Text className="flex-1 text-gray-600 pl-2 text-lg">{item.name}</Text>
            <View className="flex-row justify-between pl-3 items-center">
                <Text className="text-gray-700 text-md px-1 font-bold">£{item.price}</Text>
                <View className="flex-row items-center">
                    <TouchableOpacity
                        onPress={() => {}}
                        style={{backgroundColor:themeColors.bgColor(1)}}
                        className="p-1 rounded-full">
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                    </TouchableOpacity>
                    <Text className="px-2 text-lg">
                        1
                    </Text>
                    <TouchableOpacity
                        onPress={() => {}}
                        style={{backgroundColor:themeColors.bgColor(1)}}
                        className="p-1 rounded-full">
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}