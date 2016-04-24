

$(function(){


    $("#in_circle").click(function(){

        var selected = $('input[name="selected"]:checked');
        var from = selected[0].value;
        var to = selected[1].value;

        var distance = $("#slider").val();

        $.getJSON('/api/in_circle/' + from + '/' + to + '/' + distance, function(data){
            $("#distance").html(radiusTemplate(data));
        });

    });

    $("#get_closest").click(function(){

        var selected = $('input[name="selected"]:checked');
        var from = selected[0].value;

        $.getJSON('/api/nearest/' + from, function(data){
            $("#distance").html(nearestTemplate(data));
        });

    });

    $("#get_center").click(function(){

        $.getJSON('/api/center', function(data){
            $("#distance").html(data.center.latitude + ", " + data.center.longitude);
        });

    });

    $("#put_on_map").click(function(){
        var selected = $('input[name="selected"]:checked');

        var from = selected[0].value;


        $.getJSON('/api/selected/' + from, function(results){
            addMarker(results.location);
        })

    });

    $("#clear_markers").click(function(){
        clearMarkers();
    })

    $("#hide_map").click(function () {
        $("#map").toggle();
    })

    $("#slider").on("change", function(evt){
        $("#circleSize").text(evt.target.value);
    });

    var map;
    var markers = [];

    window.initMap = function() {
        var point_hope = {
            lat:68.3477778,
            lng: -166.8080556
        };
        var noatak = {
            lat:67.5692549,
            lng: -163.2329257
        };

        var kotzebue = {
           lat:66.89833329999999,
           lng: -162.5966666
       };

       var council = {
          lat:64.8953301,
          lng: -163.67737550000004
      };

       var wainwright = {
          lat:70.63694439999999,
          lng: -160.03833329999998
      };

        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: point_hope
        });

        var marker = new google.maps.Marker({
            position: point_hope,
            map: map,
            title: 'Point Hope'
        });
        var marker2 = new google.maps.Marker({
            position: noatak,
            map: map,
            title: 'Noatak'
        });

        var marker3 = new google.maps.Marker({
            position: kotzebue,
            map: map,
            title: 'Kotzebue'
        });

        var marker4 = new google.maps.Marker({
            position: council,
            map: map,
            title: 'Council'
        });

        var marker5 = new google.maps.Marker({
            position: wainwright,
            map: map,
            title: 'Wainwright'
        });
    };




    function addMarker(location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        markers.push(marker);
    }

    // Sets the map on all markers in the array.
    function setMapOnAll(map) {
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
      }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
      setMapOnAll(null);
    }

});
