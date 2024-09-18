// console.log("test")

// console.log("test to see if this is linked")



const individual = document.getElementById("individual");
const legal = document.getElementById("legalEntity");
const other = document.getElementById("other");

const legalText = document.getElementById("ifLegalEntity");
const otherText = document.getElementById("ifOther");
const individualText = document.getElementById("ifIndividual");

function indSelect(){
    const individualText = document.getElementById("ifIndividual");
    const otherText = document.getElementById("ifOther");
    const legalText = document.getElementById("ifLegalEntity");

    individualText.style.display = "block";

    legalText.style.display = "none";
    otherText.style.display = "none";
 
};

function legSelect(){
    const legalText = document.getElementById("ifLegalEntity");
    const individualText = document.getElementById("ifIndividual");
    const otherText = document.getElementById("ifOther");

    legalText.style.display = "block";

    otherText.style.display = "none";
    individualText.style.display = "none";


};

function othSelect(){
    const otherText = document.getElementById("ifOther");
    const legalText = document.getElementById("ifLegalEntity");
    const individualText = document.getElementById("ifIndividual");

    otherText.style.display = "block";

    legalText.style.display = "none";
    individualText.style.display = "none";

};

// ΦΥΣΙΚΟ ΠΡΟΣΩΠΟ (function για πεδία text)

function ektel(){
    const epon = document.getElementById("eponimo").value.toUpperCase();
    const policyNo = document.getElementById("policyNo").value;
    let date = document.getElementById("date").value;
    date = date.split("-").reverse().join("-");
    console.log(date);      //DATEEEEEE REVERSED///??
    
    const diarkeiaApo = document.getElementById("diarkeiaApo").value;
    const diarkeiaSe = document.getElementById("diarkeiaSe").value;

    // console.log(diarkeiaApo);
    // console.log(diarkeiaSe);

    const regNo = document.getElementById("regNo").value.toUpperCase();


        // console.log(epon);
        // console.log(policyNo);
        // console.log(date);
        // console.log(axia);
        // console.log(regNo);

    const dateSpan = document.getElementById("dateSpan")
    const dateSpan2 = document.getElementById("dateSpan2")
    const dateSpan3 = document.getElementById("dateSpan3")
    const dateSpan4 = document.getElementById("dateSpan4")
    // const dateSpan5 = document.getElementById("dateSpan5")
    // const dateSpan6 = document.getElementById("dateSpan6")
    // const dateSpan7 = document.getElementById("dateSpan7")


    // const axiaSpan = document.getElementById("axiaSpan")
    // const axiaSpan2 = document.getElementById("axiaSpan2")
    // const axiaSpan3 = document.getElementById("axiaSpan3")
    // const axiaSpan4 = document.getElementById("axiaSpan4")
    // const axiaSpan5 = document.getElementById("axiaSpan5")
    // const axiaSpan6 = document.getElementById("axiaSpan6")
    // const axiaSpan7 = document.getElementById("axiaSpan7")

    const eponimoSpan = document.getElementById("eponimoSpan");
    const eponimoSpan2 = document.getElementById("eponimoSpan2");
    const eponimoSpan3 = document.getElementById("eponimoSpan3");
    const eponimoSpan4 = document.getElementById("eponimoSpan4");

    // const policySpan = document.getElementById("policySpan");
    // const policySpan2 = document.getElementById("policySpan2");
    // const policySpan3 = document.getElementById("policySpan3");
    // const policySpan4 = document.getElementById("policySpan4");

    document.getElementById("policySpan").innerHTML = policyNo;
    document.getElementById("policySpan2").innerHTML = policyNo;

    document.getElementById("regSpan").innerHTML = regNo;
    document.getElementById("regSpan2").innerHTML = regNo;

    // const regSpan = document.getElementById("regSpan");
    // const regSpan2 = document.getElementById("regSpan2");
    // const regSpan3 = document.getElementById("regSpan3");
    // const regSpan4 = document.getElementById("regSpan4");


    dateSpan.innerHTML = date;
    dateSpan2.innerHTML = date;
    dateSpan3.innerHTML = date;
    dateSpan4.innerHTML = date;

    const apoSpan = document.getElementById("apoSpan");
    const apoSpan2 = document.getElementById("apoSpan2");
    const apoSpan3 = document.getElementById("apoSpan3");
    const apoSpan4 = document.getElementById("apoSpan4");
    const apoSpan5 = document.getElementById("apoSpan5");
    const apoSpan6 = document.getElementById("apoSpan6");

    const seSpan = document.getElementById("seSpan");
    const seSpan2 = document.getElementById("seSpan2");
    const seSpan3 = document.getElementById("seSpan3");
    const seSpan4 = document.getElementById("seSpan4");
    const seSpan5 = document.getElementById("seSpan5");
    const seSpan6 = document.getElementById("seSpan6");

    // dateSpan5.innerHTML = date;
    // dateSpan6.innerHTML = date;
    // dateSpan7.innerHTML = date;

    // axiaSpan.innerHTML = axia;
    // axiaSpan2.innerHTML = axia;
    // axiaSpan3.innerHTML = axia;
    // axiaSpan4.innerHTML = axia;
    // axiaSpan5.innerHTML = axia;
    // axiaSpan6.innerHTML = axia;
    // axiaSpan7.innerHTML = axia;

    apoSpan.innerHTML = diarkeiaApo;
    apoSpan2.innerHTML = diarkeiaApo;
    apoSpan3.innerHTML = diarkeiaApo;
    apoSpan4.innerHTML = diarkeiaApo;
    apoSpan5.innerHTML = diarkeiaApo;
    apoSpan6.innerHTML = diarkeiaApo;

    seSpan.innerHTML = diarkeiaSe;
    seSpan2.innerHTML = diarkeiaSe;
    seSpan3.innerHTML = diarkeiaSe;
    seSpan4.innerHTML = diarkeiaSe;
    seSpan5.innerHTML = diarkeiaSe;
    seSpan6.innerHTML = diarkeiaSe;


    eponimoSpan.innerHTML = epon;
    eponimoSpan2.innerHTML = epon;
    eponimoSpan3.innerHTML = epon;
    eponimoSpan4.innerHTML = epon;

    policySpan.innerHTML= policyNo;
    policySpan2.innerHTML= policyNo;
    policySpan3.innerHTML= policyNo;
    policySpan4.innerHTML= policyNo;

    regSpan.innerHTML = regNo;
    regSpan2.innerHTML = regNo;
    regSpan3.innerHTML = regNo;
    regSpan4.innerHTML = regNo;

};



