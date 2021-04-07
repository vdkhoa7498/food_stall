express = require('express');
morgan = require('morgan');
require('express-async-errors');
const cors = require('cors');
require('dotenv').config();

const app = express();
const http = require("http");
const server = http.createServer(app);

const AuthRouter = require('./app/authentication/routes/AuthRouter');

app.use(morgan('dev'));
app.use(express.json())


app.use('*', cors());

app.get('/', function(req,res){
    res.json({
        message: 'Hello vivi'
    })
})

app.use('/user', AuthRouter);

app.use('/foods', require('./routes/food.route'));
app.use('/customers', require('./routes/customer.route'));
app.use('/cities', require('./routes/city.route'));
app.use('/districts', require('./routes/district.route'));
app.use('/orders', require('./routes/order.route'));
app.use('/streets', require('./routes/street.route'));

app.get('/err', function (req, res) {
    throw new Error('Error!');
  })
  
  app.use(function (req, res, next) {
    res.status(404).json({
      error_message: 'Endpoint not found'
    });
  })
  
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
      error_message: 'Something broke!'
    });
  })

// socket
const SocketServer = require('./socket/socket');
SocketServer(server);

const port = process.env.PORT || 8000

server.listen(port, () => console.log(`server is running at https://localhost${port}`));
