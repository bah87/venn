export const fetchTrendingNews = topic => {
  return $.ajax({
    method: 'GET',
    url: `https://newsapi.org/v2/top-headlines?country=us&` +
    `category=${topic}` + `&apiKey=cf34d376a7b24432952b954b7bd217c5`,
    dataType: 'json'
  });
};
