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

  // Cek rute terakhir untuk menghindari redirect berulang
  const previousRoute = useRef<string>("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      // Cek apakah kita lagi dalam status loading atau tidak
      if (loading) return;

      if (user) {
        // Jika user sudah login, arahkan ke halaman /tabs
        if (previousRoute.current !== "/tabs/") {
          router.replace("/tabs/");
          previousRoute.current = "/tabs/";  // Simpan rute terakhir
        }
      } else {
        // Jika user tidak terautentikasi, arahkan ke halaman /auth/sign-in
        if (previousRoute.current !== "/auth/sign-in") {
          router.replace("/auth/sign-in");
          previousRoute.current = "/auth/sign-in";  // Simpan rute terakhir
        }
      }
    });

    return () => unsubscribe();
  }, [loading, router]);

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
        <View><Text>Loading...</Text></View> // Menampilkan loading sampai auth state siap
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
