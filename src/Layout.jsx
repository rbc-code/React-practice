import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
            <Link to="home">Home</Link>
            <Link to="insert">Insert</Link>
            <Link to="display">Display</Link>
            <hr size="4" color="green"/>

            <Outlet/>

            <hr size="4" color="green"/>
            www.rbcompany.com
        </>
    )
}
export default Layout;