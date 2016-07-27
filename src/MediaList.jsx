import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx'
import MediaSearchInput from './MediaSearchInput.jsx'
import MediaSubmitButton from './MediaSubmitButton.jsx'
import MediaItem from './MediaItem.jsx'

export default class MediaList extends React.Component {
  render() {
    return (
      <div>
        {this.props.media.map(function(item) {
          return (
            <MediaItem title={item.Title} type={item.Type} />
          )
        })}
      </div>
    )
  }
}