import { Content } from "./components/content";
import { Header } from "./components/header";
import './components/styles.scss';

function HomeMain() {
    return(
        <>
            <div className="container">
                <Header />
                <Content />
            </div>
        </>
    );
}

export {HomeMain};