function  getValue() {
  
  
  // body...
  var mj125ml = parseInt(document.getElementById("mj125ml").value);
  var mj200ml = parseInt(document.getElementById("mj200ml").value);
  var mj250ml = parseInt(document.getElementById("mj250ml").value);
  var mjpet200ml = parseInt(document.getElementById("mjpet200ml").value);
  var mjpet1000ml = parseInt(document.getElementById("mjpet1000ml").value);
  var cm125ml = parseInt(document.getElementById("cm125ml").value);
  var cm200ml = parseInt(document.getElementById("cm200ml").value);
  var ld150ml = parseInt(document.getElementById("ld150ml").value);
  var od150ml = parseInt(document.getElementById("od150ml").value);
  var totalBeverage = document.getElementById("totalbeverage");
  var totalbeveragevalue = document.getElementById("totalbeveragevalue");
  
  //snacks start here
  
  var km16gjhal = parseInt(document.getElementById("km16gjhal").value);
  var km35gjhal = parseInt(document.getElementById("km35gjhal").value);
  var km150gjhal = parseInt(document.getElementById("km150gjhal").value);
  var km300gjhal = parseInt(document.getElementById("km300gjhal").value);
  var km150gclassic = parseInt(document.getElementById("km150gclassic").value);
  var km300gclassic = parseInt(document.getElementById("km300gclassic").value);
  var km16ggp = parseInt(document.getElementById("km16ggp").value);
  var km16gdal = parseInt(document.getElementById("km16gdal").value);
  var km15gbbq = parseInt(document.getElementById("km15gbbq").value);
  var km30gbbq = parseInt(document.getElementById("km30gbbq").value);
  var km150gbbq = parseInt(document.getElementById("km150gbbq").value);
  var km300gbbq = parseInt(document.getElementById("km300gbbq").value);
  
  //Candy start here
  
  var kids200pcscandy = parseInt(document.getElementById("kids200pcscandy").value);
  var mm150pcscandy = parseInt(document.getElementById("mm150pcscandy").value);
  var cb150pcscandy = parseInt(document.getElementById("cb150pcscandy").value);
  var kp50pcscandy = parseInt(document.getElementById("kp50pcscandy").value);
  var mm50pcscandy = parseInt(document.getElementById("mm50pcscandy").value);
  var cb50pcscandy = parseInt(document.getElementById("cb50pcscandy").value);
  
  
  var td1 = mj125ml * 401.76;
  var td2 = mj200ml * 535.68;
  var td3 = mj250ml * 669.9; 
  var td4 = mjpet200ml * 320.96;
  var td5 = mjpet1000ml * 624.96;
  var td6 = cm125ml * 781.20; 
  var td7 = cm200ml * 1071.36;
  var td8 = ld150ml * 345.96;
  var td9 = od150ml * 345.96;
  
  //snacks start here
  
  
  var td10 = km16gjhal * 915.12; 
  var td11 = km35gjhal * 767.25;
  var td12 = km150gjhal * 1588.44;
  var td13 = km300gjhal * 2418;
  var td14 = km150gclassic * 1488;
  var td15 = km300gclassic * 2269.2;
  var td16 = km16ggp * 892.8;
  var td17 = km16gdal * 892.8;
  var td18 = km15gbbq * 903.96;
  var td19 = km30gbbq * 753.30;
  var td20 = km150gbbq * 1666.56;
  var td21 = km300gbbq * 2504.49;
  
  //candy start here
  
  var td22 = kids200pcscandy * 803.52;
  var td23 = mm150pcscandy * 1255.52;
  var td24 = cb150pcscandy * 1255.52;
  var td25 = kp50pcscandy * 714.24;
  var td26 = mm50pcscandy * 2176.2;
  var td27 = cb50pcscandy * 2176.2;
  
  
  
  var value = document.getElementById("value");
  var calculate = document.getElementById("calculate");
  
  
  
  
  var ratemj125ml = document.getElementById("ratemj125ml").innerText = td1.toFixed(2);
  var rate200ml = document.getElementById("ratemj200ml").innerText = td2.toFixed(2);
  var ratemj250ml = document.getElementById("ratemj250ml").innerText = td3.toFixed(2);
  var ratemj250ml = document.getElementById("ratemjpet200ml").innerText = td4.toFixed(2);
  var ratemjpet1000ml = document.getElementById("ratemjpet1000ml").innerText = td5.toFixed(2);
  var ratecm125ml = document.getElementById("ratecm125ml").innerText = td6.toFixed(2);
  var ratecm200ml = document.getElementById("ratecm200ml").innerText = td7.toFixed(2);
  var rateld150ml = document.getElementById("rateld150ml").innerText = td8.toFixed(2);
  var rateod150ml = document.getElementById("rateod150ml").innerText = td9.toFixed(2);
  
  //snacks start here
  
  var ratekm16gjhal = document.getElementById("ratekm16gjhal").innerText = td10.toFixed(2);
  var ratekm35gjhal = document.getElementById("ratekm35gjhal").innerText = td11.toFixed(2);
  var ratekm150gjhal = document.getElementById("ratekm150gjhal").innerText = td12.toFixed(2);
  var ratekm300gjhal = document.getElementById("ratekm300gjhal").innerText = td13.toFixed(2);
  var ratekm150gclassic = document.getElementById("ratekm150gclassic").innerText = td14.toFixed(2);
  var ratekm300gclassic = document.getElementById("ratekm300gclassic").innerText = td15.toFixed(2);
  var ratekm16ggp = document.getElementById("ratekm16ggp").innerText = td16.toFixed(2);
  var ratekm16gdal = document.getElementById("ratekm16gdal").innerText = td17.toFixed(2);
  var ratekm15gbbq = document.getElementById("ratekm15gbbq").innerText = td18.toFixed(2);
  var ratekm30gbbq = document.getElementById("ratekm30gbbq").innerText = td19.toFixed(2);
  var ratekm150gbbq = document.getElementById("ratekm150gbbq").innerText = td20.toFixed(2);
  var ratekm300gbbq = document.getElementById("ratekm300gbbq").innerText = td21.toFixed(2);
  
  
  //candy start here 
  var ratekids200pcscandy = document.getElementById("ratekids200pcscandy").innerText = td22.toFixed(2);
  var ratemm150pcscandy = document.getElementById("ratemm150pcscandy").innerText = td23.toFixed(2);
  var ratecb150pcscandy = document.getElementById("ratecb150pcscandy").innerText = td24.toFixed(2);
  var ratekp50pcscandy = document.getElementById("ratekp50pcscandy").innerText = td25.toFixed(2);
  var ratemm50pcscandy = document.getElementById("ratemm50pcscandy").innerText = td26.toFixed(2);
  var ratecb50pcscandy = document.getElementById("ratecb50pcscandy").innerText = td27.toFixed(2);
  
  
  
  
   value.innerText = (td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9+ td10 + td11 + td12 + td13 + td14 + td15 + td16 + td17 + td18 + td19 + td20 + td21 + td22 + td23+ td24 + td25 + td26 + td27 );
  
  var sumTotalBeverage = mj125ml + mj200ml + mj250ml + mjpet200ml + mjpet1000ml + cm125ml + cm200ml + ld150ml + od150ml;
  var sumTotalBeverageValue = td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9;
  
  
  totalBeverage.innerText = sumTotalBeverage;
  totalbeveragevalue.innerText = sumTotalBeverageValue.toFixed(2);
  
  //snacks start here
  
  var totalSnacksInKG = km16gjhal * 3.84 + km35gjhal * 3.5 + km150gjhal * 7.5 + km300gjhal * 12 + km150gclassic * 7.5 + km300gclassic * 12 + km16ggp * 3.84 + km16gdal * 3.84 + km15gbbq * 3.6 + km30gbbq * 3.0 + km150gbbq * 7.5 + km300gbbq * 12;
  
  var totalSnacksValue = td10 + td11 + td12 + td13 + td14 + td15 + td16 + td17 + td18 + td19 + td20 + td21;
  
   var snackstotalkg = document.getElementById("snackstotalkg").innerText = totalSnacksInKG.toFixed(2);
   var snackstotalvalue = document.getElementById("snackstotalvalue").innerText = totalSnacksValue.toFixed(2);
   
   //candy start here
   var totalCandyInCtn = kids200pcscandy + mm150pcscandy + cb150pcscandy + kp50pcscandy + mm50pcscandy + cb50pcscandy;
   
   var totalCandyInValue = td22 + td23 + td24 + td25 + td26 + td27;
   
   var totalcandy = document.getElementById("candytotal").innerText = totalCandyInCtn.toFixed(2);
   
   var totalCandyValue = document.getElementById("candytotalvalue").innerText = totalCandyInValue.toFixed(2);
   
   
  document.getElementById("totalbox").innerText = totalSnacksInKG.toFixed(2);
  document.getElementById("totalbeveragebox").innerText = sumTotalBeverage.toFixed(2);
  document.getElementById("totalcandybox").innerText = totalCandyInCtn.toFixed(2);
   
}

