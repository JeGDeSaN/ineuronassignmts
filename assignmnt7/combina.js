function verdict(ip, op)
{
	
	if (ip.length == 0){
		console.log(op," ");
		return;
	}
	let ch = ip[0].toLowerCase();
	let ch2 = ip[0].toUpperCase();
	ip = ip.substring(1) ;

	verdict(ip, op + ch); 
	verdict(ip, op + ch2);
}
let ip = "yes" ;
verdict(ip,"");

