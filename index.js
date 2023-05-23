
const https = require('https');
const fetch = require('node-fetch');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const API_URL = 'https://api.openai.com/v1/engine/davinci-codex/completions';

async function generateText(prompt) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer So7oVpvDofGakO1EenCGT3BlbkFJt6t49fNVMHcSTZ9S8jYx'
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 60,
      n: 1,
      stop: '\n',
      temperature: 0.7
    }),
    agent // Adicione o agente que desabilita a verificação do certificado SSL
  });

  const { choices } = await response.json();
  return choices[0].text.trim();
}



const resposta = generateText("Favor me responder como tirar visto turismo USA.");
console.log(resposta)
