import { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import MainBox from "./mainbox";
import ContactForm from "./form";

function App() {
  const [section, setSection] = useState("home");
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="h-full min-h-screen flex flex-row bg-gradient-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a] text-white" id="myapp">
      {/* Sidebar */}
      <Sidebar
        onNavigate={setSection}
        onContact={() => setContactOpen(true)}
      />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <MainBox section={section} setSection={setSection} />
      </div>

      {/* Contact form sidebar */}
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export default App;
