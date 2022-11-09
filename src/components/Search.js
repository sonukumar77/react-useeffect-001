import { useRef } from "react";
const Search = ({setKeyword}) => {

    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(inputRef.current.value);
    }
    return (
        <div className="searchContainer">
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search;