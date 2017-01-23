<?php
	$rss = simplexml_load_file('http://news.google.com/news?hl=ja&ned=us&ie=UTF-8&oe=UTF-8&output=rss&topic=t');
	$a = 0;
	echo '<div class="news_list">';
	foreach($rss->channel->item as $item){
		if($a > 4){break;}
		$title = $item->title;
		$news = substr($title, 0, strrpos($title,"-"));
		$a++;
?>
<p>
	<span class="title"><?php echo $news; ?></span>
</p>
<?php }  echo '</div>'; ?>