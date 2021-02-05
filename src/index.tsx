import ReactDOM from 'react-dom';
import { Layout } from './Layout';
import React from 'react';

import './styles/index.scss';

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(<Layout />, MOUNT_NODE);