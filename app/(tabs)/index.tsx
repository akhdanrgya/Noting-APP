import React from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, Akhdan 👋</Text>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }}
            style={styles.profileImage}
          />
        </View>

        <View style={[styles.searchContainer, styles.shadowSearch]}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari artikel, video, atau berita"
            placeholderTextColor="#49454F"
          />
          <FontAwesome name="search" size={18} color="#888888" style={styles.searchIcon} />
        </View>

        <View style={styles.categoryContainer}>
          <Text style={styles.sectionTitle}>Artikel populer</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Lihat semua</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipContainer}>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Paling Populer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Artikel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chip}>
            <Text style={styles.chipText}>Berita</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.postContainer}>
          <TouchableOpacity>
            <Text style={styles.berikut}>Berikut</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.articleContainer}>
          <View style={[styles.articleCard, styles.articleCardShadow]}>
            <FontAwesome name="heart" size={20} color="#ccc" style={styles.heartIcon} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Berita, Lokasi</Text>
              <Text style={styles.articleLocation}>Kab, Lokasi</Text>
              <Text style={styles.articleStats}>4.8K</Text>
            </View>
          </View>
          <View style={[styles.articleCard, styles.articleCardShadow]}>
            <FontAwesome name="heart" size={20} color="#ccc" style={styles.heartIcon} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Berita, Lokasi</Text>
              <Text style={styles.articleLocation}>Kab, Lokasi</Text>
              <Text style={styles.articleStats}>4.8K</Text>
            </View>
          </View>
          <View style={[styles.articleCard, styles.articleCardShadow]}>
            <FontAwesome name="heart" size={20} color="#ccc" style={styles.heartIcon} />
            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>Berita, Lokasi</Text>
              <Text style={styles.articleLocation}>Kab, Lokasi</Text>
              <Text style={styles.articleStats}>4.8K</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80, // Adjust based on your bottom bar height
  },
  container: {
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 80
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: '#ECE6F0',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  shadowSearch: {
    shadowColor: '#000000',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#888888',
    fontSize: 16,
  },
  berikut: {
    color: '#1E1E1E',
    fontSize: 16,
    justifyContent: 'flex-end',
  },
  chipContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  chip: {
    backgroundColor: '#eae6fd',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    height: 35,
  },
  chipText: {
    color: '#6c4bf4',
  },
  articleContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 25,
    paddingVertical : 20
  },
  articleCardShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: { height: 4, width: 0 },
    shadowRadius: 6,
  },
  articleCard: {
    width: 270,
    height: 400,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    marginRight: 15,
    padding: 10,
    justifyContent: 'space-between',
  },
  heartIcon: {
    alignSelf: 'flex-end',
    padding: 10,
    color: 'red',
  },
  articleContent: {
    marginTop: 20,
    padding: 10,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  articleLocation: {
    color: '#777',
  },
  articleStats: {
    fontSize: 14,
    color: '#333',
  },
})

export default Home
