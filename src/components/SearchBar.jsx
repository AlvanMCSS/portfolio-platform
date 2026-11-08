function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div>
            <input 
            type="text"
            placeholder="Search for projects..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    )
}

export default SearchBar;