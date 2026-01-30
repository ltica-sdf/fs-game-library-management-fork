import { useState } from "react";
import LibraryList from "./LibraryList";
import LibrarySearch from "./LibrarySearch";

export type Game = {
    id: number;
    title: string;
    image: string;
};

const gameList: Game[] = [
    { id: 1, title: "EarthBound", image: "/EB.jpg" },
    { id: 2, title: "The Legend of Zelda", image: "/LOZOOT.jpg" },
    { id: 3, title: "Pokemon Platinum", image: "/PP.png" },
    { id: 4, title: "Super Mario 64", image: "/SM64.jpg" },
    { id: 5, title: "Goldeneye", image: "/Goldeneye.jpg" },
    { id: 6, title: "Super Mario World", image: "/SMW.png" },
    { id: 7, title: "Pokemon Emerald", image: "/PE.png" },
];

function LibraryPage() {
    const [searchFilter, setSearchFilter] = useState("");
    const [games, setGames] = useState<string[]>([]);
    return (
        <>
            <h2>Library Page</h2>
            <LibrarySearch
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
            />
            <LibraryList 
                games={games} 
                setGames={setGames} 
                searchFilter={searchFilter}
            />
        </>
    );
}

export default LibraryPage;
