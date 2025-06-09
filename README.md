# Number-to-Words Converter Application  
Web application for the number-to-words challenge described in the **Number-to-Words Challenge Description** section.  
Unit tests were conducted to verify functionality, and the conversion of signed integers to words was confirmed to be working correctly. The application turns integer value into text in portuguese-BR format as is written. 

Docker images were **not** created.

## Table of Contents  
- [Planning](#planning)  
- [Requirements](#requirements)  
- [Installation](#installation)  
- [Running the Application](#running-the-application)  
  - [Backend](#backend)  
  - [Frontend](#frontend)  
- [Number-to-Words Challenge Description](#number-to-words-challenge-description)  

## Planning  

Initially, a basic design was created to sketch out the expected frontend page using **Figma**.  
A single-page layout with vertical alignment was chosen, consisting of:  
- Logo  
- Descriptive title  
- Text input box  
- Output with the number in words  
- Convert button  

The initial sketch can be seen in the image below:  
![image](frontend/public/tela%20planejada.png)

The logo was custom-made for the application using the vector drawing tool **Inkscape**.

Frontend development began only after this sketch was completed.

## Requirements  

- [npm](#npm) (10.2.1)  
- [express](#express) (5.1.0)  
- [cors](#cors) (29.7.0)  
- [material ui](#material-ui) (7.0.2)  
- [react-router-dom](#react-router-dom) (7.5.0)  
- [jest](#jest) (29.7.0)  

## Installation  

After cloning the repository, it is necessary to install the libraries, packages, and frameworks used.  
See below how to install them:

### npm  
Node Package Manager. Available at: https://nodejs.org/en/download  

### express  
Node.js framework, available at: https://expressjs.com/.  
To install with *npm*, run the following command in a terminal:  
```
npm install express
```

### cors  
Cross-Origin Resource Sharing protocol that allows access to the server.  
More info: https://expressjs.com/en/resources/middleware/cors.html  
Install with:  

```
npm install cors
```

### Material UI  
Open-source component library based on Google’s design system.  
More info: https://mui.com/material-ui/getting-started/  
Install with:  

No terminal realizar o comando:
```
npm install @mui/material @emotion/react @emotion/styled
```


### react-router-dom  
Routing library used to update numeric values in the URL and send the request to the server.  
More info: https://reactrouter.com/home  
Install with:  

```
npm install react-router-dom
```


### jest  
JavaScript testing framework.  
More info: https://jestjs.io/en/  
Install with:  

```
npm install --save-dev jest
```

## Running the Application  

How to run the application, separated into backend and frontend.

### Backend  
Open a terminal inside the *backend* folder and run:  

```
node server
```

You should see the following message:  
```
Servidor rodando na porta 5000
```


### Frontend  
Open a terminal inside the *frontend* folder. **Make sure the backend is already running**, then run:  

```
npm start
```
em seguida, acesse o link http://localhost:3000/.

Then, go to: http://localhost:3000/

You can test the application functionality there.

## Number-to-Words Challenge Description  

In the language of your choice, create an HTTP server that, for each GET request, returns a JSON response where the key `extenso` contains the full textual representation of the integer number sent in the path in portuguese-BR.  
The numbers may range from [-99999, 99999].

Examples:  

```
λ curl http://localhost:3000/1
{ "extenso": "um" }
```
```
λ curl http://localhost:3000/-1042
{ "extenso": "menos mil e quarenta e dois" }
```
```
λ curl http://localhost:3000/94587
{ "extenso": "noventa e quatro mil e quinhentos e oitenta e sete" }
```


Additionally, in a language of your choice, create an application (web, mobile, or desktop frontend)  
that allows users to input an integer and, upon pressing a button, shows the full text version returned by the server.

- Keep this repository *private*. If you fork it, keep your fork private as well.  
- Don't forget to include a README.md file with instructions to run the project.  
- Don’t forget to include the word **“e”** between thousands, hundreds, and tens (see example):  
  "noventa e quatro mil **e** quinhentos e oitenta e sete". This is **intentional** and **not** standard Portuguese grammar.  
- There are no design requirements, but it is expected that you follow good development practices.  
- You may research and adapt online solutions, but we expect you to understand and be able to explain what you implemented.  
- You are expected to implement the conversion algorithm yourself and **not** use a library that performs number-to-text conversion.

Even if the application is not fully complete, send us whatever you were able to accomplish.

**Bonus**: Create a Docker environment so we can run your server without installing local dependencies.

Additional aspects we will evaluate in the review: edge cases and error handling, unit tests, code structure and quality, usage of git...
