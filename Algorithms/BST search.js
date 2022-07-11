/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
class Node
{
    constructor(value)
    {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}
class BST
{
    constructor()
    {
        this.root = null;
    }
    insert(value)
    {
        let current = this.root;
        let newNode = new Node(value);
        if(!current)
        {
            this.root = newNode;
            return
        }
        while(true)
        {
            if(current.value > newNode.value)
            {
                if(!current.left)
                {
                    current.left = newNode;
                    return
                }
                current = current.left
            }
            else
            {
                if(current.value < newNode.value)
            {
                if(!current.right)
                {
                    current.right = newNode;
                    return
                }
                current = current.right
            }
            }
        }
    }
    find(val)
    {
        
        let currentNode = this.root;
        let count = 0;
        if(!currentNode)
        {
            return -1
        }
        if(currentNode.value == val)
        {
            return count ;
        }
        else
        {
            while(true)
            {
                if (val < currentNode.value)
                {
                    count++;
                    if(!currentNode.left)
                    {
                        return -1
                    }
                    if(val == currentNode.left.value)
                    {
                        return count;
                    }
                    currentNode = currentNode.left
                }
                else
                {
                  if (val > currentNode.value)
                {
                    count++
                     if(!currentNode.right)
                    {
                        return -1
                    }
                    if(val == currentNode.right.value)
                    {
                        return count;
                    }
                    currentNode = currentNode.right;
                }  
                }
            }
        }
    }
    
}
var search = function(nums, target) {
    let bst = new BST()
    for (let i = 0; i < nums.length; i++)
    {
        bst.insert(nums[i]);
    }
    let ans =  bst.find(target);
    return ans;
};