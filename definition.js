window.onload = function(){
	searchWord();
};

function searchWord(){

	var search = document.getElementById("search1");
	search.onclick = function ()
	{
		var def = document.getElementById("word1").value;
		var request = new XMLHttpRequest();
		var url = "https://info-lab-6-chrissy97.c9users.io/request.php?q=" + def;
		request.onreadystatechange = function ()
		{
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
				document.getElementById("result").innerHTML = this.responseText;
			}
		};
		request.open('GET',url);
		request.send();
	};
	
	
	var definitions = document.getElementById("allDef");
	definitions.onclick = function ()
	{
		var allRequest = new XMLHttpRequest();
		var url1 = "https://info-lab-6-chrissy97.c9users.io/request.php?q=&all=true";
		allRequest.onreadystatechange = function ()
		{
			if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
			{
				if (this.status == 200){
					var response = allRequest.responseXML;
					var result = document.getElementById("results");
					var defWord = response.getElementsByTagName('definition');
		
					var order = document.createElement("ol");
					order.setAttribute("id", "list");
					result.appendChild(order);
			
					for (var i = 0; i < defWord.length; i++) 
					{ 
						
						var list = document.createAttribute("li");
						var dict = document.createTextNode(defWord[i].children[0].childNodes[0].nodeValue);
						
						list.appendChild(dict);
						order.appendChild(list);
					}
				} else {
					console.log("Status error");
				}
				
			}
			else{
				console.log("Not ready");
			}
			
		};
		
		allRequest.open('GET',url1);
		allRequest.send();
	};
	

}