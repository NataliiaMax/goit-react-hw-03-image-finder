import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchGallery from 'components/API/API';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class App extends React.Component {
  state = {
    images: [],
    query: '',
    page: 1,
    status: 'idle',
    showButton: false,
  };

  handleFormSubmit = query => {
    if (query === this.state.query) {
      return;
    }
    this.setState({
      query,
      page: 1,
      images: [],
      showButton: false,
      status: 'idle',
    });
  };

  loadMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps,prevState) {
    const prevName = prevState.query;
    const nextName = this.state.query;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {try{
      this.setState({ status: 'pending' });
      fetchGallery(nextName, nextPage)
        .then(images => {
          if (images.hits.length > 1) {
            this.setState({ showButton:false, status: 'idle' });
            return toast.error('No images on your query!');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));
          this.setState({
            status: 'resolved',
            showButton:
              this.state.page < Math.ceil(images.total / 12) ? true : false,
          });
        })}
        catch(error){this.setState({error, status: 'rejected'}) };
    }
  }

  render() {
    const { images, status, showButton } = this.state;
    return (
      <div>
        <Searchbar submit={this.handleFormSubmit}></Searchbar>
        {status === 'pending' && <Loader />}
        {images.length > 0 && (
          <ImageGallery images={this.images}></ImageGallery>
        )}
        {showButton && <Button onLoadMore={this.loadMoreImages}></Button>}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="colored"
        />
      </div>
    );
  }
}

export default App;
