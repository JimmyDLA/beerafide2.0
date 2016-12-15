export default class AjaxAdapter {

  static beerSearch(searchTerms) {
    const payload = { searchTerms }
    return fetch('/api/beerSearch', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((results) => results.json())
  }

  static oneBeerSearch(webID) {
    const payload = { webID }
    return fetch('/api/oneBeerSearch', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((results) => results.json())
  }
}
