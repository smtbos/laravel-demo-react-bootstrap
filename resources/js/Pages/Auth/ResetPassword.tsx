import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Head, useForm } from "@inertiajs/react";
import { useEffect, FormEventHandler } from "react";

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <Container>
                <Row>
                    <Col className="mt-5" md={{ span: 4, offset: 4 }}>
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
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />
                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </Form.Group>

                            <div className="d-flex justify-content-between mt-4">
                                <Button disabled={processing} type="submit">
                                    Reset Password
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </GuestLayout>
    );
}
