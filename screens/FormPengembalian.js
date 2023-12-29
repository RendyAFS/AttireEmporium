import { Heading, Box, Text, Pressable, Image, Textarea, TextareaInput, VStack, HStack } from "@gluestack-ui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import firebase from "../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
const FormPengembalian = ({ route }) => {
  const [userData, setUserData] = useState('');
  const [rating, setRating] = useState(0);
  const [deskripsi, setDeskripsi] = useState('');
  const data = (route.params.item);


  console.log(route.prarms)
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };

  const getUserData = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      console.log("Data from AsyncStorage:", userDataString)
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        setUserData(userData);
        const uid = userData.credential.user.uid;

        // Menampilkan UID ke konsol
        console.log("User UID from AsyncStorage:", uid);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data)
  const handleConfrimButton = async () => {
    try {
      const userDataString = await AsyncStorage.getItem("user-data");
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const uid = userData.credential.user.uid;
        const costumeId = data.costumeId;
        const Deskripsi = data.Deskripsi;
        const idHistory = data.idHistory;
        const namakostum = data.namakostum;
        const peminjaman = data.peminjaman;
        const pengembalian = data.pengembalian;
        const review = 'Sudah direview';
        const toko = data.toko;
        const status = 'Tersedia'
        const ratingRef = firebase.database().ref(`history/${idHistory}`);
        ratingRef.set({
          uid,
          costumeId,
          rating,
          Deskripsi,
          idHistory,
          namakostum,
          peminjaman,
          pengembalian,
          review,
          toko
        });
        const updateRef = firebase.database().ref(`costumes/${costumeId}`);
        updateRef.update({
          status
        });

        // Update history with rating and review


        // Reset nilai form setelah posting
        navigation.replace("Tabs");
      }
    } catch (error) {
      console.error(error);
    }
  };




  const handleStarPress = (starIndex) => {
    setRating(starIndex + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Pressable key={i} onPress={() => handleStarPress(i)}>
          <Icon
            name={i < rating ? 'star' : 'star-o'}
            size={30}
            color="yellow"
            margin={10}
          />
        </Pressable>
      );
    }
    return stars;
  };

  console.log(rating)

  return (
    <Box flex={1} flexDirection="column" bgColor="#fff" paddingHorizontal={15}>
      <Box flex={1} bgColor="#fff" alignItems="center" marginTop={15}>
        <Box width={'100%'}>
          {/* Layout 2 */}
          <Box width={'auto'} height={300} bgColor="white" borderRadius={10}>
            <Box flex={1} flexDirection="column">
              {/* <Image
                source={{ uri: data.image }}
                width={'auto'} height={300}
                borderRadius={10}
                alt="img"
                role="img"
                resizeMode="cover"
              /> */}
            </Box>
          </Box>
          <Text fontWeight="bold" fontSize={18} marginTop={15}>{data.namakostum}</Text>
          <Text fontSize={14}>Tanggal Peminjaman</Text>
          <HStack justifyContent="center" marginTop={10}>
            <Text fontSize={18} fontWeight="bold">{data.peminjaman}</Text>
            <Text fontSize={18} fontWeight="bold"> - </Text>
            <Text fontSize={18} fontWeight="bold">{data.pengembalian}</Text>
          </HStack>

          <Box flexDirection="column">
            <Text marginTop={10} fontSize={18} fontWeight="bold">Rating</Text>
            <Box flexDirection="row" justifyContent="center">{renderStars()}</Box>
          </Box>


          {/* Layout 2 */}
          <Box paddingHorizontal={10} backgroundColor="white" marginTop={0} height={'100%'} borderTopEndRadius={10} borderTopStartRadius={10}>
            <Text fontSize={18} fontWeight="bold">Komentar</Text>
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              borderWidth={1}
              borderColor="black"
              width={'100%'}
              marginTop={10}
              onChangeText={(text) => setDeskripsi(text)}
            >
              <TextareaInput placeholder="Tambahkan Komentar..." role="dialog" />
            </Textarea>
            <Box flex={1} flexDirection="row" marginTop={15}>
              <Box flex={1}>
                <Text
                  onPress={handleConfrimButton}
                  textAlign="center"
                  backgroundColor="#021C35"
                  paddingVertical={10}
                  paddingHorizontal={40}
                  borderRadius={8}
                  color="white"
                  fontWeight="bold"
                >
                  Konfirmasi
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPengembalian;
