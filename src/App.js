import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { ToDo } from './components/ToDo';
import { AuthProvider } from './context/authContext';

function App() {
	return (
		<div className="container">
			<AuthProvider>
				<Routes>
					<Route path="/" element={<ToDo />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</AuthProvider>
		</div>
	);
}

export default App;
