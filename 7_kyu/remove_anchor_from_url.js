//Complete the function/method so that it returns the url with anything after the anchor (#) removed.


function removeUrlAnchor(url){
  let newIndex = url.indexOf('#')
  if(newIndex !== -1){
    url = url.substring(0, newIndex)
  }
  return url
}

console.log(removeUrlAnchor('www.codewars.com#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))
console.log(removeUrlAnchor('www.codewars.com/katas/'))