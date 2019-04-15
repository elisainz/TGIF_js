createSenateTabla();


function createSenateTabla() {
  var tablaFormateada = renderSenTable(data.results[0].members);
  var tablaFinal = document.getElementById("senate-data");
  tablaFinal.innerHTML = tablaFormateada;
}


function renderSenTable(membersArray) {
  var tabla = "<thead> <tr><th> Name </th> <th> Party </th> <th> State </th> <th> Years in Office </th> <th> % Votes w/ Party </th> </tr> </thead> "
  tabla += "<tbody>"
  membersArray.map(function (element) {
    tabla += "<tr>"
    
    if (element.middle_name === null) {tabla += "<td>" + "<a href='" + element.url + "'>" + element.first_name + "&nbsp;" + element.last_name + "</td><td>" + "</a>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + '%' + "</td>";}
    
    else {tabla += "<td>" + "<a href='" + element.url + "'>" + element.first_name + "&nbsp;" + element.middle_name + "&nbsp;" + element.last_name + "</td><td>" + "</a>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + '%' + "</td>";}
    
    
  })
  tabla += "</tbody>"
  return tabla;
}

function getSenatorsHeaders(data) {
  return "<tr><th></th>" + data.results[0].members(function (dest) /*destination*/ {
    return "<th>" + dest + "</th>";
  }).join("") + "</tr>";
}

function renderSenHeaders(data) {
  var html = getSenatorsHeaders(data);
  document.getElementById("senators-table-headers").innerHTML = html;
}









/*console.log(data.results[0]/*al ser un array poner []/.members); */



/* var planta = {
   nombre: "fedeeee",
   edad: 26
 }; 
 
 var persona = {
   nombre: "fede",
   edad: 26
 };
 
 function pruebaNombre(p) {
   return p.nombre;
   
 }
 pruebaNombre(planta); */

////*console.log(JSON.stringify()) o make the data variable's contents a string (easier to read)*////
/*document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);*/
