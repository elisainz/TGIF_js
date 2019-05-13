var members = data.results[0].members; //variable global
var DataRep = [];
var DataDem = [];
var DataInd = [];

var estadisticas =  //create fields for all the statistics the client has requested
	{
  numberD: 0,
  numberR: 0,
  numberI: 0,
  VWPD: 0,
  VWPR: 0,
  VWPI: 0,
  membersTop: [],
  membersBottom: [],
}

for (i = 0; i < data.results[0].members.length; i++) {
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
//console.log(JSON.stringify(estadisticas));