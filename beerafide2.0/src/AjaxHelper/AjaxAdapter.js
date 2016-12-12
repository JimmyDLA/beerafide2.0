export default class AjaxAdapter {

  static googleSearch(searchTerms) {
    const payload = { searchTerms }
    return fetch('/api/beerSearch', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(payload)
    })
    .then((r) => r.json())
  }
}
