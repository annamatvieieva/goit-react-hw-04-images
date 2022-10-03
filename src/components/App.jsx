import { PureComponent } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { getData } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';


export class App extends PureComponent {
  state = {
    data: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  saveQuery = (value) => {
    this.setState({
      query: value,
      data: [],
      page: 1
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
  page: prevState.page + 1,
    }))
    
  }

  

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      const { query, page } = this.state;
      let response;
      this.setState({
        isLoading: true,
      });
      try {
        response = await getData(page, query);
        if (response.length !== 0) {
          this.setState(prevState => ({ data: [...prevState.data, ...response]}));
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
        console.log(response);
        if (response.length === 0) {
          alert('По Вашому запиту нічого не знайдено');
        }
      }
    }
  }


  render() {
    const { data, isLoading } = this.state;

    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.saveQuery} />
        <ImageGallery images={data} />
        {isLoading ? <Loader /> : <ImageGallery images={data} />}
        <Button onClick={this.loadMore}/> 
      </>
    );
  }
}
