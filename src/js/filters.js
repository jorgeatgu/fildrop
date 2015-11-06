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
        "morpho-cuatro"
    ];

    var btnHeight = $('.section-buttons').outerHeight() + 20;
    var picture = $('picture').find("img");
    var pictureHeight = $(picture).outerHeight();
    var btnFilters = $('.section-buttons').find("button");
    var btnClose = $('#panel-btn-close');
    var panel = $(".panel");

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

    function closeClick() {
        $(document).mouseup(function (e)
        {
            if (!panel.is(e.target)
                && panel.has(e.target).length === 0)
            {
                closePanel();
            }
        });
    }

    function equalHeight() {
        $("#holder").css("min-height", pictureHeight);
    }

    $(btnFilters).click(function() {
        openPanel();
    });

    $(btnClose).click(function() {
        closePanel();
    });



    equalHeight();
    closeClick();
    addFilter(btnSaturate, filters[0]);
    addFilter(btnSaturotate, filters[1]);
    addFilter(btnRotamatrix, filters[2]);
    addFilter(btnTablen, filters[3]);
    addFilter(btnMultitable, filters[4]);
    addFilter(btnDishue, filters[5]);
    addFilter(btnMatrix, filters[6]);
    addFilter(btnMatrix2, filters[7]);
    addFilter(btnHueRotate, filters[8]);
    addFilter(btnLuminance, filters[9]);
    addFilter(btnDiscrete, filters[10]);
    addFilter(btnDiscrete2, filters[11]);
    addFilter(btnTable, filters[12]);
    addFilter(btnTable2, filters[13]);
    addFilter(btnIdentity, filters[14]);
    addFilter(btnLinear, filters[15]);
    addFilter(btnGamma, filters[16]);
    addFilter(btnTurbelence, filters[17]);
    addFilter(btnSepia, filters[18]);
    addFilter(btnTurbuMap, filters[19]);
    addFilter(btnConMatrix, filters[20]);
    addFilter(btnConMatrix2, filters[21]);
    addFilter(btnMap, filters[22]);
    addFilter(btnMap2, filters[23]);
    addFilter(btnBlur, filters[24]);
    addFilter(btnBlur2, filters[25]);
    addFilter(btnBlur3, filters[26]);
    addFilter(btnMorpho, filters[27]);
    addFilter(btnMorpho2, filters[28]);
    addFilter(btnMorpho3, filters[29]);
    addFilter(btnMorpho4, filters[30]);

});