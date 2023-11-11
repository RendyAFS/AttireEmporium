import {
  GluestackUIProvider,
  Heading,
  Center,
  StatusBar,
  Box,
  Text,
  Pressable,
  Image,
  Input,
  InputField
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import {
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";



const datas =
  [
    {
      id: 1,
      title: "Custom Name 1",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-6riucdxu3livf6",
    },
    {
      id: 2,
      title: "Custom Name 2",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://id-test-11.slatic.net/p/2c4481c4c6240975d9bd83a8ce046ef0.jpg",
    },
    {
      id: 3,
      title: "Custom Name 3",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://lzd-img-global.slatic.net/g/ff/kf/S4246a610d02242f38a4779d1a8d29c7cR.jpg_720x720q80.jpg",
    },
    {
      id: 4,
      title: "Custom Name 4",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://www.rukita.co/stories/wp-content/uploads/2019/10/halloween-15.JPG",
    },
    {
      id: 5,
      title: "Custom Name 5",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://ae01.alicdn.com/kf/S4ebe1d41d75d40e38a28e30d1708740ba/Anime-Wano-Country-Monkey-D-Luffy-Kostum-Cosplay-Jas-Hujan-Macam-Set-Seragam-Topi-Pakaian-Kimono.jpg",
    },
    {
      id: 6,
      title: "Custom Name 6",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://seringjalan.com/wp-content/uploads/2020/05/5-BAJU-PENGANTIN-ADAT-JAWA-TENGAH-idntimes-com.jpg",
    },
    {
      id: 7,
      title: "Custom Name 7",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://awsimages.detik.net.id/community/media/visual/2020/12/20/karina-nadila_34.jpeg?w=1200",
    },
    {
      id: 8,
      title: "Custom Name 8",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://asset-2.tstatic.net/aceh/foto/bank/images/peserta-pawai-karnaval-hut-ke-78-ri-di-ranto-peurelak.jpg",
    },
    {
      id: 9,
      title: "Custom Name 9",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//102/MTA-54630776/no-brand_kostum-star-wars-rey-costume-halloween-star-wars-rey-anak_full02.jpg",
    },
    {
      id: 10,
      title: "Custom Name 10",
      date: "18-10-2023",
      desc: "Deskripsi Costume Yang Dipesan",
      image: "https://www.gramedia.com/blog/content/images/2018/10/Kostum-Pennywise-2.jpg",
    }
  ];



const History = () => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    // Gunakan fungsi navigate untuk kembali ke layar sebelumnya
    navigation.goBack();
  };

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (text) => {
    setSearchKeyword(text);
  }

  // Filter data berdasarkan hasil pencarian
  const filteredData = datas.filter((item) => {
    return item.title.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  return (
    <GluestackUIProvider config={config}>
      <Box marginTop={10} marginBottom={10}>
        <Center>
          <Heading fontSize={24} marginBottom={10}> History </Heading>
          <Box flexDirection="row" alignItems="center" width={'90%'} borderWidth={2} borderColor="#DF9B52" borderRadius={10}>
            <Ionicons name="search" size={25} color="#DF9B52" style={{ marginHorizontal: 10 }} />
            <Input
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              value={searchKeyword}
              onChangeText={handleSearchChange}
              style={{ flex: 1 }} 
            >
              <InputField marginStart={5} placeholder="Cari History Pemesanan" />
            </Input>
          </Box>
        </Center>
      </Box>
      <FlatList
        data={filteredData} // Menampilkan hasil pencarian
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable onPress={() => {
            navigation.navigate('FormPengembalian',{ item: item })
          }}>
            <Box paddingTop={10} paddingHorizontal={8}>
              <Box width={'auto'} height={85} bgColor="white" borderColor="#DF9B52" borderWidth={2} borderRadius={10}>
                <Box flex={1} flexDirection="row">
                  <Box flex={1} height={85}>
                    <Image source={{ uri: item.image }}
                      width={'auto'} height={80}
                      borderTopLeftRadius={8}
                      borderBottomLeftRadius={8}
                      alt="img"
                      role="img"
                    />
                  </Box>
                  <Box flex={4} flexDirection="column" padding={5}>
                    <Box flex={1}>
                      <Text fontWeight="bold" fontSize={18}>{item.title}</Text>
                    </Box>
                    <Box flex={2}>
                      <Text fontSize={14}>{item.desc}</Text>
                    </Box>
                    <Box flex={1}>
                      <Text fontSize={14}>{item.date}</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Pressable>
        )}
      />
      <Box marginTop={15}></Box>
    </GluestackUIProvider>
  );
}

export default History