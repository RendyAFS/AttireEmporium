import { GluestackUIProvider, Heading, Center, StatusBar, Box, Text, Pressable, Image } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Box flex={1} justifyContent='center' bgColor='#F5F5F5' alignItems='center'>
      <Heading>Profile</Heading>



      {/* BUTTON BUAT KE FITUR FORM */}
      <Pressable onPress={() => navigation.navigate('FormPenyewaan')} >
        <Text padding={10} backgroundColor="black" color="white" borderRadius={10} margin={10}>Form Penyewaan</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('FormPengembalian')} >
        <Text padding={10} backgroundColor="black" color="white" borderRadius={10} margin={10}>Form Pengembalian</Text>
      </Pressable>
      {/* BUTTON BUAT KE FITUR FORM */}
    </Box>
  )
}

export default Profile