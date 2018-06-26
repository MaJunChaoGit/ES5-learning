(function () {
	var view = document.querySelector('#test');
	var data = {};
	var i = 0;
	Object.defineProperty(data, 'b', {
		set(newValue){
			view.textContent = newValue;
		},
		get(){
		}
	});
	setInterval(()=>{
		i++;
		data['b'] = 'data.b更新了我要更新视图' + i;
	},1000);
})()