import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { FormEventHandler } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function VerifyEmail({
    auth,
    status,
}: PageProps<{ status?: string }>) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Email Verification" />

            <Container>
                <Row>
                    <Col className="mt-5" md={{ span: 4, offset: 4 }}>
                        <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Thanks for signing up! Before getting started, could
                            you verify your email address by clicking on the
                            link we just emailed to you? If you didn't receive
                            the email, we will gladly send you another.
                        </div>

                        {status === "verification-link-sent" && (
                            <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                                A new verification link has been sent to the
                                email address you provided during registration.
                            </div>
                        )}

                        <Form onSubmit={submit}>
                            <div className="mt-4 flex items-center justify-between">
                                <Button disabled={processing} type="submit">
                                    Resend Verification Email
                                </Button>

                                <Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                    className="btn btn-secondary ms-2"
                                >
                                    Log Out
                                </Link>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
