import { con } from './connection.js';


export async function inserirpet(pet){
   const comando = 
   `
   insert into  tb_pet ( nm_pet)
            
    value(?)
   `;
   const [resposta] = await  con.query(comando, [pet.nome]);
    pet.id=  resposta.insertId
    return pet
}

export async function consulatarper()