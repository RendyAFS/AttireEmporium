import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  GluestackUIProvider,
  Image,
  Heading,
  Box,
  Text,
  ScrollView,
  Input,
  InputSlot,
  InputIcon,
  SearchIcon,
  InputField,
  Icon,
  TrashIcon,
  ref,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  showModal,
  Center,
  CloseIcon,
  Button,
  ButtonText,
  Pressable
} from "@gluestack-ui/themed";
import { Dimensions, StyleSheet, Platform } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from "@react-navigation/native";
import datas from '../data/datas';

const { width: screenWidth } = Dimensions.get('window');

const Favorite = (props) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  const filteredData = useMemo(() => {
    return datas.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);
  const [entries, setEntries] = useState(datas);
  // const fontColor = "#313C47"
  const Itemku = ({ item }) => (

    <Pressable onPress={() => navigation.navigate('DetailBarang', { item: item })} backgroundColor='white' width={'95%'} marginBottom={8} rounded={3} marginLeft={4} marginRight={10} >
      <Image role='img' alt='gambar' resizeMode='cover' width={'100%'} height={150} source={item.image} />
      <Text fontSize={16} fontWeight='bold' marginLeft={5} marginVertical={8}>{item.title}</Text>
      <Text fontSize={12} color={'#777'} paddingHorizontal={10} marginBottom={8}>{item.subtitle}</Text>
      <Box flex={1} flexDirection='row'>
        <Text flex={3} marginLeft={5} marginVertical={8} color={'#DF9B52'}>Rp 400000</Text>
        <Icon onPress={() => setShowModal(true)} ref={ref} flex={1} marginTop={12} marginRight={5} color='red' as={TrashIcon} size="md" />
      </Box>
    </Pressable>
  );
  const [showModal, setShowModal] = useState(false)


  useEffect(() => {
    setEntries(datas);
  }, []);
  return (
    <Box>
      <ScrollView bgColor='#f5f5f5'>
        <Box bgColor='white' paddingVertical={10} rounded={5} >
          <Heading flex={1} marginStart={30} color={'#DF9B52'}>FAVORITE</Heading>
        </Box>

        <Box alignItems='center' padding={10}>
          <Input width={"80%"} borderColor='orange'>
            <InputSlot pl='$3'>
              <InputIcon as={SearchIcon} />
            </InputSlot>
            <InputField
              placeholder="Search..."
            />
          </Input>
        </Box>
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

      <Modal
                isOpen={showModal}
                onClose={() => {
                  setShowModal(false)
                }}
                finalFocusRef={ref}
              >
                <ModalBackdrop />
                <Center>
                  <ModalContent>
                    <ModalHeader>
                      <Heading size="lg">Hapus Favorite</Heading>
                      <ModalCloseButton>
                        <Icon as={CloseIcon} />
                      </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                      <Text fontWeight="bold">
                        Apakah Anda Yakin?
                      </Text>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        variant="outline"
                        size="sm"
                        action="secondary"
                        mr="$3"
                        onPress={() => {
                          setShowModal(false)
                        }}
                      >
                        <ButtonText>Batal</ButtonText>
                      </Button>
                      <Button
                        size="sm"
                        action="positive"
                        borderWidth="$0"
                        bgColor='red'
                        onPress={() => {
                          setShowModal(false)
                        }}
                      >
                        <ButtonText>Hapus</ButtonText>
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Center>
              </Modal>
    </Box>

    

  );
};

export default Favorite;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }),
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,

  },
});