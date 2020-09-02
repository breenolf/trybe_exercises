let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

//1°
console.log("Bem-vinda " + info.personagem);

//2°
info.recorrente = "Sim";
console.log(info);

//3°
for (let key in info) {
    console.log(key);
}

//4°
for (let key in info) {
    console.log(info[key]);
}

//5°
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (let key in info) {

    if (info[key] == info2[key] && key == "recorrente") {
        console.log("Ambos recorrentes");
    }
    else {
        console.log(info[key] + " e " + info2[key]);
    }
}


