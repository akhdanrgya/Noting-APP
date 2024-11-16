import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { dummyArticles } from "@/components/dummy/Card"
import { chipData } from "@/components/dummy/ChipData"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { db, auth } from "@/hooks/firebaseConfig"
import { signOut } from "firebase/auth"
import { useAuth } from "@/hooks/AuthContext"

const Home = () => {
  const [articles, setArticles] = useState<any[]>([])
  const { logout } = useAuth();

  const fetchArticles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "chipData"))
      const fetchedArticles = querySnapshot.docs.map((doc) => doc.data())
      setArticles(fetchedArticles)
    } catch (error) {
      console.error("Error fetching chipData: ", error)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut(auth)
      console.log("User logged out")
    } catch (error) {
      console.error("Error signing out: ", error)
    }
  }

  useEffect(() => {
    fetchArticles()
    console.log(articles)
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, Akhdan 👋</Text>
          <Image
            source={{ uri: "https://via.placeholder.com/50" }}
            style={styles.profileImage}
          />
        </View>

        <View style={[styles.searchContainer, styles.shadowSearch]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari artikel, video, atau berita"
            placeholderTextColor="#49454F"
          />
          <FontAwesome
            name="search"
            size={18}
            color="#888888"
            style={styles.searchIcon}
          />
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>Artikel populer</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Lihat semua</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.chipContainer}
        >
          {chipData.map((chip) => (
            <TouchableOpacity key={chip.id} style={styles.chip}>
              <Text style={styles.chipText}>{chip.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.postContainer}>
          <TouchableOpacity style={styles.berikutContainer}>
            <Text style={styles.berikut}>Berikut</Text>
            <FontAwesome
              name="angle-right"
              size={16}
              color="#1E1E1E"
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.articleContainer}
        >
          {dummyArticles.map((article) => (
            <View
              key={article.id}
              style={[styles.articleCard, styles.articleCardShadow]}
            >
              <View style={styles.heartIconContainer}>
                <FontAwesome
                  name="heart"
                  size={20}
                  color="#ccc"
                  style={styles.heartIcon}
                />
              </View>
              <Image
                source={{ uri: article.imageUrl }}
                style={styles.articleImage}
              />
              <View style={styles.articleContent}>
                <Text style={styles.articleTitle}>{article.title}</Text>
                <Text style={styles.articleLocation}>{article.location}</Text>
                <Text style={styles.articleStats}>{article.views}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80,
  },
  container: {
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: "#ECE6F0",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  shadowSearch: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  postContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#888888",
    fontSize: 16,
  },
  berikutContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrowIcon: {
    marginLeft: 5,
  },
  berikut: {
    color: "#1E1E1E",
    fontSize: 16,
    justifyContent: "flex-end",
  },
  chipContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  chip: {
    backgroundColor: "#eae6fd",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 35,
  },
  chipText: {
    color: "#6c4bf4",
  },
  articleContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 25,
    paddingVertical: 20,
  },
  articleCardShadow: {
    shadowColor: "#000000",
    shadowOpacity: 0.4,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 6,
  },
  articleCard: {
    width: 270,
    height: 400,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    marginRight: 15,
    padding: 10,
    justifyContent: "space-between",
  },
  articleImage: {
    width: "100%",
    height: 250,
    borderRadius: 30,
  },
  heartIcon: {
    color: "red",
  },
  heartIconContainer: {
    backgroundColor: "rgba(29, 29, 29, 0.4)",
    borderRadius: 50,
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
    padding: 10,
  },
  articleContent: {
    marginTop: 20,
    padding: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  articleLocation: {
    color: "#777",
  },
  articleStats: {
    fontSize: 14,
    color: "#333",
  },

  logoutButton: {
    backgroundColor: "#FF3B30",
    borderRadius: 30,
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default Home
