import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Users from './Users';
import UserCreate from "./UserCreate";
import UserUpdate from './UserUpdate';
//ลบออก import './App.css'; แล้วเพิ่ม Navbar //แล้วเพิ่ม Users ตรง div  //แก้ div เก่า
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="update/:id" element={<UserUpdate />} />
      </Routes>
    </div>
  );
}

export default App;
