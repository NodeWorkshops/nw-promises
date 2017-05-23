# Promises

Slides:


https://docs.google.com/presentation/d/1T92VtrL8DQC8K3Ok43xI5ZcKH1xdEAPteKJmFgb13xw/edit?usp=sharing



Meetup group:


https://www.meetup.com/NodeWorkshops/


Node 7 can be installed from here:

https://nodejs.org/en/


If you have node 6 and you want to try async await then follow these steps:
```
npm install -g babel-cli --save-dev
npm install babel-preset-env --save-dev
```

Create a file in the route of your project called: .babelrc

Add the following content to it:

```
{
  "presets": ["env"]
}
```

Don't use: `node index.js`

Instead use: `.\node_modules\.bin\babel-node index.js` 
