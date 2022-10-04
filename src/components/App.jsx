import { PureComponent } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { getData } from 'services/api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { Button } from './Button';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

export class App extends PureComponent {
  state = {
    data: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  saveQuery = value => {
    this.setState({
      query: value,
      data: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    let response;
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({
        isLoading: true,
      });
      try {
        response = await getData(page, query);
        if (response.length !== 0) {
          this.setState(prevState => ({
            data: [...prevState.data, ...response],
          }));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
        if (response.length === 0) {
          alert('Sorry, but your search did not return any results.');
        }
      }
    }
  }

  render() {
    const { data, isLoading } = this.state;
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.saveQuery}><SearchIcon/></Searchbar>
        <Box as="main" py={4}>
          <ImageGallery images={data} />
          {isLoading && <Loader />}
          {data.length !== 0 && <Button onClick={this.loadMore} />}
        </Box>
      </>
    );
  }
}
