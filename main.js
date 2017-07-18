let divs = document.querySelector('section.main')

let URL = `https://crossorigin.me/http://www.recipepuppy.com/api/?q=`

let search = document.querySelector('#searchButton')
search.addEventListener('click', submit)

function submit() {
  // get the search term that the user tpyed into the textbox
  let searchTerm = document.querySelector('#searchTerm').value
  // search the API with the term the inputted

  fetch(URL + searchTerm)
    .then(response => response.json())
    .then(function(puppy) {
      for (var i = 0; i < puppy.results.length; i++) {
        let div = document.createElement('div')
        div.innerHTML = `
        <img src="${puppy.results[i].thumbnail}">
        <h2> ${puppy.results[i].title}</h2>
        <h3> ${puppy.results[i].href}"</h3>
      `
        divs.appendChild(div)
      }
    })
}
