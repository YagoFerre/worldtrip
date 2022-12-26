import { Box, Flex, Text, Image } from "@chakra-ui/react";

export function Hero() {
    return (
        <Flex h="21rem" backgroundImage="url('images/background.png')" backgroundSize="cover">
            <Flex maxWidth="1160px" width="100%" justify="space-between" align="center" mx="auto">
                <Box color="light.text">
                    <Text fontSize="2.25rem" color="light.text" fontWeight="medium">
                        5 Continentes, <br/>
                        infinitas possibilidades.
                    </Text>

                    <Text fontSize="1.25rem" mt="1.25rem">
                        Chegou a hora de tirar do papel a viagem que você <br/>
                        sempre sonhou.
                    </Text>
                </Box>
                
                <Image src="/images/airplane.svg" alt="Avião" mb="-32"/>
            </Flex>
        </Flex>
    )
}