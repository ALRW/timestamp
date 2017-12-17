const app = require('express')();

const port = process.argv[2] || 8080;

const parseTime = (time) => {
  return new Date(parseInt(time));
}

const output = (time) => (JSON.stringify({
  unix: `${time.getTime()}`,
}));

app.get('/:time', (req, res) => {
  const time = req.params.time;
  const dateObject = parseTime(time);
  const op = output(dateObject);
  res.send(op);
});

app.get('*', (req, res) => {
  res.statusMessage = 'This route is not defined';
  res.status(400).end();
})

app.listen(port, () => {
  console.log(`Express server started\n\nnow listening for connections on ${port}`)
});

