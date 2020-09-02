// TODO: Render the `App` component to the DOM
import searchYouTube from './lib/searchYouTube.js';
import App from './components/App.js';

ReactDOM.render(<App searchYouTube={searchYouTube.bind(this)}/>, document.getElementById('app'));