export default {
    next: (idNew) => {
        return { type: 'next', idNew: idNew };
    },
    typeCountIncrement: () => {
        return { type: 'typeCountIncrement' };
    },
    completeWord: () => {
        return { type: 'completeWord' };
    }
}