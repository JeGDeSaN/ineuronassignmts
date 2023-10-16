let num=6;

function matchhouse(x)
{    

    if(x==1)
    {
        console.log("MatchHouse("+x+")--->>"+num);

    }
    
    else
    {
        for(i=2;i<=x;i++)
        {
            num=num+5; 
        } 

        console.log("MatchHouse("+x+")--->>"+num);
               
    }

}

matchhouse(1);
matchhouse(4);
matchhouse(87);

