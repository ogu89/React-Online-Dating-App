import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import Chat from "./pages/Chat";
import MessageList from "./pages/MessageList";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/user/:id/chat" element={<Chat />} />
        <Route path="/message-list" element={<MessageList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
