var api = {}

var currentDate = new Date();
var previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 7);
var fortnightDate = new Date();
fortnightDate.setDate(currentDate.getDate() - 14);

var negotiations = [
      { date : currentDate, amount : 1, value : 150},
      { date : currentDate, amount : 2, value : 250},
      { date : currentDate, amount : 3, value : 350},
      { date : previousDate, amount : 1, value : 450},
      { date : previousDate, amount : 2, value : 550},
      { date : previousDate, amount : 3, value : 650},
      { date : fortnightDate, amount : 1, value : 750},
      { date : fortnightDate, amount : 2, value : 950},
      { date : fortnightDate, amount : 3, value : 950}
    ];


api.getWeek = function(req, res) {
    var response = negotiations.filter(function(negotiation) {
        return negotiation.date > previousDate;
    });
    res.json(response);
};

api.getPrevious = function(req, res) {
   
  var response = negotiations.filter(function(negotiation) {
      return negotiation.date < currentDate && negotiation.date > fortnightDate;
  });
	setTimeout(function() {
		res.json(response);	
	}, 500);
    
};

api.getFortnight = function(req, res) {

  var response = negotiations.filter(function(negotiation) {
      return negotiation.date < previousDate;
  });
  res.json(response);
    
};

api.createNegotiation = function(req, res) {
   console.log(req.body);
   req.body.date = new Date(req.body.date.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negotiation received");
};

module.exports = api;