import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx'
import MediaSubmitButton from './MediaSubmitButton.jsx'
import MediaList from './MediaList.jsx'
import MediaItem from './MediaItem.jsx'

export default class MediaSearchInput extends React.Component {
  render() {
    return (
      <label>
        Media search:
        <input type="text" onChange={this.props.OnSearchInputChange}></input>
      </label>
    )
  }
}