
import React from 'react';
import { Box, Button, ButtonText, Image, Text, HStack, VStack } from '@gluestack-ui/themed';
import { useNavigation } from "@react-navigation/native";
const Aturan = () => {
    return (
        <Box backgroundColor='#fff' justifyContent='center' alignItems='center'>
            <VStack padding={20} justifyContent='center' alignItems='center'>
                <Text fontSize={25} fontWeight='bold' padding={5}>
                    Aturan Attire Emporium
                </Text>
                <Text marginTop={15} textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur tristique ex a venenatis. Ut nec cursus nisl, vitae tincidunt ex. Donec rhoncus ipsum at vulputate porttitor. Pellentesque massa justo, venenatis sed nunc lobortis, finibus elementum magna. Duis bibendum a ex nec vulputate. Donec id neque nulla. Praesent semper mollis nulla, a faucibus est. Cras eu volutpat enim.
                    Donec rutrum mattis ligula ac accumsan. Nunc auctor ultricies fringilla. Nulla vulputate et neque id vehicula. In in risus a nisi elementum pellentesque. Suspendisse cursus ante at fermentum suscipit. Curabitur fringilla urna at imperdiet rutrum. Maecenas tincidunt augue id odio facilisis, id sodales tortor interdum. Nunc ultrices magna sit amet neque auctor molestie. Maecenas in dolor sit amet lorem congue pharetra. Nunc ipsum tellus, tristique ac vestibulum eu, egestas vel elit.
                </Text>
                <Text marginTop={15} textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur tristique ex a venenatis. Ut nec cursus nisl, vitae tincidunt ex. Donec rhoncus ipsum at vulputate porttitor. Pellentesque massa justo, venenatis sed nunc lobortis, finibus elementum magna. Duis bibendum a ex nec vulputate. Donec id neque nulla. Praesent semper mollis nulla, a faucibus est. Cras eu volutpat enim.
                </Text>
            </VStack>
        </Box>

    );
};

export default Aturan;
