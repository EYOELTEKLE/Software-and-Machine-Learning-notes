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
 * @return {number[]}
 */
var postorderTraversal = function(root,list = []) 
{
    if (root == null)
    {
        return list
    }    
    if(root.left)
    {
        postorderTraversal(root.left,list)
    }
     if(root.right)
    {
        postorderTraversal(root.right,list)
    }
    list.push(root.val);
    return list;
};