/*
Gaunamas savaites krituliu kiekis mm.
Jei visa savaite  visiskai nelyjo, graziname "Sausra";
Jei krituliu ne daugiau  nei 50mm, tai: "Ganetinai sausa savaite";
Jei krituliu kiekis ne daugiau 200mm, tai: "Lietinga savaite";
Jei krituliu virs 1000mm, tai: Barsukas turetu sedeti namie";
Visais tais atvejais: "Labai daug lietaus"
*/

const a = [0, 0, 0, 0, 0, 0, 0];
const b = [0, 0, 10, 5, 7, 0, 0];
const c = [50, 0, 10, 5, 7, 40, 15];
const d = [100, 200, 300, 400, 500, 600, 700];
const e = [100, 100, 100, 100, 100, 100, 100];

const f = [50, 0, 0, 0, 0, 0, 0];



function orai(data) {
    let krituliusuma = 0;

    for (let i=0; i < data.length; i++) {
        krituliusuma += data[i] 
    }
    if (krituliusuma === 0){
        return "Sausra"
    };
    if (krituliusuma > 1000) {
        return "Barsukas turetu sedeti namie"
    };
    if (krituliusuma <= 50) {
        return "Ganetinai sausa savaite"
    };
    if (krituliusuma <= 200) {
        return "Lietinga savaite"
    };
    return "Labai daug lietaus";
    
}

const xa = 0;
const xb = 0;
const xc = 0;
const xd = 0;
const xe = 0;

console.log($krituliusSuma), '->', orai(a);
console.log(orai(b));
console.log(orai(c));
console.log(orai(d));
console.log(orai(e));
console.log(orai(f));