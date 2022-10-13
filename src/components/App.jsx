import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { getData } from 'services/api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

export const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const saveQuery = value => {
    setData([]);
    setQuery(value);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevpage => prevpage + 1);
  };

  const notify = message => {
    toast.error(message);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchValidation() {
      let response;
      setIsLoading(true);
      try {
        response = await getData(page, query);
        if (response.length !== 0) {
          setData(prevdata => [...prevdata, ...response]);
          setDisabled(false);
        } else {
          notify('Sorry, but your search did not return any results.');
          setDisabled(true);
        }
      } catch (error) {
        notify(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchValidation();
  }, [query, page]);

  return (
    <>
      <GlobalStyle />
      <Searchbar onSubmit={saveQuery}>
        <SearchIcon />
      </Searchbar>
      <Box as="main" py={4}>
        <ImageGallery images={data} />
        {isLoading && <Loader />}
        {data.length !== 0 && <Button onClick={loadMore} disabled={disabled} />}
      </Box>
      <ToastContainer />
    </>
  );
};
