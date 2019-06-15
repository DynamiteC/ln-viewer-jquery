(function () {

    let hotels = [];
    // get the hotel elements
    let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
    // get the hotel data
    hotelsElms.forEach((hotelelement) => {
        let hotelJson = [];
        hotelJson.push('16-Jun-2019');
        hotelJson.push('15-Jun-2019');
        try {
            hotelJson.push(hotelelement.querySelector('span.sr-hotel__name').innerText);
            hotelJson.push(hotelelement.querySelector('a.district_link.visited_link').innerText.replace(' – Show on map', ''));
            hotelJson.push(hotelelement.querySelector('div.bui-review-score__badge').innerText);
            hotelJson.push(hotelelement.querySelector('i.bk-icon-stars').getAttribute('title'));
            if (hotelelement.querySelector('div.bui-price-display__value'))
                hotelJson.push(hotelelement.querySelector('div.bui-price-display__value').innerText);
            else
                hotelJson.push('');

            hotelJson.push(hotelelement.querySelector('span.room_link strong').innerText);
            hotelJson.push('1');
            hotelJson.push('1');
        }
        catch (exception) {
            console.log(exception)
        }
        hotels.push(hotelJson);
    });

    copy(hotels.map(function (d) {
        return d.join('	');
    }).join('\n'));
})();
