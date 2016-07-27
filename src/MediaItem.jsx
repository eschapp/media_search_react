import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx'
import MediaSearchInput from './MediaSearchInput.jsx'
import MediaSubmitButton from './MediaSubmitButton.jsx'
import MediaList from './MediaList.jsx'

export default class MediaItem extends React.Component{
  render() {
    return (
      <div style={itemStyle} >Title: {this.props.title}; which happens to be a {this.props.type}.</div>
    )
  }
}

var itemStyle ={
  background: 'rgba(0, 0, 0, 0.6)',
  border: '2px solid black',
  'border-radius': '20',
  'padding-top': '5px',
  'margin': '8 auto 8 auto'
};