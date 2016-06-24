# Google.by fake page

## A few explanations

As you can see, this project isn't simple folder with html and css files.
I have used the Gulp as build tool and SCSS as preprocessor for CSS.
I think it is more productive than writing pure CSS.

For HTML markup I've used not-strict-bem-like methodology. 
Also a little bit javascript code is in script tag, for header menu, as example.

A Gulp workflow has two modes: default and dev.
The Gulp dev mode runs by this command $ gulp dev. And this mode launches
browsersync for autoreload page after changes in code.

Also I've added few media queries for small resolutions, just for demonstrate
that I can do them.

Installation:
    * $ npm i
    * $ gulp dev - it launches dev server
    * or $ gulp - for builds sources into dist folder

P.S The small box with even smaller boxes in header menu can show pretty menu
with Google services.

Have a nice day :)