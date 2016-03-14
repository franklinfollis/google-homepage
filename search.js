function Search(){
  var querystring =  $('#search').val();
  if(querystring.trim()){
    var urlquery = "http://www.google.com/search?q=" + encodeURIComponent(querystring);
    window.location.replace(urlquery);
    return false;
  }
  return false;
}
