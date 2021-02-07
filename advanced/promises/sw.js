const axios = require('axios').default;

function starWarsString(id) {
  return axios.get(`https://swapi.dev/api/people/${id}/`)
    .then(function(res) {
      let name = res.data.name;
      return axios.get(res.data.films[0])
        .then( function(res) {
          let film = res.data.title;
          return axios.get(res.data.planets[0])
          .then( function(res) {
            return `${name} is featured first in ${film} on the planet ${res.data.name}`;
          })
        })
      //return 
    })
    .catch( err => console.log(err) );
}

starWarsString(1).then( res => console.log(res) );// name => console.log(name) );
