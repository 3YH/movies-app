import * as React from 'react';

import ThemeProvider from './theme/ThemeProvider';

interface IProps {

    children: any;

}

export default function MuiProvider( props: IProps ) {

    const { children } = props;

    return (

        <ThemeProvider>

            { children }

        </ThemeProvider>

    );

}