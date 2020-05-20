const request = require("request")
const forecast = (lat, lon, callback) => {
    const options = {
        method: 'GET',
        url: 'https://api.climacell.co/v3/weather/realtime',
        qs: {
            lat: lat,
            lon: lon,
            fields: 'wind_gust,temp',
            apikey: 's9Qoe4ffMmKDzePcVctoK2bPQqUPJVWM'
        },
        json: true
    }
    request(options, (error, res, body) => {
        if (error) {
            callback("Unable to connct to weather service!", undefined)
        }
        else if (body.errorCode) {
            callback(body.message, undefined)
        }
        else {
            callback(undefined, {
                temp: body.temp.value,
                wind_gust: body.wind_gust.value

            })
        }
    })
}

//forecast(lat,lnn, (error, data) => {
//})

module.exports = forecast