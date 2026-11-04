// api key: eb1d8f3ba3595489315e9b840a2e53cd
// api read access token: eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjFkOGYzYmEzNTk1NDg5MzE1ZTliODQwYTJlNTNjZCIsIm5iZiI6MTc5MzU1NTU4OS4xODU5OTk5LCJzdWIiOiI2YWU3N2M4NTUzMTM5ZjgzMmJhNmQ3ZjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.58vdkqrv4u-2St_oLQTbVMyOR2xW_kpvIWwsG0ZZnlg

// bearer token 
//  curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11' \
//      --header 'Authorization: Bearer ACCESS_TOKEN'
// TMDB website


//they also use Firebase for authentication

import './App.css';
import Login from './Pages/Login';
import Slides from './Components/Slides';


function App() {


  return (
    <div className="app__container">
      <Login />
      <Slides />
      <Slides />
      <Slides />
    
      
     
    </div>
  );
}

export default App;
