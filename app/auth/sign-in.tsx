// app/auth/sign-in.tsx
import React, { useState } from "react";
import { TextInput, Button, Text, View, StyleSheet } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/hooks/firebaseConfig";
import { signIn } from "@/hooks/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully!");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput 
        value={email} 
        onChangeText={setEmail} 
        placeholder="Email" 
        keyboardType="email-address" 
      />
      <TextInput 
        value={password} 
        onChangeText={setPassword} 
        placeholder="Password" 
        secureTextEntry 
      />
      {error && <Text>{error}</Text>}
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
}

export default SignIn

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
})
