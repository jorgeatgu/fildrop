//Add class with filter effects

$(document).ready(function() {

    var image = $("img");
    var btnSaturate = $(".btn-saturate");
    var saturate = "saturate";
    var btnSaturotate = $(".btn-saturotate");
    var saturotate = "saturotate";
    var btnRotamatrix = $(".btn-rotamatrix");
    var rotamatrix = "rotamatrix";
    var btnTablen = $(".btn-tablen");
    var table = "tablen";
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

    function addFilter(button, image, filter) {
        $(button).click(function() {
            $(image).removeClass().addClass(saturate);
        });
    }

    addFilter(btnSaturate, image, saturate);
    addFilter(btnSaturotate, image, saturotate);
    addFilter(btnRotamatrix, image, rotamatrix);
    addFilter(btnTablen, image, tablen);
    addFilter(btnMultitable, image, multitable);
    addFilter(btnDishue, image, dishue);
    addFilter(btnMatrix, image, matrix);
    addFilter(btnMatrix2, image, matrix2);
    addFilter(btnHueRotate, image, huerotate);
    addFilter(btnLuminance, image, luminance);
    addFilter(btnDiscrete, image, discrete);
    addFilter(btnDiscrete2, image, discrete2);
    addFilter(btnTable, image, table);
    addFilter(btnTable2, image, table2);
    addFilter(btnIdentity, image, identity);
    addFilter(btnLinear, image, linear);
    addFilter(btnGamma, image, gamma);
    addFilter(btnTurbelence, image, turbulence);
    addFilter(btnSepia, image, sepia);
    addFilter(btnTurbuMap, image, turbumap);


    $(".btn-turbu-map").click(function() {
        $("img").removeClass().addClass("turbu-map");
    });

    $(".btn-con-matrix-uno").click(function() {
        $("img").removeClass().addClass("fematrix-uno");
    });

    $(".btn-con-matrix-dos").click(function() {
        $("img").removeClass().addClass("fematrix-dos");
    });

    $(".btn-map-uno").click(function() {
        $("img").removeClass().addClass("map-uno");
    });

    $(".btn-map-dos").click(function() {
        $("img").removeClass().addClass("map-dos");
    });

    $(".btn-blur-uno").click(function() {
        $("img").removeClass().addClass("blur-uno");
    });

    $(".btn-blur-dos").click(function() {
        $("img").removeClass().addClass("blur-dos");
    });

    $(".btn-blur-tres").click(function() {
        $("img").removeClass().addClass("blur-tres");
    });

    $(".btn-morpho-uno").click(function() {
        $("img").removeClass().addClass("morpho-uno");
    });

    $(".btn-morpho-dos").click(function() {
        $("img").removeClass().addClass("morpho-dos");
    });

    $(".btn-morpho-tres").click(function() {
        $("img").removeClass().addClass("morpho-tres");
    });

    $(".btn-morpho-cuatro").click(function() {
        $("img").removeClass().addClass("morpho-cuatro");
    });

});