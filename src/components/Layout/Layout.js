import React from 'react';
import Aux from '../../hoc/Auxi';
import classes from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>toolbar,sidebar,backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;