# Infinite Scroll React App

Built using Node, Express, React, and Unsplash image API.

### Features:

- Infinite scrolling using the `react-infinite-scroll-component` package
- Fade in animations using the `react-reveal` package
- Image modal popup for each image click
- Backend Express api to handle Unsplash api keys and requests from frontend React app

Deployed on Heroku here <https://react-infinite--scroll.herokuapp.com/>

![App Demo](readme.gif)

To fork this app and use in your own projects you will need to create a `.env` file and include the keys for the Unplash API.

You can get the keys here <https://unsplash.com/developers>

Your `.env` file should look like this:

`APPLICATION_ID=APPLICATION_ID_HERE`

`SECRET=SECRET_KEY_HERE`

`CALLBACK_URL=http://localhost:5000` or what ever your domain may be

Make sure to `.gitignore` the `.env` file if you plan on pushing it to GitHub
