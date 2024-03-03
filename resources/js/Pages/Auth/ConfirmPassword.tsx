import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps } from "@/types";
import { useEffect, FormEventHandler } from "react";

export default function ConfirmPassword({ auth }: PageProps<{}>) {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Email Verification" />

                <Container>
                    <Row>
                        <Col className="mt-5" md={{ span: 4, offset: 4 }}>
                            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                                Thanks for signing up! Before getting started,
                                could you verify your email address by clicking
                                on the link we just emailed to you? If you
                                didn't receive the email, we will gladly send
                                you another.
                            </div>

                            {status === "verification-link-sent" && (
                                <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                                    A new verification link has been sent to the
                                    email address you provided during
                                    registration.
                                </div>
                            )}

                            <Form onSubmit={submit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        className="mt-1"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </Form.Group>

                                <div className="d-flex justify-content-between mt-4">
                                    <Button disabled={processing}>
                                        Confirm
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </AuthenticatedLayout>
        </>
    );
}
