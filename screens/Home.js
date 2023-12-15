import React, { useState, useEffect } from 'react';
import {
  Image,
  Heading,
  Box,
  Text,
  ScrollView,
  HStack,
  VStack,
  Pressable,
  AvatarImage
} from "@gluestack-ui/themed";
import Header from '../components/header';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions, StyleSheet, Platform } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import datas from '../data/datas';
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from '../firebase'
const { width: screenWidth } = Dimensions.get('window');

const Home = ({ route }) => {

  const navigation = useNavigation();
  const [entries, setEntries] = useState(datas);
  const [userData, setUserData] = useState('');
  const getCostume = async () => {
    const costumeRef = firebase.database().ref("costumes/");
    console.log(costumeRef)
    return costumeRef
      .once("value")
      .then((snapshot) => {
        const costumeData = snapshot.val();
        if (costumeData) {
          const notesArray = Object.entries(costumeData).map(([costumeId, costumeData]) => ({
            costumeId,
            ...costumeData,
          }));
          return notesArray;
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error("Error fetching user notes:", error);
        return [];
      });
  };
  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      // console.log("Data from AsyncStorage:", userDataString)
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
        const uid = userData;

        // Menampilkan UID ke konsol
        // console.log("User UID from AsyncStorage:",  userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
    getCostume();
  }, []);
  const Itemku = ({ item }) => (

    <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })}   >
      <Box backgroundColor='white' rounded={10} width={'90%'} margin={10} p={0} hardShadow={1}>
        <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.image} />
        <Box p={5}>
          <Text fontSize={16} fontWeight='bold' marginLeft={8} marginVertical={8}>{item.title}</Text>
          <Text fontSize={12} color={'#777'} paddingHorizontal={8} marginBottom={5}>{item.subtitle}</Text>
          <Text marginLeft={8} marginVertical={8} color={'#DF9B52'}>Rp {item.harga}</Text>
        </Box>

      </Box>
    </Pressable>
  );
  const renderItem = ({ item }, parallaxProps) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} width={screenWidth - 50} height={screenWidth - 100}>
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={{
            flex: 1,
            marginBottom: Platform.select({ ios: 0, android: 1 }),
            backgroundColor: 'white',
            borderRadius: 8,
          }}
          style={{ ...StyleSheet.absoluteFillObject }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text position={'absolute'} bottom={20} left={10} color='white' fontSize={16}
          fontWeight='bold' numberOfLines={2}>
          {item.title}
        </Text>
      </Pressable>
    );
  };
  return (
    <Box>
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      <ScrollView bgColor='#f5f5f5'>
        <Header title={"Header"} />

        <Box bgColor='white' marginTop={10} paddingVertical={10} rounded={5}>
          <Box p={10} >
            <LinearGradient
              // Background Linear Gradient
              colors={['#021C35', '#0174BE']}
              style={{ width: '100%', height: 100, borderRadius: 10 }}

              end={{ x: 1, y: 2 }}
            >
              <Box width={'100%'} height={120} rounded={10} padding={25}>
                <HStack>
                  <VStack>
                    <Text color='white' fontSize={15}>Selamat Datang</Text>
                    <Heading color='white' fontSize={20}>{userData.username}</Heading>
                  </VStack>
                  <AvatarImage />
                </HStack>

              </Box>
            </LinearGradient>
          </Box>
          <Carousel
            marginTop={10}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 50}
            data={entries}
            renderItem={renderItem}
            hasParallaxImages={true}
            autoplay={true}
            loop={true}
          />
        </Box>
        {/* <Box  paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#DF9B52'}>RECOMENDATIONS</Heading>
        </Box> */}
        <Box paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#DF9B52'}>RECOMENDATIONS</Heading>
        </Box>
        {/* <Box flex={1} flexDirection='row' marginBottom={15} padding={10}>
        {ENTRIES1.slice(0, 2).map(item => (
          <Itemku key={item.id} item={item} />
        ))}

      </Box> */}
        <Box alignItems='center' justifyContent='center'>
          <MasonryList
            data={datas}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Itemku item={item} />}
            onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadNext(ITEM_CNT)}
          />
        </Box>

      </ScrollView>


    </Box>

  );
};

export default Home;
