$( document ).ready(function() {
;(async () => {
    const response = await axios({
      url: 'https://api.giphy.com/v1/gifs/search?api_key=3d0U7R3nqXYamgU99oJDcAkvRcBteJi9&q=cats&limit=10&offset=0&rating=PG&lang=en',
      method: 'get'
    })
    //console.log(response)
    const array = response.data;
    console.log(array)
    var images = $( ".images" ).append("<img class='images'>"+array.data+"</img>");
    console.log(images);
  })()
});
