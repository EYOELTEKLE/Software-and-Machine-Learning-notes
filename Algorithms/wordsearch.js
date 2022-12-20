/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visited = new Set();
    if(word.length > board[0].length && board.length == 1)return false;
    if(board[0].length == 1 && board.length == 1 && word.length == 1 && word[0]== board[0][0]) return true

    let temp = board.flat()
    let same = temp.every(x => {if(x == temp[1]) return true});
    if(same && word[word.length - 1] != temp[temp.length - 1]) return false;
    const dfs = (r,c,cur="") => 
    {
        let b1 = 0 <= r && r <board.length;
        let b2  = 0 <= c && c < board[0].length;
        if(!b1 || !b2) return false;
        if(word.indexOf(cur) != 0) return false;
        if(cur == word) return true;
        if(visited.has(r+','+c))return false
        visited.add(r+','+c)
    
        if(dfs(r+1,c,cur+board[r][c])) return true
        if( dfs(r,c+1,cur+board[r][c])) return true
        if(dfs(r-1,c,cur+board[r][c])) return true
        if(dfs(r,c-1,cur+board[r][c])) return true
        visited.delete(r+','+c)
    }

    for (let i = 0; i < board.length; i++)
    {
        for (let j = 0 ; j < board[0].length; j++)
        {            
            let ans = dfs(i,j);
            if(ans) return true;

        }
    }
    return false
};
