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
    description: 'A baby picture forum',
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
    description: 'A trailer search',
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
    description: 'A fast shopping cart',
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
    description: 'A book search engine',
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
    description: "A classic children's game",
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
    description: 'A password generator',
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
    description: 'A Wordle for kids',
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
    description: 'An hourly task manager',
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
    description: 'A weather dashboard',
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
    description: 'A library search tool',
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
  },

  docu: {
    endpoint: 'docu',
    links: ['/docu'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Docu',
    title: 'Docu',
    description: 'A readme generator',
    keywords: ['react', ''],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a developer, I want to quickly create a professional README for a new project using a README generator.'],
    features: ['The README should have a title', 'The README should have a Description section', 'The README should have a Table of Contents', 'The README should have an Installation section', 'The README should have a Usage section', 'The README should have a License section', 'The README should have a Contributing section', 'The README should have a Tests section', 'The README should have a Questions section', 'The title should be the same as the project title', 'The Description, Installation, Usage, Contributing, and Tests sections should include the user input', 'The License section should include a badge for the chosen license and a notice explaining which license the application is covered under', 'The Questions section should include the GitHub username with a link to the GitHub profile and the email address'],
    changes: ['I rewrote the backend command line into a React front end'],
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
    description: 'A timed riddle game',
    keywords: ['react', 'fun'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to be able to play a word-guessing game from the command line, where the game randomly selects a word from a list of words, prompts the user to guess a letter in the word, and provides feedback if the letter is correct or incorrect. The game should keep track of the number of incorrect guesses and end the game if the user guesses the word or reaches the maximum number of incorrect guesses allowed. The user should also have the option to quit the game at any time.'],
    features: ['The `Letter` and `Word` classes must fulfill the tests in the `tests` folder.', 'When the user runs `npm start`, they can play the game.'],
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
    description: 'A team visualizer',
    keywords: ['react'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ["As a manager, I want to generate a webpage that displays my team's basic information, including name, job title, email, and GitHub profile, so that I have quick access to their details. The webpage should be generated using a Node.js command-line application that prompts the user to enter information for each team member, including the manager, engineers, and interns. Each team member's information should be displayed in a card format on the webpage, including their name, job title, email, and GitHub profile. The application should validate the input provided by the user and ensure that each team member has a unique email address. Finally, the webpage should be generated as an HTML file in the output folder, with styling provided by CSS."],
    features: [
      "The application should prompt the user for a manager's name, ID, email, and office number",
      'The application should then give the user the option of adding an engineer or intern, or finishing their team',
      "If the user chooses to add an engineer, they should be prompted for the engineer's name, ID, email, and GitHub username",
      "If the user chooses to add an intern, they should be prompted for the intern's name, ID, email, and school",
      'Once the user has finished adding team members, the application should generate an HTML file that displays a formatted team roster',
      "The HTML file should include the manager's name, ID, email, and office number. It should also include the name, ID, email, and GitHub username of each engineer on the team, and the name, ID, email, and school of each intern on the team.",
      "Clicking on an email address in the HTML file should open the user's default email program and populate the TO field of the email with the address",
      'Clicking on a GitHub username in the HTML file should open that GitHub profile in a new tab'
    ],
    changes: ['I refactored the file generator into a React Front End that saves to local history'],
    apis: [],
    frontEndTech: ['react'],
    backEndTech: [],
    element: <Emply />
  },

  writr: {
    endpoint: 'writr',
    links: ['https://leoelicos-note-taker.herokuapp.com/'],
    code: 'https://github.com/leoelicos/bcs-11-note-taker',
    title: 'Writr',
    description: 'A server persistent notepad',
    keywords: ['ssr', 'express', 'bootstrap'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a small business owner, I want to have access to a note-taking application that allows me to write and save notes, so that I can keep track of tasks, organize my thoughts, and plan my work effectively. The application should allow me to create, edit, and delete notes, as well as categorize them based on topic or priority. Additionally, the application should have a search functionality that allows me to find specific notes quickly and easily. The notes should be stored securely and be accessible from any device with an internet connection, so that I can access them whenever I need to.'],
    features: ['The note taker has a landing page with a link to the notes page', 'The notes page has a list of existing notes in the left column, and empty fields to enter a new note in the right column', 'When a new note is entered, a save icon appears in the navigation, and the note is saved and appears in the left column', 'When an existing note is clicked, it appears in the right column'],
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
    description: 'A dev forum',
    keywords: ['ssr', 'express', 'uuid'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a developer, I want to be able to add routes to an existing application, so that I can create new pages and resources that are accessible through the application.', "As a developer, I want to serve up a custom 404 page when the requested resource doesn't exist, so that users can be directed to a relevant page and not be presented with a default error message.", "As a developer, I want to log usage statistics from users of my site, so that I can track user behavior and use the data to improve the site's performance.", 'As a developer, I want to be able to deploy my apps to Heroku, so that my applications can be easily and efficiently deployed to a cloud-based platform.'],
    features: ['Create a wildcard route in `server.js` that will send the users to a 404 page.', 'Create a custom `404.html` page for the wildcard route to serve.', 'Create a POST route for `/api/diagnostics` that will store information about the invalid form submissions.', 'Create a GET route for `/api/diagnostics` that will return the content of `db/diagnostics/json`.', 'Create a `fetch()` request on the front end that will send a POST request to `/api/diagnostics` every time a user attempts to submit an invalid form.', 'Test `/api/diagnostics` endpoint using Insomnia.', 'Test the wildcard route by visiting any non-existent path, like `http://localhost/test`.', 'Deploy the finished application to Heroku.'],
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
    description: 'An employee CMS backend',
    keywords: ['express', 'mysql2'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a business owner, I want to be able to view and manage the departments, roles, and employees in my company. Specifically, I want to be able to add, edit, and delete departments, roles, and employees. I also want to be able to assign roles to employees and set their salaries. Additionally, I want to be able to view reports and analytics on employee performance and business operations, and generate custom reports based on selected parameters. This system should allow me to organize and plan my business more efficiently.'],
    features: [
      'When starting the application, present the user with the following options: View all departments, View all roles, View all employees, Add a department, Add a role, Add an employee, Update an employee role',
      'If the user selects to view all departments, present a formatted table showing department names and ids.',
      'If the user selects to view all roles, present a table showing job titles, role ids, department, and salary for each role.',
      'If the user selects to view all employees, present a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.',
      'If the user selects to add a department, prompt them to enter the name of the department and add it to the database.',
      'If the user selects to add a role, prompt them to enter the name, salary, and department for the role and add it to the database.',
      "If the user selects to add an employee, prompt them to enter the employee's first name, last name, role, and manager, and add it to the database.",
      'If the user selects to update an employee role, prompt them to select an employee to update and their new role, and update this information in the database.'
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
    description: 'A movie database backend',
    keywords: ['express', 'mysql2'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to create a new database.', 'As a user, I want to store movie names and reviews in the database in two separate tables.', 'As a user, I want to see a list of all movies.', 'As a user, I want to be able to create and delete a movie.', 'As a user, I want to return a list of all the reviews and the associated movie name.'],
    features: ['Create a `movie_db` database', 'Create a `movies` table and a `reviews` table in `movie_db`', 'Seed the `movie_db` with data', 'The `/api/movies` route renders a list of all movies', 'The `/api/add-movie` route successfully adds a movie when tested using Insomnia', 'The `/api/update-review` route successfully updates a movie when tested using Insomnia', 'The `/api/movie/:id` route deletes a route when tested using Insomnia'],
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
    description: 'An ecommerce back end',
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
    description: 'A trips database backend',
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
    description: 'A crowdfunding backend',
    keywords: ['handlebars', 'session', 'mysql2'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a user, I want to be able to view a list of current projects seeking funding, so that I can explore and discover new projects that interest me.', 'As a user, I want to be able to create an account, so that I can save and manage my favorite projects, receive updates, and contribute to funding.', 'As a registered user, I want to be able to post my own projects to ask for funding, so that I can raise funds and bring my ideas to life.'],
    features: [
      'The `/` homepage route renders a list of all projects from the database.',
      "The `/project/:id` route renders an individual project's details based on the route parameter id.",
      'The `/login` route renders a form to log in and a form to create a new account.',
      'An existing user can enter their credentials on the login page to create a session on the server.',
      'A new user can create an account on the login page and then be immediately logged in with a session.',
      "The `/profile` route renders the logged-in user's projects and a form to create a new project.",
      'Only a logged in user can visit the `/profile` route.',
      'A logged in user is redirected to `/profile` when they try to visit `/login` again.',
      'A user on the profile page can use the form to create a new project in the database.',
      'A user on the profile page can select a "Delete" button to remove their project from the database.',
      'A logged-in user can select a "Logout" button to remove their session.',
      'The API routes to create and delete posts are protected from non logged-in users.',
      'The code is organized using MVC architecture.',
      'The views are rendered with Handlebars.js templates.'
    ],
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
    description: 'A regex tutorial',
    keywords: ['regex', 'gist', 'mermaid'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a web development student, I want a tutorial that explains a specific regex.', 'The tutorial should help me understand the search pattern defined by the regex.'],
    features: ['The tutorial has a descriptive title and introductory paragraph explaining the purpose of the tutorial', 'The tutorial has a summary describing the regex featured in the tutorial', 'The tutorial has a table of contents linking to different sections that break down each component of the regex and explain what it does', "The tutorial has a section about the author with a link to the author's GitHub profile", 'When I click on the links in the table of contents, I am taken to the corresponding sections of the tutorial', 'When I read through each section of the tutorial, I find a detailed explanation of what a specific component of the regex does', "When I reach the end of the tutorial, I find a section about the author and a link to the author's GitHub profile"],
    changes: ['I published the gist on GitHub Gists', 'I added a Mermaid sequence diagram'],
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
    description: 'A student grades api',
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
    description: 'A social network back end',
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
    description: 'A contacts utility',
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
    description: 'An offline text editor',
    keywords: ['pwa', 'express', 'idb'],
    background2: '#FFF9F7',
    background1: '#FFD6C9',
    color1: '#B55F26',
    color2: '#FFFFFF',

    userStory: ['As a developer, I want to create a note-taking application that allows users to create notes or code snippets, with or without an internet connection, so that they can reliably retrieve them for later use. The app should have the following features: The ability to create new notes, The ability to edit existing notes, The ability to delete notes, The ability to view a list of all notes, The ability to search for specific notes, The ability to save notes locally on the device, even without an internet connection, The ability to sync notes with a remote server when an internet connection is available., The app should be developed with a user-friendly interface and should use modern technologies that enable seamless synchronization between devices.'],
    features: [
      'The application should have a client server folder structure',
      'The application should start up the backend and serve the client when `npm run start` is run from the root directory',
      'The JavaScript files should be bundled using webpack',
      'There should be a generated HTML file, service worker, and manifest file when webpack plugins are run',
      'The text editor should still function in the browser without errors when next-gen JavaScript is used in the application',
      'IndexedDB should immediately create a database storage when the text editor is opened',
      'The content in the text editor should be saved with IndexedDB when content is entered and subsequently clicked off of the DOM window',
      'The content in the text editor should be retrieved from our IndexedDB when the text editor is reopened after closing it',
      'The web application should be downloaded as an icon on the desktop when the Install button is clicked',
      'The static assets should be pre cached upon loading along with subsequent pages and static assets when a service worker is registered',
      'There should be proper build scripts for a webpack application when deployed to Heroku'
    ],
    changes: [],
    apis: [],
    frontEndTech: ['code-mirror-themes', 'idb'],
    backEndTech: ['express'],
    element: null
  },

  wants: {
    endpoint: 'wants',
    links: ['/wants'],
    code: 'https://github.com/leoelicos/bcs/tree/main/src/pages/Wants',
    title: 'Wants',
    description: 'A bucket list',
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
    description: 'A voting application',
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
    description: 'A car tracker',
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
    description: 'A collection of algorithms',
    keywords: ['react', 'prism', 'algorithms'],
    background2: '#FFFFFF',
    background1: '#7DBCEA',
    color1: '#222A35',
    color2: '#FFFFFF',

    userStory: ['Implement bubble sort', 'Implement quick sort', 'Implement merge sort'],
    features: ['practice algorithms on your own'],
    changes: ['I replaced the original three algorithms (Merge Sort, Bubble Sort, Binary Sort) to my own collection of LeetCode algorithms', 'I added links to LeetCode questions', 'I added Prism rendering of Javascript'],
    apis: [],
    frontEndTech: ['react', 'prism'],
    backEndTech: [],
    element: <Algoz />
  }
}
export default appData