//ΝΟΜΙΚΟ ΠΡΟΣΩΠΟ (functions για πεδία text)

function ektelNom(){

    //selectors for pedia buttons
    const eponNom = document.getElementById("eponimoNom").value.toUpperCase();
    let dateNom = document.getElementById("dateNom").value;
    dateNom = dateNom.split("-").reverse().join("-");
    console.log(dateNom);      //DATEEEEEE REVERSED///??
    const policyNoNom = document.getElementById("policyNoNom").value;
    
    const regNoNom = document.getElementById("regNoNom").value.toUpperCase();
    const legalRegNom = document.getElementById("legalRegNom").value.toUpperCase();

    const diarkeiaApoNom = document.getElementById("diarkeiaApoNom").value;
    const diarkeiaSeNom = document.getElementById("diarkeiaSeNom").value;

    //selectors for text after EktelNom

    document.getElementById("eponimoNomSpan3").innerHTML = eponNom;
    document.getElementById("eponimoNomSpan4").innerHTML = eponNom;

    document.getElementById("dateSpan3").innerHTML = dateNom;
    document.getElementById("dateSpan4").innerHTML = dateNom;

    document.getElementById("policySpan3").innerHTML = policyNoNom;
    document.getElementById("policySpan4").innerHTML = policyNoNom;

    document.getElementById("regSpan3").innerHTML = regNoNom;
    document.getElementById("regSpan4").innerHTML = regNoNom;

    document.getElementById("legalRegSpan").innerHTML = legalRegNom;
    document.getElementById("legalRegSpan2").innerHTML = legalRegNom;

    document.getElementById("apoSpan4").innerHTML = diarkeiaApoNom;
    document.getElementById("apoSpan5").innerHTML = diarkeiaApoNom;
    document.getElementById("apoSpan6").innerHTML = diarkeiaApoNom;

    document.getElementById("seSpan4").innerHTML = diarkeiaSeNom;
    document.getElementById("seSpan5").innerHTML = diarkeiaSeNom;
    document.getElementById("seSpan6").innerHTML = diarkeiaSeNom;







    // const dateSpan4 = document.getElementById("dateSpan8")
    // const dateSpan5 = document.getElementById("dateSpan9")


    // dateSpan4.innerHTML = dateNom;
    // dateSpan5.innerHTML = dateNom;


    // const eponimoSpan3 = document.getElementById("eponimoSpan5");
    // const eponimoSpan4 = document.getElementById("eponimoSpan6");


    // eponimoSpan3.innerHTML = eponNom;
    // eponimoSpan4.innerHTML = eponNom;


    // const regSpan3 = document.getElementById("regSpan5");
    // const regSpan4 = document.getElementById("regSpan6");

    // regSpan3.innerHTML = regNoNom;
    // regSpan4.innerHTML = regNoNom;

    // const policySpan3 = document.getElementById("policySpan5");
    // const policySpan4 = document.getElementById("policySpan6");
  

    // policySpan3.innerHTML= policyNoNom;
    // policySpan4.innerHTML= policyNoNom;

    // const legalRegSpan = document.getElementById("legalRegSpan");
    // const legalRegSpan2 = document.getElementById("legalRegSpan2");

    // legalRegSpan.innerHTML = legalRegNom;
    // legalRegSpan2.innerHTML = legalRegNom;



    // const apoSpan4 = document.getElementById("apoSpan4");
    // const apoSpan5 = document.getElementById("apoSpan5");
    // const apoSpan6 = document.getElementById("apoSpan6");

    // const seSpan4 = document.getElementById("seSpan4");
    // const seSpan5 = document.getElementById("seSpan5");
    // const seSpan6 = document.getElementById("seSpan6");


    // apoSpan4.innerHTML = diarkeiaApoNom;
    // apoSpan5.innerHTML = diarkeiaApoNom;
    // apoSpan6.innerHTML = diarkeiaApoNom;


    // seSpan4.innerHTML = diarkeiaSeNom;
    // seSpan5.innerHTML = diarkeiaSeNom;
    // seSpan6.innerHTML = diarkeiaSeNom;
};

function kritiria(){

    const kritiriaText = document.getElementById("kritiriaDiv");

    

    if (kritiriaText.style.display == "block") { 
        kritiriaText.style.display = "none";
      } else {
        kritiriaText.style.display = "block";
      }
}