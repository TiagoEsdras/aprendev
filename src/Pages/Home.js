import { Component } from 'react';
import Footer from '../Components/Footer';
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
        <Footer />
      </div>
    )
  }
}

export default Home;