import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as="header" h="6.25rem" width="100%" bg="white" px="6">
            <Flex maxWidth="1160px" width="100%" align="center" mx="auto" justify="center">
                <Image src="/logo.svg" alt="World Trip" h="2.813rem"/>
            </Flex>
        </Flex>
    )
}