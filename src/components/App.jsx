import { PureComponent } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { getData } from 'services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';


export class App extends PureComponent {
  state = {
    data: [],
    isLoading: false,
  };

  getImage = async (value) => {
    let response;
    this.setState({
      isLoading: true,
      data: []
    });
    try {
      response = await getData(value);
      if (response.length!==0) {
        this.setState({ data: response });
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
        if (response.length == 0) {
          alert('По Вашому запиту нічого не знайдено');
        }  
    };
     
  }

  render() {
    const { data, isLoading } = this.state;
   
    return (
      <>
        <GlobalStyle />
        <Searchbar onSubmit={this.getImage} />
        {isLoading ? <Loader/> :  <ImageGallery images={data} />}
      </>
    );
  }
}
