import { Container } from "./styles/AppStyles";
import ComicsList from "./components/ComicsList";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <Header />
      <ComicsList />
    </Container>
  );
}

export default App;
