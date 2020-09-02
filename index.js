function createStore() {
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    let state

    const getState = () => state

    return {
        getState
    }
}