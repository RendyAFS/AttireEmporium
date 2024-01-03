import React, { useState } from 'react';
import { Box, Text, VStack, Pressable } from '@gluestack-ui/themed'; // Sesuaikan dengan import komponen dari library Anda
import { Checkbox, CheckboxIndicator, CheckboxIcon } from '@gluestack-ui/themed'; // Sesuaikan dengan import komponen Checkbox dari library Anda
import { CheckIcon } from '@gluestack-ui/themed'; // Sesuaikan dengan import ikon dari library Anda
import { useNavigation } from '@react-navigation/native';

const Aturan = () => {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(true); // State untuk nilai checkbox, diatur menjadi false agar tidak tercentang secara awal

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Mengubah nilai checkbox saat diklik
    };
    const handlePressableClick = () => {
        if (isChecked) {
            // Lakukan tindakan yang diinginkan jika checkbox tercentang
            // console.log('Tombol Diklik karena Checkbox tercentang');
            // Tambahkan logika atau aksi lain yang ingin Anda lakukan saat tombol diklik dan checkbox tercentang
            navigation.goBack(); // Kembali ke layar sebelumnya saat tombol ditekan
        }
    };
    return (
        <Box backgroundColor='#fff' justifyContent='center' alignItems='center'>
            <VStack width={'100%'} height={'100%'} justifyContent='center' alignItems='center' paddingHorizontal={45}>
                <Text fontSize={25} fontWeight='bold' padding={5}>
                    Aturan Attire Emporium
                </Text>
                <Text marginTop={15} textAlign='justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur tristique ex a venenatis. Ut nec cursus nisl, vitae tincidunt ex. Donec rhoncus ipsum at vulputate porttitor. Pellentesque massa justo, venenatis sed nunc lobortis, finibus elementum magna. Duis bibendum a ex nec vulputate. Donec id neque nulla. Praesent semper mollis nulla, a faucibus est. Cras eu volutpat enim.
                    Donec rutrum mattis ligula ac accumsan. Nunc auctor ultricies fringilla. Nulla vulputate et neque id vehicula. In in risus a nisi elementum pellentesque. Suspendisse cursus ante at fermentum suscipit. Curabitur fringilla urna at imperdiet rutrum. Maecenas tincidunt augue id odio facilisis, id sodales tortor interdum. Nunc ultrices magna sit amet neque auctor molestie. Maecenas in dolor sit amet lorem congue pharetra. Nunc ipsum tellus, tristique ac vestibulum eu, egestas vel elit.
                </Text>
                <VStack justifyContent='center' alignItems='center' marginTop={15}>
                    <Checkbox
                        size="md"
                        isInvalid={false}
                        isDisabled={false}
                        aria-label="Label Checkbox"
                        isChecked={isChecked} // Menyimpan nilai dari state isChecked untuk mengontrol kondisi checkbox
                        onChange={handleCheckboxChange} // Mengatur fungsi untuk menangani perubahan checkbox
                    >
                        <CheckboxIndicator mr="$2" >
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <Text fontWeight='bold' textAlign='justify'>
                            Saya setuju dengan aturan diatas, tidak akan melanggar satu aturan pun dan akan menerima hukuman jika melanggar.
                        </Text>
                    </Checkbox>

                    <Pressable
                        marginTop={15}
                        onPress={handlePressableClick
                        }
                    >
                        <Text
                            backgroundColor='#021C35'
                            color='#fff'
                            textAlign='justify'
                            fontWeight='bold'
                            paddingVertical={10}
                            paddingHorizontal={80}
                            borderRadius={10}
                            opacity={isChecked ? 1 : 0.5} // Mengatur opasitas tombol berdasarkan kondisi checkbox
                        >
                            Simpan Perubahan
                        </Text>
                    </Pressable>
                </VStack>
            </VStack>
        </Box>
    );
};

export default Aturan;
