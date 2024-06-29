import './Card.scss';

import { ParentComponent } from "solid-js";

const Card: ParentComponent = (props) => (
    <div class="tk-card">
        {props.children}
    </div>
);

export default Card;