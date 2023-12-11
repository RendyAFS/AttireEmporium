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
import DateTimePicker from '@react-native-community/datetimepicker';
import { config } from "@gluestack-ui/config";
import { useNavigation } from "@react-navigation/native";



const FormPenyewaan = ({ route }) => {
  console.log(route.params.data)
  const data = (route.params.data);
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
    <Box flex={1} flexDirection="column" bgColor="#fff" paddingHorizontal={15}>
      <Text fontWeight="bold" fontSize={18} marginTop={15}>{data.title}</Text>
      <Box flex={2} bgColor="#fff" alignItems="center" marginTop={8}>
        <Box width={'90%'}>
          <Image
            source={{ uri: data.image }}
            width={'100%'} height={'100%'}
            alt="img"
            resizeMode="cover"
            role="img"
          />
        </Box>
      </Box>
      <Box flex={3} backgroundColor="#fff">
        <Box height={'100%'} backgroundColor="white" borderTopEndRadius={20} borderTopStartRadius={20} padding={10}>
          <Text fontWeight="bold" fontSize={16} marginTop={10}>Form Penyewaan</Text>

          <Box flexDirection="column" justifyContent="space-between" marginTop={15}>
            <Box width="100%">
              <HStack>
                <Text marginBottom={5} fontSize={14}>
                  Tanggal Peminjaman:
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

            <Box width="100%">
              <HStack>
                <Text marginBottom={5} fontSize={14}>
                 Tanggal Pengembalian:
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
            >

              <TextareaInput placeholder="Catatan Tambahan..." role="dialog" />
            </Textarea>
          </Box>

          <Center flex={1} flexDirection="row">
            <Text onPress={() => setShowModal(true)} ref={ref}
              backgroundColor="#021C35"
              paddingHorizontal={115}
              paddingVertical={10}
              borderRadius={10}
              color="white"
              fontWeight="bold"
              marginTop={10}
            >
              Konfirmasi & Hubungi
            </Text>


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
                    <Heading size="lg">Konfirmasi !</Heading>
                    <ModalCloseButton>
                      <Icon as={CloseIcon} />
                    </ModalCloseButton>
                  </ModalHeader>
                  <ModalBody>
                    <Text fontWeight="bold">
                      Nama Barang: <Text>{data.title}</Text>
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
            </Modal>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

export default FormPenyewaan;
