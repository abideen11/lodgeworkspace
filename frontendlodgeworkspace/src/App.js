import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Rentals from './RentalContainer';
import RentalContainer from './RentalContainer';
import Error from './Error';
import LogIn from './LogIn';
import RentalForm from './RentalForm';
import Rentalrockymount from './Rentalrockymount';
import Rentalocala from './Rentalocala';
import Rentalmountpleasant from './Rentalmountpleasant';
import Rentalcrawford from './Rentalcrawford';
import Rentalgreencove from './Rentalgreencove';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    hosts: [],
    clickedRental: null
  }
  componentDidMount() {
    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(data => {
      this.setState({
        hosts: data
      })
    })
  }
  onClickedRental = (rental) => {
    this.setState({
      clickedRental: rental
    })
  }
  render() {
    console.log(this.state.hosts)
    return(
      <BrowserRouter>
        <div>
          <Route component={Header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rentals" render={() => <RentalContainer hosts={this.state.hosts} onClickedRental={this.onClickedRental} />} />
            <Route path="/rockymount" render={() => <Rentalrockymount clickedRental={this.state.clickedRental} />} />
            <Route path="/ocala" render={() => <Rentalocala clickedRental={this.state.clickedRental} /> } />
            <Route path="/mountpleasant" render={() => <Rentalmountpleasant clickedRental={this.state.clickedRental} /> } />
            <Route path="/crawford" render={() => <Rentalcrawford clickedRental={this.state.clickedRental} />} />
            <Route path="/greencovesprings" render={() => <Rentalgreencove clickedRental={this.state.clickedRental} />} />
            {/* <Route path="/rentalform" render={() => <RentalForm clickedRental={this.state.clickedRental} />} /> */}
            <Route path="/login" component={LogIn} />
            <Route path="*" component={Error} />
          </Switch>
          <Route component={Footer} /> 
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
