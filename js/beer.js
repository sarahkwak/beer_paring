$(document).ready(function() {
  $('#beer-button').on('click', function(ev) {
    ev.preventDefault();
    debugger;
    $.ajax({
      url: 'http://api.yelp.com/v2/ConsumerKey=gQlkt1NmMAIpk1VZH2Zbeg&Token=p76a7PayHIbiNo0OrOsPZ8v-NJKEvOxu/search?',
      type: 'GET',
      dataType: 'JSONP',
      data: $('#beer-search').val()
    })
    .done(function(response) {
      console.log(response);
    })
    .fail(function(data) {
      console.log("failed" + data);
    })
  }) // submit event
})
