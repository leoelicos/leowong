/* this page acts as the Single Source of Truth for my app metadata */

/* these pages have been integrated into monorepo */
import Moovee from '../pages/Moovee/index.jsx'
import OneTwoThreeGo from '../pages/Onetwothreego/index.jsx'
import Passo from '../pages/Passo/index.jsx'
import Kiddle from '../pages/Kiddle/index.jsx'
import Sytycj from '../pages/Sytycj/index.jsx'
import Jobby from '../pages/Jobby/index.jsx'
import Clima from '../pages/Clima/index.jsx'
import Locus from '../pages/Locus/index.jsx'
import Megen from '../pages/Megen/index.jsx'
import Docu from '../pages/Docu/index.jsx'
import Spriddle from '../pages/Spriddle/index.jsx'
import Emply from '../pages/Emply/index.jsx'
import Wants from '../pages/Wants/index.jsx'
import Algoz from '../pages/Algoz/index.jsx'
import Hourly from '../pages/Hourly/index.jsx'

const appData = {
  ingre: {
    endpoint: 'ingre',
    links: ['https://ingre.vercel.app/'],
    code: 'https://github.com/leoelicos/ingre',
    title: 'ingré',
    description: 'home shopping utility',
    keywords: ['mern', 'jwt', 'stripe'],
    background1: '#FFD6C9',
    background2: '#FFF9F7',
    color1: '#B55F26',
    color2: '#000',

    userStory: ['As a home cook, I want to search and manage recipes and ingredients so that searching and shopping can be done efficiently.'],
    features: [
      'Search a rich recipe database powered by Edamam API',
      'Search by diet, health, cuisine, meal or dish',
      'Customise recipe and ingredients',
      'Save recipes to server',
      'Generate an aggregated list of ingredients from saved recipes',
      'Tap off shopping list organised by supermarket category',
      'Upgrade to see cooking instructions from Edamam API' //
    ],
    apis: ['Edamam API'],
    frontEndTech: ['react', 'react router', 'apollo/client', 'ant design', 'jwt decode', 'react masonry css', 'pluralize', 'axios', 'stripe'],
    backEndTech: ['mongoose', 'express', 'apollo-server-express', 'graphql', 'stripe', 'jsonwebtoken', 'bcrypt', 'dotenv'],
    element: null
  },

  submitted: {
    endpoint: 'submitted',
    links: ['https://submitted-blog.herokuapp.com/', 'https://submitted.onrender.com'],
    code: 'https://github.com/leoelicos/submitted',
    title: 'submitted!',
    description: 'coding forum',
    keywords: ['mvc', 'sql', 'session'],
    background2: 'maroon',
    background1: 'black',
    color1: 'white',
    color2: 'gray',
    userStory: ['As a tech writer, I want to easily publish and manage blog posts', 'As a tech reader I want to comment on blog posts, so that I can share my knowledge and opinions with others.'],
    features: [
      'View a homepage of existing blog posts related to coding bootcamp',
      'View pages of blog posts that show the blog post and the option to leave a comment',
      'Create blog posts which are saved to the server',
      'View a dashboard of my created blog posts',
      'Delete or update blog posts',
      'Log in to add, update or delete comments',
      'Automatically be logged out when idle' //
    ],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'connect-session-sequelize', 'dotenv', 'express', 'express-handlebars', 'express-session', 'mysql2', 'sequelize'],
    element: null
  },

  kiddin: {
    endpoint: 'kiddin',
    links: ['https://just-kidding-baby.herokuapp.com/', 'https://kiddin.onrender.com'],
    code: 'https://github.com/leoelicos/just-kidding',
    title: "kiddin'",
    description: 'baby picture forum',
    keywords: ['collab', 'mvc', 'multer'],
    background2: '#FFE9F6',
    background1: '#FFB6D1',
    color1: '#17494D',
    color2: '#3D8DAE',

    userStory: ['As a parent, I want to share images and stories of babies with other people, as well as sell items from a marketplace'],
    features: [
      'View a homepage of three threads.',
      'Upload pictures and write stories',
      "The thread 'Marketplace: Buy and Sell Baby Stuff' is for posts that sell baby items",
      "The thread 'Confessions: What Have I done to my baby?' is for funny baby stories",
      "The thread 'Guess what my kid is mad about?' is for pictures of upset babies",
      'Log in to create posts' //
    ],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'connect-session-sequelize', 'dotenv', 'express', 'express-handlebars', 'express-session', 'multer', 'mysql2', 'sequelize'],

    element: null
  },

  moovee: {
    endpoint: 'moovee',
    links: ['/moovee'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Moovee',
    title: 'MOOVEE',
    description: 'trailer search',
    keywords: ['collab', 'gapi', 'omdb'],
    background2: '#000',
    background1: '#26261B',
    color1: '#FFFFFF',
    color2: '#ED7D31',

    userStory: ['As a movie watcher, I want to search for movies, see their details and watch their trailers, so that I can decide what movies I like.'],
    features: [
      'View a search bar that allows text search of movies',
      'View history of saved searches',
      'For each search result, view its movie details and a link to its trailer',
      'View the trailer directly after clicking the link' //
    ],
    apis: ['youtube v3 search', 'omdb api', 'tmdb api'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Moovee />
  },

  shopr: {
    endpoint: 'shopr',
    links: ['https://shopr-seven.vercel.app/', 'https://snapfire-shop.herokuapp.com/'],
    code: 'https://github.com/leoelicos/snapfire-shop',
    title: 'shopr',
    description: 'fast shopping cart',
    keywords: ['mern', 'pwa', 'stripe'],
    background2: '#FFD6AD',
    background1: '#EDBC8A',
    color1: '#000',
    color2: '#444',

    userStory: ['As a customer, I want to populate a shopping cart that links to a payment platform.'],
    features: [
      'View a homepage of products that can be filtered by category',
      'View individual product pages, with the option to add to cart',
      'Add items to a shopping cart',
      'Adjust quantity of items in the cart',
      'Checkout with Stripe',
      'View Order History of previously purchased orders' //
    ],
    apis: [],
    frontEndTech: ['@apollo/client', '@stripe/stripe-js', 'graphql', 'jwt-decode', 'react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'web-vitals'],
    backEndTech: ['apollo-server-express', 'bcrypt', 'express', 'graphql', 'jsonwebtoken', 'mongoose', 'stripe'],
    element: null
  },

  readr: {
    endpoint: 'readr',
    links: ['https://readr-murex.vercel.app/', 'https://leoelicos-googlebooks.herokuapp.com/'],
    code: 'https://github.com/leoelicos/book-search-engine',
    title: 'Readr',
    description: 'book search engine',
    keywords: ['gql', 'jwt', 'bootstrap'],
    background1: '#9F2B68',
    background2: '#DDBCEA',
    color1: '#222A35',
    color2: '#000',

    userStory: ['As an avid reader, I want to search for new books to read and add them to my wishlist, so that I can keep track of books I want to purchase.'],
    features: [
      'View a homepage with options to search for books and login',
      'Search books for book details: title, author, description, cover image, link to Google Books',
      'Login to save and unsave books and view saved books' //
    ],
    changes: [],
    apis: ['google books'],
    frontEndTech: ['@apollo/client', 'bootstrap', 'graphql', 'jwt-decode', 'react', 'react-bootstrap', 'react-dom', 'react-router-dom', 'react-scripts'],
    backEndTech: ['apollo-server-express', 'bcrypt', 'dotenv', 'express', 'graphql', 'jsonwebtoken', 'mongoose'],
    element: null
  },

  onetwothreego: {
    endpoint: 'onetwothreego',
    links: ['/onetwothreego'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/onetwothreego',
    title: '123Go',
    description: "classic children's game",
    keywords: ['react'],
    background2: '#F58F5D',
    background1: '#F5CF2C',
    color1: '#5155F5',
    color2: '#000',

    userStory: ['As a player, I want to play against an automated opponent, and after each round see my total wins, ties, and losses and the option to play again.'],
    features: [
      'Play against a computer which chooses randomly',
      'Repeat the game indefinitely' //
    ],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <OneTwoThreeGo />
  },

  passo: {
    endpoint: 'passo',
    links: ['/passo'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Passo',
    title: 'Passo',
    description: 'password generator',
    keywords: ['antd', 'react'],
    background2: '#F5F1B3',
    background1: '#5DC6F5',
    color1: '#783BF5',
    color2: '#000',

    userStory: ['As a user, I want to be able to generate a random password that meets certain criteria, so that I can have a strong password for better security.'],
    features: [
      'View a series of prompts for password criteria',
      'Click the button to generate a password that matches the selected criteria' //
    ],
    apis: [],
    frontEndTech: ['react', 'antd'],
    backEndTech: [],
    element: <Passo />
  },

  kiddle: {
    endpoint: 'kiddle',
    links: ['/kiddle'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Kiddle',
    title: 'Kiddle',
    description: 'Wordle for kids',
    keywords: ['react'],
    background1: 'hsl(25, 84%, 61%)',
    background2: 'hsl(25, 84%, 61%)',
    color1: '#ffff98',
    color2: '#000',

    userStory: ['As a young player, I want to play a simplified Wordle that is timed, and I want to win the game when I have guessed all the letters in the word'],
    features: [
      'Click the start button to start the game',
      'Type to guess letters',
      'Guess correctly to see the corresponding blank replaced by a letter',
      'Win or lose to stop the timer and see your total wins and losses',
      'Refresh the page to see stats',
      'Reset stats' //
    ],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Kiddle />
  },

  sytycj: {
    endpoint: 'sytycj',
    links: ['/sytycj'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/syt',
    title: 'SYTYCJ',
    description: 'JavaScript knowledge test',
    keywords: ['react'],
    background1: '#808080',
    background2: '#ffc000',
    color1: '#000',
    color2: '#000',

    userStory: ['As a dev, I want to take a timed quiz on JavaScript fundamentals so that I can gauge my progress.'],
    features: [
      '5 multiple-choice questions about Javascript',
      '60 seconds on the clock',
      'Answer wrong and the timer deducts 10 seconds',
      'Answer all questions before the timer ends',
      'Save initials and score locally' //
    ],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Sytycj />
  },

  jobby: {
    endpoint: 'jobby',
    links: ['/jobby'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Jobby',
    title: 'Jobby',
    description: 'project tracker',
    keywords: ['react'],
    background1: '#eee',
    background2: '#86A6F5',
    color1: '#000',
    color2: '#000',

    userStory: ["As a developer juggling many jobs, I want to see my projects' estimated total earnings and their estimated due date so that I can manage my time better."],
    features: [
      'View a homepage with the current time and date',
      'Open a dialog box to enter the details of a project: name, type, hourly wage, due date',
      'View this information in a table as well as calculated estimated total earnings, days until due date, and an option to delete the project' //
    ],
    apis: [],
    frontEndTech: ['react', 'antd'],
    backEndTech: [],
    element: <Jobby />
  },

  hourly: {
    endpoint: 'hourly',
    links: ['/hourly'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Hourly',
    title: 'Hourly',
    description: 'hourly task manager',
    keywords: [],
    background2: '#8f5fc2',
    background1: '#8f5fc2',
    color1: '#fff',
    color2: 'hsl(0, 0%, 100%)',

    userStory: ['As a busy employee, I want to be able to add important events to a daily planner so that I can manage my time effectively.'],
    features: [
      'View the current day and date',
      'View the current location and weather',
      'View and edit time slots for standard business hours.',
      'Save events to each time slot',
      'See the tasks after a refresh',
      'See time slots color-coded for past, present, or future',
      'Autofill with business words' //
    ],
    apis: ['openweathermap', 'ipregistry'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Hourly />
  },

  clima: {
    endpoint: 'clima',
    links: ['/clima'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Clima',
    title: 'Clima',
    description: 'weather dashboard',
    keywords: ['react', 'openweather', 'SVG'],
    background2: '#513D6E',
    background1: '#513D6E',
    color1: '#FFFFFF',
    color2: '#D9D9D9',

    userStory: ['As a traveler, I want to view the weather outlook for multiple cities so that I can plan a trip accordingly.'],
    features: ['Type in the box to search for a city', 'Choose from a dropdown list of matched cities and this city will be saved to search history', "See today's and 5-days' forecast: temperature, humidity, wind speed, and UV index", "View an hourly visualization of today's weather"],
    apis: ['openweathermap.org'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Clima />
  },

  locus: {
    endpoint: 'locus',
    links: ['/locus'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Locus',
    title: 'Locus',
    description: 'library search tool',
    keywords: ['react'],
    background1: '#fff',
    background2: '#376BB3',
    color1: '#fff',
    color2: '#eee',

    userStory: ['As a libray user, I want to search media from the Library of Congress, with the option of specifying a media format, and see the results of my search displayed on a separate page, from where I can also search for more movies.'],
    features: ['Get data from the Library of Congress', 'View a homepage with a search form and an optional dropdown to search with a specific format', 'View search results: publication date, title, subject, description, and link to the Library of Congress entry', 'Search another entry from the search result page'],
    apis: ['loc.gov'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Locus />
  },

  megen: {
    endpoint: 'megen',
    links: ['/megen'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Megen',
    title: 'Megen',
    description: 'about me generator',
    keywords: ['react', 'iframe'],
    background2: '#000',
    background1: '#000',
    color1: '#fff',
    color2: 'hsl(290, 98%, 50%)',

    userStory: ['As a dev, I want to create an About Me page that shows my most important information such as my name, location, bio, LinkedIn URL, and GitHub URL.'],
    features: [
      'Generate an HTML page by entering data into the text fields',
      'Preview the page below the form',
      'Click Copy HTML to copy the code to clipboard' //
    ],
    apis: [],
    frontEndTech: ['react', 'iframe'],
    backEndTech: [],
    element: <Megen />
  }, //xx

  docu: {
    endpoint: 'docu',
    links: ['/docu'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Docu',
    title: 'Docu',
    description: 'readme generator',
    keywords: ['react', ''],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a developer, I want to quickly create a professional README for a new project using a README generator.'],
    features: ['Create a readme template by clicking on cards', 'Choose from a wide selection of industry-wide README sections', 'Sections include Header, Overview, Setup, References, Footer', 'Click Generate button to copy markdown file to clipboard', 'Click Reset button to reset selected cards'],
    apis: [],
    frontEndTech: ['react', 'marked-react', 'antd'],
    backEndTech: [],
    element: <Docu />
  },

  spriddle: {
    endpoint: 'spriddle',
    links: ['/spriddle'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Spriddle',
    title: 'Spriddle',
    description: 'timed riddle game',
    keywords: ['react', 'fun'],
    background2: 'white',
    background1: 'white',
    color1: 'black',
    color2: 'black',

    userStory: ['As a user, I want to be able to play a word-guessing game similar to Wheel of Fortune but with riddles and a timer.'],
    features: [
      'Play the game by pressing start',
      'Enter letters or use the on-screen keyboard',
      'Guess the riddle before the timer runs out and the maximum wrong answers is reached' //
    ],
    changes: ['I rewrote the backend command line into a React front end'],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Spriddle />
  },

  emply: {
    endpoint: 'emply',
    links: ['/emply'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Emply',
    title: 'Emply',
    description: 'team visualizer',
    keywords: ['react'],
    background2: '#faead6',
    background1: '#faead6',
    color1: '#0014ab',
    color2: 'brown',

    userStory: ["As a manager, I want to generate a webpage that displays my team's basic information so that I have quick access to their details."],
    features: [
      "View each employee's name, ID, email, and office number",
      'Add or delete employees as desired.',
      'Create employees by pressing the + button, and save, delete or fill with random information using same window',
      'Entries will be saved locally automatically' //
    ],
    apis: [],
    frontEndTech: ['react', 'idb'],
    backEndTech: [],
    element: <Emply />
  },

  writr: {
    endpoint: 'writr',
    links: ['https://leoelicos-note-taker.herokuapp.com/'],
    code: 'https://github.com/leoelicos/bcs-11-note-taker',
    title: 'Writr',
    description: 'server persistent notepad',
    keywords: ['ssr', 'express', 'bootstrap'],
    background2: 'white',
    background1: 'white',
    color1: 'green',
    color2: 'green',

    userStory: ['As a small business owner, I want to write and save notes, so that I can keep track of tasks, organize my thoughts, and plan my work effectively. '],
    features: [
      'Create, edit, and delete notes.',
      'The notes are stored securely and are accessible from any device with an internet connection.',
      'View a landing page with a link to the notes page',
      'View a list of existing notes in the left column, and empty fields to enter a new note in the right column',
      'When a new note is entered, a save icon appears in the navigation. Save the note and it appears in the left column',
      'When an existing note in the left column is clicked, it appears in the right column' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['express', 'uuid'],
    element: null
  },
  devtips: {
    endpoint: 'devtips',
    links: ['https://leoelicos-diagnostic-routes.herokuapp.com'],
    code: 'https://github.com/leoelicos/bcs-11-diagnostic-routes',
    title: 'DevTips',
    description: 'dev forum',
    keywords: ['ssr', 'express', 'uuid'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      'As a responsible developer, I want to serve a custom 404 page when the requested resource does not exist. I want to log usage statistics from users of my site, so that I can track user behavior and use the data to improve site performance.',
      'As a forum user, I want to create dev tips for other developers to use, as well as leave feedback for the website.' //
    ],
    features: ['See a 404 page when a route does not exist. Try /api/x', 'View `/api/diagnostics` for information about the invalid form submissions.'],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['express', 'uuid'],
    element: null
  },

  depto: {
    endpoint: 'depto',
    links: ['https://employees-api.herokuapp.com/api/employees'],
    code: 'https://github.com/leoelicos/bcs-12-employee-management-system',
    title: 'Depto',
    description: 'employee CMS backend',
    keywords: ['express', 'mysql2'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a business owner, I want to manage manage the departments, roles, and employees in my company in order to organize and plan my business more efficiently.'],
    features: [
      'Add, edit, and delete departments, roles, and employees',
      'Assign roles to employees and set their salaries',
      'View reports and analytics on employee performance and business operations',
      'Generate custom reports based on selected parameters' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'dotenv', 'express', 'mysql2'],
    element: null
  },

  cinem: {
    endpoint: 'cinem',
    links: ['https://movies-api-9x92.herokuapp.com/api/movies'],
    code: 'https://github.com/leoelicos/bcs-12-movie-database',
    title: 'Cinem',
    description: 'movie database backend',
    keywords: ['express', 'mysql2'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      //
    ],
    features: [
      'Store movie names and reviews in a database.',
      'See a list of all movies.',
      'Create and delete a movie.',
      'View a list of all the reviews and the associated movie name.' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['express', 'mysql2'],
    element: null
  },

  taggr: {
    endpoint: 'taggr',
    links: [''],
    code: 'https://github.com/leoelicos/bcs-13-ecommerce-back-end',
    title: 'Taggr',
    description: 'ecommerce back end',
    keywords: ['sequelize', 'express', 'mysql2'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ["As a manager at an internet retail company, I want to update my e-commerce website's backend with the latest technologies so that my company can stay competitive in the market. The backend should include features such as advanced search and filtering, customer management, inventory management, and support for multiple payment gateways. Additionally, the backend should be scalable and flexible enough to handle future updates and changes to the website's functionality."],
    features: ['Given a functional Express.js API, when I add my database name, MySQL username, and MySQL password to an environment variable file, then I am able to connect to a database using Sequelize.', 'When I enter schema and seed commands, then a development database is created and is seeded with test data.', 'When I enter the command to invoke the application, then my server is started and the Sequelize models are synced to the MySQL database.', 'When I open API GET routes in Insomnia for categories, products, or tags, then the data for each of these routes is displayed in a formatted JSON.', 'When I test API POST, PUT, and DELETE routes in Insomnia, then I am able to successfully create, update, and delete data in my database.'],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'dotenv', 'express', 'mysql2', 'sequelize'],
    element: null
  },

  wander: {
    endpoint: 'wander',
    links: ['https://leoelicos-trips-database.herokuapp.com/api/trips'],
    code: 'https://github.com/leoelicos/bcs-13-trips-database',
    title: 'Wander',
    description: 'trips database backend',
    keywords: ['express', 'mysql2', 'sequelize'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a traveller, I want to be able to create an account.', 'As a traveller, I want to be able to create a new trip for myself using a location from a list.', 'As a traveller, I want to be able to create and view location data.', "As a traveller, I want to be able to view all of the trips I'm taking, along with their locations."],
    features: [
      'The GET route `/api/travellers` must return all traveller data without associated trips in Insomnia.',
      'The POST route `/api/travellers` must create traveller data and return a successful response in Insomnia.',
      "The GET route `/api/travellers/:id` must return a single traveller's data with their associated trips and a list of locations in Insomnia.",
      'The DELETE route `/api/travellers/:id` must remove a traveller and any trips associated with them and return a successful response in Insomnia.',
      'The GET route `/api/locations` must return all location data in Insomnia.',
      'The POST route `/api/locations` must create location data and return a successful response in Insomnia.',
      "The GET route `/api/locations/:id` must return a single location's data, with its associated trips, in Insomnia.",
      'The DELETE route `/api/locations/:id` must remove a location and any trips associated with it and return a successful response in Insomnia.',
      'The POST route `/api/trips` must create trip data between associated travellers and locations.',
      'The DELETE route `/api/trips/:id` must remove a trip and return a successful response in Insomnia.',
      'The API must be successfully deployed to Heroku with a MySQL database.'
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'dotenv', 'express', 'mysql2', 'sequelize'],
    element: null
  },

  fundr: {
    endpoint: 'fundr',
    links: ['https://projects-api-v0.herokuapp.com/'],
    code: 'https://github.com/leoelicos/bcs-14-crowdfunding-app',
    title: 'Fundr',
    description: 'crowdfunding backend',
    keywords: ['handlebars', 'session', 'mysql2'],
    background2: 'white',
    background1: 'white',
    color1: 'green',
    color2: 'green',

    userStory: ['As a venture capitalist, I want to be able to view a list of current projects seeking funding, so that I can explore and discover new projects that interest me.', 'As a registered user, I want to be able to post my own projects to ask for funding, so that I can raise funds and bring my ideas to life.'],
    features: ['Create an account to save and manage projects, receive updates, and contribute to funding', 'Create an account to post projects to ask for funding'],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'connect-session-sequelize', 'dotenv', 'express', 'express-handlebars', 'express-session', 'mysql2', 'sequelize'],
    element: null
  },

  regexpo: {
    endpoint: 'regexpo',
    links: [''],
    code: 'https://gist.github.com/leoelicos/5d8dfb511b682fc5894688d54cfb5a73',
    title: 'RegExpo',
    description: 'regex tutorial',
    keywords: ['regex', 'gist', 'mermaid'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: [
      'As a web development student, I want a tutorial that explains Regex to help me understand search patterns.' //
    ],
    features: [
      'Regex Syntax',
      'Anchors',
      'Quantifiers',
      'Lookarounds',
      'Grouping Constructs',
      'Bracket Expressions',
      'Character Classes',
      'Character Escapes',
      'Mermaid schema' //
    ],
    apis: [],
    frontEndTech: [],
    backEndTech: [],
    element: null
  },

  grader: {
    endpoint: 'grader',
    links: ['https://students-api.herokuapp.com/api', 'https://students-api-sqma.onrender.com/'],
    code: 'https://github.com/leoelicos/students-api',
    title: 'Grader',
    description: 'student grades api',
    keywords: ['cors', 'express', 'mongoose'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to be able to view all the students and get a total count of the number of students enrolled.', "As a user, I want to be able to view a specific student's overall grade in the class using MongoDB operators and their score on each assignment.", 'As a user, I want to be able to execute create, read, update, and delete operations on courses, students, and assignments.'],
    features: ['Use MongoDB, Mongoose, and Express', 'Seed the database with sample data', 'Create an aggregate function for headcount that uses MongoDB operators', 'Create an aggregate function for grade that uses MongoDB operators', 'Test the endpoints with Insomnia', 'Deploy using Heroku and MongoDB Atlas'],
    changes: ['I deployed it to Render for faster load'],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'express', 'mongoose'],
    element: null
  },

  matey: {
    endpoint: 'matey',
    links: ['https://snapi.herokuapp.com/api/users', 'https://social-network-api-v4ec.onrender.com/api/users'],
    code: 'https://github.com/leoelicos/snapi',
    title: 'Matey',
    description: 'social network back end',
    keywords: ['express', 'mongoose', 'validator'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a social media startup, I want to have an API for my social network that utilizes a NoSQL database, so that my website can handle large amounts of unstructured data.'],
    features: ["The application's server is started", 'The Mongoose models are synced to the MongoDB database', 'The data for each API GET route is displayed in a formatted JSON', 'API POST, PUT, and DELETE routes are successfully able to create, update, and delete users and thoughts in the database', "API POST and DELETE routes are successfully able to create and delete reactions to thoughts and add and remove friends to a user's friend list"],
    changes: ['I deployed it to Render for faster load', 'I added a seed file with Harry, Ron and Hermione'],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'express', 'mongoose', 'validator'],
    element: null
  },

  clist: {
    endpoint: 'clist',
    links: ['https://contact-list.herokuapp.com'],
    code: 'https://github.com/leoelicos/contact-list',
    title: 'Clist',
    description: 'contacts utility',
    keywords: ['express', 'idb', 'bootstrap'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to be able to install the web application as a PWA. I want to be able to add and remove my contact cards.', "As a developer, I want all my scripts to run from the root directory package.json. I want to be able to run npm run start in the command line and have both my client and server start. I want to be able to run npm run start:prod in the command line to run our build script and start our server. I want to be able to run npm run server in the command line and have just our server start without the client. I want to be able to run npm run build in the command line and have our client run the webpack build script. I want to be able to run npm run install in the command line and have all of the client's dependencies installed. I want to be able to run npm run client in the command line and have just our client start without the server."],
    features: ['The application uses webpack for bundling.', 'The application uses a service worker to cache static assets.', 'The application uses IndexedDB GET, ADD, and DELETE methods.', 'The application uses object store for async/await.', 'The application uses CSS loaders.', "Scripts are placed in the root and client directory's `package.json`.", '`npm run start` starts both the client and server.', '`npm run start:prod` runs the `build` script and starts the server.', '`npm run server` starts just the server and not the client.', '`npm run build` runs the webpack build script in the client.', '`npm run install` installs the dependencies for the client.', '`npm run client` starts the client without the server.', 'The web application can be installed from the web address provided by Heroku.', 'The web application is deployed using Heroku.'],
    changes: [],
    apis: [],
    frontEndTech: ['idb'],
    backEndTech: ['express'],
    element: null
  },

  txtly: {
    endpoint: 'txtly',
    links: ['https://leoelicos-jate.herokuapp.com/'],
    code: 'https://github.com/leoelicos/progressive-text-editor',
    title: 'Txtly',
    description: 'offline text editor',
    keywords: ['pwa', 'express', 'idb'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a developer, I want to create a note-taking application that allows users to create notes or code snippets, with or without an internet connection, so that they can reliably retrieve them for later use.'],
    features: [
      'Renders Javascript code in Javascript markup',
      'Renders markdown code in markdown markup',
      'Edit existing notes',
      'Installable',
      'Works offline after install and save notes locally',
      'Sync notes with a remote server when an internet connection is available' //
    ],
    changes: [],
    apis: [],
    frontEndTech: ['code-mirror-themes', 'idb', 'workbox'],
    backEndTech: ['express'],
    element: null
  },

  wants: {
    endpoint: 'wants',
    links: ['/wants'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Wants',
    title: 'Wants',
    description: 'bucket list',
    keywords: ['react'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to be able to enter a bucket-list item. I also want to be able to set the eagerness level of a bucket-list item. After adding a bucket-list item, I want to see a list of all my bucket-list items with colors that identify their eagerness level. Finally, I want to be able to edit and delete bucket-list items.'],
    features: ['Write logic to add a bucket-list item in `components/BucketList.js`', 'Write logic to mark a bucket-list item as complete or incomplete', 'Write logic to remove a bucket-list item from the list', 'Write logic to update a bucket-list item in `components/Bucket.js`', 'Write logic that will render a list of bucket-list items using `.map`', 'Each bucket-list item has a color that corresponds to the priority or "eagerness" to complete', 'Each bucket-list item renders a button to edit and delete the item'],
    changes: ['I refactored the React to be more modular and maintainable'],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Wants />
  },

  votr: {
    endpoint: 'votr',
    links: ['https://tech-battle.herokuapp.com/'],
    code: 'https://github.com/leoelicos/tech-battle',
    title: 'Votr',
    description: 'voting application',
    keywords: ['graphql', 'react', 'mongoose'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to see a list of technology matchups.', 'As a user, I want to be able to create a new matchup between two technologies.', 'As a user, I want to be able to vote for one of the two technologies in the matchup.', 'As a user, I want to see the current number of votes for each technology in the matchup.', "As a user, if I reach a page that doesn't exist, I want to see a 404 page."],
    features: ['The `/` homepage route renders a list of technologies', 'The `/matchup` route renders a form to choose two technologies to create a matchup', 'The `/matchup/:id` route renders a matchup to vote on', 'An Apollo Server is set up to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API', 'Apollo Client is set up so that requests can communicate with an Apollo Server', "A 404 page `NotFound` is rendered if the user tries to access a page that doesn't exist"],
    changes: [],
    apis: [],
    frontEndTech: ['@apollo/client', 'graphql', 'react', 'react-dom', 'react-router-dom'],
    backEndTech: ['@apollo/server', 'body-parser', 'cors', 'express', 'graphql', 'graphql-tag', 'http', 'mongoose'],
    element: null
  },

  vroom: {
    endpoint: 'vroom',
    links: ['https://digital-garage.herokuapp.com/'],
    code: 'https://github.com/leoelicos/digital-garage',
    title: 'Vroom',
    description: 'car tracker',
    keywords: ['react', 'redux'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a developer, I want to refactor an application that currently uses the Context API, so that it can handle state management using the open source JavaScript library Redux.'],
    features: ['Import `{ createStore }` from `redux`', 'Import `reducers` from `./reducers`', 'Create a default export of `createStore` that accepts an argument of `reducers`', 'In `/utils/CarContext.js` import `{ Provider }` from `react-redux` and `store` from `./store`', 'Refactor the `CarProvider` component so that it returns `<Provider>` with an attribute of `store`, set to the value of `store`', 'Clean up any unused code left over from the React Hooks', 'Run the application, using `npm run start`, to ensure that functionality is unchanged for the end user'],
    changes: [],
    apis: [],
    frontEndTech: ['react', 'react-dom', 'react-redux', 'react-scripts', 'redux'],
    backEndTech: [],
    element: null
  },

  algoz: {
    endpoint: 'algoz',
    links: ['/algoz'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Algoz',
    title: 'AlgoZ',
    description: 'collection of algorithms',
    keywords: ['react', 'prism', 'algorithms'],
    background2: '#7DBCEA',
    background1: '#7DBCEA',
    color1: '#222A35',
    color2: '#222A35',

    userStory: ['As a dev interested in algorithms, I want to view a selection of LeetCode algorithms and their solutions so that I can improve my own code.'],
    features: [
      'View a menu of easy, medium, hard difficulty problems',
      'View a selection of LeetCode problems, a link to their LeetCode problems, and their solution',
      'Click the </> button to view their solution',
      'View a modal that shows the solution in Javascript-markdown',
      'Click Copy to copy the solution code' //
    ],

    apis: [],
    frontEndTech: ['react', 'prism'],
    backEndTech: [],
    element: <Algoz />
  }
}
export default appData
