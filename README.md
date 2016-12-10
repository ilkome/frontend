# ilkome frontend template
A powerful frontend boilerplate. HTML5 & CSS3, Pug, Stylus, ES6, Autoprefixer, Browsersync, Gulp


# Features

### HTML
Template engine using Pug (ex Jade). Pug it's preprocessor HTML.

### CSS
- Stylus compilation including source maps
- Components system with Stylus. Stylus it's preprocessor CSS. It's also can be SASS, LESS
- Helpful mixins
- Minify styles
- Remove unused CSS styles. For example from CSS libraries like bootstrap
- Autoprefixer. Parse CSS and add vendor prefixes to rules

### JavaScript
- Compiles ES6 to ES5.
- Minify.
- Support ES6 import.

### Productivity
- Browsersync. It's runs local server and reload the browsers across all your devices when you make changes in your application folder files
- Hot reload for images. Minify images: svg, png, jpg, gif
- Upolad builded files on the server


# Installation

1. Install nodejs
5. Install gulp: `npm install gulp -g`
2. Clone this repo
3. `cd` to project directory
4. Run `npm install` to install required files
5. Rename `ftp.config-demo.js` to `ftp.config.js`. Optionally you can write your FTP config for auto upload files to the server.


# Usage

Compile App and watch files for changes.
- `npm run start` development
- `npm run build` make build
- `npm run build:upload` make build and upload files to server
- `npm run build:js` compile and minify js.


# Tasks
This command will give you a list of all tasks available.
```bash
gulp --tasks
```

- `browserSync-reload` reload page in all your connected devices.
- `clean` clean build folder.
- `jade` compile jade files.
- `html` prettify compiled html.
- `images` minify images.
- `assets` copy everything from assets folder. Used for favicons, fonts, css.
- `stylus` compiles styles.
- `css` analyze HTML files and clean unused CSS styles. Ignore styles with prefix `.js-`. Add vendor prefixes.
- `upload` upload build folder on the server.
- `zip` create archive with build files build.zip


# Structure of main folders and files

    .
    ├── app                                 # Application folder
    │   ├── atoms                           # Atoms
    │   │   └── atom-name                   # Atom's example. It's a component Jade + Stylus + Images
    │   │       ├── img                     # Atom's images
    │   │       ├── atom-name.jade          # Atom's markdown
    │   │       └── atom-name.styl          # Atom's styles.
    │   ├── js                              # JavaScript
    │   │   ├── index.js                    # Entry
    │   |   └── libs                        # Libraries
    │   ├── layout                          # Layout files
    │   │   ├── head.jade                   # Head
    │   │   ├── layout.jade                 # Layout
    │   │   ├── scripts.jade                # Scripts
    │   │   └── styles.jade                 # Styles
    │   ├── pages                           # Pages of application
    │   |   |── index.jade                  # Index
    │   |   └── contacts.jade               # Contacts
    │   ├── assets                          # Assets
    │   |   |── css                         # CSS
    │   |   |── fonst                       # Fonts
    │   |   |── icons                       # Icons
    │   |   └── img                         # Images files. Will minify
    │   ├── stylus                          # Stylus
    │   │   |── base                        # Base styles
    │   │   |── helpers                     # Helpers mixins
    │   │   └── index.styl
    │   │   └── layout.styl
    │   │   └── variables.styl
    ├── build                               # Build folder
    ├── gulpfle.js                          # Gulp config and tasks
    │   ├── index.js                        # Gulp main tasks and watchers
    │   └── paths.js                        # Paths config
    ├── ftp.config.js                       # Config for FTP connection
    ├── README.md
    └── webpack.config.js
