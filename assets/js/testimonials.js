$(document).ready(ready);
function ready()
{
	var testimonials = [{quote:'Brian and his crew do a fantastic job.  Like most of Brians\'s clients, we are repeat customers largely because of his ability to understand what we are looking for.  I thought I knew what I wanted when we started our kitchen renovation but Brian\'s suggestions and ideas really improved on our original design.  His staff produces quality work with a real focus on details.  We look forward to our next project with Spillane Custom Carpentry.', author:'Emilia Pietrangelo', authorLocation:'Williams Twp, PA'}];
	var randomIndex = Math.floor(Math.random() * testimonials.length);
	var testimonial = testimonials[randomIndex];
	$('#testimonial').html(testimonial.quote);
	$('#testimonialAuthor').html(testimonial.author + '<br />' + testimonial.authorLocation);
}
