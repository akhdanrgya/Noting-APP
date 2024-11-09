import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { useFonts } from "expo-font"

const SplashScreen = () => {
  const [fontsLoaded] = useFonts({
    noting: require("../assets/fonts/Noting.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noting</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#6c4bf4",
    fontFamily: "noting",
  },
})
