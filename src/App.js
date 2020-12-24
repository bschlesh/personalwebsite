import './App.css';
import Particles from './components/Particles.jsx'

const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    background: "#222",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

function App() {
  return (
      <div style={styles.root}>
        <Particles />
      </div>
  );
}

export default App;
