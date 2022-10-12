class trieNode
{
    constructor()
    {
        this.children = {};
        this.word = false;
    }
}
class trie
{
    constructor()
    {
        this.root = new trieNode();
    }
    insert(word)
    {
        let temp = this.root;
        for (let char of word)
        {
            
            if(!(temp.children[char]))
            {
                temp.children[char] = new trieNode();
            }
            temp = temp.children[char];
        }
        temp.word = true;
    }
    search(word)
    {
        let temp = this.root;
        for (let char of word)
        {
            if(!(temp.children[char])) return false;
            temp = temp.children[char];
        }
        return temp.word;
        
    }
    startsWith(word)
    {
        let temp = this.root;
        for (let char of word)
        {
            if(!(temp.children[char])) return false;
            temp = temp.children[char];
        }
        return true;
    }
}
