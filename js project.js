var str = ""
	var k = 0;
	function addToTable(){
		var table = document.getElementById('fullNames');
		var name = document.getElementById('name').value;
		var surname = document.getElementById('surname').value;
		
		k++;
		str += "<tr>";
		str += "<td>"+ k +"</td>";
		str += "<td>"+ name +"</td>"
		str += "<td>"+ surname +"</td>"
		str += "</tr>";

		table.innerHTML = str;
	}