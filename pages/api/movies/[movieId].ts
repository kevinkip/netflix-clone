import prismadb from '@/lib/prismadb';
import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from '@/lib/serverauth';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method !== 'GET'){
        return res.status(405).end();
    }

    try {
        await serverAuth(req, res);

        const { movieId } = req.query;

        if(typeof movieId !== 'string'){
            throw new Error('Invalid ID');
        }

        if (!movieId){
            throw new Error('Missing ID');
        }

        const movies = await prismadb.movie.findUnique({
            where:{
                id: movieId
            }
        });
        
        return res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        return res.status(400).end()
    }
}