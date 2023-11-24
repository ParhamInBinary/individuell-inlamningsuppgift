export interface ISearchBar {
  searchedWord: string;
  setSearchedWord: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}
