// Background - big

function changeImg(imgNumber)	{
			var myImages = ["images/bg/by_Andrew282.png","images/bg/Screenshot_screenshot_from_star_lord.png","images/bg/Screenshot_from_silver_surfer.png","images/bg/Screenshot_from_moon_knight.png","images/bg/from_nova_comic_book.png"]; 
			var imgShown = document.body.style.backgroundImage;
			var newImgNumber =Math.floor(Math.random()*myImages.length);
			document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';
		}
		window.onload=changeImg;


// Background - logo

function random_imglink(){
var myimages=new Array()
myimages[1]="images/logo-bg/cards_photo_by_lad8s_150.jpg"
myimages[2]="images/logo-bg/winter_photo_by_lad8s_150.jpg"
myimages[3]="images/logo-bg/by_lad8s_photo_like_windows.gif"
myimages[4]="images/logo-bg/ukc_50years_photo_by_lad8s_150.jpg"
myimages[5]="images/logo-bg/lad8s_drink.jpg"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img class="imgA1" src="'+myimages[ry]+'" border=0>')
}
random_imglink()
