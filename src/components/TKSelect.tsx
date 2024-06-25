import './TKSelect.scss';

import { FaSolidChevronDown } from "solid-icons/fa";
import { JSX } from "solid-js";

// @ts-ignore

interface TKSelectProps {
    items: { [key: string]: string };
    onChange: (value: string) => void;
    placeholder: string,
    value: string,
    icon: Element | JSX.Element;
};

const TKSelect = (props: TKSelectProps) => (
    <div class='tk-select'>
        <div class='tk-select-control'>
            <div class='tk-select-placeholder'>
                <span>
                    {props.icon}
                    {props.placeholder}
                </span>

                <FaSolidChevronDown size={12} />
            </div>
        </div>

        <div class='tk-select-list-container animate__animated animate__fadeInUp'>
            <ul class='tk-select-list'>

            </ul>
        </div>
    </div>
);

export default TKSelect;