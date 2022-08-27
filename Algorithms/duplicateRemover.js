const nestedDuplicateRemover = (x) => 
{

let obj =
{

}
for (let i = 0; i < x.length; i++)
{
   
        let temp = [ ...x[i]].sort((a,b) => a - b).join('');
        
        if (!(temp in obj))
        {       obj[temp] = i;
             
        }
}

let fixed = Object.values(obj)

let news = fixed.map( y => x[y])

return news;
}
