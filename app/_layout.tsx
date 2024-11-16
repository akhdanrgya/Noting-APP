import React, { useState, useEffect } from "react"
import { View, StyleSheet, SafeAreaView } from "react-native"
import SplashScreen from "@/components/SplashScreen"
import { useRouter, Slot } from "expo-router"


const Layout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  if (isLoading) {
    return <SplashScreen />
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Slot />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
})

export default Layout
