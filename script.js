function rechne (){
    const trinkgeldString = document.getElementById('betrag');
    const gaesteString = document.getElementById('anzahlGast');
    const auswahlString = document.getElementById('auswahl');
    const ergebnisFeld1 = document.getElementById('trinkgeld');

    if(trinkgeldString.value == '' || gaesteString.value == ''){
        alert("Mindestens ein Feld ist leer geblieben.");
    }else{
        var deinGeld = (trinkgeldString.value * auswahlString.value)/gaesteString.value;
        ergebnisFeld1.innerHTML = "Dein Trinkgeld beträgt " + deinGeld.toFixed(2) + " €.";
         //bewirkt, dass nachdem der Button gedrückt wurde, alle eingetragenen Werte verschwinden.
        trinkgeldString.value = "";
        gaesteString.value = "";
        auswahlString.value = "";
        if(deinGeld<10){
            ergebnisFeld1 = document.getElementById('trinkgeld').style.backgroundColor = "#fc7883";     
        }else{
            ergebnisFeld1 = document.getElementById('trinkgeld').style.backgroundColor = "#acedac"; 
        }
    }    
}
