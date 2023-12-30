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
  AvatarImage,
  Avatar,
  FlatList,
  AvatarFallbackText
} from "@gluestack-ui/themed";
import Header from '../components/header';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Entypo } from "@expo/vector-icons";
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
  const [costume, setCostumeData] = useState([]);

  useEffect(() => {
    getUserData();
    getCostume();
    // fetchCostumeData();
  }, [route]);
  console.log(userData.username);

  // console.log('hasilnya yaaaaituuu '+ costume)

  // const fetchCostumeData = async () => {
  //   try {
  //     const costumesSnapshot = await firebase.database().ref('costumes').once('value');
  //     const costumesData = costumesSnapshot.val();

  //     if (costumesData) {
  //       console.log("All Costumes Information:");

  //       // Extracting all items from costumeData
  //       const costumeArray = Object.entries(costumesData).map(([costumeId, costume]) => ({
  //         costumeId,
  //         ...costume,
  //       }));

  //       // Log each object in the array separately
  //       costumeArray.forEach((costume, index) => {
  //         console.log(`Object ${index + 1}:`, costume);
  //       });

  //       // Set all items in the costumeData state
  //       setCostumeData(costumeArray);
  //     } else {
  //       console.log("No costumes found");
  //     }
  //   } catch (error) {
  //     console.error('Error fetching costumes data:', error);
  //   }
  // };

  console.log('Kostum terfilter', costume)

  const getDownloadUrl = async (filename) => {
    const storageRef = firebase.storage().ref();
    const costumeImageRef = storageRef.child(filename);

    try {
      const downloadUrl = await costumeImageRef.getDownloadURL();
      return downloadUrl;
    } catch (error) {
      console.error("Error getting download URL:", error);
      return ''; // Return an empty string or handle the error accordingly
    }
  };

  const getCostume = async () => {
    const costumeRef = firebase.database().ref("costumes/");

    try {
      const snapshot = await costumeRef.once("value");
      const costumeData = snapshot.val();

      if (costumeData) {
        const availableCostumes = await Promise.all(
          Object.entries(costumeData)
            .filter(([_, costume]) => costume.username !== userData.username && costume.status !== "Dipinjam")
            .map(async ([costumeId, costume]) => {
              const imageUrl = await getDownloadUrl(costume.filename);
              return { costumeId, ...costume, imageUrl };
            })
        );

        console.log('Available Costumes:', availableCostumes);

        setCostumeData(availableCostumes);

        return availableCostumes;
      } else {
        setCostumeData([]);
        return [];
      }
    } catch (error) {
      console.error("Error fetching costumes data:", error);
      setCostumeData([]);
      return [];
    }
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

  const Itemku = ({ costume }) => (

    <Pressable onPress={() => navigation.navigate('DetailBarang', { item: costume })}   >
      <Box backgroundColor='white' rounded={10} width={'90%'} margin={10} p={0} hardShadow={1}>
        <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={{ uri: costume.imageUrl }} />
        <Box p={5}>
          <Text fontSize={16} fontWeight='bold' marginLeft={8} marginVertical={8}>
            {costume.costumeName}
          </Text>

          <Text fontSize={12} color={'#777'} paddingHorizontal={8} marginBottom={5}>{costume.costumeDescription}</Text>
          <Text fontSize={12} color={'#777'} paddingHorizontal={8} marginBottom={5}><Entypo name="shop" size={15} color="black" /> {costume.username}</Text>
          <Text marginLeft={8} marginVertical={8} color={'#DF9B52'}>Rp {costume.rentalPrice}</Text>
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
    <Box >
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      <ScrollView bgColor='white'>
        <Header title={"Header"} />

        <Box marginTop={10} rounded={5}>
          <Box p={20} >
            <LinearGradient
              // Background Linear Gradient
              colors={['#021C35', '#0174BE']}
              style={{ width: '100%', height: 100, borderRadius: 10 }}

              end={{ x: 1, y: 2 }}
            >
              <Box width={'100%'} height={120} rounded={10}>
                <HStack justifyContent='center' alignItems='center' >
                  <VStack marginStart={10} marginEnd={140} marginTop={20}>
                    <Text color='white' fontSize={15}>Selamat Datang</Text>
                    <Heading color='white' fontSize={20}>{userData.username}</Heading>
                  </VStack>
                  <Box marginTop={15}>
                    <Pressable onPress={() => navigation.navigate('Profile')}>
                      <Avatar size="lg" >
                        <Image
                          source={require("../assets/images/avatar.png")}
                          width={'100%'}
                          height={'100%'}
                          alt="CNN Logo"

                          role="img"
                        />
                      </Avatar>
                    </Pressable>
                  </Box>
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
        <Box paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#DF9B52'}>CATEGORIES</Heading>
          <Box>
            <ScrollView horizontal marginStart={20} paddingVertical={10} showsHorizontalScrollIndicator={false}>
              <Box p={10} marginEnd={10} bgColor='black' width={250} height={100} rounded={10}>
                <Text>Text</Text>
              </Box>
              <Box p={10} marginEnd={10} bgColor='red' width={250} height={100} rounded={10}>
                <Text>Text</Text>
              </Box>
              <Box p={10} marginEnd={10} bgColor='purple' width={250} height={100} rounded={10}>
                <Text>Text</Text>
              </Box>
            </ScrollView>
          </Box>
        </Box>
        <Box paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#DF9B52'}>RECOMENDATIONS</Heading>
        </Box>
        {/* <Box flex={1} flexDirection='row' marginBottom={15} padding={10}>
        {ENTRIES1.slice(0, 2).map(item => (
          <Itemku key={item.id} item={item} />
        ))}

      </Box> */}
        <Box alignItems='center' justifyContent='center' p={10}>
          <MasonryList
            data={costume}
            keyExtractor={item => item.costumeId}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <Itemku costume={item} />}
            onRefresh={() => refetch({ first: ITEM_CNT })}
            onEndReachedThreshold={0.1}
            onEndReached={() => loadNext(ITEM_CNT)}
            style={{ marginBottom: 100 }}
          />
        </Box>
      </ScrollView>


    </Box>

  );
};

export default Home;
