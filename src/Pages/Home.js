import { Component } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import MainSlide from '../Components/MainSlide';
import Profile from '../Components/Profile';

class Home extends Component {

  constructor(props) {
    super(props);
    this.handlerClickCompany = this.handlerClickCompany.bind(this);
    this.handlerClickONG = this.handlerClickONG.bind(this);
    this.handlerClickStudent = this.handlerClickStudent.bind(this);
  }
  handlerClickStudent() {
    const { history } = this.props;
    history.push('/register-student');
  }

  handlerClickONG() {
    const { history } = this.props;
    history.push('/register-ong');
  }

  handlerClickCompany() {
    const { history } = this.props;
    history.push('/register-company');
  }
  render() {
    return (
      <div>
        <Header />
        <MainSlide />
        <Profile
          handlerClickStudent={this.handlerClickStudent}
          handlerClickCompany={this.handlerClickCompany}
          handlerClickONG={this.handlerClickONG}
        />
        <Footer />
      </div>
    )
  }
}

export default Home;