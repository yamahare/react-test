import React, { useState } from 'react';

type Props = {
  search: (searchValue: string) => void;
};

const Search: React.FC<Props> = props => {
  const [searchValue, setSeachValue] = useState("");

  const handleSearchInputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    setSeachValue(e.currentTarget.value)
  }

  const resetInputField = () => {
    setSeachValue("");
  }

  const callSearchFunction = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="検索" />
    </form>
  )
}

export default Search;