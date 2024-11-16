import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/hooks/firebaseConfig";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({
    noting: require("../../assets/fonts/Noting.ttf"),
  });
  const router = useRouter();

  const handleSignIn = async () => {
    console.log("sign in")
    if (!email || !password) {
      setError("Email dan password harus diisi!");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in successfully!");
      router.push("/tabs/");
    } catch (err: any) {
      console.error(err);
      setError("Email atau password salah!");
    }
  };


  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.judulContainer}>
        <Text style={styles.judul}>Noting</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Masuk ke akun kamu</Text>
        <View style={styles.inputContainer}>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#49454F"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#49454F"
            secureTextEntry
          />
        </View>

        <View style={styles.errorContainer}>
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.anotherAccContainer}>
        <Text>- Atau masuk dengan yang lain -</Text>
        <Text>Tidak memiliki akun? coba{" "}
          <TouchableOpacity onPress={() => router.push("/auth/sign-up")}>
            <Text style={styles.link}>buat</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  judulContainer: {
    alignItems: "center",
    paddingVertical: 60,
  },

  judul: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#6c4bf4",
    fontFamily: "noting",
  },

  input: {
    padding: 20,
    fontSize: 16,
  },

  inputContainer: {
    marginVertical: 20,
    marginHorizontal: 30,
    backgroundColor: "#ECE6F0",
    borderRadius: 30,
    paddingHorizontal: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },

  form: {},
  formTitle: {
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#6c4bf4",
    marginHorizontal: 30,
    marginVertical: 20,
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  errorContainer: {
    paddingHorizontal: 30,
  },

  anotherAccContainer: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },

  link: {
    color: "#6c4bf4",
    fontWeight: "bold",
  },
});
