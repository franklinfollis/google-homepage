function Search(){
  var querystring =  $('#search').val();
  if(querystring.trim()){
    var urlquery = "http://www.google.com/search?q=" + encodeURIComponent(querystring);
    window.location.href = urlquery;
    return false;
  }
  return false;
}

function feelinglucky(){
  window.location.href = "https://en.wikipedia.org/wiki/Google_Search#.22I.27m_Feeling_Lucky.22";
  return false;
}
