import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
var VideoList = (props) => (
  <div className="video-list">
    <div><h5><em>< VideoListEntry video={{}}/></em> view goes here</h5></div>
    {/* <div><h5><em>{props.videos[1]}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[2]}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[3]}</em> view goes here</h5></div>
    <div><h5><em>{props.videos[4]}</em> view goes here</h5></div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
