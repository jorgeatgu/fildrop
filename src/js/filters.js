//Add class with filter effects

$(document).ready(function() {

    var filters = [
        "saturate",
        "saturotate",
        "rotamatrix",
        "tablen",
        "dishue",
        "matrix",
        "matrix-dos",
        "huerotate",
        "luminance",
        "discrete",
        "discrete-dos",
        "table",
        "table-dos",
        "identity",
        "linear",
        "gamma",
        "turbulence",
        "sepia",
        "turbu-map",
        "fematrix-uno",
        "fematrix-dos",
        "map-uno",
        "map-dos",
        "blur-uno",
        "blur-dos",
        "blur-tres",
        "morpho-uno",
        "morpho-dos",
        "morpho-tres",
        "morpho-cuatro",
        "multitable"
    ];

    var btnHeight = $('.section-buttons').outerHeight();
    var picture = $('picture').find("img");
    var pictureHeight = $(picture).outerHeight();
    var btnFilters = $('.section-buttons').find("button");
    var btnClose = $('#panel-btn-close');
    var panel = $(".panel");
    var panelInfo = $(".panel-info");
    var panelInput = $(".panel-input");

    var btnSaturate = $(".btn-saturate");
    var btnSaturotate = $(".btn-saturotate");
    var btnRotamatrix = $(".btn-rotamatrix");
    var btnTablen = $(".btn-tablen");
    var btnMultitable = $(".btn-multitable");
    var btnDishue = $(".btn-dishue");
    var btnMatrix = $(".btn-matrix");
    var btnMatrix2 = $(".btn-matrix-dos");
    var btnHueRotate = $(".btn-hueRotate");
    var btnLuminance = $(".btn-luminance");
    var btnDiscrete = $(".btn-discrete");
    var btnDiscrete2 = $(".btn-discrete-dos");
    var btnTable = $(".btn-table");
    var btnTable2 = $(".btn-table-dos");
    var btnIdentity = $(".btn-identity");
    var btnLinear = $(".btn-linear");
    var btnGamma = $(".btn-gamma");
    var btnTurbelence = $(".btn-turbulence");
    var btnSepia = $(".btn-sepia");
    var btnTurbuMap = $(".btn-turbu-map");
    var btnConMatrix = $(".btn-con-matrix-uno");
    var btnConMatrix2 = $(".btn-con-matrix-dos");
    var btnMap = $(".btn-map-uno");
    var btnMap2 = $(".btn-map-dos");
    var btnBlur = $(".btn-blur-uno");
    var btnBlur2 = $(".btn-blur-dos");
    var btnBlur3 = $(".btn-blur-tres");
    var btnMorpho = $(".btn-morpho-uno");
    var btnMorpho2 = $(".btn-morpho-dos");
    var btnMorpho3 = $(".btn-morpho-tres");
    var btnMorpho4 = $(".btn-morpho-cuatro");
    var panelSaturate = $("#panel-saturate");
    var panelHuerotate = $("#panel-huerotate");
    var panelLuminance = $("#panel-luminance");
    var panelLinear = $("#panel-linear");
    var panelTurbulence = $("#panel-turbulence");
    var panelGamma = $("#panel-gamma");
    var panelBlur = $("#panel-blur");
    var panelMorpho = $("#panel-morpho");
    var panelSaturotate = $("#panel-saturotate");

    function addFilter(button, filter) {
        $(button).click(function() {
            $("img").removeClass().addClass(filter);
        });
    }

    function closePanel() {
        $(panel)
        .velocity({ left: '-100%'}, { duration: 400, easing: "swing"}, [20, 50]);
        $("img").removeClass();
    }

    function openPanel() {
        $(panel)
        .velocity({ left: '0'}, { duration: 400, easing: "swing"}, [20, 50])
        .addClass("panel-bottom")
        .css("height", btnHeight);
    }

    // function closeClick() {
    //     $(document).mouseup(function (e)
    //     {
    //         if (!panel.is(e.target)
    //             && panel.has(e.target).length === 0)
    //         {
    //             closePanel();
    //         }
    //     });
    // }

    function equalHeight() {
        $("#holder").css("min-height", pictureHeight);
    }

    $(btnFilters).click(function() {
        if (typeof $(this).data('panel') !== 'undefined') {
            openPanel();
        }
    });

    function showPanelFilter(btn, panel) {
        $(btn).click(function(){
            $(panel).removeClass("hide");
        });
    }

    $(btnClose).click(function() {
        closePanel();
        $(panelInput).addClass("hide");
    });

    equalHeight();
    addFilter(btnSaturate, filters[0]);
    addFilter(btnSaturotate, filters[1]);
    addFilter(btnRotamatrix, filters[2]);
    addFilter(btnTablen, filters[3]);
    addFilter(btnDishue, filters[4]);
    addFilter(btnMultitable, filters[30]);
    addFilter(btnMatrix, filters[5]);
    addFilter(btnMatrix2, filters[6]);
    addFilter(btnHueRotate, filters[7]);
    addFilter(btnLuminance, filters[8]);
    addFilter(btnDiscrete, filters[9]);
    addFilter(btnDiscrete2, filters[10]);
    addFilter(btnTable, filters[11]);
    addFilter(btnTable2, filters[12]);
    addFilter(btnIdentity, filters[13]);
    addFilter(btnLinear, filters[14]);
    addFilter(btnGamma, filters[15]);
    addFilter(btnTurbelence, filters[16]);
    addFilter(btnSepia, filters[17]);
    addFilter(btnTurbuMap, filters[18]);
    addFilter(btnConMatrix, filters[19]);
    addFilter(btnConMatrix2, filters[20]);
    addFilter(btnMap, filters[21]);
    addFilter(btnMap2, filters[22]);
    addFilter(btnBlur, filters[23]);
    addFilter(btnBlur2, filters[24]);
    addFilter(btnBlur3, filters[25]);
    addFilter(btnMorpho, filters[26]);
    addFilter(btnMorpho2, filters[27]);
    addFilter(btnMorpho3, filters[28]);
    addFilter(btnMorpho4, filters[29]);

    showPanelFilter(btnSaturate, panelSaturate);
    showPanelFilter(btnHueRotate, panelHuerotate);
    showPanelFilter(btnLuminance, panelLuminance);
    showPanelFilter(btnLinear, panelLinear);
    showPanelFilter(btnTurbelence, panelTurbulence);
    showPanelFilter(btnGamma, panelGamma);
    showPanelFilter(btnBlur, panelBlur);
    showPanelFilter(btnBlur2, panelBlur);
    showPanelFilter(btnBlur3, panelBlur);
    showPanelFilter(btnMorpho, panelMorpho);
    showPanelFilter(btnMorpho2, panelMorpho);
    showPanelFilter(btnMorpho3, panelMorpho);
    showPanelFilter(btnMorpho4, panelMorpho);
    showPanelFilter(btnSaturotate, panelSaturotate);


    var saturateSlider = document.getElementById('slider-saturate');

    noUiSlider.create(saturateSlider, {
        start: [ 0 ],
        step: 0.1,
        range: {
            'min': [ 0 ],
            'max': [ 1 ]
        }
    });

    saturateSlider.noUiSlider.on('change', function(){
        var valueSaturate = saturateSlider.noUiSlider.get();
        var saturateFilter = document.getElementById("saturate-value");
        saturateFilter.setAttributeNS(null, "values", valueSaturate );
    });

    var stepSliderValueElement = document.getElementById('slider-saturate-value');

    saturateSlider.noUiSlider.on('update', function( values, handle ) {
        stepSliderValueElement.innerHTML = values[handle];
    });

    var hueRotateSlider = document.getElementById('slider-huerotate');

    noUiSlider.create(hueRotateSlider, {
        start: [ 180 ],
        step: 1,
        range: {
            'min': [ 0 ],
            'max': [ 350 ]
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



});