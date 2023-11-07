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

    </Box>
  )
}

export default Profile