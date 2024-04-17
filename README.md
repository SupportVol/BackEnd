# SupportVol/BackEnd

This repository manages data storage, authentication, and business logic for efficient volunteer coordination.

## Installation

Install my-project with npm

```bash
  npm install
  npm ci
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`saltRounds`

## Deployment

To deploy this project run

```bash
  npm run start
```

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Demo

Insert gif or link to demo

## Documentation

[Documentation](https://linktodocumentation)
[API Doccumentation](https://github.com/SupportVol/BackEnd/blob/main/docs/API%20Specification%20Spport%20Vol.pdf)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/SupportVol/BackEnd
```

Go to the project directory

```bash
  cd BackEnd
```

Install dependencies

```bash
  npm install && npm ci
```

Start the server

```bash
  npm run start
```

## Authors

-[@SupunNarangoda](https://www.github.com/SupunNarangoda) & [@Programmer-RD-AI](https://www.github.com/Programmer-RD-AI)
