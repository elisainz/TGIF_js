 function GetTableSenators () {
      var arr = JSON.stringify(data.results[0].members)
      var table;
      
      
      "<table id= 'tabla-senadores'> <tr><th>Full name</th> <th>Party</th> <th>State</th> <th>Seniority</th> <th>Percentage of votes</th> </tr>"
      //console.log(arr);

      for (var i = 0; i < arr.length; i++) {

        var linea=
        "<tr><td>" + arr[i].first_name + arr[i].middle_name + arr[i].last_name + "</td>"
        "<td>" + arr[i].party + "</td>"
        "<td>" + arr[i].state + "</td>"
        "<td>" + arr[i].seniority + "</td>"
        "<td>" + arr[i].votes_with_party_pct + "%" + "</td></tr>";

        
        table = table+linea; 

      }
      "</table>"
      
      return table;
    }

    function tablaSen() {
      var elem = document.getElementById('tabla-senadores');
      document.write (GetTableSenators());
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
   