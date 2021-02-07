const axios = require('axios').default;

function getMostFollowers(...logins) {
  let urls = logins.map( username => axios.get(`http://api.github.com/users/${username}`) );
  return Promise.all(urls).then( function(res) {
    console.log(res[0].data.followers);
    let max = res.sort( (a,b) => a.data.followers < b.data.followers ? 1 : -1)[0].data;
    console.log( `${max.name} has the most followers with ${max.followers}` );
    return `${max.name} has the most followers with ${max.followers}`;
  });
}

getMostFollowers("ellie", "colt");//, "timreganporter");

