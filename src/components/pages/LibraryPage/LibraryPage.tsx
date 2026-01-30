import { useState } from "react";
import LibraryList from "./LibraryList";
import LibraryAddGame from "./LibraryAddGame";

function LibraryPage() {
    const [games, setGames] = useState<string[]>([]);
    return (
        <>
            <h2>Library Page</h2>
            <LibraryAddGame 
                games={games} 
                setGames={setGames} 
            />
            <LibraryList 
                games={games} 
                setGames={setGames} 
            />
        </>
    );
}

export default LibraryPage;
