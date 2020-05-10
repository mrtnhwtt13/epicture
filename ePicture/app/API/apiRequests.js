var CLIENT_ID = 'e034a463e9043d0'


export function searchByTag (tag) {
    return fetch('https://api.imgur.com/3/gallery/t/' + tag, {
        headers: {
            'Authorization': 'Client-ID ' + CLIENT_ID
        }
    })
        .then((response) => {
            return response.json()
        })
}