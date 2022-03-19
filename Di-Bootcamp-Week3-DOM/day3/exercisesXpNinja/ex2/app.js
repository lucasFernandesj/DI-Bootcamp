

var text = ['L','LO','LOA','LOAD','LOADI','LOADIN','LOADING',"", ".", "..", "..."];
    var counter = 0;
    var elem = document.getElementById("changeText");
    setInterval(change, 300);
    function change() {
     elem.innerHTML = text[counter];
        counter++;
        if(counter >= text.length) { counter = 0; }
    }