const axios = require('axios').default;

function getMostFollowers(...logins) {
  let result = new Map();
  let promises = logins.map( username => axios.get(`http://api.github.com/users/${username}`) );
  //let promises = [];
  //logins.forEach( function(user) {
    //promises.push( axios.get(`http://api.github.com/users/${user}`) );
  //});
  Promise.all(promises).then( function(users) {
    users.forEach( function(res) {
      result.set( res.data.login, res.data.followers );
      console.log(res.data.followers);
    })
    
    //result.sort( (a,b) => b.followers > a.followers ? 1 : -1 )
    sortedResults = new Map([ ...result.entries()].sort( (a,b) => b[1] > a[1] ? 1 : -1));
    console.log(sortedResults);
    //console.log(`${ Object.keys(sortedResults[0]) } has the most users at ${ Object.keys(sortedResults[0]) }`);

    // array was just as clean
  });

}
getMostFollowers("ellie", "colt", "timreganporter");
/*
  axios.get(`http://api.github.com/users/${str}`)
    .then(function(res) {
      console.log(res.data.followers);
    })
    .catch(function(err) {
      console.log(err);
    })

*/

