var stack = [0, 1];

var	userRequest = prompt("Stack is [0,1] now. Add or Delete element?", userRequest);

if (userRequest === 'Add') {

	var addElement = prompt("Write your element", addElement);
	stack.push(addElement);

} 
else if (userRequest === 'Delete') {

	stack.pop();
}

alert("Stack now is " + stack);

