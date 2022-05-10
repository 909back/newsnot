import Header from '../components/Header'
import '../styles/globals.css'

const App = ({Component,pageProps}) => {
    return (
        <main>
            <Header/>
            <Component {...pageProps}/>
        </main>
    );
};  

export default App;