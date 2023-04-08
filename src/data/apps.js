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
    links: ['https://ingre.herokuapp.com/', 'https://ingre.vercel.app/'],
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
    links: ['https://kiddin.herokuapp.com/', 'https://kiddin.onrender.com'],
    code: 'https://github.com/leoelicos/kiddin',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Moovee',
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
    links: ['https://shpr.herokuapp.com/', 'https://shopr-seven.vercel.app/'],
    code: 'https://github.com/leoelicos/shopr',
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
    links: ['https://leoelicos-googlebooks.herokuapp.com/', 'https://readr-murex.vercel.app/'],
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/onetwothreego',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Passo',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Kiddle',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/syt',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Jobby',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Hourly',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Clima',
    title: 'Clima',
    description: 'weather dashboard',
    keywords: ['react', 'openweather', 'SVG'],
    background2: '#513D6E',
    background1: '#513D6E',
    color1: '#FFFFFF',
    color2: '#D9D9D9',

    userStory: ['As a traveler, I want to view the weather outlook for multiple cities so that I can plan a trip accordingly.'],
    features: [
      'Type in the box to search for a city',
      'Choose from a dropdown list of matched cities and this city will be saved to search history',
      "See today's and 5-days' forecast: temperature, humidity, wind speed, and UV index",
      "View an hourly visualization of today's weather" //
    ],
    apis: ['openweathermap.org'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Clima />
  },

  locus: {
    endpoint: 'locus',
    links: ['/locus'],
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Locus',
    title: 'Locus',
    description: 'library search tool',
    keywords: ['react'],
    background1: '#fff',
    background2: '#376BB3',
    color1: '#fff',
    color2: '#eee',

    userStory: ['As a libray user, I want to search media from the Library of Congress, with the option of specifying a media format, and see the results of my search displayed on a separate page, from where I can also search for more movies.'],
    features: [
      'Get data from the Library of Congress',
      'View a homepage with a search form and an optional dropdown to search with a specific format',
      'View search results: publication date, title, subject, description, and link to the Library of Congress entry',
      'Search another entry from the search result page' //
    ],
    apis: ['loc.gov'],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Locus />
  },

  megen: {
    endpoint: 'megen',
    links: ['/megen'],
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Megen',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Docu',
    title: 'Docu',
    description: 'readme generator',
    keywords: ['react', ''],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a developer, I want to quickly create a professional README for a new project using a README generator.'],
    features: [
      'Create a readme template by clicking on cards',
      'Choose from a wide selection of industry-wide README sections',
      'Sections include Header, Overview, Setup, References, Footer',
      'Click Generate button to copy markdown file to clipboard',
      'Click Reset button to reset selected cards' //
    ],
    apis: [],
    frontEndTech: ['react', 'marked-react', 'antd'],
    backEndTech: [],
    element: <Docu />
  },

  spriddle: {
    endpoint: 'spriddle',
    links: ['/spriddle'],
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Spriddle',
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Emply',
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
      'Create employees by pressing the add button, and save, delete or fill with random information using same window',
      'Entries will be saved locally automatically' //
    ],
    apis: [],
    frontEndTech: ['react', 'idb'],
    backEndTech: [],
    element: <Emply />
  },

  writr: {
    endpoint: 'writr',
    links: ['https://writr.herokuapp.com/'],
    code: 'https://github.com/leoelicos/writr',
    title: 'Writr',
    description: 'server persistent notepad',
    keywords: ['ssr', 'express', 'bootstrap'],
    background2: 'white',
    background1: 'white',
    color1: 'green',
    color2: 'green',

    userStory: ['As a business owner, I want to write and save notes, so that I can keep track of tasks, organize my thoughts, and plan my work effectively. '],
    features: [
      'View a landing page with a link to the notes page',
      'View saved notes on the left',
      'View current note on the right',
      'Create, edit, and delete notes',
      'Save to store notes securely on the server' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['express', 'uuid'],
    element: null
  },
  devtips: {
    endpoint: 'devtips',
    links: ['https://dvtps.herokuapp.com'],
    code: 'https://github.com/leoelicos/devtips',
    title: 'DevTips',
    description: 'dev forum',
    keywords: ['ssr', 'express', 'uuid'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      'As a forum user, I want to create dev tips for other developers to use, as well as leave feedback for the website. If I go to a page that does not exist, I want to see a page telling me that.',
      'As a developer, I want to log usage statistics from users of my site, so that I can track user behavior and use the data to improve site performance.'
      //
    ],
    features: [
      'Add dev tips by typing in the text box, typing a username, and pressing Add Tip',
      'Leave feedback by clicking Feedback, typing feedback',
      'See a 404 page when a route does not exist. Try /api/x',
      'See usage statistics from users of the site at /api/diagnostics.' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['express', 'uuid'],
    element: null
  },

  depto: {
    endpoint: 'depto',
    links: ['https://dpto.herokuapp.com/api/employees'],
    code: 'https://github.com/leoelicos/depto',
    title: 'Depto',
    description: 'employee CMS backend',
    keywords: ['express', 'mysql2'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a business owner, I want to manage the departments, roles, and employees in my company in order to organize and plan my business more efficiently.'],
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
    links: ['https://cinemapi.herokuapp.com/api/movies'],
    code: 'https://github.com/leoelicos/cinem',
    title: 'Cinem',
    description: 'movie database backend',
    keywords: ['express', 'mysql2'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      'As a developer working on a movie list application, I want to view, add and delete movies and reviews with a database.'
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
    links: ['https://taggr.herokuapp.com/api/products'],
    code: 'https://github.com/leoelicos/taggr',
    title: 'Taggr',
    description: 'ecommerce back end',
    keywords: ['sequelize', 'express', 'mysql2'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ["As a retail manager, I want to update my e-commerce website's backend with product and tag information."],
    features: [
      'GET /api/categories',
      'POST /api/categories{ "category_name": STRING }',
      'GET /api/categories/:categoryId',
      'PUT /api/categories/:categoryId\n{ "category_name": STRING }',
      'DELETE /api/categories/:categoryId',
      'GET /api/tags',
      'POST /api/tags\n{ "tag_name": STRING, "productIds": [INTEGER, INTEGER…] }',
      'GET /api/tags/:tagId',
      'PUT /api/tags/:tagId\n{ "tag_name": STRING, "productIds": [INTEGER, INTEGER…] }',
      'DELETE /api/tags/:tagId',
      'GET /api/products',
      'POST /api/products\n{ "product_name": STRING, "price": DECIMAL, "stock": INTEGER, category_id: INTEGER, "tagIds": [INTEGER, INTEGER…] }',
      'GET /api/products/:productId',
      'PUT /api/products/:productId\n{ "product_name": STRING, "price": DECIMAL, "stock": INTEGER, category_id: INTEGER, "tagIds": [INTEGER, INTEGER…] }',
      'DELETE /api/products/:productId',
      'GET /api/product_tags' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'dotenv', 'express', 'mysql2', 'sequelize'],
    element: null
  },

  wander: {
    endpoint: 'wander',
    links: ['https://wndr.herokuapp.com/api/trips'],
    code: 'https://github.com/leoelicos/wander',
    title: 'Wander',
    description: 'trips database backend',
    keywords: ['express', 'mysql2', 'sequelize'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a developer working on a trips application, I want to be able to create a new trip using a location from a list, create and view location data, and view all of the trips and trip locations for a user.'],
    features: [
      'GET\t\t/api/travellers',
      'POST\t\t/api/travellers\n\t\t\t{"name": STRING,\n\t\t\t"email": STRING}',
      'GET\t\t/api/travellers/:id',
      'DELETE\t/api/travellers/:id',
      'GET\t\t/api/locations',
      'POST\t\t/api/locations\n\t\t\t{"location_name": INTEGER}',
      'GET\t\t/api/locations/:id',
      'DELETE\t/api/locations/:id',
      'POST\t\t/api/trips\n\t\t\t{"trip_budget": INTEGER,\n\t\t\t"traveller_amount": INTEGER,\n\t\t\t"traveller_id": INTEGER,\n\t\t\t"location_id": INTEGER}',
      'DELETE\t/api/trips/:id' //
    ],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'dotenv', 'express', 'mysql2', 'sequelize'],
    element: null
  },

  fundr: {
    endpoint: 'fundr',
    links: ['https://fundr.herokuapp.com/'],
    code: 'https://github.com/leoelicos/fundr',
    title: 'Fundr',
    description: 'crowdfunding backend',
    keywords: ['handlebars', 'session', 'mysql2'],
    background2: 'white',
    background1: 'white',
    color1: 'green',
    color2: 'green',

    userStory: [
      'As a venture capitalist, I want to be able to view a list of current projects seeking funding, so that I can explore and discover new projects that interest me.',
      'As a registered user, I want to be able to post my own projects to ask for funding, so that I can raise funds and bring my ideas to life.' //
    ],
    features: [
      'Create an account to save and manage projects, receive updates, and contribute to funding',
      'Create an account to post projects to ask for funding' //
    ],
    changes: [],
    apis: [],
    frontEndTech: [],
    backEndTech: ['bcrypt', 'connect-session-sequelize', 'dotenv', 'express', 'express-handlebars', 'express-session', 'mysql2', 'sequelize'],
    element: null
  },

  regexpo: {
    endpoint: 'regexpo',
    links: ['https://gist.github.com/leoelicos/5d8dfb511b682fc5894688d54cfb5a73'],
    code: 'https://gist.githubusercontent.com/leoelicos/5d8dfb511b682fc5894688d54cfb5a73/raw/340d891eb5299ca0b81cf117de45a4e61393af0c/regex-tutorial-password-matching.md',
    title: 'RegExpo',
    description: 'regex tutorial',
    keywords: ['regex', 'gist', 'mermaid'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      'As a web development student, I want a tutorial that explains Regex so that I can understand search patterns.' //
    ],
    features: [
      'Rationale for the article',
      'Small digestible regex snippets',
      'Covers Regex Syntax, Anchors, Quantifiers, Lookarounds, Grouping Constructs, Bracket Expressions, Character Classes, Character Escapes',
      'Summary table',
      'Mermaid schema to visualise the logic',
      'Glossary' //
    ],
    apis: [],
    frontEndTech: [],
    backEndTech: [],
    element: null
  },

  grader: {
    endpoint: 'grader',
    links: ['https://gradr.herokuapp.com/api/students'],
    code: 'https://github.com/leoelicos/grader',
    title: 'Grader',
    description: 'student grades api',
    keywords: ['cors', 'express', 'mongoose'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: [
      "As a teacher, I want to view all students and get a head count,view a specific student's overall grade in the class using and their score on each assignment, and execute create, read, update, and delete operations on courses, students, and assignments." //
    ],
    features: [
      'View all students and get a head count',
      "View a specific student's overall grade in the class",
      "View a student's score on each assignment",
      'Create, read, update, and delete courses, students, and assignments.' //
    ],
    changes: ['I deployed it to Render for faster load'],
    apis: [],
    frontEndTech: [],
    backEndTech: ['cors', 'express', 'mongoose'],
    element: null
  },

  matey: {
    endpoint: 'matey',
    links: ['https://matey.herokuapp.com/api/users'],
    code: 'https://github.com/leoelicos/matey',
    title: 'Matey',
    description: 'social network back end',
    keywords: ['express', 'mongoose', 'validator'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a social media startup, I want to have an API for my social network that utilizes a NoSQL database, so that my website can handle large amounts of unstructured data.'],
    features: [
      'GET\t\t/users',
      `POST\t\t/users\n\t\t\t{"username": "harry",\n\t\t\t"email": "hp@hw.com"}`,
      'GET\t\t/users/:userId',
      `PUT\t\t/users/:userId\n\t\t\t{"username": "harry",\n\t\t\t"email": "hp@hw.com"}`,
      'DELETE\t/users/:userId',
      'POST\t\t/users/:userId/friends/:friendId',
      'DELETE\t/users/:userId/friends/:friendId',
      'GET\t\t/thoughts',
      'GET\t\t/thoughts',
      `POST\t\t/thoughts\n\t\t\t{"thoughtText": "Life's good",\n\t\t\t"username": "harry",\n\t\t\t"userId": 5edf}`,
      `PUT\t\t/thoughts/:thoughtId\n\t\t\t{"email": "hp@hw.com"}`,
      'DELETE\t/thoughts/:thoughtId',
      `POST\t\t/thoughts/:thoughtId/reactions\n\t\t\t{"reactionBody": "OMG really ? ",\n\t\t\t"username": "ron"}`,
      'DELETE\t/thoughts/:thoughtId/reactions/:reactionId' //
    ],
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
    background2: 'hlack',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a businessperson, I want to create, view, and remove contacts in an application that can be installed, works offline, and syncs to the server when reconnected to the internet.'],
    features: [
      'Add, view and remove contact cards',
      'Installable from the web address',
      'Start online or offline and pick up where it was left off',
      'Updates when online' //
    ],
    changes: [],
    apis: [],
    frontEndTech: ['idb'],
    backEndTech: ['express'],
    element: null
  },

  txtly: {
    endpoint: 'txtly',
    links: ['https://txtly.herokuapp.com/'],
    code: 'https://github.com/leoelicos/txtly',
    title: 'Txtly',
    description: 'offline text editor',
    keywords: ['pwa', 'express', 'idb'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a developer, I want to create a note-taking application that allows users to create notes or code snippets, with or without an internet connection, so that they can reliably retrieve them for later use.'],
    features: [
      'Take notes in Javascript with markup',
      'Take notes in markdown with markup',
      'Installable from the web',
      'Works offline after install and save notes locally',
      'Updates automatically when online' //
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
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Wants',
    title: 'Wants',
    description: 'priority list',
    keywords: ['react'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a user, I want a priority list that allows me to add, edit and delete tasks as well as their priority from low, medium and high'],
    features: [
      'Add, edit and delete tasks',
      'Mark tasks as complete or incomplete',
      'Edit task priorities',
      'View tasks with a color coding corresponding to priority' //
    ],
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
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a dev, I want to vote on new and shiny tools so my company will use them'],
    features: [
      'Create a new matchup between two technologies.',
      'Vote for one technology in the matchup.',
      'View current votes for each technology in each matchup.',
      'See a 404 page when going to a page that does not exist' //
    ],
    changes: [],
    apis: [],
    frontEndTech: ['@apollo/client', 'graphql', 'react', 'react-dom', 'react-router-dom'],
    backEndTech: ['@apollo/server', 'body-parser', 'cors', 'express', 'graphql', 'graphql-tag', 'http', 'mongoose'],
    element: null
  },

  vroom: {
    endpoint: 'vroom',
    links: ['https://vroooom.herokuapp.com/'],
    code: 'https://github.com/leoelicos/vroom',
    title: 'Vroom',
    description: 'car tracker',
    keywords: ['react', 'redux'],
    background2: 'black',
    background1: 'black',
    color1: 'white',
    color2: 'white',

    userStory: ['As a car enthusiast, I want to simulate a garage by adding cars and setting their engines on and off.'],
    features: [
      'Add cars by name, model and year',
      'Turn the cars on or off',
      'Installable from web and works offline' //
    ],
    changes: [],
    apis: [],
    frontEndTech: ['react', 'react-dom', 'react-redux', 'react-scripts', 'redux'],
    backEndTech: [],
    element: null
  },

  algoz: {
    endpoint: 'algoz',
    links: ['/algoz'],
    code: 'https://github.com/leoelicos/leowong/tree/main/src/pages/Algoz',
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
