/**
 * Project 2 
 Matt Toft VFW
 1110
 
 */
window.addEventListener("DOMContentLoaded", function(){
	
	function $(x){
	var theElement=document.getElementById(x);
	return theElement;
	}
	
	function makelist(){
	  var formtag=document.getElementsByTagName("form"),
	  	  selectLi=$("ministries"),
	  	  makeSelect=document.createElement("ministries");
	  	  makeSelect.setAttribute("id","groups");
	  for (var i=0, j=ministry.length; i<j;i++){
	  	   var makeOption = document.createElement('option');
	  	   var optText = ministry[i];
	  	   makeOption.setAttribute("value", optText);
	  	   makeOption.innerHTML=optText;
	  	   makeSelect.appendChild(makeOption);
	  	
	  }	  
	 selectLi.appendChild(makeSelect);
	}
	
	function getradio(){
		var radio=document.forms[0].sex;
		for(var i=0; i<radio.length; i++){
			if(radio[i].checked){
			sexval=radio[i].value;
			}
		}
		
	}
	function getcheckval(){
		if($('fav').checked){
			memtypeval=$('memtype').value;
		}else{
			memtypeval="No"
		}
	}
	
	function toggleControls(n){
		switch(n){
			case "on":
				$('minitform'),style.display="none";
				$('clear').style.display="inline";
				$('displaydatalink')style.display="none";
				$('addnew').style.display="inline";
				break;
			case "off":
				$('minitform'),style.display="block";
				$('clear').style.display="inline";
				$('displaydatalink')style.display="inline";
				$('addnew').style.display="none";
				$('items').style.display="none";
				break;
			default:
				return false;
		}
	}
	
	function storeData(){
		var id=Math.floor(Math.random()*100000001);
		getradio();
		getcheckval();
		var item={};
		item.group=["Ministry:", $('ministries').value];
		item.fname=["First Name:", $('fname').value];
		item.lname=["Last Name:", $('lname').value];
		item.email=["Email:", $('email').value];
		item.username=["Username:", $('username').value];
		item.pword=["Password:", $('pword').value];
		item.tel=["Telephone #:", $('tel').value];
		item.dob=["Birthdate:", $('dob').value];
		item.radios=["Sex:", sexval];
		item.attending=["Attending Months:", $('attending').value];
		item.memtype=["Member Type:", memtypeval];
		item.story=["Story:", $('story').value];
		localStorage.setItem(id, JSON.stringify(item));
		alert('Data submitted, a ministry leader will contact you soon.')
	}
	
	function getdata(){
		var makediv=document.createElement('div');
		makediv.setAttribute("id","items");
		var createlist=document.createElement('ul');
		makediv.appendChild(createlist);
		document.body.appendChild(makediv);
		$('items').style.display="block";
		for(var i=0, j=localStorage.length; i<j;i++){
			var makeli = document.createElement('li');
			createlist.appendChild(makeli);	
			var key=localStorage.key(i);
			var value=localStorage.getItem(key);
			var obj=JSON.parse(value);
			var makesublist=document.createElement('ul');
			makeli.appendChild(makesublist);
			for(var n in obj){
				var makesubli=document.createElement('li');
				makesublist.appendChild(makesubli);
				var optsubtext=obj[n][0]+""+obj[n][1];
				makesubli.innerHTML=optsubtext;
			}
			
		}
	}
	var ministry=["--Select One--","Impressions (Greeter)","Usher","Custodial","Kids Kraze Group Leader","Kids Kraze Worship Team","Kids Kraze Tech","Adult Worship Team","Nursery (4yr-K)","Nursery (newborn-3yr)","Outreach"],  
   		sexval,
   		memtypeval="No";
    makelist();
 
    
    var displink=$("display");
    
    displink.addEventListener("click", getdata);
    
   /* var clearlink=$("clear");
    
    displink.addEventListener("click", clearData);
    */
    var save=$("submit");

	save.addEventListener("click", storeData);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
