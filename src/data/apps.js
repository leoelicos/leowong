import components from '../components'

const apps = [
  {
    finished: true,
    title: 'about',
    description: 'about me',
    keywords: ['react'],
    link: '01-about-me',
    element: <components.AboutMe />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'design',
    description: 'landing page',
    keywords: ['react', 'html'],
    link: '02-landing-page',
    element: <components.LandingPage />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'agency',
    description: 'code refactor',
    keywords: ['react'],
    link: '03-code-refactor',
    element: <components.CodeRefactor />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'style snippets',
    description: 'CSS cheatsheet',
    keywords: ['react'],
    link: '04-style-snippets',
    element: <components.StyleSnippets />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'portfolio',
    description: 'about me',
    keywords: ['react'],
    link: '05-professional-portfolio',
    element: <components.ProfessionalPortfolio />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'RPS',
    description: 'about me',
    keywords: ['react'],
    link: '06-rock-paper-scissors',
    element: <components.RockPaperScissors />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'passwordG',
    description: 'about me',
    keywords: ['react'],
    link: '07-password-generator',
    element: <components.PasswordGenerator />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Word Guess',
    description: 'about me',
    keywords: ['react'],
    link: '08-kiddle',
    element: <components.WordGuess />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Code Quiz',
    description: 'about me',
    keywords: ['react'],
    link: '09-code-quiz',
    element: <components.CodeQuiz />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Project Tracker',
    description: 'about me',
    keywords: ['react'],
    link: '10-project-tracker',
    element: <components.ProjectTracker />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Day Planner',
    description: 'about me',
    keywords: ['react'],
    link: '11-day-planner',
    element: <components.DayPlanner />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Library Search Tool',
    description: 'about me',
    keywords: ['react'],
    link: '12-library-search-tool',
    element: <components.LibrarySearchTool />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Weather Dashboard',
    description: 'about me',
    keywords: ['react'],
    link: '13-weather-dashboard',
    element: <components.WeatherDashboard />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Moovee',
    description: 'find movie trailers',
    keywords: ['react'],
    link: '14-moovee',
    element: <components.Moovee />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Portfolio Maker',
    description: 'about me',
    keywords: ['react'],
    link: '15-portfolio-maker',
    element: <components.PortfolioMaker />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Readme Maker',
    description: 'about me',
    keywords: ['react'],
    link: '16-readme-maker',
    element: <components.ReadmeMaker />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Spriddle',
    description: 'about me',
    keywords: ['react'],
    link: '17-spriddle',
    element: <components.Spriddle />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Team Maker',
    description: 'about me',
    keywords: ['react'],
    link: '18-team-maker',
    element: <components.TeamMaker />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },

  {
    finished: false,
    title: 'Note Taker',
    description: 'about me',
    keywords: ['react'],
    link: '19-note-taker',
    element: <components.NoteTaker />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Diagnostic Routes',
    description: 'about me',
    keywords: ['react'],
    link: '20-diagnostic-routes',
    element: <components.DiagnosticRoutes />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Employee CMS',
    description: 'about me',
    keywords: ['react'],
    link: '21-employee-management-system',
    element: <components.EmployeeCMS />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Movie Database',
    description: 'about me',
    keywords: ['react'],
    link: '22-movie-database',
    element: <components.MovieDatabase />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'ECommerce Back End',
    description: 'about me',
    keywords: ['react'],
    link: '23-ecommerce-back-end',
    element: <components.ECommerceBackEnd />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Trips Database',
    description: 'about me',
    keywords: ['react'],
    link: '24-trips-database',
    element: <components.TripsDatabase />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'submitted!',
    description: 'about me',
    keywords: ['react'],
    link: '25-submitted',
    element: <components.Submitted />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Crowdfunding App',
    description: 'about me',
    keywords: ['react'],
    link: '26-crowdfunding-app',
    element: <components.CrowdfundingApp />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Just Kidding',
    description: 'about me',
    keywords: ['react'],
    link: '27-just-kidding',
    element: <components.JustKidding />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'AlgoRhythm',
    description: 'algorithm blog',
    keywords: ['react', 'prism'],
    link: '28-algorhythm',
    element: <components.AlgoRhythm />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: true,
    title: 'Regex Tutorial',
    description: 'about me',
    keywords: ['react'],
    link: '29-regex-tutorial',
    element: <components.RegexTutorial />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Student Statistics Back End',
    description: 'about me',
    keywords: ['react'],
    link: '30-student-statistics-back-end',
    element: <components.StudentStatisticsBackEnd />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Social Network API',
    description: 'about me',
    keywords: ['react'],
    link: '31-social-network-api',
    element: <components.SocialNetworkAPI />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Contact Directory App',
    description: 'about me',
    keywords: ['react'],
    link: '32-contact-directory-app',
    element: <components.ContactDirectoryApp />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Text Editor',
    description: 'about me',
    keywords: ['react'],
    link: '33-text-editor',
    element: <components.TextEditor />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Bucket List',
    description: 'about me',
    keywords: ['react'],
    link: '34-bucket-list',
    element: <components.BucketList />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'React Portfolio',
    description: 'about me',
    keywords: ['react'],
    link: '35-pastel-profile',
    element: <components.PastelProfile />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Tech Matchup App',
    description: 'about me',
    keywords: ['react'],
    link: '36-tech-matchup-app',
    element: <components.TechMatchupApp />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Book Search Engine',
    description: 'about me',
    keywords: ['react'],
    link: '37-book-search-engine',
    element: <components.BookSearchEngine />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Redux Refactor',
    description: 'about me',
    keywords: ['react'],
    link: '38-redux-refactor',
    element: <components.ReduxRefactor />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Redux Store',
    description: 'about me',
    keywords: ['react'],
    link: '39-redux-store',
    element: <components.ReduxStore />,
    background1: [255, 214, 201],
    background2: [255, 249, 247],
    color1: [181, 95, 38],
    color2: [255, 255, 255]
  },
  {
    finished: false,
    title: 'Ingre',
    description: 'about me',
    keywords: ['react'],
    link: '40-ingre',
    element: <components.Ingre />,
    background1: [255, 249, 247],
    background2: [255, 214, 201],
    color1: [181, 95, 38],
    color2: [0, 0, 0]
  }
]
export default apps
