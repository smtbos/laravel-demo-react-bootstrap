import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Col, Container, Row } from "react-bootstrap";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout user={auth.user} header="Profile">
            <Head title="Profile" />
            <Container>
                <Row className="mb-5">
                    <Col className="mt-5" md={{ span: 12 }}>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </Col>
                    <Col className="mt-5" md={{ span: 12 }}>
                        <UpdatePasswordForm />
                    </Col>
                    <Col className="mt-5" md={{ span: 12 }}>
                        <DeleteUserForm />
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
