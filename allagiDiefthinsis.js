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

    // console.log("is this working?");

    const epon = document.getElementById("epon").value.toUpperCase();
    const policyNo = document.getElementById("policyNo").value;
    let date = document.getElementById("date").value;
    date = date.split("-").reverse().join("-");
    console.log(date);      //DATEEEEEE REVERSED///??
    const odos = document.getElementById("odosID").value.toUpperCase();
    const regNo = document.getElementById("regNo").value.toUpperCase();

    const eparchia = document.getElementById("eparchia").value;
    const postCode = document.getElementById("tahKodikas").value; 

    const fullAddress = document.getElementById("diefthinsiSpan");
    const fullAddress2 = document.getElementById("diefthinsiSpan2");

        // console.log(epon);
        // console.log(policyNo);
        // console.log(date);
        // console.log(odos);
        // console.log(regNo);
        // console.log(eparchia);

    const eparchiaSpan = document.getElementById("eparchiaSpan")
    const eparchiaSpan2 = document.getElementById("eparchiaSpan2")
    const eparchiaSpan3 = document.getElementById("eparchiaSpan3")
    const eparchiaSpan4 = document.getElementById("eparchiaSpan4")

    const tkSpan = document.getElementById("tkSpan")
    const tkSpan2 = document.getElementById("tkSpan2")
    const tkSpan3 = document.getElementById("tkSpan3")
    const tkSpan4 = document.getElementById("tkSpan4")


    const dateSpan = document.getElementById("dateSpan")
    const dateSpan2 = document.getElementById("dateSpan2")
    const dateSpan3 = document.getElementById("dateSpan3")
    const dateSpan4 = document.getElementById("dateSpan4")

    const odosSpan = document.getElementById("odosSpan")
    const odosSpan2 = document.getElementById("odosSpan2")
    const odosSpan3 = document.getElementById("odosSpan3")
    const odosSpan4 = document.getElementById("odosSpan4")
    const odosSpan5 = document.getElementById("odosSpan5")
    const odosSpan6 = document.getElementById("odosSpan6")
    const odosSpan7 = document.getElementById("odosSpan7")
    const odosSpan8 = document.getElementById("odosSpan8")

    const eponimoSpan = document.getElementById("eponimoSpan");
    const eponimoSpan2 = document.getElementById("eponimoSpan2");
    const eponimoSpan3 = document.getElementById("eponimoSpan3");
    const eponimoSpan4 = document.getElementById("eponimoSpan4");
    const eponimoSpan5 = document.getElementById("eponimoSpan5");
    const eponimoSpan6 = document.getElementById("eponimoSpan6");
    const eponimoSpan7 = document.getElementById("eponimoSpan7");
    const eponimoSpan8 = document.getElementById("eponimoSpan8");

    // const eponNom = document.getElementById("eponNom");
    // const eponNom2 = document.getElementById("eponNom2");
    // const eponNom3 = document.getElementById("eponNom3");
    // const eponNom4 = document.getElementById("eponNom4");


    const policySpan = document.getElementById("policySpan");
    const policySpan2 = document.getElementById("policySpan2");
    const policySpan3 = document.getElementById("policySpan3");
    const policySpan4 = document.getElementById("policySpan4");
    const policySpan5 = document.getElementById("policySpan5");
    const policySpan6 = document.getElementById("policySpan6");
    const policySpan7 = document.getElementById("policySpan7");
    const policySpan8 = document.getElementById("policySpan8");

    const regSpan = document.getElementById("regSpan");
    const regSpan2 = document.getElementById("regSpan2");
    const regSpan3 = document.getElementById("regSpan3");
    const regSpan4 = document.getElementById("regSpan4");
    const regSpan5 = document.getElementById("regSpan5");
    const regSpan6 = document.getElementById("regSpan6");
    const regSpan7 = document.getElementById("regSpan7");
    const regSpan8 = document.getElementById("regSpan8");


    dateSpan.innerHTML = date;
    dateSpan2.innerHTML = date;
    dateSpan3.innerHTML = date;
    dateSpan4.innerHTML = date;

    odosSpan.innerHTML = odos;
    odosSpan2.innerHTML = odos;
    odosSpan3.innerHTML = odos;
    odosSpan4.innerHTML = odos;
    odosSpan5.innerHTML = odos;
    odosSpan6.innerHTML = odos;
    odosSpan7.innerHTML = odos;
    odosSpan8.innerHTML = odos;
    

    eponimoSpan.innerHTML = epon;
    eponimoSpan2.innerHTML = epon;
    eponimoSpan3.innerHTML = epon;
    eponimoSpan4.innerHTML = epon;
    eponimoSpan5.innerHTML = epon;
    eponimoSpan6.innerHTML = epon;
    eponimoSpan7.innerHTML = epon;
    eponimoSpan8.innerHTML = epon;
    

    policySpan.innerHTML= policyNo;
    policySpan2.innerHTML= policyNo;
    policySpan3.innerHTML= policyNo;
    policySpan4.innerHTML= policyNo;
    policySpan5.innerHTML= policyNo;
    policySpan6.innerHTML= policyNo;
    policySpan7.innerHTML= policyNo;
    policySpan8.innerHTML= policyNo;

    regSpan.innerHTML = regNo;
    regSpan2.innerHTML = regNo;
    regSpan3.innerHTML = regNo;
    regSpan4.innerHTML = regNo;
    regSpan5.innerHTML = regNo;
    regSpan6.innerHTML = regNo;
    regSpan7.innerHTML = regNo;
    regSpan8.innerHTML = regNo;

    // eponNom.innerHTML = eponNom;
    // eponNom2.innerHTML = eponNom2;
    // eponNom3.innerHTML = eponNom3;
    // eponNom4.innerHTML = eponNom4;

    eparchiaSpan.innerHTML= eparchia;
    eparchiaSpan2.innerHTML= eparchia;
    eparchiaSpan3.innerHTML= eparchia;
    eparchiaSpan4.innerHTML= eparchia;

    tkSpan.innerHTML = postCode;
    tkSpan2.innerHTML = postCode;
    tkSpan3.innerHTML = postCode;
    tkSpan4.innerHTML = postCode;

    fullAddress.innerHTML = "αλλαγή διεύθυνσης σε " + odos + ", " + eparchia + ", "  + postCode;
    fullAddress2.innerHTML = "αλλαγή διεύθυνσης σε " + odos + ", " + eparchia + ", "  + postCode + " ισχύει από " + date;


};



