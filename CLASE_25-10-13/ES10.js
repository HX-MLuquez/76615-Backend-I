//* TRIM - ELIMINA ESPACIOS EN BLANCO

let texto = "  Holis    " 
console.log(texto)
console.log(texto.trim())

//* FLAT - APLANA UN ARRAY
// [[[[[[[]]]]]]]
var lista = [["a"],[1,2, ["ojo"]]]
console.log(lista.flat(2)) // [ 'a', 1, 2, 'ojo' ]

// multidimension  [[[[[]]]]]  anidamientos ARRAY


// {{{{{{{{{}}}}}}}}}   [[[[[[[]]]]]]]   func {{{{{{{}}}}}}}

/*

[{{{[]}}}{{{[]}}}]
[
  {
"id": "U-9382",
    {
    {
      [
        {
        
          "nombre": "Elara Voss",
          "edad": 27,
          "correo": "elara.voss@nebulae.net",
          "pais": "Norvarkia",
          "historial": [
            { "fecha": "2025-04-18", "accion": "inicio_sesion" },
            { "fecha": "2025-06-02", "accion": "compra", "monto": 248.73, "moneda": "CRD" }
          ]
        },
        {
          "id": "U-1021",
          "nombre": "Kael Ordan",
          "edad": 34,
          "correo": "kael.ordan@postcloud.io",
          "pais": "Verenium",
          "historial": [
            { "fecha": "2024-12-29", "accion": "registro" },
            { "fecha": "2025-01-03", "accion": "verificacion" }
          ]
        }
      ]
    }
  }}
  {{
    {
      [
        {
          "codigo": "PX-14A",
          "producto": "Sensor Óptico Helio",
          "categoria": "Tecnología Cuántica",
          "precio": 1239.50,
          "stock": 42,
          "proveedor": { "nombre": "PhotonSys", "pais": "Nereida" }
        },
        {
          "codigo": "PX-88F",
          "producto": "Compresor de Vacío Neural",
          "categoria": "Bio-Mecánica",
          "precio": 8740.99,
          "stock": 8,
          "proveedor": { "nombre": "Synaptica Core", "pais": "Ortheon" }
        }
      ]
    }
  }}
]

*/
