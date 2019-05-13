var members = data.results[0].members; //variable global
var DataRep = [];
var DataDem = [];
var DataInd = [];

var estadisticas =  //create fields for all the statistics the client has requested
	{
  numberD: 0,
  numberR: 0,
  numberI: 0,
  VWPTotal: 0,
  PromedioVWPD: 0,
  PromedioVWPR: 0,
	PromedioVWPR: 0,
  membersTop: [],
  membersBottom: [],
}

for (i = 0; i < data.results[0].members.length; i++) //contando number of members in each party
{
  if (data.results[0].members[i].party == 'R') {
    DataRep.push(data.results[0].members[i]);
  } else if (data.results[0].members[i].party == 'D') {
    DataDem.push(data.results[0].members[i]);
  } else if (data.results[0].members[i].party == 'I') {
    DataInd.push(data.results[0].members[i]);
  }
}

estadisticas.numberD = DataDem.length; //to get number of members in each party
//console.log(estadisticas.numberD);
estadisticas.numberR = DataRep.length;
//console.log(estadisticas.numberR);
estadisticas.numberI = DataInd.length;
//console.log(estadisticas.numberI)
//console.log(JSON.stringify(estadisticas));


//sumatoria de vwp SOLO para democratas-acumulador
var vwpDem = 

DataDem.forEach(element => {
  estadisticas.VWPTotal+= element.votes_with_party_pct;
});
//console.log(estadisticas.VWPTotal)
estadisticas.PromedioVWPD= vwpDem / estadisticas.numberD  ;
estadisticas.PromedioVWPD=estadisticas.PromedioVWPD.toFixed(2); //numero de decimales despues de la coma
console.log(estadisticas.PromedioVWPD);











