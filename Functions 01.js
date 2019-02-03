var img_collection = [];
//img_collection [0] = 'Images02/page1.jpeg';
img_collection [0] = 'Images02/page2.jpeg';
img_collection [1] = 'Images02/page3.jpeg';
img_collection [2] = 'Images02/page4.jpeg';

var numCycle = 0;

function CycleNext(){
	document.img_slideMe.src = img_collection[numCycle];
	if(numCycle <= img_collection.length-1)
	{
		numCycle++;
	}
	else
	{
		document.img_slideMe.src = 'Images02/page1.jpeg';
		numCycle = 0;
	}
		
}	
setInterval(CycleNext, 3000);
