import { GluestackUIProvider, Heading, Center, Box, Text, Pressable, Image, HStack, VStack, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "../firebase";
import { useState, useEffect } from "react";
const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState('');
  const logoutHandler = () => {
    // Logout dari Firebase
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Hapus data user dari AsyncStorage
        removeUserData();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      // console.log("Data from AsyncStorage:", userDataString)
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  const removeUserData = async () => {
    try {
      // Menghapus data dari AsyncStorage
      await AsyncStorage.removeItem("user-data");
      // Diarahkan ke Login
      navigation.replace("Login");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(userData)
  return (
    <ScrollView bgColor='white'>
      <Box flex={1} bgColor='#021C35' alignItems='center'>
        <Box flex={1} alignItems="center">
          {userData.imageProfile ? (
            <Image
              role="img"
              alt="Profile Image"
              width={120}
              height={120}
              rounded={100}
              marginTop={50}
              source={{ uri: userData.imageProfile }}
              borderWidth={1}
              borderColor="white"
            />
          ) : (
            <Image
              role="img"
              alt="Default Avatar"
              width={120}
              height={120}
              rounded={100}
              marginTop={50}
              source={require('../assets/images/avatar.png')}
            />
          )}
        </Box>
        <Heading color="white" fontSize={20} marginTop={20}>{userData.username}</Heading>
        <Box borderBottomWidth={2} borderColor="white" height={20} width={70} />
        <Text fontSize={18} color="#DCB894" marginTop={20} >{userData.number}</Text>
        <Box flex={2} marginTop={20} height={'100%'} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">

          <Box alignItems="center" marginTop={20}>
            <Heading color="#545454" fontSize={25}>{userData.username}</Heading>
          </Box>

          <HStack marginTop={30}>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Profile Renter')} >
              <Box backgroundColor="#eafbff" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialIcons name="store" size={50} color="#0D98BA" />
              </Box>
              <Text>Proflie Renter</Text>
            </Pressable>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Favorite')} >
              <Box backgroundColor="#f3e9ff" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialIcons name="favorite" size={50} color="#A15DEA" />
              </Box>
              <Text>Favorite</Text>
            </Pressable>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Edit Profile')} >
              <Box backgroundColor="#fff2e3" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialCommunityIcons name="account-edit" size={50} color="#DF9B52" />
              </Box>
              <Text>Edit Profile</Text>
            </Pressable>
          </HStack>
          <HStack marginTop={30}>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Create Item')} >
              <Box backgroundColor="#e0fff0" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <FontAwesome name="plus-square" size={50} color="#88D8B0" />
              </Box>
              <Text>Create Item</Text>
            </Pressable>
            {/* <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Edit Item')} >
              <Box backgroundColor="#eaefff" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialCommunityIcons name="store-edit" size={50} color="#748CE1" />
              </Box>
              <Text>Edit Item</Text>
            </Pressable> */}
            <Pressable flex={1} alignItems="center" onPress={logoutHandler} >
              <Box backgroundColor="#ffe4f1" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <Entypo name="log-out" size={40} color="#da5393" />
              </Box>
              <Text>Sign Out</Text>
            </Pressable>
          </HStack>

          {/* <Pressable onPress={() => navigation.navigate('FormPenyewaan')} >
          <Text>Form Penyewaan</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('FormPengembalian')} >
          <Text>Form Pengembalian</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Register')} >
          <Text>Register</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')} >
          <Text>Login</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('GetInto1')} >
          <Text>GetInto1</Text>
        </Pressable> */}
        </Box>
      </Box>
    </ScrollView>


  )
}

export default Profile