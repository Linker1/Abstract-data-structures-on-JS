var queue = [1, 2];

var	userRequest = prompt("Queue is [1,2]. Add or Delete element?", userRequest);

if (userRequest === 'Add') {

	var addElement = prompt("Write your element", addElement);
	queue.push(addElement);

} 
else if (userRequest === 'Delete') {

	queue.shift();
}

alert("Queue now is " + queue);