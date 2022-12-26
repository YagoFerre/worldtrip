import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface TravelTypeItemProps {
    icon: ElementType;
    title: string;
}

export function TravelTypeItem({ icon, title }: TravelTypeItemProps) {
    return (
        <Flex direction="column" align="center">
            <Icon as={icon} />
            <Text mt="1.5rem" fontSize="1.5rem" color="dark.text" fontWeight="600">
                {title}
            </Text>
        </Flex>
    )
}