(function ($) {
    $.fn.smlib_recommendlist_options = function (options) {
    }
    $.fn.smlib_recommendlist_options.smlibGetDefaultOptions = function () {
        return {
            position: "relative",
            width: 1000,
            height: 800,
            top: 20,
            left: 20,
            additional_css: "",
            bgfile: "",
            webroot: "",
            widgetroot: "",
            getrecommendlistservice: 'SMLIB_Web_JS/SMLIBFWW_WIDGET/SMLIB_FW_WIDGET_RECOMMENDLIST/SERVICE/SMLIBFWW_RECOMMENDLIST_S.asmx/GetRecommendList'
        };
    }
}

(jQuery));