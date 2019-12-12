<?php  
	header("content-type:text/html;charset=utf8");
	$connect=mysqli_connect('localhost','root','root','user','3306');
	if(mysqli_connect_error()){
		die('数据库连接失败');
	}
	$name=$_GET['username'];
	$pw=$_GET['password'];
	$sql="select * from info1 where username='$name' and password='$pw'";
	$result=mysqli_query($connect,$sql);
	$rows=mysqli_num_rows($result);
	if($rows>0){
		echo $name."登录成功";
	}else{
		echo "用户名或密码错误";
	}
?>