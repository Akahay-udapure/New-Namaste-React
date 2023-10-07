import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "core-react-parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "React core h1 tag"),
        React.createElement("h2", {}, "React core h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "React core h1 tag"),
        React.createElement("h2", {}, "React core h2 tag"),
    ]),
]);

const Title = (
    <div id="JSX-element-parent">
      <div id="JSX-element-child">
        <h1>JSX Element h1</h1>
        <h2>JSX Element h2</h2>
      </div>
      <div id="JSX-element-child2">
        <h1>JSX Element h1</h1>
        <h2>JSX Element h2</h2>
      </div>
    </div>
);

const HeadingComponent = () => (
    <div id="JSX-functionlComponent-parent">
        <span id="add-react-core-element">{parent}</span><br />
        <span id="add-jsx-element">{Title}</span>
        <div id="JSX-functionlCommponent-child">
            <h1>JSX Functional Component Child H1</h1>
            <h2>JSX Functional Component Child H1</h2>
        </div>
        <div id="JSX-functionlCommponent-child2">
            <h1>JSX Functional Component Child H1</h1>
            <h2>JSX Functional Component Child H1</h2>
        </div>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
