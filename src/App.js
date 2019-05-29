import React,{Component} from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import logo from './logo.png'
import logo2 from './descarga.png'

const API_KEY= 'AIzaSyCcjeEs6Tz2U4KOoHJFGdAGeq1xDzZzm9w'


firebase.initializeApp({
  apiKey: "AIzaSyD4BMihfaM1KZ8-ImKezsOsaRHN2Mjaq3M",
  authDomain: "fir-331c8.firebaseapp.com",
  databaseURL: "https://fir-331c8.firebaseio.com",
  projectId: "fir-331c8",
  storageBucket: "fir-331c8.appspot.com",
  messagingSenderId: "583007799006",
  appId: "1:583007799006:web:912c57569ee63820"
  })
class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
        videos: [],
        selectedVideo: null,
        user: null
    };
    this.videoSearch('PartnerHero');
}
handleChange(e) {
  /* ... */
}
videoSearch(searchTerm) {
  YTSearch({key: API_KEY, term: searchTerm}, (data) => {
    console.log(data);
      this.setState({ 
          videos: data,
          selectedVideo: data[0]
      });
  });
}

uiConfig ={
  signInFlow: "popup",
  signInOptions:[
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  callbacks:{
    signInSuccess: () => false
  }
}

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {

      this.setState({ user:!!user });
  });
}
render(){
  return (
    <div className="App">
     {this.state.user?(
       <span>
      <div>
      <h5 className="partnerhero">PartnerHero</h5>
      <img className="partnerhero" src={logo} alt="Logo" />
      <h5 className="signedin">Signed in!</h5>
       <button className="signout" onClick={()=>firebase.auth().signOut()}>Sign Out</button>

        
        <h2 className="welcome">Welcome {firebase.auth().currentUser.displayName}!</h2>
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos={this.state.videos} />  
        </div>  
      </span>
     ):(
       <div>
      <h1 classame="partnerhero">PartnerHero</h1>
      <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}
      />
      <img src={logo2} alt="Logo" />
       </div>
     )}
    </div>
  )
  }
}

export default App;