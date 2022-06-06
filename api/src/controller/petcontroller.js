import { inserirpet } from '../repository/petrepository.js';



import { Router } from 'express';
import { con } from '../repository/connection.js';
const server = Router();




server.post('/pet' ,  async(req, resp) =>{
        try{
            const petinser= req.body;
 
            const  pet = await inserirpet (petinser);
            resp.send(pet)
     
         
    
    
        }catch(err){
             resp.status(400).send({
                 erro:err.message
             });
        }
    })

    export default server;

 