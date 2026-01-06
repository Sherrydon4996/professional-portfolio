import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HireMe from "./pages/HireMe";
import GetQuote from "./pages/GetQuote";
import AllProjects from "./pages/AllProjects";
import AgreementPolicy from "./pages/AgreementPolicy";
import Pricing from "./pages/Pricing";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hire-me" element={<HireMe />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/agreement-policy" element={<AgreementPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
