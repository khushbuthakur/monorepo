import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import THEME from '@monorepo/shared/theme/src/constants';

function Posts({posts}) {
  return (
    <View>
      {posts.map(item => {
        let {id, title, body} = item;
        return (
          <View key={id} style={style.card}>
            <View>
              <Text style={style.title}>{id} {title}</Text>
              <Text style={style.body}>{body}</Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

const style = StyleSheet.create({
  card: {
    margin: 10,
    borderBottomColor : 'gray',
    borderBottomWidth : 1,
    paddingBottom : 5
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color : THEME.COLORS.PRIMARY_COLOR
  },
  body: {
    fontSize: 14
  }
});

export default Posts
