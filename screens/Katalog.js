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
import datas from '../data/datas';


const Katalog = () => {
  console.log(datas)
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const Itemku = ({ item }) => {
    const { title, subtitle } = item;

    const isMatch =
      title.toLowerCase().includes(searchText.toLowerCase()) 
      subtitle.toLowerCase().includes(searchText.toLowerCase());

    return isMatch ? (
      <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
        <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.image} />
        <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
        <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>
        <Text marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp 400000</Text>
      </Pressable>
    ) : null;
  };
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <HeaderKatalog searchText={searchText} setSearchText={setSearchText} />
        <MasonryList
          data={datas}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Itemku item={item} />}
          onRefresh={() => refetch({ first: ITEM_CNT })}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadNext(ITEM_CNT)}
        />
      </ScrollView>
    </Box>

  );
};

export default Katalog;
