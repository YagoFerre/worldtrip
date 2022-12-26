import { Flex } from "@chakra-ui/react";
import { Building, Earth, Museum, Surf, Vector } from "../Icons";
import { TravelTypeItem } from "./TravelTypeItem";

export function TravelTypes() {
    return (
        <Flex maxWidth="1160px" w="100%" justify="space-between" align="center" mx="auto" mt="6.25rem">
            <TravelTypeItem icon={Vector} title="vida noturna"/>
            <TravelTypeItem icon={Surf} title="praia"/>
            <TravelTypeItem icon={Building} title="moderno"/>
            <TravelTypeItem icon={Museum} title="clássico"/>
            <TravelTypeItem icon={Earth} title="e mais..."/>
        </Flex>
    )
}