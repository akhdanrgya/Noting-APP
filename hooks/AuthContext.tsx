import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useRef,
} from "react";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/hooks/firebaseConfig";
import { useRouter } from "expo-router";
import { View, Text } from "react-native";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("User:", user, "Loading:", loading);
    if (loading) return;
  
    if (user) {
      router.push("/(tabs)index");
    } else {
      router.push("/auth/sign-in");
    }
  }, [user, loading, router]);
  

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.replace("/auth/sign-in");
    } catch (error) {
      console.error("Error during logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {loading ? (
        <View><Text>Loading...</Text></View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
