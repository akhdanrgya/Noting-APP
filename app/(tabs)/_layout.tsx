
import React from "react"
import { Tabs } from "expo-router"
import TabBar from "@/components/TabBar"

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="jadwal"
        options={{
          title: "",
          tabBarHideOnKeyboard: true,
        }}
      />
        <Tabs.Screen
          name="index"
          options={{
            title: "",
            tabBarHideOnKeyboard: true,
          }}
        />
      <Tabs.Screen
        name="kontakBidan"
        options={{
          title: "",
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tabs>
  )
}

export default _layout
