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
    const regNo = document.getElementById("regNo").value.toUpperCase();
    const psifia4 = document.getElementById("psifia4").value
    const imLixis = document.getElementById("imLixis").value

    const fullName = document.getElementById("fullName").value.toUpperCase();
    const legalRegNo = document.getElementById("legalRegNo").value.toUpperCase();

    //spans 

    dateSpan = document.getElementById("dateSpan"); 
    dateSpan.innerHTML = date;
    dateSpan2 = document.getElementById("dateSpan2");
    dateSpan2.innerHTML = date; 
    dateSpan3 = document.getElementById("dateSpan3");
    dateSpan3.innerHTML = date;
    dateSpan4 = document.getElementById("dateSpan4");
    dateSpan4.innerHTML = date;

    eponimoSpan = document.getElementById("eponimoSpan");
    eponimoSpan2 = document.getElementById("eponimoSpan2");
    eponimoSpan3 = document.getElementById("eponimoSpan3");
    eponimoSpan4 = document.getElementById("eponimoSpan4");
    eponimoSpan5 = document.getElementById("eponimoSpan5");
    eponimoSpan6 = document.getElementById("eponimoSpan6");
    eponimoSpan.innerHTML = epon;
    eponimoSpan2.innerHTML = epon;
    eponimoSpan3.innerHTML = epon;
    eponimoSpan4.innerHTML = epon;
    eponimoSpan5.innerHTML = epon;
    eponimoSpan6.innerHTML = epon;
 
    policySpan = document.getElementById("policySpan");
    policySpan2 = document.getElementById("policySpan2");
    policySpan3 = document.getElementById("policySpan3");
    policySpan4 = document.getElementById("policySpan4");
    policySpan5 = document.getElementById("policySpan5");
    policySpan6 = document.getElementById("policySpan6");
    policySpan.innerHTML = policyNo; 
    policySpan2.innerHTML = policyNo; 
    policySpan3.innerHTML = policyNo; 
    policySpan4.innerHTML = policyNo; 
    policySpan5.innerHTML = policyNo; 
    policySpan6.innerHTML = policyNo;

    regSpan = document.getElementById("regSpan");
    regSpan2 = document.getElementById("regSpan2");
    regSpan3 = document.getElementById("regSpan3");
    regSpan4 = document.getElementById("regSpan4");
    regSpan5 = document.getElementById("regSpan5");
    regSpan6 = document.getElementById("regSpan6");
    regSpan.innerHTML = regNo;
    regSpan2.innerHTML = regNo;
    regSpan3.innerHTML = regNo;
    regSpan4.innerHTML = regNo;
    regSpan5.innerHTML = regNo;
    regSpan6.innerHTML = regNo;

    psifia4Span = document.getElementById("psifia4Span")
    psifia4Span2 = document.getElementById("psifia4Span2")
    psifia4Span3 = document.getElementById("psifia4Span3")
    psifia4Span4 = document.getElementById("psifia4Span4")
    psifia4Span5 = document.getElementById("psifia4Span5")
    psifia4Span6 = document.getElementById("psifia4Span6")
    psifia4Span.innerHTML = psifia4;
    psifia4Span2.innerHTML = psifia4;
    psifia4Span3.innerHTML = psifia4;
    psifia4Span4.innerHTML = psifia4;
    psifia4Span5.innerHTML = psifia4;
    psifia4Span6.innerHTML = psifia4;

    imLixisSpan = document.getElementById("imLixisSpan")
    imLixisSpan2 = document.getElementById("imLixisSpan2")
    imLixisSpan3 = document.getElementById("imLixisSpan3")
    imLixisSpan4 = document.getElementById("imLixisSpan4")
    imLixisSpan5 = document.getElementById("imLixisSpan5")
    imLixisSpan6 = document.getElementById("imLixisSpan6")
    imLixisSpan.innerHTML = imLixis;
    imLixisSpan2.innerHTML = imLixis;
    imLixisSpan3.innerHTML = imLixis;
    imLixisSpan4.innerHTML = imLixis;
    imLixisSpan5.innerHTML = imLixis;
    imLixisSpan6.innerHTML = imLixis;

    fullNameSpan = document.getElementById("fullNameSpan")
    fullNameSpan2 = document.getElementById("fullNameSpan2")
    fullNameSpan3 = document.getElementById("fullNameSpan3")
    fullNameSpan4 = document.getElementById("fullNameSpan4")
    fullNameSpan.innerHTML = fullName;
    fullNameSpan2.innerHTML = fullName;
    fullNameSpan3.innerHTML = fullName;
    fullNameSpan4.innerHTML = fullName;

    legalRegNoSpan = document.getElementById("legalRegNoSpan")
    legalRegNoSpan2 = document.getElementById("legalRegNoSpan2")
    legalRegNoSpan.innerHTML = legalRegNo;
    legalRegNoSpan2.innerHTML = legalRegNo;

    
    





};



//ΝΟΜΙΚΟ ΠΡΟΣΩΠΟ (functions για πεδία text)

