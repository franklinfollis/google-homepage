function Search(){
  var querystring = "http://www.google.com/search?q=" + encodeURIComponent($('#search').val());
  window.location.replace(querystring);
  return false;
}
