# What is this
This is my submitted answer to [Fapro](https://fapro.app/ "Fapro's homepage")'s job challenge

# About
This is a web scrapper that gets data from Chile's tax services using Google's puppeteer.
It does this by inserting custom javascript that can be found on extract-data.js into the browser. Then saves the scrapped data on this app working directory.

# How to run
This is a Node.js project. so Node.js is required.
It's also neccesary to install this project's dependencies with NPM i
The entry point is scrapper.js, so please:
```
node scrapper.js
```

# Reasoning
I had once already used Puppeteer to write a web scrapper.
In this case it came in handy to just write a script that would extract the data from the table as it exists within the web browser.
This way I avoided having to handle things as text by just iterating over the DOM's objects.

Also in this particular case, the web page is not static so the table had to be rendered first, Puppeteer achieves this by simply creating a web browser instance and loading the page as a user would.