function ektelNom(){

    const eponNom = document.getElementById("eponimoNom").value.toUpperCase();
    const policyNoNom = document.getElementById("policyNoNom").value;

    let dateNom = document.getElementById("dateNom").value;
    dateNom = dateNom.split("-").reverse().join("-");
    console.log(dateNom);      //DATEEEEEE REVERSED///??

    const regNoNom = document.getElementById("regNoNom").value.toUpperCase();
    const legalRegNom = document.getElementById("legalRegNom").value.toUpperCase();

    const psifia4Nom = document.getElementById("psifia4Nom").value
    const imLixisNom = document.getElementById("imLixisNom").value

    const fullNameNom = document.getElementById("fullNameNom").value.toUpperCase();


    dateSpanNom = document.getElementById("dateSpanNom")
    dateSpanNom2 = document.getElementById("dateSpanNom2")
    dateSpanNom3 = document.getElementById("dateSpanNom3")
    dateSpanNom4 = document.getElementById("dateSpanNom4")
    dateSpanNom.innerHTML = dateNom;
    dateSpanNom2.innerHTML = dateNom;
    dateSpanNom3.innerHTML = dateNom;
    dateSpanNom4.innerHTML = dateNom;

    eponimoNomSpan = document.getElementById("eponimoNomSpan")
    eponimoNomSpan2 = document.getElementById("eponimoNomSpan2")
    eponimoNomSpan3 = document.getElementById("eponimoNomSpan3")
    eponimoNomSpan4 = document.getElementById("eponimoNomSpan4")
    eponimoNomSpan.innerHTML = eponNom;
    eponimoNomSpan2.innerHTML = eponNom; 
    eponimoNomSpan3.innerHTML = eponNom; 
    eponimoNomSpan4.innerHTML = eponNom; 

    policyNomSpan = document.getElementById("policyNomSpan")
    policyNomSpan2 = document.getElementById("policyNomSpan2")
    policyNomSpan3 = document.getElementById("policyNomSpan3")
    policyNomSpan4 = document.getElementById("policyNomSpan4")
    policyNomSpan.innerHTML=policyNoNom;
    policyNomSpan2.innerHTML=policyNoNom;
    policyNomSpan3.innerHTML=policyNoNom;
    policyNomSpan4.innerHTML=policyNoNom;

    regNoNomSpan = document.getElementById("regNoNomSpan")
    regNoNomSpan2 = document.getElementById("regNoNomSpan2")
    regNoNomSpan3 = document.getElementById("regNoNomSpan3")
    regNoNomSpan4 = document.getElementById("regNoNomSpan4")
    regNoNomSpan.innerHTML = regNoNom;
    regNoNomSpan2.innerHTML = regNoNom;
    regNoNomSpan3.innerHTML = regNoNom;
    regNoNomSpan4.innerHTML = regNoNom;

    psifia4NomSpan = document.getElementById("psifia4NomSpan")
    psifia4NomSpan2 = document.getElementById("psifia4NomSpan2")
    psifia4NomSpan3 = document.getElementById("psifia4NomSpan3")
    psifia4NomSpan4 = document.getElementById("psifia4NomSpan4")
    psifia4NomSpan.innerHTML=psifia4Nom;
    psifia4NomSpan2.innerHTML=psifia4Nom;
    psifia4NomSpan3.innerHTML=psifia4Nom;
    psifia4NomSpan4.innerHTML=psifia4Nom;

    imLixisNomSpan = document.getElementById("imLixisNomSpan")
    imLixisNomSpan2 = document.getElementById("imLixisNomSpan2")
    imLixisNomSpan3 = document.getElementById("imLixisNomSpan3")
    imLixisNomSpan4 = document.getElementById("imLixisNomSpan4")
    imLixisNomSpan.innerHTML=imLixisNom;
    imLixisNomSpan2.innerHTML=imLixisNom;
    imLixisNomSpan3.innerHTML=imLixisNom;
    imLixisNomSpan4.innerHTML=imLixisNom;

    legalRegNomSpan = document.getElementById("legalRegNomSpan");
    legalRegNomSpan2 = document.getElementById("legalRegNomSpan2");
    legalRegNomSpan3 = document.getElementById("legalRegNomSpan3");
    legalRegNomSpan4 = document.getElementById("legalRegNomSpan4");
    legalRegNomSpan.innerHTML = legalRegNom;
    legalRegNomSpan2.innerHTML = legalRegNom;
    legalRegNomSpan3.innerHTML = legalRegNom;
    legalRegNomSpan4.innerHTML = legalRegNom;

    fullNameNomSpan = document.getElementById("fullNameNomSpan")
    fullNameNomSpan2 = document.getElementById("fullNameNomSpan2")
    fullNameNomSpan.innerHTML = fullNameNom;
    fullNameNomSpan2.innerHTML = fullNameNom;





    

};




function kritiria(){

    const kritiriaText = document.getElementById("kritiriaDiv");

    

    if (kritiriaText.style.display == "block") { 
        kritiriaText.style.display = "none";
      } else {
        kritiriaText.style.display = "block";
      }
    
}
