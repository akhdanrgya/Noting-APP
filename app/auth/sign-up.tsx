
import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/hooks/firebaseConfig";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [fontsLoaded] = useFonts({
    noting: require("../../assets/fonts/Noting.ttf"),
  });
  const router = useRouter();

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setError("Semua field harus diisi!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password dan konfirmasi password tidak sama!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Akun berhasil dibuat!");
      router.push("/tabs/");
    } catch (err: any) {
      setError("Terjadi kesalahan saat mendaftar!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.judulContainer}>
        <Text style={styles.judul}>Noting</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Buat akun baru</Text>
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
        <View style={styles.inputContainer}>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            placeholder="Konfirmasi Password"
            placeholderTextColor="#49454F"
            secureTextEntry
          />
        </View>

        <View style={styles.errorContainer}>
          {error && <Text style={{ color: "red" }}>{error}</Text>}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.anotherAccContainer}>
        <Text>- Atau daftar dengan yang lain -</Text>
        <Text>
          Sudah punya akun?{" "}
          <TouchableOpacity onPress={() => router.push("/auth/sign-in")}>
            <Text style={styles.link}>Masuk</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

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
