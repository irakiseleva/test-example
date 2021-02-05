import React from "react";
import './Layout.scss';
import { Blog } from './components/Blog';
import { Container, Navbar} from 'react-bootstrap';


const Layout = () => {
    return <Container>
        <Navbar>
            <Navbar.Brand href="/">
                BLOG
            </Navbar.Brand>
        </Navbar>
        <Blog/>
    </Container>;
};

export { Layout };
