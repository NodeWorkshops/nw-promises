# Promises

Slides:


https://docs.google.com/presentation/d/1T92VtrL8DQC8K3Ok43xI5ZcKH1xdEAPteKJmFgb13xw/edit?usp=sharing



Meetup group:


https://www.meetup.com/NodeWorkshops/


Almost all the examples will work on Node 6, so you don't need to install node 7 or configure Babel. 

Async await will work out of the box on Node 7. If you don't want to install that, then you can use Babel as descibed below. 


Node 7 can be installed from here:

https://nodejs.org/en/


If you don't want to install node 7 and you want to try async await then follow these steps:
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
