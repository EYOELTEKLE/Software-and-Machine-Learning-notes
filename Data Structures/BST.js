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
        const val = new Node(value);
        if (this.root == null)
        {
            this.root = val;
        }
        else
        {
            let currentNode = this.root;
            while(true)
            {
                if(value < currentNode.value)
                {
                    if(!currentNode.left)
                    {
                       currentNode.left = val;
                        return this
                    }
                   currentNode = currentNode.left; 
                }
                else
                {
                    if(value > currentNode.value)
                {
                    if(!currentNode.right)
                    {
                       currentNode.right = val;
                        return this
                    }
                   currentNode = currentNode.right; 
                }
                }
                
                
            }
        }
    }
    lookup(val)
    {
        let currentNode = this.root;
        if(!currentNode)
        {
            return null
        }
        if(currentNode.value == val)
        {
            return currentNode;
        }
        else
        {
            while(true)
            {
                if (val < currentNode.value)
                {
                    if(!currentNode.left)
                    {
                        return null
                    }
                    if(val == currentNode.left.value)
                    {
                        return currentNode.left;
                    }
                    currentNode = currentNode.left
                }
                else
                {
                  if (val > currentNode.value)
                {
                     if(!currentNode.right)
                    {
                        return null
                    }
                    if(val == currentNode.right.value)
                    {
                        return currentNode.right;
                    }
                    currentNode = currentNode.right;
                }  
                }
            }
        }
    }
    
}