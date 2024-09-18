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
    const axia = document.getElementById("axia").value;
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
    const dateSpan5 = document.getElementById("dateSpan5")
    const dateSpan6 = document.getElementById("dateSpan6")
    const dateSpan7 = document.getElementById("dateSpan7")


    const axiaSpan = document.getElementById("axiaSpan")
    const axiaSpan2 = document.getElementById("axiaSpan2")
    const axiaSpan3 = document.getElementById("axiaSpan3")
    const axiaSpan4 = document.getElementById("axiaSpan4")
    const axiaSpan5 = document.getElementById("axiaSpan5")
    const axiaSpan6 = document.getElementById("axiaSpan6")
    const axiaSpan7 = document.getElementById("axiaSpan7")

    const eponimoSpan = document.getElementById("eponimoSpan");
    const eponimoSpan2 = document.getElementById("eponimoSpan2");
    const eponimoSpan3 = document.getElementById("eponimoSpan3");
    const eponimoSpan4 = document.getElementById("eponimoSpan4");

    const policySpan = document.getElementById("policySpan");
    const policySpan2 = document.getElementById("policySpan2");
    const policySpan3 = document.getElementById("policySpan3");
    const policySpan4 = document.getElementById("policySpan4");

    const regSpan = document.getElementById("regSpan");
    const regSpan2 = document.getElementById("regSpan2");
    const regSpan3 = document.getElementById("regSpan3");
    const regSpan4 = document.getElementById("regSpan4");


    dateSpan.innerHTML = date;
    dateSpan2.innerHTML = date;
    dateSpan3.innerHTML = date;
    dateSpan4.innerHTML = date;
    dateSpan5.innerHTML = date;
    dateSpan6.innerHTML = date;
    dateSpan7.innerHTML = date;

    axiaSpan.innerHTML = axia;
    axiaSpan2.innerHTML = axia;
    axiaSpan3.innerHTML = axia;
    axiaSpan4.innerHTML = axia;
    axiaSpan5.innerHTML = axia;
    axiaSpan6.innerHTML = axia;
    axiaSpan7.innerHTML = axia;

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

    const axiaNom = document.getElementById("axiaNom").value;
    const eponNom = document.getElementById("eponimoNom").value.toUpperCase();
    const policyNoNom = document.getElementById("policyNoNom").value;

    let dateNom = document.getElementById("dateNom").value;
    dateNom = dateNom.split("-").reverse().join("-");
    console.log(dateNom);      //DATEEEEEE REVERSED///??

    const regNoNom = document.getElementById("regNoNom").value.toUpperCase();
    const legalRegNom = document.getElementById("legalRegNom").value.toUpperCase();

    // console.log(axiaNom);
    // console.log(legalRegNom);
    // console.log(eponNom);
    // console.log(policyNoNom);
    // console.log(dateNom);
    // console.log(regNoNom)

    const axiaSpan8 = document.getElementById("axiaSpan8")
    const axiaSpan9 = document.getElementById("axiaSpan9")
    const axiaSpan10 = document.getElementById("axiaSpan10")
    const axiaSpan11 = document.getElementById("axiaSpan11")
    const axiaSpan12 = document.getElementById("axiaSpan12")
    const axiaSpan13 = document.getElementById("axiaSpan13")
    const axiaSpan14 = document.getElementById("axiaSpan14")

    axiaSpan8.innerHTML = axiaNom;
    axiaSpan9.innerHTML = axiaNom;
    axiaSpan10.innerHTML = axiaNom;
    axiaSpan11.innerHTML = axiaNom;
    axiaSpan12.innerHTML = axiaNom;
    axiaSpan13.innerHTML = axiaNom;
    axiaSpan14.innerHTML = axiaNom;

    const dateSpan8 = document.getElementById("dateSpan8")
    const dateSpan9 = document.getElementById("dateSpan9")
    const dateSpan10 = document.getElementById("dateSpan10")
    const dateSpan11 = document.getElementById("dateSpan11")
    const dateSpan12 = document.getElementById("dateSpan12")
    const dateSpan13 = document.getElementById("dateSpan13")
    const dateSpan14 = document.getElementById("dateSpan14")

    dateSpan8.innerHTML = dateNom;
    dateSpan9.innerHTML = dateNom;
    dateSpan10.innerHTML = dateNom;
    dateSpan11.innerHTML = dateNom;
    dateSpan12.innerHTML = dateNom;
    dateSpan13.innerHTML = dateNom;
    dateSpan14.innerHTML = dateNom;

    const eponimoSpan5 = document.getElementById("eponimoSpan5");
    const eponimoSpan6 = document.getElementById("eponimoSpan6");
    const eponimoSpan7 = document.getElementById("eponimoSpan7");
    const eponimoSpan8 = document.getElementById("eponimoSpan8");

    eponimoSpan5.innerHTML = eponNom;
    eponimoSpan6.innerHTML = eponNom;
    eponimoSpan7.innerHTML = eponNom;
    eponimoSpan8.innerHTML = eponNom;

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

    const legalRegSpan = document.getElementById("legalRegSpan");
    const legalRegSpan2 = document.getElementById("legalRegSpan2");
    const legalRegSpan3 = document.getElementById("legalRegSpan3");
    const legalRegSpan4 = document.getElementById("legalRegSpan4");

    legalRegSpan.innerHTML = legalRegNom;
    legalRegSpan2.innerHTML = legalRegNom;
    legalRegSpan3.innerHTML = legalRegNom;
    legalRegSpan4.innerHTML = legalRegNom;

};

function kritiria(){

    const kritiriaText = document.getElementById("kritiriaDiv");

    

    if (kritiriaText.style.display == "block") { 
        kritiriaText.style.display = "none";
      } else {
        kritiriaText.style.display = "block";
      }
    
}
