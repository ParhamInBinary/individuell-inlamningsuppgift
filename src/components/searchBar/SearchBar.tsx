import { Button, TextField } from '@mui/material';
import { SearchBarContainer } from './styles';

interface ISearchBar {
  searchedWord: string;
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}

export const SearchBar = ({
  searchedWord,
  setSearchedWord,
  handleSearch,
}: ISearchBar) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(event.target.value);
  };

  return (
    <SearchBarContainer>
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        value={searchedWord}
        sx={{ display: 'flex', flex: 1 }}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </SearchBarContainer>
  );
};
