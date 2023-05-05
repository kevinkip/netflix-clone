import { NextApiRequest, NextApiResponse } from "next";
import { without } from 'lodash';

import prismadb  from '@/lib/prismadb';
import serverAuth from "@/lib/serverauth";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    try {
        if(req.method === 'POST'){
            const { currentUser } = await serverAuth(req, res);

            const { movieId } = req.body;
 
            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId
                }
            });

            if(!existingMovie){
                throw new Error('Invalid ID');
            }

            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || '',
                },
                data: {
                    favoriteIds: {
                        push: movieId
                    }
                }
            });
            console.log({ currentUser })

            return res.status(200).json(user);
        }

        //delete favorite movie
        if(req.method === 'DELETE'){
            const { currentUser } = await serverAuth(req, res);
            //req.body won't work on a DELETE
            const { movieId } = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId,
                }
            });

            if(!existingMovie){
                throw new Error('Invalid ID');
            }

            //update list w/o recently deleted favorite movie
            const updatedFavoriteIds = without(currentUser.favoriteIds, movieId);

            const updatedUser = await prismadb.user.update({
                where: {
                    email: currentUser.email,
                },
                data: {
                    favoriteIds: updatedFavoriteIds,
                }
            })

            return res.status(200).json(updatedUser);
        }

    return res.status(405).end();
    
    } catch (error) {
        console.log(error);
        return res.status(500).end();
    }

}