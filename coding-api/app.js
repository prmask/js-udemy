$.getJSON('https://api.postalpincode.in/pincode/110001', function(data) {
  var data1 = data;
  console.log(data.Success[0]);
});