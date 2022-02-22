const express = require('express')
const app = express()
const { join } = require('path')
const user = require('./routes/users.js')
const product = require('./routes/products')
const orderRoute = require('./routes/orders')
const middleWare = require('./middlewares/ordersMiddleware.js')
const { urlencoded } = require('express')
const { connectDB } = require('./database/dbconnect.js')
const cRouter = require('./routes/cookies.js')
const cookie = require('cookie-parser')
const cookieParser = require('cookie-parser')
const res = require('express/lib/response')
const session = require('express-session')
const sessionRoute = require('./routes/sessions.js')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

//Cookie middleware
app.use(cookieParser())

// Session middleware

app.use(session({
    name: '47session',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

connectDB()


app.use(urlencoded({ extended: true }))

//Routes
// app.get('/api/', (req, res) => res.send('Hello World!'))
// app.post('/about', (req, res) => res.send('About Page'))
// // app.get('/contact', (req, res) => res.send('Contact Page'))

// //String Pattern Path
// app.get('/ab?cd', (req, res) => 
// res.send('Contact Page Gmail')
// )


//App Level Midleware
// app.use(middleWare.searchVendors)

//Route level Middleware
app.use('/findme', middleWare.searchOrders, (req, res) => {
    res.send('Searching orders...1')
})

app.use('/static', express.static(join( process.cwd(), 'public')))
// app.use(express.static('public'))

//Chained Routes

// app.route('/')
//     .get((req, res) => res.send('Hello World!'))
//     .post((req, res) => res.send('About Page'))


//Users Router
app.use('/users', user)

//Products Router
app.use('/products', product)

//Orders Router
app.use('/orders', orderRoute)

//Cookie Router
app.use('/cookie', cRouter)

//Session Router
app.use('/session', sessionRoute)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))