import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50 dark:bg-[#0c0c0d] text-neutral-900 dark:text-neutral-100 selection:bg-emerald-500/20 selection:text-emerald-500 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="mx-auto flex flex-col lg:flex-row lg:gap-8 lg:py-6">
            {/* Left Column: Sidebar Navigation */}
            <Navbar />

            {/* Right Column: Main Content */}
            <main className="w-full lg:flex-1 min-w-0 transition-all duration-300 pt-16 lg:pt-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
