import { Component, onMount } from "solid-js";
import { Meta, Title } from "@solidjs/meta";

const NotFound: Component = () => {

    onMount(() => {
        window.location.href = "https://tonkeeper.com/404";
    });

    return (
        <>
            <Title>404</Title>
            <Meta http-equiv="refresh" content="0; url=https://tonkeeper.com/404" />
        </>
    );
}

export default NotFound;