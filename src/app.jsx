import React from 'react';
import ReactDOM from 'react-dom';
import MediaFetcher from './MediaFetcher.jsx'
import MediaSearchInput from './MediaSearchInput.jsx'
import MediaSubmitButton from './MediaSubmitButton.jsx'
import MediaList from './MediaList.jsx'
import MediaItem from './MediaItem.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchQueryValue:''
    };
  }
  handleSubmitButtonClick(e) {
    // User clicked a button so get the last input value
    // and set the state
    this.setState({
      query: this.state.searchQueryValue
    });
  }
  handleSearchInputChange(e) {
    // We have a new input value
    this.setState({ searchQueryValue: e.target.value });
  }
  render() {
    return (
      <div style={pageStyle}>
        <h1 style={h1Style}>Media Search</h1>
        <div style={appStyle}>
          <MediaSearchInput OnSearchInputChange={this.handleSearchInputChange.bind(this)} />
          <MediaSubmitButton OnSubmitButtonClick={this.handleSubmitButtonClick.bind(this)} />
          <MediaFetcher query={this.state.query} />
        </div>
      </div>
    )
  }
}
var pageStyle = {
  background: 'url(https://i.ytimg.com/vi/5znji1uGNIs/maxresdefault.jpg)',
  position: 'fixed',
  height: '100%',
  width: '720px',
  padding: '10px',
  color: 'white',
  'border-radius': '20',
  'text-align': 'center'
};

var appStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
  padding: '10px',
  color: 'white',
  'border-radius': '20',
  'text-align': 'center'
};

var h1Style = {
    'text-align': 'center',
    'font-family': 'helvetica',
    'border-bottom': '6px dotted black',
    'padding-bottom': '20px'
  }

ReactDOM.render(
  <App />,
  document.getElementById('root')
);