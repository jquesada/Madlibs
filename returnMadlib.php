<?php 

$array = array( "Girl Name" => $_POST['girlName'], "Guy Name" => $_POST['guyName'], "First Verb" => $_POST['firstVerb'], "Second Verb" => $_POST['secondVerb'], "First Noun" => $_POST['firstNoun'], "Third Verb" => $_POST['thirdVerb'], "Place" => $_POST['place'], "Fourth Verb" => $_POST['fourthVerb'], "Second Noun" => $_POST['secondNoun'], "Adjective" => $_POST['adjective'], "Third Noun" => $_POST['thirdNoun']);
$errors = 0;

foreach ($array as $key => $value) //CHECKS TO SEE IF SOMETHING WAS ENTERED IN EACH FIELD
{
	if (!$value)
	{
		$errors++; //COUNTS HOW MANY EMPTY FIELDS EXIST
		print "<p class='lighttext'>";
		print "* Must fill in ".$key." field! <br />";
		print "</p>";
	}
}
if ($errors==0) //IF NO EMPTY FIELDS EXIST
{
	$girl = $_POST['girlName'];
	$guy = $_POST['guyName'];
	$verb1 = $_POST['firstVerb'];
	$verb2 = $_POST['secondVerb'];
	$verb3 = $_POST['thirdVerb'];
	$verb4 = $_POST['fourthVerb'];
	$noun1 = $_POST['firstNoun'];
	$noun2 = $_POST['secondNoun'];
	$noun3 = $_POST['thirdNoun'];
	$adjective = $_POST['adjective'];
	$place = $_POST['place'];

	print "<div id='madlib'>";
	print "<div id='story'>";
	print "<span class='redtext'>".$girl."</span> agreed to be <span class='redtext'>".$guy."</span>'s Valentine. He <span class='redtext'>".$verb1."</span> her up and took her to dinner. At the restaurant, they <span class='redtext'>".$verb2."</span> <span class='redtext'>".$noun1."</span>. After that, they took a <span class='redtext'>".$verb3."</span> in the <span class='redtext'>".$place."</span>. Then they <span class='redtext'>".$verb4."</span> in the grass and looked up at the <span class='redtext'>".$noun2."</span>s. At the end of the night, he told her she was <span class='redtext'>".$adjective."</span> and gave her a <span class='redtext'>".$noun3."</span>.";
	print "</div>";
	print "</div>";
}
?>