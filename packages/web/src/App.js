import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import CORE_CONSTANTS from '@monorepo-local/core/constants';
import { getCurrentTime } from '@monorepo/shared/core/src/time';
import CONSTS from '@monorepo/shared/core/src/constants';
import THEME from '@monorepo/shared/theme/src/constants';
import API from '@monorepo/shared/core/src/posts';
import Posts from './components/Posts';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async() =>{
    let data = await API.fetchPost();
    setPosts(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {CORE_CONSTANTS.BASE_URL} */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>{getCurrentTime()}</p>

        <p>{CONSTS.BASE_URL}</p>

        <p>{THEME.COLORS.PRIMARY_COLOR}</p>
      </header>

      {posts.length > 0 && <Posts posts={posts}/>}

    </div>
  );
}

export default App;
