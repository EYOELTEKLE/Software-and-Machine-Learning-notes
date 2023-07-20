class unionFind
{
    constructor()
    {
        this.parent = {};
        this.rank = {};
    }
    check (edges)
    {
        for (let i = 0; i < edges.length; i++) //construct union
        {
            const [node_in,node_out] = edges[i];
            this.construct(node_in,node_out) ;  
        }
        for (let i = 0; i < edges.length; i++) //perform union
        {
            const [node_in,node_out] = edges[i];
             this.find(node_in),
             this.find(node_out)
        }

        for (let i = 0; i < edges.length; i++) //perform unionFind
        {
            const [node_in,node_out] = edges[i];
            let ans = this.union(node_in,node_out);
            if(!(ans)) return false;
        }   
        return true;
    }
    construct(node_in,node_out)
    {
        if(!(node_in in this.parent))
        {
            this.parent[node_in] = node_in;
            this.rank[node_in] = 0;
        }
         if(!(node_out in this.parent))
        {
            this.parent[node_out] = node_out;
            this.rank[node_out] = 0
        }
    }
    find(node)
    {
       let pr = this.parent[node];

        while(pr !== this.parent[pr])
        {
            this.parent[pr] = this.parent[this.parent[pr]];
            pr = this.parent[pr]
        }
        return pr;
    }
    union(a,b)
    {
        let [A,B] = [this.find(a),this.find(b)];
        if(A == B) return false;

        if(this.rank[A] > this.rank[B])
        {
            this.parent[B] = A;
        }
         if(this.rank[A] < this.rank[B])
        {
            this.parent[A] = B;
        }
        else
         {
             this.parent[A] = B;
             this.rank[B] += 1
         }
        return true;
    }
}
//usage
const union = new unionFind();
union.check([[1,2],[2,0],[1,0]])
