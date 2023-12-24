import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, includeLayout }) => {

    if (!includeLayout) {
        return <div>
            {children}
        </div>
    }

    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
export default Layout