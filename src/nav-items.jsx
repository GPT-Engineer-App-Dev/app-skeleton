import { Home, Info, Mail, Book } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Timeline from "./pages/Timeline.jsx";
import TimelineDetail from "./pages/TimelineDetail.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <Info className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Timeline",
    to: "/timeline",
    icon: <Book className="h-4 w-4" />,
    page: <Timeline />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Mail className="h-4 w-4" />,
    page: <Contact />,
  },
];

export const routes = [
  ...navItems,
  {
    to: "/timeline/:id",
    page: <TimelineDetail />,
  },
];