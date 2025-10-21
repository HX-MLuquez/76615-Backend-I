//* MODULE NATIVO de NODE 'crypto' <- CORE NODE

const crypto = require("crypto");

const passUser = "abcd123";
const hash = crypto.createHash("sha256"); // tenemos: sha256, sha512, md5, etc.
console.log("01 - ", hash); // 01 -  Hash { ... }
hash.update(passUser);
console.log("02 - ", hash); // 02 -  Hash { ... }

const passwordHasheado = hash.digest("hex"); // tenemos el hash en formato hexadecimal, base64, etc.
console.log("03 - ", passwordHasheado); // 03 -  983487d9c4b7451b0e7d282114470d3a0ad50dc5e554971a4d1cda04acde670b

const user1 = {
  username: "Pepe",
  password: passwordHasheado, //  983487d9c4b7451b0e7d282114470d3a0ad50dc5e554971a4d1cda04acde670b
};

//-----------------------------------------------------------------------------
//* Verificación de HASH

// const inputDataPorVerificar = "231www";
// const hashTest = crypto.createHash("sha256");
// hashTest.update(inputDataPorVerificar);
// const passwordHasheadoPorVerificar = hashTest.digest("hex");

// if (passwordHasheadoPorVerificar === user1.password) {
//   console.log("okookoooookooo");
// } else {
//   console.log("NOOO!!!");
// }

function hashCheck(pass) {
  let status = false;
  const inputDataPorVerificar = pass;
  const hashTest = crypto.createHash("sha256");
  hashTest.update(inputDataPorVerificar);
  const passwordHasheadoPorVerificar = hashTest.digest("hex");

  if (passwordHasheadoPorVerificar === user1.password) {
    status = true;
  }
  return status;
}
const inputDataPorVerificar = "abcd123";
console.log(hashCheck(inputDataPorVerificar));
/*
*HASH - unidireccional
name -> Pepe
                                                                          X
input pass -> 1234abcd -> HASHEAMOS  -> dfgdfg-54ddfgs-sdgsg-fdgsdg -> 1234abcd

user1 {
name -> Pepe
pass -> dfgdfg-54ddfgs-sdgsg-fdgsdg
}

Pepe Perfil -> input pass OLD -> 1234abcd
input pass OLD -> 1234abcd -> dfgdfg-54ddfgs-sdgsg-fdgsdg -> comparo este hash con el de la db


*ENCRIPTAR - Bidireccional
input direccion -> España 645 -> Encriptamos -> sdkfjlksf.sdfopssd-slag 

tomo lo encriptado -> sdkfjlksf.sdfopssd-slag -> desencriptado -> España 645



AWS Services

Mauricio101
@Cachalote123

Pass -> llega al Servidor @Cachalote123 -> Hashea -> dfgdfg-54ddfgs-sdgsg-fdgsdg


Mauricio101
Perfil
Nueva Contraseña 

Actual -> @Cachalote123 
Nueva -> 1234abcd
Otra Vez -> 1234abcd


@Cachalote123 -> Hashea -> dfgdfg-54ddfgs-sdgsg-fdgsdg

dfgdfg-54ddfgs-sdgsg-fdgsdg === dfgdfg-54ddfgs-sdgsg-fdgsdg  -> OK CAMBIO CONTRASEÑA 


---

Que se debe hashear o encriptar?

Datos sensibles -> Encriptar (bidireccional)
*/
