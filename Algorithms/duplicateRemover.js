let obj =
{

}

let x = [[1,2,1],[2,1,1],[4,5,12],[12,5,4],[5,5,2]]
for (let i = 0; i < x.length; i++)
{
        let temp = x[i].sort((a,b) => a - b).join('')
        if (!(temp in obj))
        {       obj[temp] = i
                continue;
        }
}

let fixed = Object.values(obj)
let news =  []

for (let i = 0; i < fixed.length; i++)
{
        if (i == fixed[i])
        {
                news.push(x[i])
        }
}
console.log(news)
