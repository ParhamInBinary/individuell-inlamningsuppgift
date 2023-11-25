import { Typography } from '@mui/material';
import { useState } from 'react';

import { Header, IWord, ResultComponent, SearchBar } from '.';
import { Container } from './styles';

function App() {
  const [searchedWord, setSearchedWord] = useState<string>('');
  const [result, setResult] = useState<IWord[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Run a try/catch on search from API and setting result and error accordingly
  const fetchWordData = async (word: string) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setResult(data);
        setError(null);
      } else {
        setError('**Word not found**');
        setResult(null); // Clear previous results if there was an error
      }
    } catch (error) {
      console.error('Error fetching word:', error);
      setError('Error fetching word');
      setResult(null); // Clear previous results if there was an error
    }
  };

  // Makes sure the searched word has characters after trimming whitespaces before rendering accordingly
  const handleSearch = () => {
    if (searchedWord.trim() === '') {
      setError('**Please enter a word**');
      setResult(null); // Clear previous results if there was an error
    } else {
      fetchWordData(searchedWord);
      setSearchedWord('');
    }
  };

  return (
    <Container>
      <Header />
      <SearchBar
        searchedWord={searchedWord}
        setSearchedWord={setSearchedWord}
        handleSearch={handleSearch}
      />
      {error && (
        <Typography variant="body1" color="red">
          {error}
        </Typography>
      )}
      <ResultComponent result={result} />
    </Container>
  );
}

export default App;
