var api = require('../api');

module.exports  = function(app) {
    
    app.route('/negotiations/week')
        .get(api.getWeek);
        
    app.route('/negotiations/previous')
        .get(api.getPrevious);
        
    app.route('/negotiations/fortnight')
        .get(api.getFortnight);  
        
    app.route('/negotiations')
        .post(api.createNegotiation);          
};