(function () { 
	document.getElementsByClassName('clear-filter-button')[0].click();
	
	var nodes = document.querySelectorAll('.partners-results-outer .partners-results-container .partner-card');
	var arr = [];
	for(var x = 0; x < nodes.length; x++) { 
		var info="",address="",email="",desk="",phone="";
		if(!nodes[x].querySelector('.reseller-info h6'))
			continue;
		
		if(nodes[x].querySelector('.reseller-info h6'))
			info = nodes[x].querySelector('.reseller-info h6').innerText.trim();
		if(nodes[x].querySelector('.reseller-address p'))
			address = nodes[x].querySelector('.reseller-address p').innerText.trim();
		if(nodes[x].querySelector('.icon-email'))
			email = nodes[x].querySelector('.icon-email').nextElementSibling.innerText.trim();
		if(nodes[x].querySelector('.icon-desk'))
			desk = nodes[x].querySelector('.icon-desk').nextElementSibling.innerText.trim();
		if(nodes[x].querySelector('.icon-phone'))
			phone = nodes[x].querySelector('.icon-phone').nextElementSibling.innerText.trim();
		arr.push([info.replace(/\n/g,''),address.replace(/\n/g,''),email.replace(/\n/g,''),desk.replace(/\n/g,''),"'" + phone.replace(/\n/g,'')]);	
		
	}
	copy(arr.map(function(d){
    	return d.join('	');
	}).join('\n'));

})();
