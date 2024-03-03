import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Container, Row, Col, Form, Alert, Button } from "react-bootstrap";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, FormEventHandler } from "react";

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <Container>
                <Row>
                    <Col className="mt-5" md={{ span: 4, offset: 4 }}>
                        {status && <Alert variant="primary">{status}</Alert>}

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

                            <div className="mt-4">
                                <label>
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2">Remember me</span>
                                </label>
                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                {canResetPassword && (
                                    <Link href={route("password.request")}>
                                        Forgot your password?
                                    </Link>
                                )}

                                <Button disabled={processing} type="submit">
                                    Log in
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
