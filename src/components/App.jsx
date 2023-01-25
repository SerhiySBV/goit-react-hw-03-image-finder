import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Component } from 'react';
import { fetchImages } from '../services/fetchImages';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, images, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
        }));
      });
    }
  }

  hendleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };
  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        <Button />
        <Modal />
      </div>
    );
  }
}
