<?php
$title = htmlspecialchars($_GET["title"]);
$imageId = htmlspecialchars($_GET["imageId"]);
$imageURL = htmlspecialchars($_GET["imageURL"]);
?>
<html>
	<head>
		<title><?=$title?></title>
		<script type="text/javascript">
			document.location = '/work.html?imageId=<?=$imageId?>'
		</script>
	</head>
	<body>
		<img src="<?=$imageURL?>" />
	</body>
</html>