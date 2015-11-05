//Add class with filter effects

$(document).ready(function() {

    var btnHeight = $('.section-buttons').outerHeight() + 20;
    var picture = $('picture').find("img");
    var pictureHeight = $(picture).outerHeight();
    var btnFilters = $('.section-buttons').find("button");
    var btnClose = $('#panel-btn-close');

    var btnSaturate = $(".btn-saturate");
    var saturate = "saturate";
    var btnSaturotate = $(".btn-saturotate");
    var saturotate = "saturotate";
    var btnRotamatrix = $(".btn-rotamatrix");
    var rotamatrix = "rotamatrix";
    var btnTablen = $(".btn-tablen");
    var tablen = "tablen";
    var btnMultitable = $(".btn-multitable");
    var multitable = "multitable";
    var btnDishue = $(".btn-dishue");
    var dishue = "dishue";
    var btnMatrix = $(".btn-matrix");
    var matrix = "matrix";
    var btnMatrix2 = $(".btn-matrix-dos");
    var matrix2 = "matrix-dos";
    var btnHueRotate = $(".btn-hueRotate");
    var huerotate = "huerotate";
    var btnLuminance = $(".btn-luminance");
    var luminance = "luminance";
    var btnDiscrete = $(".btn-discrete");
    var discrete = "discrete";
    var btnDiscrete2 = $(".btn-discrete-dos");
    var discrete2 = "discrete-dos";
    var btnTable = $(".btn-table");
    var table = "table";
    var btnTable2 = $(".btn-table-dos");
    var table2 = "table-dos";
    var btnIdentity = $(".btn-identity");
    var identity = "identity";
    var btnLinear = $(".btn-linear");
    var linear = "linear";
    var btnGamma = $(".btn-gamma");
    var gamma = "gamma";
    var btnTurbelence = $(".btn-turbulence");
    var turbulence = "turbulence";
    var btnSepia = $(".btn-sepia");
    var sepia = "sepia";
    var btnTurbuMap = $(".btn-turbu-map");
    var turbumap = "turbu-map";
    var btnConMatrix = $(".btn-con-matrix-uno");
    var fematrix = "fematrix-uno";
    var btnConMatrix2 = $(".btn-con-matrix-dos");
    var fematrix2 = "fematrix-dos";
    var btnMap = $(".btn-map-uno");
    var mapUno = "map-uno";
    var btnMap2 = $(".btn-map-dos");
    var mapDos = "map-dos";
    var btnBlur = $(".btn-blur-uno");
    var blur = "blur-uno";
    var btnBlur2 = $(".btn-blur-dos");
    var blur2 = "blur-dos";
    var btnBlur3 = $(".btn-blur-tres");
    var blur3 = "blur-tres";
    var btnMorpho = $(".btn-morpho-uno");
    var morpho = "morpho-uno";
    var btnMorpho2 = $(".btn-morpho-dos");
    var morpho2 = "morpho-dos";
    var btnMorpho3 = $(".btn-morpho-tres");
    var morpho3 = "morpho-tres";
    var btnMorpho4 = $(".btn-morpho-cuatro");
    var morpho4 = "morpho-cuatro";

    function addFilter(button, filter) {
        $(button).click(function() {
            $("img").removeClass().addClass(filter);
        });
    }

    $(btnFilters).click(function() {
        $(".panel")
        .animate({left:'0'}, 400)
        .addClass("panel-bottom")
        .css("height", btnHeight);
    });

    $(btnClose).click(function() {
        $(".panel")
        .animate({left:'-100%'}, 400);
        $("img").removeClass();
    });

    function equalHeight() {
        $("#holder").css("min-height", pictureHeight);
    }


    equalHeight();
    addFilter(btnSaturate, saturate);
    addFilter(btnSaturotate, saturotate);
    addFilter(btnRotamatrix, rotamatrix);
    addFilter(btnTablen, tablen);
    addFilter(btnMultitable, multitable);
    addFilter(btnDishue, dishue);
    addFilter(btnMatrix, matrix);
    addFilter(btnMatrix2, matrix2);
    addFilter(btnHueRotate, huerotate);
    addFilter(btnLuminance, luminance);
    addFilter(btnDiscrete, discrete);
    addFilter(btnDiscrete2, discrete2);
    addFilter(btnTable, table);
    addFilter(btnTable2, table2);
    addFilter(btnIdentity, identity);
    addFilter(btnLinear, linear);
    addFilter(btnGamma, gamma);
    addFilter(btnTurbelence, turbulence);
    addFilter(btnSepia, sepia);
    addFilter(btnTurbuMap, turbumap);
    addFilter(btnConMatrix, fematrix);
    addFilter(btnConMatrix2, fematrix2);
    addFilter(btnMap, mapUno);
    addFilter(btnMap2, mapDos);
    addFilter(btnBlur, blur);
    addFilter(btnBlur2, blur2);
    addFilter(btnBlur3, blur3);
    addFilter(btnMorpho, morpho);
    addFilter(btnMorpho2, morpho2);
    addFilter(btnMorpho3, morpho3);
    addFilter(btnMorpho4, morpho4);

});