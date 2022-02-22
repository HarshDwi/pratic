const val=['a','b','c']
for(let i=0; i<val.length; i++) {
    console.log('Element at index '+val[i]);
  }
//push fun
  val.push('d');
  for(let i=0; i<val.length; i++) {
    console.log('Element at index '+val[i]);
  }
  //access element
  console.log('Element at index 2 is '+val[2]);

  //pop element
  val.pop();
  for(let i=0; i<val.length; i++) {
    console.log('Element at index '+val[i]);
  }
  //slice method
  //You can copy and clone an array to a new array using the slice() method. Note that the slice() method doesn't change the original array. Instead, it creates a new shallow copy of the original array.
  const ValCo=val.slice();

  console.log(ValCo);

  //concat
  //The concat() method merges one or more arrays and returns a merged array. 

  const val2=['1','2','3']

  const merged=val.concat(val2);

  console.log(merged)

  //include
  //You can determine the presence on an element in an array using the includes() method. If the element is found, the method returns true, and false otherwise.

  console.log(val.includes('a'))
  console.log(val.includes('x'))

  //reverse
  //As the name suggests, the reverse() method reverses the elements' positions in the array so that the last element goes into the first position and the first one to the last.

  val2.reverse();
  console.log(val2)

  //sort
  val2.sort()
  console.log(val2)

  