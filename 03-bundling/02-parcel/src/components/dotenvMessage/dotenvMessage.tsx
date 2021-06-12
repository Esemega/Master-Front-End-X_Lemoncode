import React from 'react';

export const DotenvMessage = () => {
    console.log(process.env.MESSAGE);
    console.log(`Api base: ${process.env.API_BASE}`);

    return <h3>Abre la consola (F12) para ver un mensaje del .env</h3>
}