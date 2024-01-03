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
import { Entypo, FontAwesome } from "@expo/vector-icons";
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
  console.log(userData)
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
          <HStack >
            <Box>
              <Text flex={2} fontSize={13} marginLeft={8} >
                {costume.costumeName}
              </Text>
            </Box>
            <Box position='absolute' right={8}>
              <Text flex={1} fontSize={12} color='#777'>
                <FontAwesome name="star" size={12} color="#FFE81A" /> 4
              </Text>
            </Box>
          </HStack>
          <Text marginLeft={8} fontSize={14} marginTop={5} marginBottom={5} fontWeight='bold'>Rp {costume.rentalPrice},- / Hari</Text>
          <Text fontSize={13} color={'#777'} paddingHorizontal={8} marginBottom={5}>{costume.username}</Text>
        </Box>
      </Box>
    </Pressable>
  );
  const renderItem = ({ item }, parallaxProps) => {
    return (
      <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} width={screenWidth - 50} height={screenWidth - 100}>
        <ParallaxImage
          source={{ uri: item.imageUrl }}
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
          {item.costumeName}
        </Text>
      </Pressable>
    );
  };
  return (
    <Box >
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      <ScrollView bgColor='white' width={'100%'} height={'100%'}>
        <Header title={"Header"} />

        <Box marginTop={10} rounded={5}>
          <Box p={20} >
            <LinearGradient
              // Background Linear Gradient
              colors={['#021C35', '#0174BE']}
              style={{ width: '100%', height: 100, borderRadius: 10 }}

              end={{ x: 1, y: 2 }}
            >
              <Box width={'100%'} height={'auto'} rounded={10}>
                <HStack justifyContent='center' alignItems='center' >
                  <VStack marginStart={30} marginEnd={100} marginTop={20}>
                    <Text color='white' fontSize={15}>Selamat Datang</Text>
                    <Heading color='white' fontSize={20}>{userData.username}</Heading>
                  </VStack>
                  <Box marginTop={15}>
                    <Pressable onPress={() => navigation.navigate('Profile')}>
                      <Avatar size="lg">

                        <Image
                          source={userData.imageProfile ? { uri: userData.imageProfile } : require("../assets/images/avatar.png")}
                          width={'100%'}
                          height={'100%'}
                          alt="Profile Image"
                          rounded={100}
                          role="img"
                        />

                      </Avatar>


                    </Pressable>
                  </Box>
                </HStack>

              </Box>
            </LinearGradient>
          </Box>
          {/* <Carousel
            marginTop={10}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 50}
            data={costume}
            renderItem={renderItem}
            hasParallaxImages={true}
            autoplay={true}
            loop={true}
          /> */}
        </Box>
        <Box paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#021C35'}>Kategori</Heading>
          <Box>
            <ScrollView horizontal marginStart={20} paddingVertical={10}
              showsHorizontalScrollIndicator={false}>
              <Pressable onPress={() => navigation.navigate('Katalog', { category: 'Helloween' })}>
                <LinearGradient
                  colors={['#0174BE', '#021C35']}
                  style={{ width: 250, height: 100, borderRadius: 10, padding: 10, marginEnd: 10, justifyContent: 'center', alignItems: 'flex-end' }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text marginEnd={10} color='white' fontWeight='bold' fontSize={20}>Helloween</Text>
                </LinearGradient>
              </Pressable>

              <Pressable onPress={() => navigation.navigate('Katalog', { category: 'Batik' })}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={['#0174BE', '#021C35']}
                  style={{ width: 250, height: 100, borderRadius: 10, padding: 10, marginEnd: 10, justifyContent: 'center', alignItems: 'flex-end' }}

                  end={{ x: 1, y: 1 }}
                >
                  <Text marginEnd={10} color='white' fontWeight='bold' fontSize={20}>Batik</Text>
                </LinearGradient>
              </Pressable>
            </ScrollView>
          </Box>
        </Box>
        <Box paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={20} color={'#021C35'}>Katalog</Heading>
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
