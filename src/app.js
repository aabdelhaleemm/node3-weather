const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const geocode = require('./utils/geocode')
const forcast = require('./utils/forecast')

//Definte paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handelbars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'abed'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'andrew'
    })
})


app.get("/help", (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'ali'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.adress) {
        return res.send("u should provide us Adress!")
    }
    geocode(req.query.adress, (error, dataf) => {
        if (error) {
            return res.send(error)
        }
        forcast(dataf.lat, dataf.lon, (error, data) => {
            if (error) {
                return res.send(error)
            }
            res.send({
                forcast: data,
                location: dataf.placeName
            })
        })

    })

})

app.get('/help/*', (req, res) => {
    res.render('atricle', {
        title: 'help article not found',
        name: 'abd'
    })
})

app.get('*', (req, res) => {
    res.render('not', {
        title: '404',
        name: 'ander'
    })
})

app.listen(3000, () => {
    console.log("server is on port 3000!");

})