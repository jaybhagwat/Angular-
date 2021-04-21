var a=[]
var b=[]

a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
var n=a.length;
 console.log(a)

for (var i=0;i<n/2;i++)
{
    for(var j=0;j<n-1-1;j++)
    {
        b=a[i][j];
                a[i][j]=a[j][n-i-1];
                a[j][n-i-1]=a[n-i-1][n-j-1];
                a[n-i-1][n-j-1]=a[n-j-1][i];
                a[n-j-1][i]=b;
    }
}

console.log(a)