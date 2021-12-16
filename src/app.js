const app = () => {
    return React.createElement(
        "div", { className: "cards" },
        React.createElement("h1", {}, "Activity"), [{
                image: "https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg",
                name: "salwa fkri",
                study: "medical microbiology ",
                hobby: "reading books, watching movie  "



            },
            {
                image: "https://www.mcall.com/resizer/CUnRY8Bg6L1Wqv_Tx25GakRXb8Q=/800x1422/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HFG4UYDXMRCRFFDW3ORRNE43JI.jpg",
                name: "mohammed salam",
                study: "Computer Engineering",
                hobby: "watching movie , coding"



            },
            {
                image: "https://www.mcall.com/resizer/CUnRY8Bg6L1Wqv_Tx25GakRXb8Q=/800x1422/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HFG4UYDXMRCRFFDW3ORRNE43JI.jpg",
                name: "amanj azad",
                study: "IT",
                hobby: "coding , hicking"



            },
            {
                image: "https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg",
                name: "basira T Ahmed",
                study: "software engineer  ",
                hobby: "reading books , watching movie"
            },
            {
                image: "https://www.mcall.com/resizer/CUnRY8Bg6L1Wqv_Tx25GakRXb8Q=/800x1422/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/HFG4UYDXMRCRFFDW3ORRNE43JI.jpg",
                name: "Hana Mohammad ",
                study: "software engineer ",
                hobby: "coding , anime"

            }

        ].map((prod) =>
            React.createElement(card, {
                image: prod.imag e,
                name: prod.name,
                study: prod.study,
                hobby: prod.hobby,
            })
        )
    );
};
ReactDOM.render(React.createElement(app), document.getElementById("root"));