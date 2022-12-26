import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface City {
    countryName: string;
    name: string;
    flag: string;
    image: string;
}

interface Continent {
    name: string;
    description: string;
    countries: string;
    languages: string;
    city: string;
    cityBannerImage: string;
    cities: City[];
}

export default function Continent() {
    const [continent, setContinent] = useState();

    const router = useRouter();

    

    return (
        <h1>teste</h1>
    )
}
