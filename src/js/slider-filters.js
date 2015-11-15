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
        },
        pips: {
            mode: 'values',
            values: [0, 90, 180, 270, 360],
            density: 5
        }
    });

    hueRotateSlider.noUiSlider.on('change', function(){
        var valueHuerotate = hueRotateSlider.noUiSlider.get();
        var huerotateFilter = document.getElementById("hue-value");
        var huerotateCode = document.getElementById("panel-code-huerotate");
        huerotateFilter.setAttributeNS(null, "values", valueHuerotate );

        $(huerotateCode).text(
            '<filter id="saturate-customize">\n' +
                ' <feColorMatrix type="hueRotate" values="' + valueHuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElement = document.getElementById('slider-huerotate-value');

    hueRotateSlider.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElement.innerHTML = values[handle];
    });


    //feColorMatrix type hueRotate
    var feGammaRa = document.getElementById('slider-gamma-ra');



    noUiSlider.create(feGammaRa, {
        start: [ 0 ],
        step: 0.01,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        }
    });

    feGammaRa.noUiSlider.on('change', function(){
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var rGamma = document.getElementById("r-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCode = rGamma.getAttribute("amplitude");
        rGamma.setAttributeNS(null, "amplitude", rGammaValue );

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
                '<feComponentTransfer>\n' +
                    '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
                    '<feFuncG type="gamma" amplitude="2" exponent="3"/>\n' +
                    '<feFuncB type="gamma" amplitude="2" exponent="1"/>\n' +
                '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaRa = document.getElementById('slider-gamma-ra-value');

    feGammaRa.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElementfeGammaRa.innerHTML = values[handle];
    });



    var feGammaRe = document.getElementById('slider-gamma-re');

    var feGammaga = document.getElementById('slider-gamma-ga');
    var feGammaGe = document.getElementById('slider-gamma-ge');

    noUiSlider.create(feGammaRe, {
        start: [ 0 ],
        step: 0.01,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        }
    });

    noUiSlider.create(feGammaGa, {
        start: [ 0 ],
        step: 0.01,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        }
    });

    noUiSlider.create(feGammaGe, {
        start: [ 0 ],
        step: 0.01,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        }
    });



    feGammaRe.noUiSlider.on('change', function(){
        var reGammaValue = feGammaRe.noUiSlider.get();
        var rGammaValue = feGammaRa.noUiSlider.get();
        var rGamma = document.getElementById("r-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCodeRe = rGamma.getAttribute("exponent");
        rGamma.setAttributeNS(null, "exponent", reGammaValue );

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
                '<feComponentTransfer>\n' +
                    '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
                    '<feFuncG type="gamma" amplitude="2" exponent="3"/>\n' +
                    '<feFuncB type="gamma" amplitude="2" exponent="1"/>\n' +
                '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaRe = document.getElementById('slider-gamma-re-value');

    feGammaRe.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElementfeGammaRe.innerHTML = values[handle];
    });



