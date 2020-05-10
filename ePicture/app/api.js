var rootUrl = 'https://api.imgur.com/3/gallery/t/'
var apiKey = 'e034a463e9043d0'


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