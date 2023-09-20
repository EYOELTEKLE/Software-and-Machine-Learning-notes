class Node
{
    constructor(left,right)
    {
        this.sum = 0;
        this.left = null;
        this.right = null;
        this.l = left;
        this.r = right;
    }
}
class SegmentTree {

   constructor()
    {
        this.root = null;
    }
    build(arr)
    {
        let left = 0;
        let right = arr.length-1;
        let temp = this.create(arr,left,right);
        this.root = temp;
        return this.root;
    }
    create(arr,left,right)
    {
        if(left == right)
        {
            let temp = new Node(left,right);
            temp.sum  = arr[left];
            return temp;
        }
        let temp = new Node(left,right);
        let m = Math.floor((left+right)/2);
        temp.left = this.create(arr,left,m);
        temp.right = this.create(arr,m+1,right);
        temp.sum = temp.left.sum + temp.right.sum;
        return temp;
    }
    update(index,val,root=this.root)
    {
       
        if(root.l ==index &&  root.r == index)
        {
                root.sum = val;
                return;
        }
        let m = Math.floor((root.l + root.r)/2);

        if (index > m)
        {
                this.update(index,val,root.right);
        }
        else
        {
                this.update(index,val,root.left);
        }
        root.sum =root.left.sum + root.right.sum;
       
    }
    rangeQuery(l,r,root=this.root)
    {
        if(root.l == l && root.r == r)
        {
                return root.sum;
        }
        let m = Math.floor((root.l + root.r)/2);
        if(l > m)
        {
                return this.rangeQuery(l,r,root.right);
        }
        else if(r <= m)
        {
                return this.rangeQuery(l,r,root.left);
        }
        else
        {
                return this.rangeQuery(l,m,root.left) + this.rangeQuery(m+1,r,root.right)
        }
    }
}  

const seg = new SegmentTree();
seg.build([1,3,5,7,9,11]);
