/**
needs correction!!! not correct
**/
const knight_tours = (n) => 
{
    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let count = 1;
    let  move_x = [2, 1, -1, -2, -2, -1, 1, 2]
    let move_y = [1, 2, 2, 1, -1, -2, -2, -1];
    let temp = [];
    const helper = (r,c) => 
    {
        let b1 = 0 <= r && r < n;
        let b2 = 0 <=c && c < n;

        if(!b1 || !b2) return false;
        if(matrix[r][c] != 0) return false;
        matrix[r][c] = count;
        if(count >= n**2)
        {
            temp.push([ ...matrix])
            return;
        }
        count++;
        for(let i = 0; i < move_x.length; i++)
        {
            helper(r+move_x[i],c+move_y[i])
        }
        visited.delete(r+","+c+","+count)
    }
    helper(0,0)
    return temp
}
