import { Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link';

interface SliderItemProps {
    continentSlug: string;
    continentName: string;
    continentImage: string;
    continentShortDescription: string;
}

export function SliderItem({ continentSlug, continentName, continentImage, continentShortDescription }: SliderItemProps) {
    return (
        <Flex
        height={[250, 450]}
        justify="center"
        align="center"
        direction="column"
        position="relative"
        background="rgba(0,0,0,0.5)"
        _before={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundImage: `url(${continentImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1
        }}>
            <Link href={`/continent/${continentSlug}`}>
                <Heading fontSize="3rem" color="light.text">
                    {continentName}
                </Heading>

                <Heading mt="4" fontSize="1.5rem" color="light.text">
                    {continentShortDescription}
                </Heading>
            </Link>
        </Flex>
    )
}