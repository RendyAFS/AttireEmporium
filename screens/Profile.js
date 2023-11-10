import { GluestackUIProvider, Heading, Center, Box, Text, Pressable, Image, HStack, VStack, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { MaterialCommunityIcons, MaterialIcons, Entypo } from "@expo/vector-icons";
const Profile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Box flex={1} bgColor='#DF9B52' alignItems='center'>
        <StatusBar backgroundColor={'#DF9B52'} barStyle={'light-content'} />
        <Box flex={1} alignItems="center">
          <Heading marginTop={30}>PROFILE</Heading>
          <Image alt="20" width={120} height={120} rounded={50} marginTop={10} source={require('../assets/images/avatar.png')} />
        </Box>
        <Box flex={2} marginTop={20} width={"100%"} borderTopLeftRadius={50} borderTopRightRadius={50} backgroundColor="white">
          <Box alignItems="center" marginTop={20}>
            <Heading color="#545454" fontSize={25}>Denny Daffa Rizaldy</Heading>
          </Box>
          <HStack marginTop={30}>
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
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Login')} >
              <Box backgroundColor="#ffe4f1" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <Entypo name="log-out" size={40} color="#da5393" />
              </Box>
              <Text>Sign Out</Text>
            </Pressable>
          </HStack>
          <HStack marginTop={30}>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Create Item')} >
              <Box backgroundColor="#f3e9ff" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialIcons name="favorite" size={50} color="#A15DEA" />
              </Box>
              <Text>Create Item</Text>
            </Pressable>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Edit Item')} >
              <Box backgroundColor="#fff2e3" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <MaterialCommunityIcons name="account-edit" size={50} color="#DF9B52" />
              </Box>
              <Text>Edit Item</Text>
            </Pressable>
            <Pressable flex={1} alignItems="center" onPress={() => navigation.navigate('Profile Renter')} >
              <Box backgroundColor="#ffe4f1" width={80} height={80} rounded={50} alignItems="center" justifyContent="center">
                <Entypo name="log-out" size={40} color="#da5393" />
              </Box>
              <Text>Proflie Renter</Text>
            </Pressable>
          </HStack>
          <Box marginTop={30} >
            <VStack marginStart={20} >
              <Text fontWeight="bold" fontSize={20}>Nama Lengkap :</Text>
              <Text fontSize={15}>Denny Daffa Rizaldy</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>No Handphone :</Text>
              <Text fontSize={15}>08651236213</Text>
            </VStack>
            <VStack marginStart={20} marginTop={25}>
              <Text fontWeight="bold" fontSize={20}>Kota :</Text>
              <Text fontSize={15}>Surabaya</Text>
            </VStack>
          </Box>

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