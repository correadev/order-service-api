# Order Service - Microservice API

## Features
* Login 
* Encontrar Parceiro prestador de serviço

## Setup Local

#### Pré-requisitos
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)

#### 1. Clonar o repositório e instalar as dependências
```bash
git clone https://github.com/correadev/order-service-api.git
cd order-service-api
npm i
```

#### 2. Iniciar o servidor
Para executar no modo de produção em que o código é transpilado pelo Babel na pasta `dist` e executar diretamente pelo `node`:
```bash
npm start
```

Para executar no modo de desenvolvimento em que o código é executado por [babel-node](https://babeljs.io/docs/en/babel-node) via [nodemon](https://nodemon.io) 
e transpilado sempre que houver uma alteração:
```bash
npm run dev
```

# REST API - Rotas

## Efetuar Login

### Request

`POST api/login`

    { "email": "email@email.com", "password": "your-password" }

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

## Encontrar Parceiro

### Request

`GET api/partner?serviceType=DRY_WASHING&lat=-23.5566759&long=-46.6857404`

    serviceType
    lat
    long

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {
      "id": "000000000",
      "name": "name",
      "location": {
          "name": "name",
          "address": "address",
          "city": "city",
          "state": "state",
          "country": "country",
          "lat": -00.0000000,
          "long": -00.0000000
      },
      "availableServices": [
          "OIL_CHANGE",
          "DRY_WASHING"
      ]
    }