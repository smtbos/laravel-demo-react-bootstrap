import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <Container>
                <Row>
                    <Col className="mt-5" md={{ span: 4, offset: 4 }}>
                        <p className="mb-4">
                            Forgot your password? No problem. Just let us know
                            your email address and we will email you a password
                            reset link that will allow you to choose a new one.
                        </p>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    className="mt-1"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-between mt-4">
                                <Link
                                    href={route("login")}
                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Back to login
                                </Link>

                                <Button disabled={processing} type="submit">
                                    Email Password Reset Link
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
