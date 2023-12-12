import {
  Center,
  Box,
  Text,
  Pressable,
  Image,
  Input,
  InputField,
  HStack
} from "@gluestack-ui/themed";
import {
  FlatList,
} from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useMemo } from 'react';


const datas =
  [
    {
      id: 1,
      title: "Custom Name 1",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-6riucdxu3livf6",
    },
    {
      id: 2,
      title: "Custom Name 2",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://id-test-11.slatic.net/p/2c4481c4c6240975d9bd83a8ce046ef0.jpg",
    },
    {
      id: 3,
      title: "Custom Name 3",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://lzd-img-global.slatic.net/g/ff/kf/S4246a610d02242f38a4779d1a8d29c7cR.jpg_720x720q80.jpg",
    },
    {
      id: 4,
      title: "Custom Name 4",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://www.rukita.co/stories/wp-content/uploads/2019/10/halloween-15.JPG",
    },
    {
      id: 5,
      title: "Custom Name 5",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://ae01.alicdn.com/kf/S4ebe1d41d75d40e38a28e30d1708740ba/Anime-Wano-Country-Monkey-D-Luffy-Kostum-Cosplay-Jas-Hujan-Macam-Set-Seragam-Topi-Pakaian-Kimono.jpg",
    },
    {
      id: 6,
      title: "Custom Name 6",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://seringjalan.com/wp-content/uploads/2020/05/5-BAJU-PENGANTIN-ADAT-JAWA-TENGAH-idntimes-com.jpg",
    },
    {
      id: 7,
      title: "Custom Name 7",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://awsimages.detik.net.id/community/media/visual/2020/12/20/karina-nadila_34.jpeg?w=1200",
    },
    {
      id: 8,
      title: "Custom Name 8",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://asset-2.tstatic.net/aceh/foto/bank/images/peserta-pawai-karnaval-hut-ke-78-ri-di-ranto-peurelak.jpg",
    },
    {
      id: 9,
      title: "Custom Name 9",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//102/MTA-54630776/no-brand_kostum-star-wars-rey-costume-halloween-star-wars-rey-anak_full02.jpg",
    },
    {
      id: 10,
      title: "Custom Name 10",
      date: "18-10-2023",
      desc: "Nama Toko",
      image: "https://www.gramedia.com/blog/content/images/2018/10/Kostum-Pennywise-2.jpg",
    }
  ];


const History = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const filteredData = useMemo(() => {
    return datas.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  return (
    <Box padding={10} backgroundColor="#fff">
      <Box marginTop={10} paddingtop={10} >
        <Center >
          <Box flexDirection="row" alignItems="center" width={'95%'} borderWidth={2} borderColor="rgba(2, 28, 53, 0.6)" borderRadius={8}>
            <Ionicons name="search" size={25} color="#021C35" marginStart={20} />
            <Input
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              flex={1}
              borderWidth={0}
            >
              <InputField
                marginStart={0}
                placeholder="Cari History Pemesanan"
                value={searchText}
                onChangeText={(text) => setSearchText(text)}
              />
            </Input>
          </Box>
        </Center>
        <Text fontSize={18} marginTop={30} marginBottom={10} marginStart={10} fontWeight="bold"> Riwayat Barang </Text>
      </Box>
      <FlatList
        style={{ marginBottom: 105 }}
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            navigation.navigate('FormPengembalian', { item: item })
          }}>
            <Box paddingBottom={20} paddingHorizontal={8}>

              <Box width={'auto'} paddingHorizontal={12} paddingVertical={4} height={120} bgColor="#EAEAEA" borderTopStartRadius={10} borderTopEndRadius={10}>
                <Box flex={1} flexDirection="row">
                  <Box flex={2} flexDirection="column" padding={5}>
                    <Box flex={1}>
                      <Box flex={1}>
                        <Text fontSize={14}>{item.title}</Text>
                      </Box>
                      <Box flex={3}>
                        <Text fontWeight="bold" fontSize={14}>{item.desc}</Text>
                      </Box>
                      <Box flex={2}>
                        <Text fontWeight="bold" fontSize={18}>{item.date}</Text>
                      </Box>
                    </Box>
                  </Box>
                  <Box flex={1} justifyContent="center">
                    <Image source={{ uri: item.image }}
                      resizeMode="cover"
                      width={'100%'}
                      height={'80%'}
                      borderRadius={6}
                      alt="img"
                      role="img"
                    />
                  </Box>
                </Box>
              </Box>
              <Box height={30} backgroundColor="#656351" borderBottomStartRadius={10} borderBottomEndRadius={10}>
                <HStack justifyContent="center" alignItems="center">
                  <Ionicons name="information-circle-outline" size={20} color="#fff" marginEnd={2} marginTop={3} />
                  <Text color="#fff">Belum di Review</Text>
                </HStack>
              </Box>

            </Box>
          </Pressable>
        )}
      />
    </Box >
  );
}

export default History