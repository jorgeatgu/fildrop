    //feColorMatrix type saturate
    var saturateSlider = document.getElementById('slider-saturate');

    noUiSlider.create(saturateSlider, {
        start: [ 0 ],
        step: 0.01,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    saturateSlider.noUiSlider.on('change', function(){
        var valueSaturate = saturateSlider.noUiSlider.get();
        var saturateFilter = document.getElementById("saturate-value");
        var saturateCode = document.getElementById("panel-code-saturate");
        saturateFilter.setAttributeNS(null, "values", valueSaturate );

        $(saturateCode).text(
            '<filter id="saturate-customize">\n' +
                ' <feColorMatrix type="saturate" values="' + valueSaturate + '"/>\n' +
            '</filter>');

    });



    var stepSliderValueElement = document.getElementById('slider-saturate-value');

    saturateSlider.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElement.innerHTML = values[handle];
    });



    //feColorMatrix type hueRotate
    var hueRotateSlider = document.getElementById('slider-huerotate');

    noUiSlider.create(hueRotateSlider, {
        start: [ 180 ],
        step: 1,
        range: {
            'min': [ 0 ],
            'max': [ 360 ]
        }
    });

    hueRotateSlider.noUiSlider.on('change', function(){
        var valueHuerotate = hueRotateSlider.noUiSlider.get();
        var huerotateFilter = document.getElementById("hue-value");
        huerotateFilter.setAttributeNS(null, "values", valueHuerotate );
    });

    var stepSliderValueElement = document.getElementById('slider-huerotate-value');

    hueRotateSlider.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElement.innerHTML = values[handle];
    });