//ΝΟΜΙΚΟ ΠΡΟΣΩΠΟ (functions για πεδία text)

function ektelNom(){

    const eponNom = document.getElementById("eponimoNom").value.toUpperCase();
    const policyNoNom = document.getElementById("policyNoNom").value;

    let dateNom = document.getElementById("dateNom").value;
    dateNom = dateNom.split("-").reverse().join("-");
    console.log(dateNom);      //DATEEEEEE REVERSED///??

    const odos = document.getElementById("odosNom").value;
    const eparchia = document.getElementById("eparchiaNom").value;
    const tahK = document.getElementById("tahKodikasNom").value; 
    const legalRegNom = document.getElementById("legalRegNom").value.toUpperCase();

    const regNoNom = document.getElementById("regNoNom").value.toUpperCase();

    // console.log(axiaNom);
    // console.log(legalRegNom);
    // console.log(eponNom);
    // console.log(policyNoNom);
    // console.log(dateNom);
    // console.log(regNoNom)


    const dateSpan = document.getElementById("dateSpan")
    const dateSpan2 = document.getElementById("dateSpan2")
    const dateSpan3 = document.getElementById("dateSpan3")
    const dateSpan4 = document.getElementById("dateSpan4")


    dateSpan.innerHTML = dateNom;
    dateSpan2.innerHTML = dateNom;
    dateSpan3.innerHTML = dateNom;
    dateSpan4.innerHTML = dateNom;

    const eponimoSpan5 = document.getElementById("eponimoSpan5");
    const eponimoSpan6 = document.getElementById("eponimoSpan6");
    const eponimoSpan7 = document.getElementById("eponimoSpan7");
    const eponimoSpan8 = document.getElementById("eponimoSpan8");

    eponimoSpan5.innerHTML = eponNom;
    eponimoSpan6.innerHTML = eponNom;
    eponimoSpan7.innerHTML = eponNom;
    eponimoSpan8.innerHTML = eponNom;

    const legalRegNomSpan = document.getElementById("legalRegNomSpan");
    const legalRegNomSpan2 = document.getElementById("legalRegNomSpan2");
    const legalRegNomSpan3 = document.getElementById("legalRegNomSpan3");
    const legalRegNomSpan4 = document.getElementById("legalRegNomSpan4");

    legalRegNomSpan.innerHTML = legalRegNom;
    legalRegNomSpan2.innerHTML = legalRegNom;
    legalRegNomSpan3.innerHTML = legalRegNom;
    legalRegNomSpan4.innerHTML = legalRegNom;


    const regSpan5 = document.getElementById("regSpan5");
    const regSpan6 = document.getElementById("regSpan6");
    const regSpan7 = document.getElementById("regSpan7");
    const regSpan8 = document.getElementById("regSpan8");

    regSpan5.innerHTML = regNoNom;
    regSpan6.innerHTML = regNoNom;
    regSpan7.innerHTML = regNoNom;
    regSpan8.innerHTML = regNoNom;

    const policySpan5 = document.getElementById("policySpan5");
    const policySpan6 = document.getElementById("policySpan6");
    const policySpan7 = document.getElementById("policySpan7");
    const policySpan8 = document.getElementById("policySpan8");

    policySpan5.innerHTML= policyNoNom;
    policySpan6.innerHTML= policyNoNom;
    policySpan7.innerHTML= policyNoNom;
    policySpan8.innerHTML= policyNoNom;

    const legalRegSpan = document.getElementById("legalRegNomSpan");
    const legalRegSpan2 = document.getElementById("legalRegNomSpan2");
    const legalRegSpan3 = document.getElementById("legalRegNomSpan3");
    const legalRegSpan4 = document.getElementById("legalRegNomSpan4");

    legalRegSpan.innerHTML = legalRegNom;
    legalRegSpan2.innerHTML = legalRegNom;
    legalRegSpan3.innerHTML = legalRegNom;
    legalRegSpan4.innerHTML = legalRegNom;

    // na prostethoun tk Kodikas, odos, eparchia innerHTMLS to spans

    const tKodSpan5 = document.getElementById("tkSpan5");
    const tKodSpan6 = document.getElementById("tkSpan6")
    const tKodSpan7 = document.getElementById("tkSpan7")
    const tKodSpan8 = document.getElementById("tkSpan8")

    tKodSpan5.innerHTML = tahK;
    tKodSpan6.innerHTML = tahK;
    tKodSpan7.innerHTML = tahK;
    tKodSpan8.innerHTML = tahK;

    const odosSpan5 = document.getElementById("odosSpan5")
    const odosSpan6 = document.getElementById("odosSpan6")
    const odosSpan7 = document.getElementById("odosSpan7")
    const odosSpan8 = document.getElementById("odosSpan8")

    odosSpan5.innerHTML = odos;
    odosSpan6.innerHTML = odos;
    odosSpan7.innerHTML = odos;
    odosSpan8.innerHTML = odos;

    const eparchiaSpan = document.getElementById("eparchiaSpanNom");
    const eparchiaSpan2 = document.getElementById("eparchiaSpanNom2");
    const eparchiaSpan3 = document.getElementById("eparchiaSpanNom3");
    const eparchiaSpan4 = document.getElementById("eparchiaSpanNom4");

    eparchiaSpan.innerHTML = eparchia;
    eparchiaSpan2.innerHTML = eparchia;
    eparchiaSpan3.innerHTML = eparchia;
    eparchiaSpan4.innerHTML = eparchia;

    const diefthinsiSpanNom = document.getElementById("diefthinsiSpanNom")
    const diefthinsiSpanNom2 = document.getElementById("diefthinsiSpanNom2")

    diefthinsiSpanNom.innerHTML = "να γίνει αλλαγή διεύθυνσης σε " + odos.toUpperCase() + ", " + tahK + ", " + eparchia +". Ισχύει από " + dateNom; 
    diefthinsiSpanNom2.innerHTML = "να γίνει αλλαγή διεύθυνσης σε " + odos.toUpperCase() + ", " + tahK + ", " + eparchia +". Ισχύει από " + dateNom; 



};

function kritiria(){

    const kritiriaText = document.getElementById("kritiriaDiv");

    

    if (kritiriaText.style.display == "block") { 
        kritiriaText.style.display = "none";
      } else {
        kritiriaText.style.display = "block";
      }



    
}

function copyText(){


    const copiedText = document.getElementById("aitima2"); 

    console.log(copiedText);


}