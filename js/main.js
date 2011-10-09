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
	  for (var i=0, j=ministry.length; i>j; i++){
	  	   var makeOption = document.createElement('option');
	  	   var optText = ministry[i];
	  	   makeOption.setAttribute("value", optText);
	  	   makeOption.innerHTML=optText;
	  	   makeSelect.appendChild(makeOption);
	  	
	  }	  
	 selectLi.appendChild(makeSelect);
	}
	
	//function storeData(){
	//	localstorage.setItem("","");
	//}
	var ministry=["--Select One--","Impressions (Greeter)","Usher","Custodial","Kids Kraze Group Leader","Kids Kraze Worship Team","Kids Kraze Tech","Adult Worship Team","Nursery (4yr-K)","Nursery (newborn-3yr)","Outreach"];  
   
    makelist();
  /*  
    
    var displink=$("display");
    
    displink.addEventListener("click", getData);
    
    var clearlink=$("clear");
    
    displink.addEventListener("click", clearData);
    
    var save=$("submit");

	save.addEventListener("click", storeData);
	*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	});
