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

export function uploadImage (formdata) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + token);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
    };

    return fetch('https://api.imgur.com/3/image', requestOptions)
        .then((response) => {
            return response.json()
        })
}

export function getHotPage (sort) {
    return fetch('https://api.imgur.com/3/gallery/hot/' + sort + '/day/1?showViral=true&mature=false&album_previews=false', {
        headers: {
            'Authorization': 'Client-ID ' + CLIENT_ID
        }
    })
        .then((response) => {
            return response.json()
        })
}