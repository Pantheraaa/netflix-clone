import React from 'react';
import './App.css';
import Row from './components/Row'
import Banner from './components/Banner'
import requests from './requests'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        isLarger />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Mystery' fetchUrl={requests.fetchMystery} />
      <Row title='Sci-fi' fetchUrl={requests.fetchSciFi} />
      <Row title='Western' fetchUrl={requests.fetchWestern} />
      <Row title='Animation' fetchUrl={requests.fetchAnimation} />
      <Row title='Tv' fetchUrl={requests.fetchTV} />
    </div>
  );
}

export default App;
