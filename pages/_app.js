import '../styles/globals.css';
import bg from '../public/bg.jpg'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}
