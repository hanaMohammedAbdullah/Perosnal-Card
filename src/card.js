const card = (props) => {
    return React.createElement(
        "div", { className: "heads" },
        React.createElement("img", { src: props.image }),
        React.createElement(
            "div", { className: "bottoms" },
            React.createElement("p", {}, `Name :${props.name}`),
            React.createElement("p", {}, `study :${props.study}`),
            React.createElement("p", {}, `hobbies: ${props.hobby}`),
        )
    );
};