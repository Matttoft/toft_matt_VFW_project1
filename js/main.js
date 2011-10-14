 
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
     
            function makeList(){
                  var formTag = document.getElementsByTagName("form");
                  var   selectLi = $('select');
                  var makeSelect = document.createElement('select');
                        makeSelect.setAttribute("id", "dropdown");
            for(var i = 0, j = ministry.length; i<j; i++){
                        var makeOption = document.createElement('option');
                  var optText = ministry[i];
                              makeOption.setAttribute("value", optText);
                              makeOption.innerHTML = optText;
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
            if($('partner').checked){
                  memtypeval=$('partner').value;
            }else{
                  memtypeval="No"
            }
      }
     
      function toggleControls(n){
            switch(n){
                  case "on":
                        $('minform').style.display="none";
                        $('clear').style.display="inline";
                        $('displayLink').style.display="none";
                        $('addnew').style.display="inline";
                        break;
                  case "off":
                        $('minitform').style.display="block";
                        $('clear').style.display="inline";
                        $('displayLink').style.display="inline";
                        $('addnew').style.display="none";
                        $('items').style.display="none";
                        break;
                  default:
                        return false;
            }
      }
     
      function storeData(key){
      	if(!key){
            var id=Math.floor(Math.random()*100000001);
           }else{
           	id=key;
           }
            getradio();
            getcheckval();
            var item={};
            item.fname=["First Name:", $('fname').value];
            item.lname=["Last Name:", $('lname').value];
            item.email=["Email:", $('email').value];
            item.tel=["Telephone #:", $('tel').value];
            item.dob=["Birthdate:", $('dob').value];
      		item.radios=["Sex:", sexval];
            item.group=["Ministry:", $('dropdown').value];
            item.attending=["Attending Months:", $('attending').value];
            item.partner=["Partner:", memtypeval];
            item.memtype=["Member Type:", $('memtype').value];
            item.story=["Story:", $('story').value];
            localStorage.setItem(id, JSON.stringify(item));
            alert("Data submitted, a ministry leader will contact you soon.");     
      }
     
      function getdata(){
            toggleControls("on")
            var makediv=document.createElement('div');
            makediv.setAttribute("id","items");
            var createlist=document.createElement('ul');
            makediv.appendChild(createlist);
            document.body.appendChild(makediv);
            $('items').style.display="block";
                  for(var i=0, len=localStorage.length; i<len;i++){
                  var makeli = document.createElement('li');
                  var linksli=document.createElement('li');
                  createlist.appendChild(makeli);    
                  var key=localStorage.key(i);
                  var value=localStorage.getItem(key);
                  var obj=JSON.parse(value);
                  var makesublist=document.createElement('ul');
                  makeli.appendChild(makesublist);
                  for(var n in obj){
                        var makesubli=document.createElement('li');
                        makesublist.appendChild(makesubli);
                        var optsubtext=obj[n][0]+" "+obj[n][1];
                        makesubli.innerHTML=optsubtext;
                        makesubli.appendChild(linksli);
                  }
                 makeitemlinks(localStorage.key(i),linksli);
            }
      }
    function makeitemlinks(key,linksli){
    	var editlink=document.createElement('a');
    	editlink.href="#";
    	editlink.key=key;
    	var edittext ="Edit Contact";
    	editlink.addEventListener("click",edititem);
    	editlink.innerHTML=edittext;
    	linksli.appendChild(editlink);
    	
    	var breaktag=document.createElement('br');
    	linksli.appendChild(breaktag);
    	
    	var dellink=document.createElement('a');
    	dellink.href="#";
    	dellink.key=key;
    	var deltext="Delete Contact";
    	dellink.addEventListener("click",delitem);
    	dellink.innerHTML=deltext;
    	linksli.appendChild(dellink);
    	
    } 
    
    function edititem(){
    	var value=localStorage.getItem(this.key);
    	var item=JSON.parse(value);
    	
    	toggleControls("off");
    	
    	$('fname').value=item.fname[1];
    	$('lname').value=item.lname[1];
    	$('email').value-item.email[1];
    	$('tel').value=item.tel[1];
    	$('dob').value=item.dob[1];
    	var radios=document.forms[0].sex;
    	for(var i=0; i<radios.length; i++){
    		if (radios[i].value=='male' && item.sex[1]=="male"){
    			radios[i].setAttribute("checked","checked");
    		}else if(radios[i].value=='female' && item.sex[1]=="female"){
    			radios[i].setAttribute("checked","checked");
    		}
    	}
    	$('dropdown').value=item.group[1];
    	$('attending').value=item.attending[1];
    	if (item.partner[1]=='yes'){
    		$('partner').setAttribute("checked","checked");
    	}
    	$('memtype').value=item.memtype[1];
    	$('story').value=item.story[1]; 
    
    
    save.removeEventListener("click",storedata)
    
    $('submit').value="Edit Contact";
    var editsubmit=$('submit');
    editsubmit.addEventListener("click", vailidate);
    editsubmit.key=this.key;
    	
    }
    function delitem(){
    	var ask=confirm("Are you sure?");
    	if(ask){
    		localStorage.removeItem(this.key);
    		alert("Item Deleted.")
    		window.location.reload();
    	}else{
    		alert("Item Not Deleted.")
    	}
    }
    
      function clearLocal(){
            if(localStorage.length===0){
            alert("There is no data to clear.");     
            }else{
                  localStorage.clear();
                  alert("Storage Cleared.")
                  window.location.reload();
                  return false;
            }
      }
      
      function validate(e){
      	var getgroup=$('dropdown');
      	var getfname=$('fname');
      	var getlname=$('lname');
      	var getemail=$('email');
      	
      	errmsg.innerHTML="";
      	getgroup.style.border="1px solid black";
      	getfname.style.border="1px solid black";
      	getlname.style.border="1px solid black";
      	getemail.style.border="1px solid black";
      	
      	var messagearray=[];
      	if(getgroup.value==="--Select One--"){
      		var grouperror='Please Choose a Ministry Option.';
      		getgroup.style.border="1px solid red";
      		messagearray.push(grouperror);
      	}
      	if(getfname.value===""){
      		var fnameerror='Please Enter a First Name.';
      		getfname.style.border="1px solid red";
      		messagearray.push(fnameerror);
      	}
      	if(getlname.value===""){
      		var lnameerror='Please Enter a Last Name.';
      		getlname.style.border="1px solid red";
      		messagearray.push(lnameerror);
      	}
      	var re=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      	if(!(re.exec(getemail.value))){
      		var emailerror="Please Enter a Valid Email Address";
      			getemail.style.border="1px solid red";
      			messagearray.push(emailerror);
      			
      	}      	     
      	if(messagearray.length>=1){
      		for(var i=0, j=messagearray.length; i<j; i++){
      			var text=document.createElement('li');
      			text.innerHTML=messagearray[i];
      			errmsg.appendChild(text);
      		}
      		e.preventDefault();
      	    return false;
      	}else{
      		storeData(this.key);
      	}
      	
      }
      
      
      var ministry=["--Select One--",
      "Impressions (Greeter)",
      "Usher",
      "Custodial",
      "Kids Kraze Group Leader",
      "Kids Kraze Worship Team",
      "Kids Kraze Tech",
      "Adult Worship Team",
      "Nursery (4yr-K)",
      "Nursery (newborn-3yr)",
      "Outreach"]; 
   var sexval;
   var memtypeval="No",
   	   errmsg=$('errors');
   
   
    makeList();
 
   
    var displink=$("displayLink");
   
    displink.addEventListener("click", getdata);
   
    var clearlink=$("clear");
   
    clearlink.addEventListener("click", clearLocal);
 
      var save = $('submit');
     
      save.addEventListener("click", validate);
      });
 