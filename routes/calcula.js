var express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { route } = require('.');
const app = require('../app');
var router = express.Router();

router.get('/', function (req, res, next) {

  while(req.query.peso == null || req.query.altura == null){
    res.send('Envie o peso e a altura na requisição ex: http://localhost:3000/calcula?peso=70&altura=1.80');
  }
  console.log(req.query.peso);
  console.log(req.query.altura);

  //IMC = Peso / Altura²
  const imc = req.query.peso / (req.query.altura * req.query.altura);
  console.log(imc);

  if (imc <= 18.5) {
    //Magreza, quando o resultado é menor que 18,5 kg/m2;
    res.send(`Seu IMC é ${imc.toFixed(2)}: Magreza`);
  } else if (imc > 18.5 && imc <= 25) {
    //Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
    res.send(`Seu IMC é ${imc.toFixed(2)}: Normal`);
  } else if (imc > 25 && imc <= 30) {
    //Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
    res.send(`Seu IMC é ${imc.toFixed(2)}: Sobrepeso`);
  } else {
    //Obesidade, quando o resultado é maior que 30 kg/m2;
    res.send(`Seu IMC é ${imc.toFixed(2)}: Obesidade`);
  };
});

module.exports = router;