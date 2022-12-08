import repository from "../repositories/todo.repository";

function getAll(){
    return repository.findMany();
}

function getById(id:number){
    if(isNaN(Number(id))){
        throw new Error("NotFound"); 
    }

    const data = repository.findOne(Number(id));
    if(typeof data === 'undefined'){
        throw new Error("NotFound");
    }

    return data;
}

const readService ={
    getAll,
    getById
}

export default readService;