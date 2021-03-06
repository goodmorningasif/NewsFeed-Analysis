import React, { Component, PropTypes } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions, WebView, TouchableHighlight } from 'react-native';
import styles from './styles.js';

import Publication from './Publication';
import Slant from './Slant';

// let deviceWidth = Dimensions.get('window').width
// let deviceHeight = Dimensions.get('window').height
// let WEBVIEW_REF = 'webview';
// let URL = 'https://www.google.com'


const ArticleContainer = (article) => { 
  return (
    <View>
      <Publication 
        publication={article.publication} 
        headline={article.headline}  
        moodScore = {article.moodScore} />
    </View>
  );
}

export default ArticleContainer;