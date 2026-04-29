import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ReferenceLibrary from './pages/ReferenceLibrary';
import PdfHighlighter from './pages/PdfHighlighter';
import RagSearch from './pages/RagSearch';
import Extractor from './pages/Extractor';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<ReferenceLibrary />} />
        <Route path="/library/:id" element={<ReferenceLibrary />} />
        <Route path="/pdf" element={<PdfHighlighter />} />
        <Route path="/rag" element={<RagSearch />} />
        <Route path="/extract" element={<Extractor />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
