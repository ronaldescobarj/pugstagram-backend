const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/data', (req, res) => {
  const data = {
    user: {
      nickname: 'ronaldescobarj',
      name: 'Ronald Escobar',
    },
    posts: [
      {
        username: 'ronaldescobarj',
        location: 'Cochabamba, Bolivia',
        avatar: 'https://arepa.s3.amazonaws.com/elmo.jpg',
        photo: 'https://arepa.s3.amazonaws.com/elmo002.jpg',
        like: false,
        bookmark: false,
        postComment: 'Disfrutando de mi piscina asies',
        comments: [
          {
            id: 1,
            text: 'Hola elmo',
            username: 'crispeta'
          },
          {
            id: 2,
            text: 'Perro miserable',
            username: 'gatito'
          }
        ]
      },
      {
        username: 'ronaldescobarj',
        location: 'Cochabamba, Bolivia',
        avatar: 'https://arepa.s3.amazonaws.com/elmo.jpg',
        photo: 'https://arepa.s3.amazonaws.com/elmo002.jpg',
        like: false,
        bookmark: false,
        postComment: 'Disfrutando de mi piscina asies',
        comments: [
          {
            id: 1,
            text: 'Hola elmo',
            username: 'crispeta'
          },
          {
            id: 2,
            text: 'Hola soy nacho',
            username: 'nacho'
          }
        ]
      }
    ]
  }
  res.send(data)
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
