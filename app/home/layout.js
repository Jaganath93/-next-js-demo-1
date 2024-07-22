import Footer from "./Footer";
import Header from "./Header";



export default function layout({children}) {
    return (
        <>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
        </>
    );
}

