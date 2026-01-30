interface mySearch {
    searchFilter: string;
    setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function LibrarySearch({ searchFilter, setSearchFilter}: mySearch) {
    return (
        <input 
            type="text"
            placeholder="Enter your game name"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
        />
    );
}