import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="flex min-h screen flex-col">
      <Header />
      <div className="container mx-auto py-2">
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
