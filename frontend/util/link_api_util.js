export const fetchLinkPreview = targetUrl => {
  return $.ajax({
    url: 'https://api.linkpreview.net',
    type: 'GET',
    dataType: 'jsonp',
    data: {
      q: targetUrl,
      key: '5a6e2aac4d97757d020e695d539d5ef513aa0be1a18e9'
    },
    success: function(result){
        console.log(result);
    }
  });
};
