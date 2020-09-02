import exampleVideoData from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  update(currentVideo, videoList) {
    this.setState({ currentVideo: currentVideo, videoList: videoList });

  }

  componentDidMount() {
    this.getVideos('cats');

  }

  getVideos(term) {
    var search = _.debounce(this.props.searchYouTube, 500);
    var options = {key: YOUTUBE_API_KEY, max: 5, query: term};
    search(options, (data) => this.setState({ currentVideo: data[0], videoList: data }));
  }

  handleChange(e) {
    this.getVideos(e.target.value);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search handleChange={this.handleChange.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} update={this.update.bind(this)}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} update={this.update.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }



}

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><VideoPlayer video={exampleVideoData[0]} /></div>
//       </div>
//       <div className="col-md-5">
//         <div><VideoList videos={exampleVideoData} /></div>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
