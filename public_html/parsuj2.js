var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
    myFunction(xhttp);
    }
};
xhttp.open("GET", "pozycja.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    document.getElementById("szerokosc").innerHTML =
    xmlDoc.getElementsByTagName("lat")[0].childNodes[0].nodeValue;
    
    document.getElementById("dlugosc").innerHTML =
    xmlDoc.getElementsByTagName("lon")[0].childNodes[0].nodeValue;
}

