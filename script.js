const tasks = {
	task : [{
		text : 'Grocery Shopping',
		completed : true
	},{
		text: 'Cloth Shopping',
		completed : false
	},{
		text: 'Vechile Purchasing',
		completed : false
	}],
	getList () {
		let myArray = [];
		this.task.forEach(element => {
			if(! element.completed){
				myArray.push(element);
			}
		});
		return myArray;
	}
}

console.log(tasks.getList());