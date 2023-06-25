import Navigation from '../components/Navigation';

export default function ModelLayout({ children }) {
    return (
        <>
            <Navigation />
            {children}
        </>
    )
}