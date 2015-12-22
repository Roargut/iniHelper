/**
 * Created by RG on 23.11.2015.
 */
"use strict";

//vars
//empty


function rollInitiative(mod){
    var ini = Math.floor((Math.random() * 20) + 1 + mod);
    if(ini >= 0) {
        return ini;
    } else { return 0 };
};

function createIniList(obj){
    for(var x=0; x<obj.length; x++) {
        if(obj[x].name !== "")
            $("#iniRank").append("<p>" + obj[x].name + " - " + obj[x].iniNumber + "</p>");
    }
};

$(document).ready(function(){
    var subjects = [];
    $('#create').click(function(){
        $('.col-lg-6').each(function(i, $row){
            var newNpc = {
                name: $('input[type=text]', $row).val(),
                iniNumber: rollInitiative(parseInt($('input[type=number]', $row).val()))
            };
            subjects.push(newNpc);
        });
        var iniList = [];
        iniList = subjects.sort(function (a, b) { return b.iniNumber - a.iniNumber;  })
        createIniList(iniList);
    });
    $('#clear').click(function(){
        subjects = [];
        $("#iniRank").empty();
    });
});

