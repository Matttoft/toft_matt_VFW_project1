 
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
     
      function storeData(){
            var id=Math.floor(Math.random()*100000001);
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
                  }
                 
            }
      }
     
      function clearLocal(){
            if(localStorage.length===0){
            alert("There is no data to clear.");     
            }else{
                  localStorage.clear();
                  alert("Storage Cleared")
                  window.location.reload();
                  return false;
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
   var memtypeval="No";
    makeList();
 
   
    var displink=$("displayLink");
   
    displink.addEventListener("click", getdata);
   
    var clearlink=$("clear");
   
    clearlink.addEventListener("click", clearLocal);
 
      var save = $('submit');
     
      save.addEventListener("click", storeData);
      });
 