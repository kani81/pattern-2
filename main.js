var n=prompt("enter the value");
var i,j,k;
for (let i=1; i<=n; i++){
		for(let j=n; j>i; j--){
			
			document.write("&nbsp  ");
		}
		for(let k=1;k<=i;k++){
			document.write("*");
		}
			document.write("<br>");
		
}
			