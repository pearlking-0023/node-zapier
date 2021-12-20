import Link from 'next/link';

import {
    Navbar,
    NavbarBrand,
    Container
} from 'reactstrap';

const Navbars = () => {
    return (

        <Navbar className="navbar navbar-dark bg-primary justify-content-between px-2">
            <Container>
                <NavbarBrand href="/"> Note app</NavbarBrand>
                <div className="form-inline">
                    <Link href="/" className="text-decoration">
                        <a className="text-light text-decoration">Notes</a>
                    </Link>
                    <Link href="/users" className="text-decoration ml-3">
                        <a className="text-light text-decoration">Users</a>
                    </Link>
                </div>
            </Container>
        </Navbar>

    )
}

export default Navbars

