import React from 'react'

import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, {Marker} from "react-native-maps";
import * as Icon from "react-native-feather"

import { StatusBar } from "expo-status-bar";

import FeaturedRow from "@/components/FeaturedRow";
import {featured, location} from "@/constants";
import {themeColors} from "@/theme";

export default function HomeScreen() {
  return (
      <SafeAreaView className="bg-white">
        <StatusBar style="dark"/>

        <MapView initialRegion={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
                 className="flex-1"
                 mapType='standard'>
          <Marker coordinate={{latitude: location.lat, longitude: location.lng}}
                  title='Indian Valley'
                  description='We are here, and always ready to deliver excellence'
                  pinColor={themeColors.bgColor(1)}/>
        </MapView>

        <View className="flex-row items-center space-x-2 px-4 pb-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
            <Icon.Search height="25" width="25" stroke="gray"/>
            <TextInput placeholder="Search Item..."/>
            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
              <Icon.MapPin height={20} width={20} color="gray"/>
              <Text className="text-gray-600">Gravesend, Kent</Text>
            </View>
          </View>
          <View style={{backgroundColor: themeColors.bgColor(1)}} className="p-3 rounded-full">
            <Icon.Sliders height="20" width="20" stroke="white"/>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 20}}
                    className="h-screen bg-white">

          <View className="mt-3">
            {
              featured.map((item, index) => {
                return (
                    <FeaturedRow key={index} title={item.title} items={item.items}
                                 description={item.description}/>
                )
              })
            }
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}