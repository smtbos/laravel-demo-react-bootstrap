import InputError from "@/Components/InputError";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useForm } from "@inertiajs/react";
import { useRef, useState, FormEventHandler } from "react";

export default function DeleteUserForm({
    className = "",
}: {
    className?: string;
}) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2>Delete Account</h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </p>

                    <Button variant="danger" onClick={confirmUserDeletion}>
                        Delete Account
                    </Button>
                </Card.Body>
            </Card>
            <Modal show={confirmingUserDeletion} onHide={closeModal}>
                <Form onSubmit={deleteUser}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h2>Delete Account</h2>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Before
                            deleting your account, please download any data or
                            information that you wish to retain.
                        </p>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                id="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                type="password"
                                autoComplete="password"
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={closeModal}>
                            Cancel
                        </Button>
                        <Button
                            variant="danger"
                            type="submit"
                            disabled={processing}
                        >
                            Delete Account
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
