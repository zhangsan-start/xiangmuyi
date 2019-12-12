<?php  
	header("content-type:text/html;charset=utf8");
	$connect=mysqli_connect('localhost','root','root','user','3306');
	if(mysqli_connect_errno()){
		die('数据库连接失败');
	}
	$name=$_GET['username'];
	$pw=$_GET['password'];
	$sql="insert into info1 (username,password) values ('$name','$pw')";
	$result=mysqli_query($connect,$sql);
	//$rows=mysqli_num_rows($result);
	if($result){
		echo $name."注册成功";
	}else{
		echo "注册失败";
	}
?>