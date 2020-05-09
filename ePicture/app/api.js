var rootUrl = 'https://api.imgur.com/3/gallery/t/'
var apiKey = '8129a5baf4d8e11'


module.exports = {
    get (url) {
        return fetch(rootUrl + url, {
            headers: {
                'Authorization': 'Client-ID ' + apiKey
            }
        })
            .then((response) => {
                return response.json()
            })
    }
}