
import express from 'express';
import { prisma } from '../../shared/database/prisma';
import { Errors } from '../../shared/errors/errors';

export class PostsController {
  async getPosts (req: express.Request, res: express.Response) {
    try {
      const { sort } = req.query;
      
      if (sort !== 'recent') {
        return res.status(400).json({ error: Errors.ClientError, data: undefined, success: false })
      } 
  
      let postsWithVotes = await prisma.post.findMany({
        include: {
          votes: true, // Include associated votes for each post
          memberPostedBy: {
            include: {
              user: true
            }
          },
          comments: true
        },
        orderBy: {
          dateCreated: 'desc', // Sorts by dateCreated in descending order
        },
      });
  
      return res.json({ error: undefined, data: { posts: postsWithVotes }, success: true });
    } catch (error) {
      return res.status(500).json({ error: Errors.ServerError, data: undefined, success: false });
    }
  }
}