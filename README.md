# ilkome frontend template
A powerful frontend boilerplate. HTML5 & CSS3, Pug, Stylus, ES6, Autoprefixer, Browsersync, Gulp


# Features

### HTML
Template engine using Pug (ex Jade). Pug it's preprocessor HTML.

### CSS
- Components system with Stylus. Stylus it's preprocessor CSS. It's also can be SASS, LESS.
- Helpful mixins.
- Minify styles.
- Remove unused CSS styles. For example from CSS libraries like bootstrap.
- Autoprefixer. Parse CSS and add vendor prefixes to rules.

### JavaScript
- Compiles ES6 to ES5.
- Minify.
- Support ES6 import.

### Productivity
- Browsersync. It's runs local server and reload the browsers across all your devices when you make changes in your application folder files.
- Hot reload for images. Minify images: svg, png, jpg, gif
- Upolad builded files on the server.
Demo: http://ilko.me/


# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files
5. Rename `config-demo.js` in `gulp` folder to `config.js`. Optionally you can write your FTP config


# Usage

- `npm run start` compile App and watch files for changes.
- `npm run build` compile App
- `npm run build:styles` compile styles and minify
- `npm run build:upload` compile App, minify js, remove unused CSS and upload files to server. Check gulp/config.js for settings.
- `npm run build:js` compile and minify js.


# Tasks
This tasks can be run individually.

- `browserSync-reload` reload page in all your connected devices.
- `clean` clean build folder.
- `markdown` compile markdown.
- `html-prettify` prettify compiled html.
- `images` minify images.
- `static` copy everything from static folder. Used for favicons, fonts, css.
- `stylus` compiles styles.
- `css-min` analyze HTML files and clean unused CSS styles. Ignore styles with prefix `.js-`. Add vendor prefixes.
- `upload` upload build folder on the server.


# Structure of main folders and files

    .
    ├── app                                 # Application folder
    │   ├── atoms                           # Atoms
    │   │   └── atom-name                   # Atom's example. It's a component Jade + Stylus + Images
    │   │       ├── img                     # Atom's images
    │   │       ├── atom-name.jade          # Atom's markdown
    │   │       └── atom-name.styl          # Atom's styles.
    │   ├── js                              # Store JavaScript
    │   |   └── libs                        # Store JavaScript libraries
    │   ├── layout                          # Layout of application
    │   │   ├── head.jade                   # Head
    │   │   ├── layout.jade                 # Layout
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
    ├── gulp                                # Gulp config and tasks
    │   ├── tasks                           # Gulp tasks
    │   ├── config.js                       # Config for FTP connection
    │   └── paths.js                        # Paths config
    ├── gulpfile.js                         # Gulp main tasks and watchers
    └── README.md
