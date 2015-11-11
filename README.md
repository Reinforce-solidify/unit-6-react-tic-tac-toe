#Unit 6 React-Tic-Tac-Toe

##Summary
React-Tic-

##Getting Started:

**There is a better way to create React elements.** Rather than calling `React.createElement` a bunch of times, most React developers use something called JSX. This is a *JavaScript syntax entension* that looks very similar to plain HTML. For example, remember when we did this:
```javascript
render: function() {
  var button = React.createElement('button', { className: 'btn' }, ['New ', 'Colors!']);
  return React.createElement('div', { id: 'board' }, button);
}
```
Using JSX, we can instead do this:
```javascript
render: function() {
  return (
    <div id="board">
      <button className="btn">New Colors!</button>
    </div>
  );
}
```
This looks like the HTML we know and love. It's much more readable and intuitive. JSX is not built into the browser. It needs to be converted, or **compiled**, into plain JavaScript. To do this we'll use Gulp.


##Gulp
![gulp](gulp-js.jpg)

[Gulp](http://gulpjs.com/) is a task runner for JavaScript that we use to automate things. 
Gulp can do tons of things to make your life easier as a developer. One of the main purposes of gulp is compiling all our JavaScript files into one; that way, we only load that one file into our html page. We do this via a tool called [Browserify](http://browserify.org/).
Gulp can do a lot more than this though: we're using it to take React Components, which are written in [JSX Syntax](https://facebook.github.io/jsx/) and convert it into regular JavaScript. We do this via a plugin called [Babelify](https://babeljs.io/). By the way, Babelify is also converting new ES6 features to their ES5 equivalents. So feel free to include unsupported ES6 features in your code, as they will work.

When gulp finishes running it takes all of this JavaScript and puts it in a file `build/bundle.js`. If you take a look in there later you'll see not only your own code, but the code for React as well!

**One Warning:**
  Gulp runs in the terminal, so if it hits an error while compiling (maybe a syntax error) that error will appear in the terminal and gulp will not create the `bundle.js` file. **Keep an eye on the terminal!**

1. Install the necessary depencies for gulp by typing in the following command:
````
npm install
````
1. After the install has finished, from the main directory, run gulp with the following command:
```
npm start
```
1. Open index.html in your browser of choice.

1. Follow the steps below to build Tic-Tac-Toe in the file `src/app.jsx`.

1. Your changes to `app.jsx` will auto rebuild your application.

1. Reload your browser to see changes.


##Challenges:

1. Build a react component called Box, render that component to the page.

1. Give Box a property that dictates what text it renders and render an 'X'.

1. Give Box some style! Make it a button with height 100px and width 100px.
1. Have Box render text based on its state.

1. Have Box's state change every 300ms, alternating between 'X' and 'O'.
  1. Where should this be written?
  1. This is a good moment to learn about the component cycle!
  1. Make sure to clear your interval!

1. Have Box's state change based on clicks. Set initial state to '-'.
  1. How do we set up an event handler for React components?
  1. Make Box alternate between 'X' and 'O' on clicks.

1. Let's make a new component called Row that renders 3 Box components.

1. Pull the state out of each Box and into the higher level Row component.
  1. Don't forget to pass each child Box a key property.

1. Rig up the event handling so that clicks on a Box component change the
  state on their parent Row component.

1. Now create a Board component that renders three Row components.

1. Pull the state out of the Row components and into the Board component.

1. Rig up event handling so clicks on Box's bubble up to the Board itself.


#Useful Links
[React for people who know just enough jQuery to get by](http://reactfordesigners.com/labs/reactjs-introduction-for-people-who-know-just-enough-jquery-to-get-by/)

[React Docs](https://facebook.github.io/react/docs/component-api.html)
