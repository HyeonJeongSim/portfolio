<? 
	session_start(); 
	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);

//	$liststyle = $_GET['liststyle']; (get)

?>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>고객지원 - 문의사항</title>
		<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link rel="stylesheet" href="./common/css/aos.css">

		<link rel="stylesheet" href="../sub5/common/css/sub5common.css">
		<link rel="stylesheet" href="../common/css/common.css">
		<link rel="stylesheet" href="./css/greet.css">
</head>

<body>
		<div class="skipNav">
			<a href="#content">본문 바로가기</a>
			<a href="gnb">글로벌네비게이션 바로가기</a>
		</div>

		<div class="wrap">
			<? include "../common/sub_header.html" ?>
			
		<div class="visual">
			<img src="./images/sub5_title.jpg" alt="">
			<span>인재채용</span>
		</div>

		<div class="sub_nav">
				<ul>
						<li><a href="../sub5/sub5_1.html">PEOPLE</a></li>
						<li><a href="../sub5/sub5_2.html">채용공고</a></li>
						<li><a class= "current" href="./list.php">문의사항</a></li>
				</ul>
		</div>

	  <article id="content">
				<div class="title_area">
						<div class="line_map">
										<a href="../index.html"><i class="fa-solid fa-house"></i><span class="hidden">home</span></a>&nbsp;&nbsp;
										<i class="fa-solid fa-angle-right"></i>
										&nbsp;&nbsp;인재채용&nbsp;&nbsp;<i class="fa-solid fa-angle-right">
										</i>&nbsp;&nbsp;<a href="./list.php"><strong>문의사항</strong></a>
						</div>

						<span data-aos="zoom-in">INQUIRY</span>
						<h2 data-aos="zoom-in">문의사항</h2>
						<p data-aos="zoom-in">고객님께 더 나은 서비스를 제공하기 위해 <br>언제든지 문의사항을 접수 받고 있습니다.</p>
				</div>

				<div class="bbs_wrap">
					<form  name="board_form" method="post" action="insert.php?liststyle=<?=$liststyle?>">
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
									<dd><input type="text" id="subject" name="subject" required></dd>
								</dl>
							</li>
							<li>
								<dl>
									<dt><label for="contents">내용</label></dt>
									<dd>
										<div class="check">
											<input type="checkbox" name="html_ok" id="html_ok" value="y">
											<!-- value=y는 html 체크박스를 체크하면, y값이 넘어간다. -->
											<label for="html_ok">HTML 쓰기</label>
										</div>
										<div>
											<textarea name="contents" id="contents" required></textarea>
										</div>
									</dd>
								</dl>
							</li>
						</ul>
					
						<div class="btn_wrap">
							<a href="list.php?liststyle=<?=$liststyle?>">목록</a>
							<button type="submit" class='active'>완료</button>
						</div>
					</form>
				</div>
				</div>
	</article>

	<script src="https://kit.fontawesome.com/cdd59ed73b.js" crossorigin="anonymous"></script>
	<script src="../common/js/aos.js"></script>
	<script> AOS.init({easing: 'ease-in-out-sine'});</script>

	<script src="../common/js/jquery-1.12.4.min.js"></script>
	<script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
	<script src="../common/js/jquery.easing.1.3.js"></script>
	<script src="../common/js/common.js"></script>
	<script>
		function del(href) 
		{
			if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
					document.location.href = href;
			}
		}
	</script>
</body>
</html>