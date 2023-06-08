import { NextResponse } from 'next/server';
//import users from './data.json'; --> Podemos importar el json a través de un fichero.

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); // ----> O a través de API.
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function GET() {
    const data = await getData();
    return NextResponse.json(data);
}