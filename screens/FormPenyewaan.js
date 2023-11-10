import React, { useState } from "react";
import {
  GluestackUIProvider,
  Image,
  Heading,
  Textarea,
  TextareaInput,
  Box,
  Text,
  Pressable,
  Center,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Icon,
  CloseIcon,
  ModalBody,
  Button,
  ButtonText,
  ModalCloseButton,
  CalendarDaysIcon,
  HStack
} from "@gluestack-ui/themed";
import { FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { config } from "@gluestack-ui/config";
import { useNavigation } from "@react-navigation/native";



// Data
const datas = [
  {
    id: 1,
    title: "Custom Name 1",
    date: "18-10-2023",
    desc: "Deskripsi Costume Yang Dipesan",
    image: "https://down-id.img.susercontent.com/file/sg-11134201-22100-6riucdxu3livf6",
  },
];



const FormPenyewaan = () => {
  const [showModal, setShowModal] = useState(false)
  const ref = React.useRef(null)
  const navigation = useNavigation();
  const handleGoBack = () => {
    // Gunakan fungsi navigate untuk kembali ke layar sebelumnya
    navigation.goBack();
  };

  const [pickupDate, setPickupDate] = useState(new Date()); // State untuk tanggal peminjaman
  const [returnDate, setReturnDate] = useState(new Date()); // State untuk tanggal pengembalian
  const [showPickupDatePicker, setShowPickupDatePicker] = useState(false);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);

  const onPickupDateChange = (_, selected) => {
    if (selected) {
      setPickupDate(selected);
      setShowPickupDatePicker(false);
    }
  };

  const onReturnDateChange = (_, selected) => {
    if (selected) {
      setReturnDate(selected);
      setShowReturnDatePicker(false);
    }
  };

  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} flexDirection="column" bgColor="#DF9B52" paddingHorizontal={10}>
        <Box flex={1} bgColor="#DF9B52" alignItems="center" paddingTop={20}>
          <Box width={'90%'}>
            <FlatList
              width={'100%'}
              data={datas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <Box width={'auto'} height={350}>
                  <Box flex={1} flexDirection="column">
                    <Box flex={8}>
                      <Image
                        source={{ uri: item.image }}
                        width={'auto'} height={500}
                        alt="img"
                        resizeMode="cover"
                        borderRadius={10}
                      />
                    </Box>
                    <Box flex={1} flexDirection="column" paddingBottom={20} paddingTop={5} paddingStart={10} backgroundColor="rgba(255, 255, 255, 0.9)" >
                      <Text fontWeight="bold" fontSize={18}>{item.title}</Text>
                      <Text fontSize={14}>{item.desc}</Text>
                    </Box>
                  </Box>
                </Box>
              )}
            />
          </Box>
        </Box>
        <Box flex={1} backgroundColor="#DF9B52">
          <Box height={'100%'} backgroundColor="white" borderTopEndRadius={20} borderTopStartRadius={20} padding={10}>
            <Box flexDirection="row" justifyContent="space-between" marginTop={15}>
              <Box width="48%">
                <HStack>
                  <Icon as={CalendarDaysIcon} size="md" />
                  <Text fontWeight="bold" marginStart={5}>
                    Peminjaman:
                  </Text>
                </HStack>
                <Pressable onPress={() => setShowPickupDatePicker(true)}>
                  <Text padding={8} borderColor="black" borderWidth={1} borderRadius={5} marginBottom={20}>
                    {pickupDate.toDateString()}
                  </Text>
                </Pressable>
                {showPickupDatePicker && (
                  <DateTimePicker
                    value={pickupDate}
                    mode="date"
                    display="calendar"
                    onChange={onPickupDateChange}
                  />
                )}
              </Box>

              <Box width="48%">
                <HStack>
                  <Icon as={CalendarDaysIcon} size="md" />
                  <Text fontWeight="bold" marginStart={5}>
                    Pengembalian:
                  </Text>
                </HStack>
                <Pressable onPress={() => setShowReturnDatePicker(true)}>
                  <Text padding={8} borderColor="black" borderWidth={1} borderRadius={5} marginBottom={20}>
                    {returnDate.toDateString()}
                  </Text>
                </Pressable>
                {showReturnDatePicker && (
                  <DateTimePicker
                    value={returnDate}
                    mode="date"
                    display="calendar"
                    onChange={onReturnDateChange}
                  />
                )}
              </Box>
            </Box>

            <Box>
              <Textarea
                size="md"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
                borderWidth={1}
                borderColor="black"
                width={'100%'}
                marginTop={20}
              >

                <TextareaInput placeholder="Catatan Tambahan..." role="dialog" />
              </Textarea>
            </Box>

            <Center flex={1} flexDirection="row">
              <Text onPress={handleGoBack}
                backgroundColor="red"
                paddingVertical={10}
                paddingHorizontal={60}
                borderRadius={10}
                color="white"
                fontWeight="bold"
                marginTop={50}
                margin={10}

              >
                Batal
              </Text>
              <Text onPress={() => setShowModal(true)} ref={ref}
                backgroundColor="green"
                paddingVertical={10}
                paddingHorizontal={40}
                borderRadius={10}
                color="white"
                fontWeight="bold"
                marginTop={50}
                margin={10}
              >
                Konfirmasi
              </Text>


              <Modal
                isOpen={showModal}
                onClose={() => {
                  setShowModal(false)
                }}
                finalFocusRef={ref}
              >
                <ModalBackdrop />
                <FlatList
                  justifyContent="center"
                  width={'100%'}
                  data={datas}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({ item }) => (
                    <Center>
                      <ModalContent>
                        <ModalHeader>
                          <Heading size="lg">Konfirmasi !</Heading>
                          <ModalCloseButton>
                            <Icon as={CloseIcon} />
                          </ModalCloseButton>
                        </ModalHeader>
                        <ModalBody>
                          <Text fontWeight="bold">
                            Detail Barang: <Text>{item.title}</Text>
                          </Text>
                          <Text fontWeight="bold">
                            Tanggal Peminjaman: <Text>{pickupDate.toDateString()}</Text>
                          </Text>
                          <Text fontWeight="bold">
                            Tanggal Pengembalian: <Text>{returnDate.toDateString()}</Text>
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
                            onPress={() => {
                              navigation.navigate('Home')
                            }}
                          >
                            <ButtonText>Konfirmasi</ButtonText>
                          </Button>
                        </ModalFooter>
                      </ModalContent>
                    </Center>
                  )}
                />
              </Modal>
            </Center>
          </Box>
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default FormPenyewaan;
