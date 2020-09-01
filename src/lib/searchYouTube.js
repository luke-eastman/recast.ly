var searchYouTube = (options, callback) => {
  // TODO
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {},
    contentType: 'application/json',
    success: callback,
    error: () => console.error('failed to get data')
  });
};

export default searchYouTube;
