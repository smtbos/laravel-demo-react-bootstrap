import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import GuestLayout from "@/Layouts/GuestLayout";
import { Col, Container, Row } from "react-bootstrap";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <GuestLayout>
                <Head title="Welcome" />

                <Container>
                    <Row>
                        <Col className="mt-5" md={{ span: 4, offset: 4 }}>
                            <h1 className="text-center">Welcome</h1>
                            <p className="text-center">You're logged in!</p>
                            <p className="text-center">
                                Laravel v{laravelVersion} / PHP v{phpVersion}
                            </p>
                            <p className="text-center">
                                <Link href={route("dashboard")}>
                                    Go to dashboard
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </GuestLayout>
        </>
    );
}
