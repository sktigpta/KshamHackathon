import { About } from "../pages/About";
import ContactPage from "../pages/Contact";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import {Route , Routes} from "react-router-dom";

const PageRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="*" element={<ErrorPage />} />
                
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </>
    )
}
export default PageRoutes;