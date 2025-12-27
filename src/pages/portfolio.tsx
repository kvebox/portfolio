import * as Pens from "../pens/index.tsx"
import './styles.css';
import * as React from 'react';


export const Portfolio = () => {
    const [pen, setPen] = React.useState(Pens.ToDo)

    return (
        <div id="pen_container">{<Pens.ToDo/>}</div>
    )
}