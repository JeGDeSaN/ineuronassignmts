let arr = [3,45,6,7,23,5,7,8];
n = 7;
console.log(+n+" Largest element in the given array is" + find_largest(arr, n));

function find_largest(arr, n)
{	
	arr.sort((a,b) => b-a);

	return arr[n - 1];
}
	


