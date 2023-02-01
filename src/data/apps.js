import AboutMe from '../components/01__about-me'
import LandingPage from '../components/02__landing-page'
import CodeRefactor from '../components/03__code-refactor'
import CSSSnippetCheatsheet from '../components/04__css-snippet-cheatsheet'
import ProfessionalPortfolio from '../components/05__professional-portfolio'
import RockPaperScissors from '../components/06__rock-paper-scissors'
import PasswordGenerator from '../components/07__password-generator'
import WordGuess from '../components/08__word-guess'
import CodeQuiz from '../components/09__code-quiz'
import ProjectTracker from '../components/10__project-tracker'
import DayPlanner from '../components/11__day-planner'
import LibrarySearchTool from '../components/12__library-search-tool'
import WeatherDashboard from '../components/13__weather-dashboard'
import Moovee from '../components/14__moovee'
import GoodReadmeGenerator from '../components/15__good-readme-generator'
import HTMLGenerator from '../components/16__html-generator'
import TeamProfileGenerator from '../components/17__team-profile-generator'
import CommandLineWordGuess from '../components/18__command-line-word-guess'
import NoteTaker from '../components/19__note-taker'
import DiagnosticRoutes from '../components/20__diagnostic-routes'
import EmployeeManagementSystem from '../components/21__employee-management-system'
import MovieDatabase from '../components/22__movie-database'
import ECommerceBackEnd from '../components/23__ecommerce-back-end'
import TripsDatabase from '../components/24__trips-database'
import TechBlog from '../components/25__tech-blog'
import CrowdfundingApp from '../components/26__crowdfunding-app'
import JustKidding from '../components/27__just-kidding'
import TechnicalInterview from '../components/28__technical-interview'
import RegexTutorial from '../components/29__regex-tutorial'
import StudentStatisticsBackEnd from '../components/30__student-statistics-back-end'
import SocialNetworkAPI from '../components/31__social-network-api'
import ContactDirectoryApp from '../components/32__contact-directory-app'
import TextEditor from '../components/33__text-editor'
import BucketList from '../components/34__bucket-list'
import ReactPortfolio from '../components/35__react-portfolio'
import TechMatchupApp from '../components/36__tech-matchup-app'
import BookSearchEngine from '../components/37__book-search-engine'
import ReduxRefactor from '../components/38__redux-refactor'
import ReduxStore from '../components/39__redux-store'
import Ingre from '../components/40__ingre'

const apps = [
  //
  { finished: true, name: 'About Me', link: '01-about-me', element: <AboutMe /> },
  { finished: true, name: 'Landing Page', link: '02-landing-page', element: <LandingPage /> },
  { finished: true, name: 'Code Refactor', link: '03-code-refactor', element: <CodeRefactor /> },
  { finished: true, name: 'CSS Snippet Cheatsheet', link: '04-css-snippet-cheatsheet', element: <CSSSnippetCheatsheet /> },
  { finished: true, name: 'Professional Portfolio', link: '05-professional-portfolio', element: <ProfessionalPortfolio /> },
  { finished: true, name: 'Rock Paper Scissors', link: '06-rock-paper-scissors', element: <RockPaperScissors /> },
  { finished: true, name: 'Password Generator', link: '07-password-generator', element: <PasswordGenerator /> },
  { finished: false, name: 'Word Guess', link: '08-word-guess', element: <WordGuess /> },
  { finished: false, name: 'Code Quiz', link: '09-code-quiz', element: <CodeQuiz /> },
  { finished: false, name: 'Project Tracker', link: '10-project-tracker', element: <ProjectTracker /> },
  { finished: false, name: 'Day Planner', link: '11-day-planner', element: <DayPlanner /> },
  { finished: false, name: 'Library Search Tool', link: '12-library-search-tool', element: <LibrarySearchTool /> },
  { finished: false, name: 'Weather Dashboard', link: '13-weather-dashboard', element: <WeatherDashboard /> },
  { finished: false, name: 'Moovee', link: '14-moovee', element: <Moovee /> },
  { finished: false, name: 'Good Readme Generator', link: '15-good-readme-generator', element: <GoodReadmeGenerator /> },
  { finished: false, name: 'HTML Generator', link: '16-html-generator', element: <HTMLGenerator /> },
  { finished: false, name: 'Team Profile Generator', link: '17-team-profile-generator', element: <TeamProfileGenerator /> },
  { finished: false, name: 'Command Line Word Guess', link: '18-command-line-word-guess', element: <CommandLineWordGuess /> },
  { finished: false, name: 'Note Taker', link: '19-note-taker', element: <NoteTaker /> },
  { finished: false, name: 'Diagnostic Routes', link: '20-diagnostic-routes', element: <DiagnosticRoutes /> },
  { finished: false, name: 'Employee Management System', link: '21-employee-management-system', element: <EmployeeManagementSystem /> },
  { finished: false, name: 'Movie Database', link: '22-movie-database', element: <MovieDatabase /> },
  { finished: false, name: 'ECommerce Back End', link: '23-ecommerce-back-end', element: <ECommerceBackEnd /> },
  { finished: false, name: 'Trips Database', link: '24-trips-database', element: <TripsDatabase /> },
  { finished: false, name: 'Tech Blog', link: '25-tech-blog', element: <TechBlog /> },
  { finished: false, name: 'Crowdfunding App', link: '26-crowdfunding-app', element: <CrowdfundingApp /> },
  { finished: false, name: 'Just Kidding', link: '27-just-kidding', element: <JustKidding /> },
  { finished: false, name: 'Technical Interview', link: '28-technical-interview', element: <TechnicalInterview /> },
  { finished: false, name: 'Regex Tutorial', link: '29-regex-tutorial', element: <RegexTutorial /> },
  { finished: false, name: 'Student Statistics Back End', link: '30-student-statistics-back-end', element: <StudentStatisticsBackEnd /> },
  { finished: false, name: 'Social Network API', link: '31-social-network-api', element: <SocialNetworkAPI /> },
  { finished: false, name: 'Contact Directory App', link: '32-contact-directory-app', element: <ContactDirectoryApp /> },
  { finished: false, name: 'Text Editor', link: '33-text-editor', element: <TextEditor /> },
  { finished: false, name: 'Bucket List', link: '34-bucket-list', element: <BucketList /> },
  { finished: false, name: 'React Portfolio', link: '35-react-portfolio', element: <ReactPortfolio /> },
  { finished: false, name: 'Tech Matchup App', link: '36-tech-matchup-app', element: <TechMatchupApp /> },
  { finished: false, name: 'Book Search Engine', link: '37-book-search-engine', element: <BookSearchEngine /> },
  { finished: false, name: 'Redux Refactor', link: '38-redux-refactor', element: <ReduxRefactor /> },
  { finished: false, name: 'Redux Store', link: '39-redux-store', element: <ReduxStore /> },
  { finished: false, name: 'Ingre', link: '40-ingre', element: <Ingre /> }
]
export default apps
