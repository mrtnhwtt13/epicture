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

export function getUserInfos (token) {
    return fetch('https://api.imgur.com/3/account/me/settings', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => {
            return response.json()
        })
}

export function getUserFavorites () {
    return fetch('https://api.imgur.com/3/account/' + username + '/favorites/', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => {
            return response.json()
        })
}

export function getUserGallery () {
    return fetch('https://api.imgur.com/3/account/me/images', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => {
            return response.json()
        })
}

export function addToFavorites (imageId) {
    return fetch('https://api.imgur.com/3/image/' + imageId + '/favorite', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then((response) => {
            return response.json()
        })
}