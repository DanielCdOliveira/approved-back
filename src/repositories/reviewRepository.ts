import { prisma } from "../config/database.js";
import { CreateReviewData } from "../interfaces/interfaces.js"

export async function insertReviewDb(newReview: CreateReviewData) {
  try {
    await prisma.review.create({ data: newReview })
  } catch (error) {
    console.log(error);
    
  }
}
export async function GetAllReviews(userId: number) {

    const reviews  = await prisma.review.findMany({
        where: { userId },
        select:{
            id:true,
            date:true,
            folder:{select:{name:true}},
            subject: { select: { name: true }},
            topic: { select: { name: true } },
        }
    }) as any
    reviews.map(item => {
        item.folderName = item.folder.name; 
        item.subjectName = item.subject.name; 
        item.topicName = item.topic.name; 
        delete item.folder;
        delete item.subject;
        delete item.topic;
    })
    return reviews
}

