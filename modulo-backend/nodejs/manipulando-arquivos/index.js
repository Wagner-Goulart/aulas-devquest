const fs = require("fs");

fs.readFile("meu-arquivos.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

const users = [
  { name: "Wagner", age: 23 },
  { name: "Liandra", age: 14 },
];

fs.writeFile('user.txt', JSON.stringify(users), {
    encoding: 'utf-8',
    flag: 'a'
}, (err)=>{
    console.log('Escrito com sucesso')
})
