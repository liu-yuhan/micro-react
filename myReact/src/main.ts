import { myCreateElements } from "../my-react";

const elementsData = [
    {
        type: "h1",
        props: {
            id: "title",
            class: "hello",
        },
        children: {
            type: "div",
            props: {
                id: "title",
                class: "hello",
            },
        },
    },
];

const testCreateElements = myCreateElements(
    "h1",
    {
        id: "title",
        class: "hello",
    },
    "hello world",
    myCreateElements("h2", {
        id: "title",
        class: "world",
    })
);

console.log(testCreateElements);
