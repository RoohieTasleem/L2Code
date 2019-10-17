// Express Application
import Express from 'express';

const app = Express();


// Client request
app.get('/', (req, res, next)=>{
    res.send('Touring Booking API');
})

app.get('/tours', (req, res, next)=>{
    res.send('List of Tours...');
})
app.post('/', (req, res, next)=>{
    res.send('Add a new Tour...');
})

// start the server and listing to incoming request on express app
// use port 3000 unless there exists a preconfigured port
// app.set('port', 3000) is another option
app.listen(process.env.PORT || 9000, ()=>{
    console.log('server started');
});
// second param of the above function is executed once the server is started.