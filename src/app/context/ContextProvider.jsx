'use client'

import {
    createContext,
    useContext,
    useEffect,
    useState
} from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';

import { auth, db } from '../firebase/FireabaseConfig';
import { useRouter } from 'next/navigation';

import { collection, doc, setDoc, addDoc, getDoc, updateDoc, onSnapshot, deleteDoc } from 'firebase/firestore';

export const contextProvider = createContext(null);

export const useContextProvider = () => {
    const context = useContext(contextProvider);
    return context;
}

export const ContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const signup = async (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const login = async (email, password) => signInWithEmailAndPassword(auth, email, password);

    const navigate = useRouter();
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const credentials = await signInWithPopup(auth, provider);
            navigate.push('/model');
            console.log(credentials);
        } catch (e) {
            console.error(e);
        }
    }

    const logout = () => signOut(auth);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });
    }, [auth]);


    return (
        <contextProvider.Provider
            value={{
                signup,
                login,
                user,
                logout,
                loginWithGoogle
            }}
        >
            {children}
        </contextProvider.Provider>
    )
}



