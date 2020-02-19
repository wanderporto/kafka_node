# Micro serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API principal(station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (sincrona/assincrona);

Se conseguir síncrona/assíncrona

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;


## O que sabemos?

- REST (latência);
- Redis / RabbitMQ / **kafka**;

- Nubank, Uber, Netflix, Paypal;
