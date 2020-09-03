function createStore() {
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state
    let state

    const getState = () => state

    return {
        getState
    }
}

const store = createStore()
store.subscribe(() => {
    console.log('The new state is :' , store.getState)
})