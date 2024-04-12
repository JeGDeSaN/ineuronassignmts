let m =63

switch(true)
{
    case (m<=100 && m>=90):
        console.log("Grade S");
        break;

    case (m<=89&&m>=80):
        console.log("Grade A");
        break;
    case (m<=79&&m>=70):
        console.log("Grade B");
        break;
    case (m<=69&&m>=60):
        console.log("Grade C");
        break;
    case (m<=59&&m>=50):
        console.log("Grade D");
        break;
    case (m<=49&&m>=40):
        console.log("Grade E");
        break;
    case m<=39:
        console.log("Student has failed");
        break;
    default:
        console.log("Invalid marks")
        break;
}


