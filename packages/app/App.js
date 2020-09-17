import CONSTS from '@monorepo/shared/core/src/constants';
import THEME from '@monorepo/shared/theme/src/constants';
import { getCurrentTime } from '@monorepo/shared/core/src/time';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import API from '@monorepo/shared/core/src/posts';
import Posts from './components/Posts';

const App = () => {
  
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  fetchPost = async() =>{
    let data = await API.fetchPost();
    setPosts(data);
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
            <Text>{getCurrentTime()}</Text>
            <Text>{CONSTS.BASE_URL}</Text>
            <Text>{THEME.COLORS.SECONDARY_COLOR}</Text>
        </ScrollView>
        <ScrollView>
          {posts.length > 0 && <Posts posts={posts}/>}
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
