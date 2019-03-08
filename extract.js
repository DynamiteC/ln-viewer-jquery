var nodes = document.querySelectorAll('[data-control-name="profileview_single"]')
var arr = [];
for(var x = 0; x < nodes.length; x++) {
if(nodes[x].querySelectorAll('.me-wvmp-viewer-card__viewer-pic a').length>0)
{
	var len = arr.length;
	arr[len]=[];
	arr[len].push(nodes[x].querySelectorAll('.me-wvmp-viewer-card__viewer-pic a')[0].href)
	arr[len].push(nodes[x].querySelectorAll('span.me-wvmp-viewer-card__name-text')[0].innerText.trim());
}
if(nodes[x].querySelectorAll('p.me-wvmp-viewer-card__time-ago').length>0)
	arr[len].push(nodes[x].querySelectorAll('p.me-wvmp-viewer-card__time-ago')[0].innerText.trim())
}
var newArr = [];
var currentC = 0;
for(var x = 0; x < arr.length; x++)
{
if(arr[x][2])
	currentC = x;
newArr[x] = [];
if(arr[x][2]==undefined)
	arr[x][2] = arr[currentC][2];
newArr[x][0] = formatDate(actualDate(arr[x][2]))
newArr[x][1] = "Client Profile";
newArr[x][2] = arr[x][1].split(' ')[0];
newArr[x][3] = arr[x][1].split(' ')[1];
newArr[x][4] = arr[x][1].toString().trim();	
newArr[x][5] = arr[x][0];
}

function formatDate(date) {
  var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return monthNames[monthIndex] + '-' + day + '-' + year;
}


function actualDate(str)
{
	if(str.indexOf('h')>-1)
		return new Date(((new Date()).getTime()) - (Number(str.replace('h',''))*60*60*1000));
	else if(str.indexOf('mo')>-1)
		return new Date(((new Date()).getTime()) - (Number(str.replace('mo',''))*30*24*60*60*1000));
	else if(str.indexOf('m')>-1)
		return new Date(((new Date()).getTime()) - (Number(str.replace('m',''))*60*1000));
	else if(str.indexOf('d')>-1)
		return new Date(((new Date()).getTime()) - (Number(str.replace('d',''))*24*60*60*1000));
	else if(str.indexOf('w')>-1)
		return new Date(((new Date()).getTime()) - (Number(str.replace('w',''))*7*24*60*60*1000));
	else
		return new Date();
}

copy(newArr.map(function(d){
    return d.join('	');
}).join('\n'));
