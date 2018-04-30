import React from "react";
import "./ListItem.css";

import { Row } from 'react-bootstrap';


const ListItem = props => <div className="ListItem">{props.children}</div>;

export default ListItem;