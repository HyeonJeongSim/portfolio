<?
    session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);

    //세션변수 (+4개, userid etc..)
    // $num=11 (primary key)
    // $page=1
    // $liststyle=list

    include "../lib/dbconn.php";

    $sql = "delete from greet where num = $num";
    mysqli_query( $connect, $sql);

    mysqli_close($connect); 

    echo "
        <script>
            location.href = 'list.php?&page=$page&liststyle=$liststyle';
        </script>
    ";
?>