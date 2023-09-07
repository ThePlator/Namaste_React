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

/* To Research about 
1) What is CDN?
-> A content delivery network (CDN) is geographically group of servers that caches content close to end users. A CDN allows for the quick transfer of assets needed for loading internet content, including HTML pages, JavaScript files, stylesheets, images, and videos.

The popularity of CDN servies continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix  and Amazon.

A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.


2) What is Cross-Origin in Script tag?
- The cross-origin sets the mode of the request to an HTTP CORS (Cross-Origin Resource Sharing) request.
- Web pages often makes requests to load resources on other servers.
- A Cross-Origin request is a request for a resource (eg: Style sheets, Iframes, images, fonts or scripts) from another domain.
*/
