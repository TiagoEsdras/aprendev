import { Component } from 'react';
import Header from '../Components/Header';
import MainSlide from '../Components/MainSlide';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSlide />
      </div>
    )
  }
}

export default Home;