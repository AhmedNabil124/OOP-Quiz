
import {Settings} from './Settings.js';
new Settings();



$(document).ready(function () {

    $(".loading .spinner").fadeOut(2000, function () {
        $(".loading").fadeOut(2000,function(){
            $("body").css("overflow", 'auto')
        })
    })
})