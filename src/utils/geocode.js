const request = require("request")

const geocode = (adress, callback) => {
  var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + adress + ".json?access_token=pk.eyJ1IjoiYWJlZGRkIiwiYSI6ImNrYTZpcnlzYTA3YjAycnFwbDNqNmNxN3cifQ.k1dhrz3_kUauhpLbPcmVzQ&limit=1"
  request({ url , json: true }, (error, res, body) => {
    if (error) {
      callback("Unable to connct to weather service!", undefined);
    }
    else if (body.features.length == 0) {
      callback("Wrong Name", undefined)
    }
    else {
      callback(undefined, {
        lat: body.features[0].center[1],
        lon: body.features[0].center[0],
        placeName: body.features[0].place_name
      })
    }

  })
}

//geocode("adress",(error,data) =>{
//})

module.exports = geocode