/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg'
];

function initiateApp(){
	$('#gallery').sortable({
		update: function () {
			var new_array = [];
			var new_image = $('figcaption');
			for(image = 0; image < new_image.length; image++){
				var new_text = $(new_image[image]).text();
				new_array.push("images/" + new_text);
			}
			console.log(new_array);
		}
	});

	var new_gallery_array = JSON.stringify(new_array);
	localStorage.storeGallery = new_gallery_array;

	makeGallery(pictures);
	addModalCloseHandler();
}

/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/

function makeGallery(imageArray){
	for(var imageIndex = 0; imageIndex < pictures.length; imageIndex++) {
		var imagesElement = $('<figure>').addClass('imageGallery col-xs-12 col-sm-6 col-md-4').css('background-image', 'url(' + pictures[imageIndex] + ')');
		var fig_caption = $("<figcaption>").text(pictures[imageIndex].slice(7));
		$(fig_caption).appendTo(imagesElement);
		$(imagesElement).click(displayImage);
		$('#gallery').append(imagesElement);
	}
}

function addModalCloseHandler() {
    $('.modal-body > img').click(function () {
        $('#galleryModal').modal('hide');
    });
}


function displayImage(){
	var direct_image = $(this).attr('style');
	var first_variable = direct_image.lastIndexOf('/');
	var second_variable = direct_image.lastIndexOf('g');
	var direct_image_caption = direct_image.slice(first_variable+1,second_variable+1);

	var direct_image_url = direct_image.lastIndexOf('images');
	var the_image = direct_image.slice(direct_image_url,second_variable+1);
	console.log(the_image);


	$('.modal-title').text(direct_image_caption);
	$('.modal-body > figure').attr('src', the_image);
	$('#galleryModal').modal();
}

//use loops and jquery dom creation to make the html structure inside the #gallery section
//create a loop to go through the pictures

//create the elements needed for each picture, store the elements in variable

//attach a click handler to the figure you create.  call the "displayImage" function.

//append the element to the #gallery section

//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp

//find the url of the image by grabbing the background-image source, store it in a variable
//grab the direct url of the image by getting rid of the other pieces you don't need

//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
// pexels-photo-132037
//take a look at the lastIndexOf method

//change the modal-title text to the name you found above
//change the src of the image in the modal to the url of the image that was clicked on

//show the modal with JS.  Check for more info here:
//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp





