import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createContext, useContext } from 'react';
import { auth } from '../Server/Firebase';

export const authContext = createContext();

export const useAuth = () => {
	const context = useContext(authContext);
	if (!context) throw new Error('');
	return context;
};

export function AuthProvider({ children }) {
	const signup = (email, password) =>
		createUserWithEmailAndPassword(auth, password, email);

	return (
		<authContext.Provider value={{ signup }}>{children}</authContext.Provider>
	);
}
