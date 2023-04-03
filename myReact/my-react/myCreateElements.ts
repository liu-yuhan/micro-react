const myCreateTextElements = (text: string) => {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: {},
        },
    };
};

export default function myCreateElements(type, props, ...children) {
    return {
        type,
        props: {
            props,
            children: children.map((child) => {
                return typeof child === "object"
                    ? child
                    : myCreateTextElements(child);
            }),
        },
    };
}
