import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaFetcher from './MediaFetcher.jsx'
import MediaSearchInput from './MediaSearchInput.jsx'
import MediaList from './MediaList.jsx'
import MediaItem from './MediaItem.jsx'

export default class MediaSubmitButton extends React.Component {
  render() {
    return (
      <input type="button" value="Search" onClick={this.props.OnSubmitButtonClick}></input>
    )
  }
}