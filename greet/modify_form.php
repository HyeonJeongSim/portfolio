<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

		//세션변수 (+4개, userid etc..)
		// $num=11 (primary key)
		// $page=1
		// $liststyle=list
		//view.php?num=11&page=1&liststyle=list


	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysqli_query($connect, $sql);

	$row = mysqli_fetch_array($result);   	
	$item_nick    			 = $row[nick];
	$item_subject     = $row[subject];
	$item_content     = $row[content];

?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="./css/greet.css">
	<script>
		// function del(href) 
		// {
		// 	if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
		// 			document.location.href = href;
		// 	}
		// }
	</script>
</head>

<body>
	<? include '../common/sub_header.html' ?>
	<!-- <div class="sub_layout"></div> -->

	    <div class="visual">
      
        </div>

        <article id="content">
            <div class="title_area">
                <h2>공지사항</h2>
            </div>
												<div class="content_area">
														<div class="summary">
																		<p>포스코엠텍 공지사항을 알려드립니다.</p>
																		<p>철강포장 및 소재 전문기업으로서 철강사업에 새로운 가치를 제공하고 시너지를 창출하고자 합니다.</p>
														</div>

				<div class="bbs_wrap">
					<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&liststyle=<?=$liststyle?>">
						<ul class="bbs_write_top">

								<li>
									<dl>
										<dt>닉네임</dt>
										<dd><?=$usernick?></dd>
									</dl>
								</li>

							<li>
								<dl>
									<dt><label for="subject">제목</label></dt>
									<dd>
										<input type="text" name="subject" id="subject" value="<?=$item_subject?>" >
									</dd>
								</dl>
							</li>

							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<textarea name="contents" id="contents"><?=$item_content?></textarea>
									</dd>
								</dl>
							</li>

						</ul>

					
						<div class="btn_wrap">
							<a href="list.php?page=<?=$page?>&liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>

					</form>
				</div>
			</div>
        </article>


</body>
</html>