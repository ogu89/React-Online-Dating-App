import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserList from  "./pages/UserList"
import UserDetail from "./pages/UserDetail"
import Chat from "./pages/Chat"
import MessageList from "./pages/MessageList";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> UserList </Link>
        <Link to="/user/id"> UserDetail </Link>
        <Link to="/user/id/chat"> Chat </Link>
        <Link to="/message-list"> Message </Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/id" element={<UserDetail />} />
        <Route path="/user/id/chat" element={<Chat />} />
        <Route path="/message-list" element={<MessageList />} />
      </Routes>
    </Router>
  );
}

export default App;
