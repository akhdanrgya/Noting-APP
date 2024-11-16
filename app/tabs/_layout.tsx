import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { AuthProvider } from "@/hooks/AuthContext";
import TabBar from "@/components/TabBar";

const _layout = () => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default _layout;
