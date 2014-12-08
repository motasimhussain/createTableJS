/*

createTable(null,2,4,{
	head:["a","b","c","d"],
	body:{
		r1:["a","b","c","d"],
		r2:["a","b","c","d"],
		r3:["a","b","c","d"],
		r4:["a","b","c","d"]
	}
	
});

*/


function createTable(table, rows, cells, content) {
    if (!table) table = document.createElement('table');

    
    var row = document.createElement('tr');
    if(content.head){
    	var head = document.createElement('thead');
	    for (var i = 0; i < cells; i++) {
	    	row.appendChild(document.createElement('th'));
	    	row.cells[i].appendChild(document.createTextNode(content.head[i]));
	    };
	        head.appendChild(row);
    		table.appendChild(head);
	}



	if(content.body){
		var keys = Object.keys(content.body);

	    var body = document.createElement('tbody');
	    table.appendChild(body);
	    var c = 0;
	    for (var i = 0; i < rows; ++i) {
	        var row = document.createElement('tr');
	        for (var j = 0; j < cells; ++j) {
	        	var td = document.createElement('td');
	        	td.setAttribute('class','text-center');
	            row.appendChild(td);

	            row.cells[j].appendChild(document.createTextNode(content.body[keys[i]][j]));
	            c++;
	        }
	        body.appendChild(row);
	    }
	    table.setAttribute('class', 'table table-hover');
	}
    return table;
}
