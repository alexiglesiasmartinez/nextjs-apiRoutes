import { NextResponse } from 'next/server';

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`); // ----> A través de API.
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function GET(request, { params }) {
    const { id } = params;
    const data = await getData(id);
    return NextResponse.json(data);
}