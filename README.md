# react-MSPaper

Running the application: 
git
Step 1: Download a code editor. I prefer visual studio code. Link to download found below:
https://code.visualstudio.com/ --> download mac universal

Step 2: Use the command below to clone project:
git clone https://github.com/braddonako/react-MSPaper.git


step 3: 
Download nodejs
nodejs.org/en/download

Step 4: npm install 
(If you are receiving errors, remove the package-lock.json, package.json, and node_modules, then run npm install)

Copy and paste this into your package.json

{
  "name": "mediafly",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@reduxjs/toolkit": "^2.0.1",
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.69",
    "@types/react": "^18.2.46",
    "@types/react-dom": "^18.2.18",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.1",
    "react": "^18.2.0",
    "react-colorful": "^5.6.1",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-redux": "^8.0.1",
    "react-router-dom": "^6.21.1",
    "react-scripts": "5.0.1",
    "sort-by": "^1.2.0",
    "styled-components": "^6.1.6",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
Step 5: npm install react-scripts --save

step 6: npm start

