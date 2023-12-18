import React from 'react';
import { Box, Image, Button, Heading, Text, Pressable, Modal, ModalBackdrop, ModalContent, ModalHeader, ModalBody, ModalFooter, ButtonText, ModalCloseButton } from "@gluestack-ui/themed";
import { Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useState, useRef } from 'react';
import firebase from "../firebase";
const Detail = ({ route }) => {
    const navigation = useNavigation();
    const data = route.params.item;
    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)

    const deleteCostume = async () => {
        try {

            const costumeRef = firebase.database().ref(`costumes/${data.costumeId}`);
            const snapshot = await costumeRef.once("value");
            const existingCostume = snapshot.val();

            if (!existingCostume) {
                console.log("Costume not found");
                return;
            }

            // Hapus catatan dari database
            await costumeRef.remove();
            console.log("Note deleted successfully");
            navigation.replace("Profile Renter");
        } catch (error) {
            throw error;
        }
    };
    console.log(data);

    return (
        <Box flex={1} alignItems='center' backgroundColor='white'  >
            {/* <Image role='img' resizeMode='contain' source={{ uri: data.image }} alt='gambar barang' width={"100%"} height={300} /> */}
            <Box flex={5} width={"100%"} borderTopStartRadius={30} padding={15}>
                <Heading fontSize={24} marginTop={15} fontWeight="bold">
                    {data.costumeName}
                </Heading>
                <Text fontSize={18} color="#777" marginTop={8}>
                    Rp {data.rentalPrice}
                </Text>
                <Text fontSize={18} color="#02E107" marginTop={2}>
                    Tersedia
                </Text>
                <Box width={'auto'} marginTop={1}>
                    <Pressable onPress={() => showFavoritePopup()}>
                        <Ionicons name="heart-outline" size={30} color="red" marginBottom={5} />
                    </Pressable>
                </Box>
                <Text fontSize={20} marginTop={15} fontWeight="bold">Deskripsi Barang : </Text>
                <Text fontSize={16}>
                    {data.costumeDescription}
                </Text>
            </Box>

            <Box width={"100%"} alignItems='center' backgroundColor='transparent' paddingBottom={20} paddingTop={10}>
                <Pressable onPress={() => navigation.navigate('Edit Item', { data: data })} >
                    <Box width={350} backgroundColor='#021C35' p={10} alignItems='center' borderRadius={10}>
                        <Text color='white' fontWeight='bold'  >
                            Ubah Barang
                        </Text>
                    </Box>

                </Pressable>
                <Pressable onPress={() => setShowModal(true)} ref={ref} >
                    <Box width={350} backgroundColor='#DF5252' mt={2} p={10} alignItems='center' borderRadius={10}>
                        <Text color='white' fontWeight='bold' >
                            Hapus Barang
                        </Text>
                    </Box>
                </Pressable>
            </Box>
            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false)
                }}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent>
                    <ModalHeader>
                        <Heading size="lg">Apakah anda ingin hapus item ini?</Heading>
                        <ModalCloseButton>
                            {/* <Icon as={CloseIcon} /> */}
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Text>
                            {data.costumeName}
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
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button
                            size="sm"
                            action="positive"
                            borderWidth="$0"
                            backgroundColor={'$red500'}
                            onPress={deleteCostume
                            }
                        >
                            <ButtonText>Delete</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    );
}

export default Detail;
