import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Icon} from "./components/icon/Icon";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/about_me/AboutMe";
import {Services} from "./layout/sections/services/Services";
import {Featured} from "./layout/sections/featured/Featured";
import {Connect} from "./layout/sections/connect/Connect";


function App() {

    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Services/>
            <Featured/>
            <Connect/>
        </div>
    );
}

export default App;

