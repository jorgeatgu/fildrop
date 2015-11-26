    //feColorMatrix type saturate
    var saturateSlider = document.getElementById('slider-saturate');

    noUiSlider.create(saturateSlider, {
        start: [14],
        tooltips: true,
        step: 1,
        range: {
            'min': [0],
            'max': [30]
        },
        pips: {
            mode: 'values',
            values: [0, 5, 10, 15, 20, 25, 30],
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
    var firsthueRotateSlider = document.getElementById('slider-huerotate');

    noUiSlider.create(firsthueRotateSlider, {
        start: [90],
        tooltips: true,
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

    firsthueRotateSlider.noUiSlider.on('change', function() {
        var firstvaluehuerotate = firsthueRotateSlider.noUiSlider.get();
        var firsthuerotateFilter = document.getElementById("hue-value");
        var huerotateCode = document.getElementById("panel-code-huerotate");
        firsthuerotateFilter.setAttributeNS(null, "values", firstvaluehuerotate);

        $(huerotateCode).text(
            '<filter id="huerotate-customize">\n' +
            ' <feColorMatrix type="hueRotate" values="' + firstvaluehuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueHueElement = document.getElementById('slider-huerotate-value');

    firsthueRotateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueHueElement.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Gamma
    1/6
    Red - Amplitude
    */

    var feGammaRa = document.getElementById('slider-gamma-ra');

    noUiSlider.create(feGammaRa, {
        start: [0.5],
        tooltips: true,
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
            '<filter id="gamma-customize">\n' +
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
        start: [1],
        tooltips: true,
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
            '<filter id="gamma-customize">\n' +
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
        start: [0.4],
        tooltips: true,
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
            '<filter id="gamma-customize">\n' +
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
        start: [0.25],
        tooltips: true,
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
            '<filter id="gamma-customize">\n' +
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
        start: [1],
        tooltips: true,
        step: 0.01,
        range: {
            'min': [0.57],
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
            '<filter id="gamma-customize">\n' +
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
        start: [1],
        tooltips: true,
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
            '<filter id="gamma-customize">\n' +
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
        start: [3],
        tooltips: true,
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
        start: [3],
        tooltips: true,
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
        start: [6],
        tooltips: true,
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
        start: [20],
        tooltips: true,
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
            '<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n' +
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
        start: [291],
        tooltips: true,
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
            '<filter id="saturotate-customize" filterUnits="objectBoundingBox">\n' +
            ' <feColorMatrix type="saturate" result="saturado" values="' + saturotateValue + '"/>\n' +
            ' <feColorMatrix type="hueRotate" in="saturado" in2="SourceGraphic" values="' + valueSaturotateHuerotate + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueHueRotateElement = document.getElementById('slider-saturotate-huerotate-value');

    hueRotateSlider.noUiSlider.on('update', function(values, handle) {
        stepSliderValueHueRotateElement.innerHTML = values[handle];
    });


    /*
    feTurbulence + feComposite
    1/6 - baseFrequency
    */

    var sliderTurbuBase = document.getElementById('slider-turbulence-base');

    noUiSlider.create(sliderTurbuBase, {
        start: [0.7],
        tooltips: true,
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


    sliderTurbuBase.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderTurbuBaseV = document.getElementById("turbulence-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderTurbuBaseV.setAttributeNS(null, "baseFrequency", sliderTurbuBaseValue);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementTurbuBase = document.getElementById('slider-turbulence-base-value');

    sliderTurbuBase.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementTurbuBase.innerHTML = values[handle];
    });

    /*
    feTurbulence + feComposite
    2/6 - numOctaves
    */

    var sliderTurbuNum = document.getElementById('slider-turbulence-num');

    noUiSlider.create(sliderTurbuNum, {
        start: [2],
        tooltips: true,
        step: 0.1,
        range: {
            'min': [0],
            'max': [2]
        },
        pips: {
            mode: 'values',
            values: [0, 1, 2],
            density: 10
        }
    });

    sliderTurbuNum.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderTurbuNumV = document.getElementById("turbulence-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderTurbuNumV.setAttributeNS(null, "numOctaves", sliderTurbuNumValue);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementTurbuNum = document.getElementById('slider-turbulence-num-value');

    sliderTurbuNum.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementTurbuNum.innerHTML = values[handle];
    });

    /*
    feTurbulence + feComposite
    3/6 - k1
    */

    var sliderCompoK1 = document.getElementById('slider-composite-k1');

    noUiSlider.create(sliderCompoK1, {
        start: [0],
        tooltips: true,
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

    sliderCompoK1.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderCompok1V = document.getElementById("composite-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderCompok1V.setAttributeNS(null, "k1", sliderCompok1Value);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementCompoK1 = document.getElementById('slider-composite-k1-value');

    sliderCompoK1.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementCompoK1.innerHTML = values[handle];
    });

    /*
    feTurbulence + feComposite
    4/6 - k2
    */

    var sliderCompoK2 = document.getElementById('slider-composite-k2');

    noUiSlider.create(sliderCompoK2, {
        start: [1],
        tooltips: true,
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

    sliderCompoK2.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderCompok1V = document.getElementById("composite-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderCompok1V.setAttributeNS(null, "k2", sliderCompok2Value);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementCompoK2 = document.getElementById('slider-composite-k2-value');

    sliderCompoK2.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementCompoK2.innerHTML = values[handle];
    });

    /*
    feTurbulence + feComposite
    5/6 - k3
    */

    var sliderCompoK3 = document.getElementById('slider-composite-k3');

    noUiSlider.create(sliderCompoK3, {
        start: [-3],
        tooltips: true,
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

    sliderCompoK3.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderCompok1V = document.getElementById("composite-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderCompok1V.setAttributeNS(null, "k3", sliderCompok3Value);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementCompoK3 = document.getElementById('slider-composite-k3-value');

    sliderCompoK3.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementCompoK3.innerHTML = values[handle];
    });

    /*
    feTurbulence + feComposite
    6/6 - k4
    */

    var sliderCompoK4 = document.getElementById('slider-composite-k4');

    noUiSlider.create(sliderCompoK4, {
        start: [0.01],
        tooltips: true,
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

    sliderCompoK4.noUiSlider.on('change', function() {
        var sliderTurbuBaseValue = sliderTurbuBase.noUiSlider.get();
        var sliderTurbuNumValue = sliderTurbuNum.noUiSlider.get();
        var sliderCompok1Value = sliderCompoK1.noUiSlider.get();
        var sliderCompok2Value = sliderCompoK2.noUiSlider.get();
        var sliderCompok3Value = sliderCompoK3.noUiSlider.get();
        var sliderCompok4Value = sliderCompoK4.noUiSlider.get();
        var sliderCompok1V = document.getElementById("composite-value");
        var sliderTurbuBasePanel = document.getElementById("panel-code-turbulence");
        sliderCompok1V.setAttributeNS(null, "k3", sliderCompok4Value);

        $(sliderTurbuBasePanel).text(
            '<filter id="turbulence-customize">\n' +
            ' <feTurbulence type="turbulence" result="fuzz" baseFrequency="' + sliderTurbuBaseValue + '" numOctaves="' + sliderTurbuNumValue + '" stitchTiles="stitch"/>\n' +
            ' <feComposite in="SourceGraphic" in2="fuzz" operator="arithmetic" k1="' + sliderCompok1Value + '" k2="' + sliderCompok2Value + '" k3="' + sliderCompok3Value + '" k4="' + sliderCompok4Value + '"/>\n' +
            '</filter>');
    });

    var stepSliderValueElementCompoK4 = document.getElementById('slider-composite-k4-value');

    sliderCompoK4.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementCompoK4.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Linear
    1/6 - Red -Slope
    */

    var sliderFeLineRs = document.getElementById('slider-linear-rs');

    noUiSlider.create(sliderFeLineRs, {
        start: [0.5],
        tooltips: true,
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

    sliderFeLineRs.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineRsV = document.getElementById("r-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineRsV.setAttributeNS(null, "slope", sliderFeLineRsValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineRs = document.getElementById('slider-linear-rs-value');

    sliderFeLineRs.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineRs.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Linear
    2/6 - Red - Intercept
    */

    var sliderFeLineRa = document.getElementById('slider-linear-ra');

    noUiSlider.create(sliderFeLineRa, {
        start: [0.25],
        tooltips: true,
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

    sliderFeLineRa.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineRaV = document.getElementById("r-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineRaV.setAttributeNS(null, "intercept", sliderFeLineRaValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineRa = document.getElementById('slider-linear-ra-value');

    sliderFeLineRa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineRa.innerHTML = values[handle];
    });


    /*
    feComponentTransfer - Linear
    3/6 - Green -Slope
    */

    var sliderFeLineGs = document.getElementById('slider-linear-gs');

    noUiSlider.create(sliderFeLineGs, {
        start: [0.5],
        tooltips: true,
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

    sliderFeLineGs.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineGsV = document.getElementById("g-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineGsV.setAttributeNS(null, "slope", sliderFeLineGsValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineGs = document.getElementById('slider-linear-gs-value');

    sliderFeLineGs.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineGs.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Linear
    4/6 - Green - Intercept
    */

    var sliderFeLineGa = document.getElementById('slider-linear-ga');

    noUiSlider.create(sliderFeLineGa, {
        start: [0],
        tooltips: true,
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

    sliderFeLineGa.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineGaV = document.getElementById("g-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineGaV.setAttributeNS(null, "intercept", sliderFeLineGaValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineGa = document.getElementById('slider-linear-ga-value');

    sliderFeLineGa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineGa.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Linear
    5/6 - Blue - Slope
    */

    var sliderFeLineBs = document.getElementById('slider-linear-bs');

    noUiSlider.create(sliderFeLineBs, {
        start: [0.5],
        tooltips: true,
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

    sliderFeLineBs.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineBsV = document.getElementById("b-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineBsV.setAttributeNS(null, "slope", sliderFeLineBsValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineBs = document.getElementById('slider-linear-bs-value');

    sliderFeLineBs.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineBs.innerHTML = values[handle];
    });

    /*
    feComponentTransfer - Linear
    6/6 - Blue - Amplitude
    */

    var sliderFeLineBa = document.getElementById('slider-linear-ba');

    noUiSlider.create(sliderFeLineBa, {
        start: [0.5],
        tooltips: true,
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

    sliderFeLineBa.noUiSlider.on('change', function() {
        var sliderFeLineRsValue = sliderFeLineRs.noUiSlider.get();
        var sliderFeLineRaValue = sliderFeLineRa.noUiSlider.get();
        var sliderFeLineGsValue = sliderFeLineGs.noUiSlider.get();
        var sliderFeLineGaValue = sliderFeLineGa.noUiSlider.get();
        var sliderFeLineBsValue = sliderFeLineBs.noUiSlider.get();
        var sliderFeLineBaValue = sliderFeLineBa.noUiSlider.get();
        var sliderFeLineBaV = document.getElementById("b-linear");
        var sliderFeLineRsPanel = document.getElementById("panel-code-linear");
        sliderFeLineBaV.setAttributeNS(null, "intercept", sliderFeLineBaValue);

        $(sliderFeLineRsPanel).text(
            '<filter id="linear-customize">\n' +
            '<feComponentTransfer>\n' +
            '<feFuncR type="linear" slope="' + sliderFeLineRsValue + '" intercept="' + sliderFeLineRaValue + '"/>\n' +
            '<feFuncG type="linear" slope="' + sliderFeLineGsValue + '" intercept="' + sliderFeLineGaValue + '"/>\n' +
            '<feFuncB type="linear" slope="' + sliderFeLineBsValue + '" intercept="' + sliderFeLineBaValue + '"/>\n' +
            '</feComponentTransfer>\n' +
            '</filter>');
    });

    var stepSliderValueElementFeLineBa = document.getElementById('slider-linear-ba-value');

    sliderFeLineBa.noUiSlider.on('update', function(values, handle) {
        stepSliderValueElementFeLineBa.innerHTML = values[handle];
    });