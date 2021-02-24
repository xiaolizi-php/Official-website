<?php 
$mysql_server_name="localhost"; //数据库服务器名称
$mysql_username="demo123"; // 连接数据库用户名
$mysql_password="demo123"; // 连接数据库密码
$mysql_database="demo123"; // 数据库的名字

$username = $_POST['ym'];
$pwd = $_POST['yx'];
$sqms = $_POST['sqms'];
$date_week = date('Y-m-d H:i:s',strtotime("$time + 1 day"));
$conn = new mysqli($mysql_server_name, $mysql_username, $mysql_password, $mysql_database);
$sql = $conn->query("select * from demo where username='$username'");
$row = mysqli_fetch_assoc($sql); 

$pdo=new PDO("mysql:host=$mysql_server_name;dbname=$mysql_username","$mysql_password","$mysql_database"); // 数据库
$url="authorize.php";
if($sqms==1){
	if ($row > 0) { //判断是否已存在
	  echo"<script>alert('已经免费授权过一次！请勿重复授权'); location.href='$url'</script>";
	} else {
	   $rs=$pdo->exec("insert into demo values (null,'$username','$pwd','$date_week')");//demo 表名称
	   $rs1=$pdo->exec("insert into ysq values (null,'$username')");//ysq 表名称
	if($rs||$rs1){
		echo"<script>alert('授权成功！到期时间:$date_week'); location.href='$url'</script>";
		
	}else{
		echo"<script>alert('授权失败'); location.href='$url'</script>";
	}
	}
}else{
	echo"<script>alert('正在开发中。。。。。。'); location.href='$url'</script>";
}


