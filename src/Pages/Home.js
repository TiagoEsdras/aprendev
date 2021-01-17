import { Component } from 'react';
import Header from '../Components/Header';
import MainSlide from '../Components/MainSlide';
import Profile from '../Components/Profile';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainSlide />
        <Profile />
      </div>
    )
  }
}

export default Home;