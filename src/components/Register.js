import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export function Register() {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { signup } = useAuth();
	const navigate = useNavigate();
	const [error, setError] = useState();

	const handleChange = ({ target: { name, value } }) =>
		setUser({ ...user, [name]: value });

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signup(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="register-box">
				<label>Email</label>
				<input
					type="email"
					className="form-control"
					placeholder="Email *"
					onChange={handleChange}
				></input>
				<label>Password</label>
				<input
					type="password"
					className="form-control"
					placeholder="Password *"
					onChange={handleChange}
				></input>
				<p className="message mb-3">
					Already have an account? <a href="/login">Log in</a>
				</p>
				<button className="btn btn-primary mb-5">Register</button>
			</div>
		</form>
	);
}
