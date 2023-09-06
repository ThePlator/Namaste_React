/**
 * 
 * 
 * const heading = React.createElement(
  'h1',
  { id: 'heading', xyz: 'abc' }, //we can pass any attribute here
  'Hello world from React!'
);

console.log(heading); //heading variable is an object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
// The render keyword will convert the heading object according to the HTML and show the site
*/

/**
 *
 * <div id='parent'>
 *  <div  id = 'child'>
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *  </div>
 *  <div  id = 'child1'>
 *     <h1>I'm h1 tag</h1>
 *     <h2>I'm h2 tag</h2>
 *  </div>
 * </div>
 *
 * ReactElement(object) => HTML (Browser Understands)
 */

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
