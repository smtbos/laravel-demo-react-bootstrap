import ApplicationLogo from "@/Components/ApplicationLogo";
import { Container, Nav, Navbar } from "react-bootstrap";
import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <ApplicationLogo style={{ height: "40px" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link
                                href={route("login")}
                                active={route().current("login")}
                            >
                                Login
                            </Nav.Link>
                            <Nav.Link
                                href={route("register")}
                                active={route().current("register")}
                            >
                                Register
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {children}
        </>
    );
}
