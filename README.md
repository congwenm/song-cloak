# Boiler plate for Connecting react and rails

## To get the react-rails app running
first get all dependencies installed

>$ brew install node yarn

>$ gem install rails

then in two terminal instances run these:

>$ rails s

>$ yarn watch


Good to go!

## Make sure you load the application on `https://localhost:3000` with the `https` prefix

## Sometimes you'll get node-sass errors, not sure why but this solves it
npm rebuild node-sass


# Deploy
run `webpack -p` and commit the changes.

TODO:
-[ ] upgrade to webpack 2, check for smaller module