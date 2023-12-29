import React, { useState, useRef, useEffect } from 'react';
import { HeaderKatalog } from '../components';
import {
  GluestackUIProvider,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  Heading,
  Box,
  Text,
  ScrollView,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import { Dimensions } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import datas from '../data/datas';
import firebase from '../firebase'
import { Entypo } from "@expo/vector-icons";

const Katalog = () => {
  console.log(datas)
  const navigation = useNavigation();
  const [entries, setEntries] = useState(datas);
  const [userData, setUserData] = useState('');
  const [costume, setCostumeData] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    getUserData();
    getCostume();
    // fetchCostumeData();
  }, []);


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

  // GetCostume
  const getCostume = async () => {
    const costumeRef = firebase.database().ref("costumes/");

    try {
      const snapshot = await costumeRef.once("value");
      const costumeData = snapshot.val();
      console.log(costumeData);

      if (costumeData) {
        const availableCostumes = Object.entries(costumeData)
          .filter(([_, costume]) => costume.status !== "Dipinjam" && costume.username !== userData.username)
          .map(([costumeId, costume]) => ({ costumeId, ...costume }));

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
  const Itemku = ({ costume }) => {
    const { costumeName, costumeDescription } = costume;
    
    const isMatch =
      costumeName.toLowerCase().includes(searchText.toLowerCase()) ||
      costumeDescription.toLowerCase().includes(searchText.toLowerCase());
  
    return isMatch ? (
      <Pressable onPress={() => navigation.navigate('DetailBarang', { item: costume })}>
        <Box backgroundColor='white' rounded={10} width={'90%'} margin={10} p={0} hardShadow={1}>
          <Box p={5}>
            <Text fontSize={16} fontWeight='bold' marginLeft={8} marginVertical={8}>
              {costumeName}
            </Text>
            <Text fontSize={12} color={'#777'} paddingHorizontal={8} marginBottom={5}>
              {costumeDescription}
            </Text>
            <Text fontSize={12} color={'#777'} paddingHorizontal={8} marginBottom={5}>
              <Entypo name="shop" size={15} color="black" /> {costume.username}
            </Text>
            <Text marginLeft={8} marginVertical={8} color={'#DF9B52'}>
              Rp {costume.rentalPrice}
            </Text>
          </Box>
        </Box>
      </Pressable>
    ) : null;
  };
  
  
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <HeaderKatalog searchText={searchText} setSearchText={setSearchText} />
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
      </ScrollView>
    </Box>

  );
};

export default Katalog;
