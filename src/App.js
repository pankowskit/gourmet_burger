import "./sass/styles.scss";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./components/footer";

import {PATHS} from "./app.config";

function App() {
    let routesContent = PATHS.map((item,idx)=>{
        return <Route key={idx} 
            path={item.path}
            element={item.component}
            />;
    });
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    {routesContent}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
