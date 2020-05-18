
var imgDiv=document.getElementById('imgDiv');

imgDiv.onclick=function (e) {
	var contentDiv = document.getElementById('content')
	var imgId = e.target.id;
    var matched = [];

	if ( imgId ===  'Leo' ) {
       matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 7 && e.date.day  >= 23 || e.date.month === 8 && e.date.day <= 21} )
	}else if (imgId ===  'Aries') {
       matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 3 && e.date.day  >= 21 || e.date.month === 4 && e.date.day <= 20} )
	}else if (imgId ===  'Cancer') {
       matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 6 && e.date.day  >= 22 || e.date.month === 7 && e.date.day <= 22} )
	}else if (imgId ===  'Capricorn') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 12 && e.date.day  >= 23 || e.date.month === 1 && e.date.day <=20} )
	}else if (imgId ===  'Gemini') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 5 && e.date.day  >= 22 || e.date.month === 6 && e.date.day <= 21} )
	}else if (imgId ===  'Aquarius') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 1 && e.date.day  >= 21 || e.date.month === 2 && e.date.day <= 19} )
	}else if (imgId ===  'Pisces') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 2 && e.date.day  >= 20 || e.date.month === 3 && e.date.day <= 20} )
	}else if (imgId ===  'Sagittarius') {
 	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 11 && e.date.day  >= 23 || e.date.month === 12 && e.date.day <= 22} )
	}else if (imgId ===  'Libra') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 9 && e.date.day  >= 24 || e.date.month === 10 && e.date.day <= 23} )
	}else if (imgId ===  'Scorpio') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 10  && e.date.day  >= 24 || e.date.month === 11 && e.date.day <= 22} )
	}else if (imgId ===  'Taurus') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 4 && e.date.day  >= 21 || e.date.month === 5 && e.date.day <= 20} )
	}else if (imgId ===  'Vigro') {
	   matched = gazaPlusTeam.filter((e)=>{ return e.date.month === 8 && e.date.day  >= 22 || e.date.month === 9 && e.date.day <= 23} )
	}

contentDiv.textContent='';

matched.map(function(e){ 
var subDiv=document.createElement('div');
var a=document.createElement('a');
var name=document.createElement('h1');
var threeWords=document.createElement('p');
var animal=document.createElement('span');
var img = document.createElement('img');
subDiv.id='sub'
img.id='student'


if(e.spiritAnimal === "") {
  name.textContent = e.name;
  img.src = e.imgUrl;
  a.innerHTML = 'FBI AGENT';
  threeWords.textContent = "WE KNOW NOTHING ABOUT THE PEOPLE WORKING WITH THE FBI";
  threeWords.style.color = "red";
}else {
name.textContent = e.name;
animal.textContent = ' Spirit Animal: '+e.spiritAnimal;
threeWords.textContent = e.threeWords;
a.innerHTML = 'Blog Link';
a.href = e.blogLink;
img.src = e.imgUrl;
}


subDiv.appendChild(img);
subDiv.appendChild(name);
subDiv.appendChild(threeWords);
subDiv.appendChild(animal);
subDiv.appendChild(a);
contentDiv.appendChild(subDiv);

}
	)

}

