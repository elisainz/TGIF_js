 /* function GetTableSenators() {
     var arr = JSON.stringify(data.results[0].members)
     var table;


     "<table id= 'tabla-senadores'> <tr><th>Full name</th> <th>Party</th> <th>State</th> <th>Seniority</th> <th>Percentage of votes</th> </tr>"
     //console.log(arr);

     for (var i = 0; i < arr.length; i++) {

         var linea =
             "<tr><td>" + arr[i].first_name + arr[i].middle_name + arr[i].last_name + "</td>"
         "<td>" + arr[i].party + "</td>"
         "<td>" + arr[i].state + "</td>"
         "<td>" + arr[i].seniority + "</td>"
         "<td>" + arr[i].votes_with_party_pct + "%" + "</td></tr>";


         table = table + linea;

     }
     "</table>"

     return table;
 }

 function tablaSen() {
     var elem = document.getElementById('tabla-senadores');
     document.write(GetTableSenators());
 } */



 function getSenatorsHeaders(data) {
     return "<tr><th></th>" + results[0].members(function (dest) /*destination*/ {
         return "<th>" + dest + "</th>";
     }).join("") + "</tr>";
 }

 function renderSenHeaders(data) {
     var html = getSenatorsHeaders(data);
     document.getElementById("senators-table-headers").innerHTML = html;
 }

 function getSenColumns(row) {
     return row.members.map(function (element) {
         return "<td>" + element.first_name + element.middle_name + element.last_name + element.party + element.state + element.seniority + element.votes_with_party_pct + '%' + "</td>";
     }).join("")
 }

 /* function getSenRows(data) {
     return data.members.map(function (row, i) {
         return "<tr><th>" + Full name + Party + +State + Seniority + Percentage of votes + "</th>" +
             getSenColumns(row) + "</tr>";
     }).join("");
 }

 function renderSenRows(data) {
     var html = getSenRows(data);
     document.getElementById("senators-table-rows").innerHTML = html;
 } 
*/

function renderSenTable(data) { //define one function to render both parts of the table
  renderSenHeaders(data);
  //renderSenRows(data);
} 

renderSenTable ();







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
