/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) { 
    if(!root) return [];
    let ans = [];
    let queue = [root];
    while(queue.length > 0)
    {
        let len = queue.length;
        let row = []
       for (let i = 0; i < len; i++)
       {
            let curr = queue.shift();
            if(curr)row.push(curr.val);
            if(curr &&curr.left)queue.push(curr.left);
            if(curr && curr.right)queue.push(curr.right);
       }
       ans.push(row)
    }
    return ans
};
