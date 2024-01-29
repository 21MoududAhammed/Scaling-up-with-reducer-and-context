const generateNextId = tasks =>{
    const maxId = tasks.reduce((max, current) => max.id > current.id ? max.id : current.id );
    return maxId + 1;
}
export {generateNextId};