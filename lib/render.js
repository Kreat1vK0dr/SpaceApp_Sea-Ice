var getData = require('./get_data');

exports.showLocation = function(req,res) {
  var locID = req.params.locID;
  var context = getData.getLocationMetrics(locID);
  res.render('location_metrics', context[0]);
};
