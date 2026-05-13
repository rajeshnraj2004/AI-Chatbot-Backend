import KnowledgeModel from "../models/KnowledgeModel.js";
import { similarity } from "../services/nlpService.js";;


export const chatbot = async (req,res) => {
    const message = req.body.message.toLowerCase().trim();
    
    const data = await KnowledgeModel.find();
    

    for(let item of data) {
        const score = similarity(message, item.question);
        if(score > 0.7) {
            return res.json({
                reply: item.answer,
                teach: false
            });
        }
    }
    return res.json({
        reply: "I am sorry, I don't understand",
        teach: true
    });

}

export const teachBot = async (req, res) => {
    const { question, answer} = req.body;

    await KnowledgeModel.create({
        question: question.toLowerCase(),
        answer: answer.toLowerCase()
    });
    res.json({
        success:true,
        message:'iam learned new things'    
    })
};