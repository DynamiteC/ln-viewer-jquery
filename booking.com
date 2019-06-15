(function () {

    let hotels = [];
    // get the hotel elements
    let hotelsElms = document.querySelectorAll('div.sr_property_block[data-hotelid]');
    // get the hotel data
    hotelsElms.forEach((hotelelement) => {

        try {
            if (hotelelement.querySelector('span.sr-hotel__name')) {
                let hotelJson = [];
                hotelJson.push('16-Jun-2019');
                hotelJson.push('15-Jun-2019');
                hotelJson.push(hotelelement.querySelector('span.sr-hotel__name').innerText);
                if (hotelelement.querySelector('a.district_link.visited_link'))
                    hotelJson.push(hotelelement.querySelector('a.district_link.visited_link').innerText.replace(' – Show on map', ''));
                else
                    hotelJson.push('');
                if (hotelelement.querySelector('div.bui-review-score__badge'))
                    hotelJson.push(hotelelement.querySelector('div.bui-review-score__badge').innerText);
                else
                    hotelJson.push('');
                if (hotelelement.querySelector('i.bk-icon-stars'))
                    hotelJson.push(hotelelement.querySelector('i.bk-icon-stars').getAttribute('title'));
                else
                    hotelJson.push('');
                if (hotelelement.querySelector('div.bui-price-display__value'))
                    hotelJson.push(hotelelement.querySelector('div.bui-price-display__value').innerText);
                else
                    hotelJson.push('');
                if (hotelelement.querySelector('span.room_link strong'))
                    hotelJson.push(hotelelement.querySelector('span.room_link strong').innerText);
                else
                    hotelJson.push('');
                hotelJson.push('1');
                hotelJson.push('1');
                hotels.push(hotelJson);
            }
        }
        catch (exception) {
            console.log(exception)
        }

    });

    copy(hotels.map(function (d) {
        return d.join('	');
    }).join('\n'));
})();
