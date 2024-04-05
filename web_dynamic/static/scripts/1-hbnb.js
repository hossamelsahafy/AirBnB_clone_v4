#!/usr/bin/node
$(document).ready(function () {
    var amenities = {};
    $('input[type="checkbox"]').change(function () {
        if(this.checked) {
            amenities[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenities[$(this).data('id')];
        }
        var amenitiesList = Object.values(amenities).join(', ');
        $('.amenities h4').text('Amenities: ' + amenitiesList);
    });
});
