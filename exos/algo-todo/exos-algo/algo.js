// 2.3
// const ht = window.prompt("ht?");
// const quantite = window.prompt("quantite?");
// const tva = window.prompt("tva?");
// const ttc = ht * (tva / 100 + 1) * quantite;
// const detail = {
//   prix_ht: ht + "€",
//   quantité: quantite,
//   TVA: tva + "%",
//   prix_ttc: ttc + "€",
// };
// console.table(detail);

// 2.4
// const phr = "Belle marquise, vos beaux yeux me font mourir d'amour";
// const split = phr.split(" ");
// for (let i = 0; i < 4; i++) {
//   let rand;
//   do {
//     rand = Math.floor(Math.random() * split.length);
//   } while (rand === i || rand < 0);

//   let temp = split[i];
//   split[i] = split[rand];
//   split[rand] = temp;
//   let joined = split.join(" ");
//   console.log(joined);
// }

// 3.1
// const num = window.prompt("num?");
// if (num < 0) {
//   console.log("negative number");
// } else {
//   console.log("positive number");
// }

// 3.2
// const n1 = prompt("n1?");
// const n2 = prompt("n2?");
// if ((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)) {
//   console.log("produit négatif");
// } else if (n1 > 0 && n2 > 0) {
//   console.log("produit positif");
// } else {
//   console.log("produit positif");
// }

// 3.3;
// const p1 = window.prompt("prenom 1 ?");
// const p2 = window.prompt("prenom 2 ?");
// const p3 = window.prompt("prenom 3 ?");

// const ps = [p1, p2, p3];
// const sorted = [p1, p2, p3];
// sorted.sort();

// let ordered = true;
// for (let i = 0; i < ps.length; i++) {
//   if (ps[i] !== sorted[i]) {
//     ordered = false;
//   }
// }
// ordered
//   ? console.log("en ordre alphabetique")
//   : console.log("pas en ordre alphabetique");

// 3.4
// const num = window.prompt("num?");
// if (num < 0) {
//   console.log("negative number");
// } else if (num > 0) {
//   console.log("positive number");
// } else {
//   console.log("=0");
// }

// 3.5
// const n1 = parseInt(prompt("n1?"));
// const n2 = parseInt(prompt("n2?"));

// if (n1 === 0 || n2 === 0) {
//   console.log("produit nul");
// } else if ((n1 < 0 && n2 > 0) || (n1 > 0 && n2 < 0)) {
//   console.log("produit négatif");
// } else if (n1 > 0 && n2 > 0) {
//   console.log("produit positif");
// } else {
//   console.log("produit positif");
// }

// 3.6
// const age = parseInt(window.prompt("age"));

// if (age > 5 && age < 8) {
//   console.log("Poussin");
// } else if (age > 7 && age < 10) {
//   console.log("Pupille");
// } else if (age > 9 && age < 12) {
//   console.log("Minime");
// } else if (age >= 12) {
//   console.log("Cadet");
// } else {
//   console.log("pas en âge");
// }

// 4.1
// if(t1 > t2+4 ||  t3==="ok"){
//     t1++
// }else{
//     t1--
// }

// 4.2

// 4.2
// let m = parseInt(window.prompt("minutes?"));
// let h = parseInt(window.prompt("heures?"));

// m++;
// if (m === 60) {
//   m = 0;
//   h++;
//   if (h === 24) {
//     h = 0;
//   }
// }

// console.log("dans une minute il sera " + h + " heure(s) " + m);

// 4.3
// let s = parseInt(window.prompt("secondes?"));
// let m = parseInt(window.prompt("minutes?"));
// let h = parseInt(window.prompt("heures?"));

// s++;
// if (s === 60) {
//   s = 0;
//   m++;
//   if (m === 60) {
//     m = 0;
//     h++;
//     if (h === 24) {
//       h = 0;
//     }
//   }
// }

// console.log(
//   "dans une seconde il sera " +
//     h +
//     " heure(s) " +
//     m +
//     " minute(s) et " +
//     s +
//     " secondes"
// );

// 4.4
// const amount = parseInt(window.prompt("combien?"));

// if (amount <= 10) {
//   console.log("prix = ", amount * 0.1);
// } else if (amount > 10) {
//   if (amount <= 30) {
//     console.log("prix = ", 1 + (amount - 10) * 0.09);
//   } else {
//     console.log("prix = ", 1 + 1.8 + (amount - 30) * 0.08);
//   }
// }

// 4.5
// const age = parseInt(window.prompt("âge?"));
// const sexe = window.prompt("sexe?");
// if (age < 18) {
//   console.log("pas d'impôts");
// } else if (sexe === "femme") {
//   if (age >= 18 && age <= 35) {
//     console.log("paie l'impôt");
//   } else {
//     console.log("pas d'impôt");
//   }
// } else if (sexe === "homme") {
//   console.log("paie l'impôt");
// }

// 4.6
// const c1 = parseInt(window.prompt("score c1?"));
// const c2 = parseInt(window.prompt("score c2?"));
// const c3 = parseInt(window.prompt("score c3?"));
// const c4 = parseInt(window.prompt("score c4?"));

// if (c1 > 50) {
//   console.log("elu au premier tour");
// } else if (c1 < 12.5) {
//   console.log("eliminé au premier tour");
// } else if (c1 > 12.5) {
//   if (c1 < c2 || c1 < c3 || c1 < c4) {
//     console.log("au deuxieme tour en ballottage défavorable");
//   } else {
//     console.log("au deuxieme tour en ballottage favorable");
//   }
// }

// 4.7

// const age = 24;
// const permis = 3;
// const accidents = 1;
// const fidelite = 0;
// let score = 0;
// if (age > 25) {
//   score++;
// }
// if (permis > 2) {
//   score++;
// }
// score -= accidents;

// if (fidelite > 1) {
//   score += 2;
// }

// if (score < 0) {
//   console.log("refusé");
// } else if (score === 0) {
//   console.log("rouge");
// } else if (score === 1) {
//   console.log("orange");
// } else if (score >= 2) {
//   console.log("vert");
// }

// 4.8
const j = parseInt(window.prompt("jour?"));
const m = parseInt(window.prompt("mois?"));
const an = parseInt(window.prompt("année?"));

if (m >= 1 && m <= 12 && j >= 1 && j <= 31 && an > 0) {
  // cas fevrier
  if (m === 2) {
    if (j > 29) {
      console.log("date invalide");
    } else {
      if (j <= 28) {
        console.log("date valide");

        // si j === 29
      } else {
        // année bissextile?
        if (an % 4 === 0 && an % 100 !== 0) {
          console.log("date valide");
        } else if (an % 400 === 0) {
          console.log("date valide");
        } else {
          console.log("date invalide");
        }
      }
    }
  } else {
    if (j === 31) {
      // si mois pair jusqu'août et j === 31 ->invalide
      if (m < 8 && m % 2 === 0) {
        console.log("date invalide");
        //   si mois impair depuis août -> invalide
      } else if (m >= 9 && m % 2 !== 0) {
        console.log("date invalide");
      } else {
        console.log("date valide");
      }
    } else {
      console.log("date valide");
    }
  }
} else {
  console.log("date invalide");
}
