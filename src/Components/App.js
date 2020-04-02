import React, { useState, useEffect } from "react"
import { Route, Switch} from "react-router-dom"
import '../App.css';
import Gallery from "./Gallery"
import Details from "./Details"
import Timeline from "./Timeline"
import Home from './Home'
import Header from './Header';

function App() {
  //call json here
  const [launches, setLaunches] = useState(false)
  useEffect((launches) => {
    // console.log("Main - useEffect - launches", launches);
    const launchURL = "https://api.spacexdata.com/v3/launches";
    const makeAPICall = async () => {
      // setIsLoading(true);
      const res = await fetch(launchURL);
      const json = await res.json();
      // const response= json.parse(launchURL)
      setLaunches(json);
      // console.log('show json is receiving data in main ',json[0].rocket.rocket_name)
      // console.log('response----app',response)
      // setIsLoading(false);
    };
    makeAPICall();
  }, []);


  // console.log('launches in app', launches)
  // console.log('launches in app', props)
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact path='/'
          render={props => <Home {...props} launches={launches} />}
        />
        <Route
          exact path='/gallery'
          render={props => <Gallery {...props} launches={launches} />}
        />
        <Route
          path="/gallery/:id"
          render={props => <Details {...props} launches={launches} />}
        />
        <Route
          path='/timeline'
          render={props => <Timeline {...props} launches={launches} />}
        />
      </Switch>
    </div>
  );
}

export default App;