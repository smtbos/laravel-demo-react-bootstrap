import InputError from "@/Components/InputError";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
import { Button, Card, Form } from "react-bootstrap";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <Card>
            <Card.Body>
                <h2>Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Update your account's profile information and email address.
                </p>
                <Form onSubmit={submit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            name="name"
                            value={data.name}
                            autoComplete="username"
                            onChange={(e) => setData("name", e.target.value)}
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </Form.Group>

                    {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                                Your email address is unverified.
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    className="ms-2"
                                >
                                    Click here to re-send the verification
                                    email.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2">
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </div>
                    )}

                    <div className="mt-4">
                        <Button disabled={processing} type="submit">
                            Save
                        </Button>

                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Saved.
                            </p>
                        </Transition>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}
