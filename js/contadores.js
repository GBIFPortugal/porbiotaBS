function totalRecords() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var text = xhttp.responseText
    // var response = JSON.parse(text);
    document.getElementById("totalRecords").innerHTML = lisibilite_nombre(text);
  }
};
xhttp.open("GET", "http://api.gbif.org/v1/occurrence/count?country=PT", true);
xhttp.send();
}

function totalRecordsPT() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var text = xhttp.responseText;
    // var response = JSON.parse(text);
    document.getElementById("totalRecordsPT").innerHTML = lisibilite_nombre(text);
  }
};
xhttp.open("GET", "http://api.gbif.org/v1/occurrence/count?publishingCountry=PT", true);
xhttp.send();
}

function totalDatasetsPT() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var text = xhttp.responseText;
    var response = JSON.parse(text);
    document.getElementById("totalDatasetsPT").innerHTML = response.count;
  }
};
xhttp.open("GET", "http://api.gbif.org/v1/dataset?country=PT&facet=off&pageSize=0", true);
xhttp.send();
}

function totalPublicadoresPT() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    var text = xhttp.responseText;
    var response = JSON.parse(text);
    document.getElementById("totalPublicadoresPT").innerHTML = response.count;
  }
};
xhttp.open("GET", "http://api.gbif.org/v1/organization?country=PT&facet=off&pageSize=0", true);
xhttp.send();
}

function lisibilite_nombre(nbr)
{
var nombre = ''+nbr;
var retour = '';
var count=0;
for(var i=nombre.length-1 ; i>=0 ; i--)
{
  if(count!=0 && count % 3 == 0)
    retour = nombre[i]+' '+retour ;
  else
    retour = nombre[i]+retour ;
  count++;
}
return retour;
}
