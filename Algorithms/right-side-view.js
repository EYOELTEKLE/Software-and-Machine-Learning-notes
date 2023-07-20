/** 
preOrder traversal to print the side view
check if the node can be a right Side view if the level has not visited
 **/
var rightSideView = function(root) {
    const level = new Set();
    const preorder = (node,list=[],index=0) =>
    {
        if(!node)return list;
        if(!(level.has(index)))list.push(node.val);
        level.add(index)
        index += 1
        preorder(node.right,list,index)
        preorder(node.left,list,index)
        return list
    }
    let ans = preorder(root)
    return ans;
};
