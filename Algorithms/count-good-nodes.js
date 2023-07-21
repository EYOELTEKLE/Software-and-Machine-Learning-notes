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
 * @return {number}
 */
var goodNodes = function(root,max=-Infinity) {
  if(!(root)) return 0;
  let result;
  root.val >= max ? (result = 1, max = root.val) : result = 0;
  result += goodNodes(root.left,max)
  result += goodNodes(root.right,max)
  return result;  
};
