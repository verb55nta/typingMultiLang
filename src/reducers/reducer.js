import wordsData from './wordsData.json';




const initialState = {
    id: 0,
    tgt: 'fr',
    data: wordsData,
    typeCount: 0,
    lLim: 0,
    uLim: 11999,
    answer: 0,
    initialDisplay: 1,
    targetString: wordsData[0]['en'],
}

export default function reducer(state=initialState, action) {
    
    switch (action.type) {
        case 'next':

            const idNew = action.idNew;

            return Object.assign({}, state, {
                id: idNew,
                typeCount: 0,
                answer:0,
                
            });
        case 'typeCountIncrement':
            const cntNew = state.typeCount + 1;
            return Object.assign({}, state, {
                typeCount: cntNew,
            });
        case 'completeWord':
            const answerNew = 1;
            return Object.assign({}, state, {
                answer:answerNew,
            });
        default:
            return state;
    }

}