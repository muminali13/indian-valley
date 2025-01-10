import { Stack } from "expo-router";
import OrderScreen from "@/app/menu";
import Offers from "@/app/offers";
import CheckoutScreen from "@/app/checkout";
import OrderPreparingScreen from "@/app/preparing-order";
import DeliveryScreen from "@/app/order-confirmation";
import React from "react";

export default function RootLayout() {
  return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" options={{title: "index"}}/>
        <Stack.Screen name="offers" options={{title: "offers"}}/>
        <Stack.Screen name="checkout" options={{presentation: 'modal', title: "checkout"}}/>
        <Stack.Screen name="preparing-order" options={{presentation: 'fullScreenModal', title: "preparing-order"}}/>
        <Stack.Screen name="order-confirmation" options={{presentation: 'fullScreenModal', title: "order-confirmation"}}/>
      </Stack>
  );
}
