import './App.css';
import {Header} from "./layout/Header/Header";
import {Main} from "./layout/sections/main/main";
import {Skills} from "./layout/sections/skills/skills";
import {Works} from "./layout/sections/works/works";
import {Contacts} from "./layout/sections/contact/contacts";
import {Footer} from "./layout/Footer/Footer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
