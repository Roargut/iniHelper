/**
 * Created by RG on 23.11.2015.
 */
"use strict";

//vars
var subjects = [];


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

/*$("#create").click(function() {
    //alert("clickhandler fired");
    subjects.mod = $("input[type=number]").map(function() { return this.value; }).get();
    subjects.name = $("input[type=text]").map(function() { return this.value; }).get();
    createIniList();
});*/

$('#create').click(function(){
    // For every row in now... (You should add another class because you only want npc rows)
    $('.col-lg-6').each(function(i, $row){
        // Create object from inputs of a specific row from this dimension.
        var newNpc = {
            name: $('input[type=text]', $row).val(),
            iniNumber: rollInitiative(parseInt($('input[type=number]', $row).val()))
        };

        // Add object to array to fill our insecurities.
        subjects.push(newNpc);
    });
    var iniList = [];
    iniList = subjects.sort(function (a, b) { return b.iniNumber - a.iniNumber;  })
    createIniList(iniList);
});

$(document).ready(function(){
    //for(let y=0; y<12; y++) console.log(rollInitiative(0));
});

