// ===============================================================================
// LOAD DATA
// We are linking our routes to our "data" source.
// This data source hold arrays of information on friends.
// ===============================================================================

var friendData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // When a user visits a link
  // (ex: localhost:PORT/api/friends... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {
    
    var surveyInfo = req.body;
    var totalDiff = 0;
    // Init match object
    var match = {
      "name": "",
      "photo": "",
      surveyDiff: 50
    };
    
    for (var i = 0; i < friendData.length; i++) {

      for (var h = 0; h < friendData[i].scores.length; h++) {
        totalDiff = Math.abs(parseInt(friendData[i].scores[h]) - parseInt(surveyInfo.scores[h]));
      
        if (totalDiff <= match.surveyDiff) {
          match.name = friendData[i].name;
          match.photo = friendData[i].photo;
          match.surveyDiff = totalDiff;
        }
      }
      totalDiff = 0;
    }
    console.log(surveyInfo);
    friendData.push(surveyInfo);
    console.log(match);
    res.json(match);
  });
};