// app/layout.tsx
import React, { useEffect, useState } from "react"
import { Tabs } from "expo-router"
import { useRouter } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/hooks/firebaseConfig"
import TabBar from "@/components/TabBar"

const _layout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true)
      } else {
        setIsAuthenticated(false)
        router.push("/auth/sign-in")
      }
      setIsLoading(false)
    })
    
    return () => unsubscribe()
  }, [])

  if (isLoading) {
    return null
  }

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
