/**
Backtracking Template

checks if a state is valid or not!   -> isValid
constructs a candidate from a state -> getCandidates
searches and validates the state solutions -> search

solve -  main function;



**/
const isValid = (state) => 
{
    return true;
}
const getCandidates = (state) => 
{
    return []
}
const search = (state,solutions) => 
{
    if(isValid(state))
    {
        solutions.push([...state])
    }
    for (candidates of getCandidates(state))
    {
        state.add(candidates);
        search(state,solutions);
        state.delete(candidates);
    }
}
const solve = () => 
{
    let solutions = [];
    let state = new Set();
    search(state,solutions);
    return solutions;
}
