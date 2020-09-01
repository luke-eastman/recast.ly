var searchYouTube = (options, callback) => {
  // TODO
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      key: options.key,
      maxResults: options.max,
      q: options.query,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    contentType: 'application/json',
    success: (data) => callback(data.items),
    error: () => console.error('failed to get data')
  });
};

export default searchYouTube;
