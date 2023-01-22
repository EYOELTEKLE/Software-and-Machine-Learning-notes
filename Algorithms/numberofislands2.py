def numOfIslands(self, rows: int, cols : int, operators : List[List[int]]) -> List[int]:
        # code here
        grid = [[0 for i in range(cols) ] for r in range(rows)]
        
        def helper():
            visited = set()
            count = 0
            def dfs(r,c):
                b1 = 0 <= r and r < rows
                b2 = 0 <= c and c < cols
                if not b1 or not b2:
                    return False
                if grid[r][c] == 0:
                    return False
                if (r,c) in visited:
                    return False
                visited.add((r,c))
                
                dfs(r+1,c)
                dfs(r-1,c)
                dfs(r,c+1)
                dfs(r,c-1)
                return True
            for r in range(rows):
                for c in range(cols):
                    ans = dfs(r,c)
                    if ans:
                        count+=1
            return count
        for i in range(len(operators)):
            r,c = operators[i]
            grid[r][c] = 1
            eval = helper()
            operators[i] = eval
        return operators
    
