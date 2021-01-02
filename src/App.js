import './css/App.css';
import PageHeader from './components/PageHeader';
import Introduction from "./components/Introduction";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
        <PageHeader />
        <Introduction />
        <About />
        {/*<WorkExperience />*/}
    </div>
  );
}

export default App;
