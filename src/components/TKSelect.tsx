import './TKSelect.scss';

import { For, JSX } from "solid-js";

import { FaSolidChevronDown } from "solid-icons/fa";

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
                    <span>{props.placeholder}</span>
                </span>

                <FaSolidChevronDown size={12} />
            </div>
        </div>

        <div class='tk-select-list-container animate__animated animate__fadeInUp'>
            <ul class='tk-select-list'>
                <For each={Object.entries(props.items)}>
                    {([key, label]) =>
                        <li class='tk-select-option' classList={{ active: key == props.value }} onClick={() => props.onChange(key)}>
                            {label}
                        </li>
                    }
                </For>
            </ul>
        </div>
    </div>
);

export default TKSelect;