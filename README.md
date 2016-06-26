# front-end template
A powerful front-end boilerplate. Gulp, HTML5 & CSS3, Jade, Stylus, ES6, Autoprefixer, Browsersync


# Features
## HTML
Template engine using Jade. Jade it's preprocessor HTML.

## CSS
- Modules system with Stylus. Style it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify styles.
- Remove unused CSS styles. For example from CSS libraries like bootstrap, normalize.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

## JavaScript
- Compiles ES6 to ES5.
- Minify.

## React Hot Reload
- Hot reload React components in the browser when develop.

## Productivity
- Browsersync. It's runs local server and reload the browsers across all your devices when you make changes in your application folder files.
- Hot reload for images. Minify images: svg, png, jpg, gif

Demo: http://ilko.me/

# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files


# Usage

`gulp` It's compile app folder and watch for changes in the files.

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

### stylus
Compiles Stylus. Hot reload. app/stylus => build/cssstyles.css


### css-clean
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
    │   │   ├── layout.jade                 # Layout.
    │   │   ├── scripts.jade                # Scripts mixin
    │   │   └── styles.jade                 # Styles mixin
    │   ├── pages                           # Pages of application
    │   |   |── index.jade                  # Index
    │   |   └── contacts.jade               # Contacts
    │   ├── static                          # Store static files
    │   |   |── css                         # Store css files
    │   |   |── fonst                       # Store font files
    │   |   |── icons                       # Store favicons files
    │   |   └── img                         # Store images files. Will minify
    │   ├── stylus                          # Store stylus files
    │   │   |── mixins                      # Stylus helpers mixins
    │   │   └── index.styl                  # Main stylus file
    ├── build                               # Build folder
    └── gulpfile.js                         # Gulp config and tasks
