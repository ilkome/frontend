# front-end starter kit
A powerful front-end boilerplate. Gulp, Webpack, HTML5 & CSS3, Jade, Stylus, ES6, React, Autoprefixer, Browsersync


# Features
## HTML
Template engine using Jade. Jade it's preprocessor HTML.

## CSS
- Modules system with Stylus. Style it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify and combine CSS files.
- Remove unused CSS code. For example from CSS libraries like bootstrap, normalize.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

## JavaScript
- Compiles ES6 to ES5.
- Minify and combine JavaScript files.

## React Hot Reload
- Compiles and hot reload React components in the browser.

## Productivity
- Browsersync. It's runs local server and reload the browsers across all your devices when you make changes in your application folder files.
- Hot reload for images. Minify images: svg, png, jpg, gif

Demo: http://ilko.me/


For React example please visit https://github.com/ilkome/finance

Demo http://ilko.me/finance



# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files


# Usage
Change `gulpfile.js/index.js`

### React
Unable `browserSyncReact`. Disable `browserSync`, `watcherJS`.

### JS without React
Unable `browserSync`, `watcherJS`. Disable `browserSyncReact`.

### Production
Unable `cssClean`, `jsUglify` tasks in `gulpfile.js`.


#### gulp
`gulp` It's runs gulp in the dev mode and watch for changes in the files.


#### gulp --minify
`gulp --minify` Minify and combine all JS, CSS files.


#### gulp --pretty
`gulp --pretty` Pretty HTML and CSS files.


# Behind scene
When you runs gulp it's changes your app/layout/layout.jade file.

# Tasks
This tasks can be run separately.

### clean
Remove everything inside `build` folder.

### static
Copy everything inside. Used for favicons, fonts, css. Except images. It's saves folder structures.

app/static => build

### images
Minify images. Hot reload.

app/images || app/atoms/atoms-name/img/ => build/img

### jade
Compiles jade then any of pages changes or changes in jade atoms files.

app/pages => build

### jsBabel
Compiles JavaScript ES6 to ES5.

app/js => build/js


### jsCopyLibs
Copy JavaScript libs.

app/js/libs => build/js/libs


### jsUglify

Combines JavaScript files.

app/js/* => build/js/bundle.min.js


### reactMinify
Minify React app file.

app/react/app.js => build/js/app.js

### replaceInculdeWay
Replace `inculdeWay` variable in app/layout/layout.jade. This option change src for scripts and styles.

--pretty --minify, --dev


### stylus
Compiles Stylus. Hot reload.

app/stylus => build/css/{styles|styles.min|styles.pretty}.css


### cssClean
Analyze HTML files and clean unused CSS styles. Ignore styles with prefix `.js-`. Add vendor prefixes.


### upload
Upload build files on the server.

gulpfiles.js/config-ftp.js


# Structure of main folders and files

    .
    ├── app                                 # Application folder
    │   ├── atoms                           # Atoms.
    │   │   └── atom-name                   # Atom's example. It's just component Jade + Styl + img
    │   │       ├── img                     # Atom's images
    │   │       ├── atom-name.jade          # Atom's HTML. Jade file with mixin(s)
    │   │       └── atom-name.styl          # Atom's styles. Stylus file
    │   ├── js                              # Store JavaScript
    │   |   └── libs                        # Store JavaScript libraries
    │   ├── layout                          # Layout of application
    │   │   ├── haed.jade                   # Head
    │   │   ├── layout.jade                 # Layout. Check it to see how include css, js
    │   │   ├── scripts.jade                # Scripts mixin
    │   │   └── styles.jade                 # Styles mixin
    │   ├── pages                           # Pages of application
    │   |   |── index.jade                  # Index
    │   |   └── contacts.jade               # Contacts
    │   ├── react                           # React components
    │   │   |── components                  # React component example
    │   │   |   ├── component-app.jsx       # Main file of react component
    │   │   |   └── component-list.jsx      # Child component
    │   │   └── index.js                    # Entry files for React application
    │   ├── static                          # Store static files
    │   |   |── css                         # Store css files
    │   |   |── fonst                       # Store font files
    │   |   |── icons                       # Store favicons files
    │   |   └── img                         # Store images files. Will minify
    │   ├── stylus                          # Store stylus files
    │   │   |── mixins                      # Stylus helpers mixins
    │   │   └── index.styl                  # Main stylus file
    ├── build                               # Build folder
    ├── gulpfile.js                         # Gulp config and tasks
    └── webpack.config.js                   # Webpack config for compiles React components
