const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=e5e52bba3a7170cfe585dd276d7d5c8a'

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else callback(undefined, 'It is currently ' + response.body.main.temp + ' degrees out. It feels like ' + response.body.main.feels_like + ' degrees out')
    })
}

module.exports = forecast