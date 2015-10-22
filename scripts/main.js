'use strict';
var $ = require('jquery');

var $form = $('#form');
var $age = $('#age');
var $results = $('.results');

$form.on('submit', function(e) {
	e.preventDefault();
	// console.log($age.val());
	$age.val() < 0 ?
		$results.html('<div>You must enter a valid age</div>') :
	
	$age.val() >= 21 ? 
		$results.html('<div>You are old enough to drink</div>') : 
		$results.html('<div>You are not old enough to drink</div>')
})