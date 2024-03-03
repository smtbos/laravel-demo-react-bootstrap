import ApplicationLogo from "@/Components/ApplicationLogo";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { User } from "@/types";
import { PropsWithChildren, ReactNode } from "react";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
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
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <NavDropdown
                                title={user.name}
                                id="basic-nav-dropdown"
                                align={"end"}
                            >
                                <NavDropdown.Item href={route("profile.edit")}>
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href={route("logout")}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {header && (
                <Container className="pt-5">
                    <Row>
                        <Col>
                            <h2 className="text-center">{header}</h2>
                        </Col>
                    </Row>
                </Container>
            )}

            {children}
        </>
    );
}
