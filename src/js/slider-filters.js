    //feColorMatrix type saturate
    var saturateSlider = document.getElementById('slider-saturate');

    noUiSlider.create(saturateSlider, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    saturateSlider.noUiSlider.on('change', function() {
        var valueSaturate = saturateSlider.noUiSlider.get();
        var saturateFilter = document.getElementById("saturate-value");
        var saturateCode = document.getElementById("panel-code-saturate");
        saturateFilter.setAttributeNS(null, "values", valueSaturate);

        $(saturateCode).text(
            '<filter id="saturate-customize">\n' +
            ' <feColorMatrix type="saturate" values="' + valueSaturate + '"/>\n' +
            '</filter>');

    });



    var stepSliderValueElement = document.getElementById('slider-saturate-value');

    saturateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });



    //feColorMatrix type hueRotate
    var hueRotateSlider = document.getElementById('slider-huerotate');

    noUiSlider.create(hueRotateSlider, {
        start: [180],
        step: 1,
        range: {
            'min': [0],
            'max': [360]
        },
        pips: {
            mode: 'values',
            values: [0, 90, 180, 270, 360],
            density: 5
        }
    });

    hueRotateSlider.noUiSlider.on('change', function() {
        var valueHuerotate = hueRotateSlider.noUiSlider.get();
        var huerotateFilter = document.getElementById("hue-value");
        var huerotateCode = document.getElementById("panel-code-huerotate");
        huerotateFilter.setAttributeNS(null, "values", valueHuerotate);

        $(huerotateCode).text(
            '<filter id="saturate-customize">\n' +
            ' <feColorMatrix type="hueRotate" values="' + valueHuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElement = document.getElementById('slider-huerotate-value');

    hueRotateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElement.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Gamma
    1/6
    Red - Amplitude
    */

    var feGammaRa = document.getElementById('slider-gamma-ra');

    noUiSlider.create(feGammaRa, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    feGammaRa.noUiSlider.on('change', function() {
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var rGamma = document.getElementById("r-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCode = rGamma.getAttribute("amplitude");
        rGamma.setAttributeNS(null, "amplitude", rGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaRa = document.getElementById('slider-gamma-ra-value');

    feGammaRa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaRa.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Gamma
    2/6
    Red - Exponent
    */

    var feGammaRe = document.getElementById('slider-gamma-re');

    noUiSlider.create(feGammaRe, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });


    feGammaRe.noUiSlider.on('change', function() {
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var rGamma = document.getElementById("r-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCodeRe = rGamma.getAttribute("exponent");
        rGamma.setAttributeNS(null, "exponent", reGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaRe = document.getElementById('slider-gamma-re-value');

    feGammaRe.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaRe.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Gamma
    3/6
    Green - Amplitude
    */

    var feGammaGa = document.getElementById('slider-gamma-ga');

    noUiSlider.create(feGammaGa, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    feGammaGa.noUiSlider.on('change', function() {
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var gGamma = document.getElementById("g-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCode = gGamma.getAttribute("amplitude");
        gGamma.setAttributeNS(null, "amplitude", gGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaGa = document.getElementById('slider-gamma-ra-value');

    feGammaGa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaGa.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Gamma
    4/6
    Green - Exponent
    */

    var feGammaGe = document.getElementById('slider-gamma-ge');


    noUiSlider.create(feGammaGe, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    feGammaGe.noUiSlider.on('change', function() {
        var reGammaValue = feGammaRe.noUiSlider.get();
        var rGammaValue = feGammaRa.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var rGamma = document.getElementById("g-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCodeRe = rGamma.getAttribute("amplitude");
        rGamma.setAttributeNS(null, "amplitude", gaGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaGe = document.getElementById('slider-gamma-ge-value');

    feGammaGe.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaGe.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Gamma
    5/6
    Blue - Amplitude
    */

    var feGammaBa = document.getElementById('slider-gamma-ba');

    noUiSlider.create(feGammaBa, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    feGammaBa.noUiSlider.on('change', function() {
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var bGamma = document.getElementById("b-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCode = bGamma.getAttribute("amplitude");
        bGamma.setAttributeNS(null, "amplitude", bGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaBa = document.getElementById('slider-gamma-ba-value');

    feGammaBa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaBa.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Gamma
    6/6
    Blue - Exponent
    */

    var feGammaBe = document.getElementById('slider-gamma-be');

    noUiSlider.create(feGammaBe, {
        start: [0],
        step: 0.01,
        range: {
            'min': [0],
            'max': [1]
        },
        pips: {
            mode: 'values',
            values: [0, 1],
            density: 10
        }
    });

    feGammaBe.noUiSlider.on('change', function() {
        var rGammaValue = feGammaRa.noUiSlider.get();
        var reGammaValue = feGammaRe.noUiSlider.get();
        var gGammaValue = feGammaGa.noUiSlider.get();
        var gaGammaValue = feGammaGe.noUiSlider.get();
        var bGammaValue = feGammaBa.noUiSlider.get();
        var beGammaValue = feGammaBe.noUiSlider.get();
        var bGamma = document.getElementById("b-gamma");
        var gammaPanel = document.getElementById("panel-code-gamma");
        var gammaCode = bGamma.getAttribute("exponent");
        bGamma.setAttributeNS(null, "exponent", beGammaValue);

        $(gammaPanel).text(
            '<filter id="gamma">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="gamma" amplitude="' + rGammaValue + '" exponent="' + reGammaValue + '"/>\n' +
            '<feFuncG type="gamma" amplitude="' + gGammaValue + '" exponent="' + gaGammaValue + '"/>\n' +
            '<feFuncB type="gamma" amplitude="' + bGammaValue + '" exponent="' + beGammaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementfeGammaBe = document.getElementById('slider-gamma-be-value');

    feGammaBe.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementfeGammaBe.innerHTML = values[handle];
    });


    //feGaussianBlur
    var blurSlider = document.getElementById('slider-blur');

    noUiSlider.create(blurSlider, {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [20]
        },
        pips: {
            mode: 'values',
            values: [0, 5, 10, 15, 20],
            density: 10
        }
    });

    blurSlider.noUiSlider.on('change', function() {
        var valueBlur = blurSlider.noUiSlider.get();
        var filterBlur = document.getElementById("blur-value");
        var panelBLur = document.getElementById("panel-code-blur");
        filterBlur.setAttributeNS(null, "stdDeviation", valueBlur);

        $(panelBLur).text(
            '<filter id="blur-customize">\n' +
            ' <feGaussianBlur stdDeviation="' + valueBlur + '"/>\n' +
            '</filter>');

    });

    var stepSliderValueBlurElement = document.getElementById('slider-blur-value');

    blurSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueBlurElement.innerHTML = values[handle];
    });

    //feMorphology - Erode
    var morphoSlider = document.getElementById('slider-morpho');

    noUiSlider.create(morphoSlider, {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [20]
        },
        pips: {
            mode: 'values',
            values: [0, 5, 10, 15, 20],
            density: 10
        }
    });

    morphoSlider.noUiSlider.on('change', function() {
        var valueMorpho = morphoSlider.noUiSlider.get();
        var filterMorpho = document.getElementById("morpho-value");
        var panelMorpho = document.getElementById("panel-code-morpho");
        filterMorpho.setAttributeNS(null, "radius", valueMorpho);

        $(panelMorpho).text(
            '<filter id="morpho-customize">\n' +
            ' <feGaussianBlur operator="erode" in="SourceGraphic" radius="' + valueMorpho + '"/>\n' +
            '</filter>');

    });

    var stepSliderValueMorphoElement = document.getElementById('slider-morpho-value');

    morphoSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueMorphoElement.innerHTML = values[handle];
    });

    //feMorphology - Dilate
    var morphoDilateSlider = document.getElementById('slider-morpho-dilate');

    noUiSlider.create(morphoDilateSlider, {
        start: [0],
        step: 1,
        range: {
            'min': [0],
            'max': [20]
        },
        pips: {
            mode: 'values',
            values: [0, 5, 10, 15, 20],
            density: 10
        }
    });

    morphoDilateSlider.noUiSlider.on('change', function() {
        var valueMorphoDilate = morphoDilateSlider.noUiSlider.get();
        var filterMorphoDilate = document.getElementById("morpho-dilate-value");
        var panelMorphoDilate = document.getElementById("panel-code-morpho-dilate");
        filterMorphoDilate.setAttributeNS(null, "radius", valueMorphoDilate);

        $(panelMorphoDilate).text(
            '<filter id="morpho-customize">\n' +
            ' <feGaussianBlur operator="dilate" in="SourceGraphic" radius="' + valueMorphoDilate + '"/>\n' +
            '</filter>');

    });

    var stepSliderValueDilateMorphoElement = document.getElementById('slider-morpho-dilate-value');

    morphoDilateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueDilateMorphoElement.innerHTML = values[handle];
    });

    /*
    feColorMatrix saturotate
    1/2
    Saturate
    */

    var saturotateSlider = document.getElementById('slider-saturotate');

    noUiSlider.create(saturotateSlider, {
        start: [0],
        step: 5,
        range: {
            'min': [0],
            'max': [50]
        },
        pips: {
            mode: 'values',
            values: [0, 10, 20, 30, 40, 50],
            density: 5
        }
    });

    saturotateSlider.noUiSlider.on('change', function() {
        var saturotateValue = saturotateSlider.noUiSlider.get();
        var valueSaturotateHuerotate = hueRotateSlider.noUiSlider.get();
        var saturotateFilter = document.getElementById("saturotate-value");
        var saturotateCode = document.getElementById("panel-code-saturotate");
        saturotateFilter.setAttributeNS(null, "values", saturotateValue);

        $(saturotateCode).text(
            '<filter <filter id="saturotate-customize" filterUnits="objectBoundingBox">\n' +
            ' <feColorMatrix type="saturate" result="saturado" values="' + saturotateValue + '"/>\n' +
            ' <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="' + valueSaturotateHuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueSaturotateElement = document.getElementById('slider-saturotate-value');

    saturotateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueSaturotateElement.innerHTML = values[handle];
    });

    /*
    feColorMatrix saturotate
    2/2
    hueRotate
    */

    var hueRotateSlider = document.getElementById('slider-saturotate-huerotate');

    noUiSlider.create(hueRotateSlider, {
        start: [180],
        step: 1,
        range: {
            'min': [0],
            'max': [360]
        },
        pips: {
            mode: 'values',
            values: [0, 90, 180, 270, 360],
            density: 5
        }
    });

    hueRotateSlider.noUiSlider.on('change', function() {
        var saturotateValue = saturotateSlider.noUiSlider.get();
        var valueSaturotateHuerotate = hueRotateSlider.noUiSlider.get();
        var hueRotateFilter = document.getElementById("saturotate-hue-value");
        var saturotateCode = document.getElementById("panel-code-saturotate");
        hueRotateFilter.setAttributeNS(null, "values", valueSaturotateHuerotate);

        $(saturotateCode).text(
            '<filter <filter id="saturotate-customize" filterUnits="objectBoundingBox">\n' +
            ' <feColorMatrix type="saturate" result="saturado" values="' + saturotateValue + '"/>\n' +
            ' <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="' + valueSaturotateHuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueHueRotateElement = document.getElementById('slider-saturotate-huerotate-value');

    hueRotateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueHueRotateElement.innerHTML = values[handle];
    });