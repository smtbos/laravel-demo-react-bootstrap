import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Dashboard" />

            <Container>
                <Row>
                    <Col className='mt-5'>
                        <h1 className='text-center'>You're logged in!</h1>
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
