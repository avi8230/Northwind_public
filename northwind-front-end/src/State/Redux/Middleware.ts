
let counter = 0;

export function countActions(store: any) {

    return function(next: Function) {

        return function (action: any) {

            // Here store.getState() returns the previous state - before calling the reducer.
            console.log(`Current Action: ${action.type}, Total Actions: ${++counter}`);
            
            // console.log(action);
            // console.log(store.getState());

            next(action);
            
            // Here store.getState() returns the next state - after calling the reducer.
            
            // console.log(store.getState());
        }

    }

}
