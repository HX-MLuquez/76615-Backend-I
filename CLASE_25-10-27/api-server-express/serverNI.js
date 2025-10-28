const express = require('express')
const app = express()
const port = 3000

const fs = require("fs").promises;
const crypto = require("crypto");

class Jaja {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async #readFile() {
    try {
      const data = await fs.readFile(this.filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === "ENOENT") {
        await this.#saveFile([]); // crea archivo vacío si no existe
        return [];
      }
      throw error; // dejamos que lo maneje arriba
    }
  }

  async #saveFile(books) {
    await fs.writeFile(this.filePath, JSON.stringify(books, null, 2), "utf8");
  }

  #generateId() {
    return crypto.randomUUID();
  }

  async pepe(req, res){
    try{

    }catch{

    }
  }
  async juan(){}
}

const jajaja = new Jaja("Products.json")

app.get('/pepe', jajaja.pepe())

app.post('/juan', jajaja.juan())

app.get('/mia', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
