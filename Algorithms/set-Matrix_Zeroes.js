var setZeroes = function(matrix) {
    
    const set = (r,c) => 
    {
        for(let col = c-1; col >= 0; col--)
        {
            matrix[r][col] = 0;
        }
         for(let col = c+1; col < matrix[0].length; col++)
        {
           
            matrix[r][col] = 0;
        }

        for(let row = r-1; row >=0; row--)
        {
            matrix[row][c] = 0
        }
        for(let row = r+1; row < matrix.length; row++)
        {
            
            matrix[row][c] = 0
        }
}
    const zeros = new Set();
    for(let r = 0; r < matrix.length; r++)
    {
        for(let c = 0;  c< matrix[0].length; c++)
        {
            if(matrix[r][c] == 0)zeros.add(r+','+c)
        }
    }

    for(let pos of zeros)
    {
        let [r, c] = pos.split(",")
            set(Number(r),Number(c))
    }
    
};
