//alert("Parsuję XML'ka");

var text, parser, xmlDoc;

text = "<nav>" +
"<lat>54.5209133</lat>" +
"<lon>18.5532850</lon>" +
"<sog>0.0</sog>" +
"<cog>296.4</cog>" +
"<hdg>174.1</hdg>" +
"<depth/>" +
"</nav>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

document.getElementById("szerokosc").innerHTML =
xmlDoc.getElementsByTagName("lat")[0].childNodes[0].nodeValue;
