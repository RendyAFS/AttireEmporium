import { GluestackUIProvider, Heading, Center, StatusBar, Box, Text, Pressable, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent='center' bgColor='#F5F5F5' alignItems='center'>
      <Heading>Profile</Heading>
      <Pressable onPress={() => navigation.navigate('FormPenyewaan')} >
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
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Edit Profile')} >
        <Text>EditProfile</Text>
      </Pressable>
    </Box>
  )
}

export default Profile