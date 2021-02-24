<?php
include("header.php");
?>
<br />
 <div class="layui-container">
     <div class="layui-row">
         <div class="layui-col-md12 tc mt50">
             <div class="down-header">首次免费使用24H（为了您的体验 请在到期前一天续费）</div>
         </div>
     </div>
 </div>
<div style="width: 100%; height: 410px;">
	<form class="layui-form" action="main.php"   method="post"  style="margin-top: 60px;">
		<div class="layui-form-item" >
			<label class="layui-form-label"   style="width: 45%;">站点域名（不加http://）</label>
		<div class="layui-input-inline">
      <input  style="margin: auto;"  type="text" name="ym" lay-verify="required" placeholder="请输入站点域名" autocomplete="off" class="layui-input">
    </div>
  </div>
 <div class="layui-form-item" >
 			<label class="layui-form-label"   style="width: 45%;">站&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;长&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱</label>
 		<div class="layui-input-inline">
     <input  style="margin: auto;"  type="text" name="yx" lay-verify="required" placeholder="请输入站长邮箱" autocomplete="off" class="layui-input">
   </div>
 </div>
  <div class="layui-form-item" >
     <label class="layui-form-label" style="width: 45%;">授权模式</label>
     <div class="layui-input-block">
       <input type="radio" name="sqms" value="1" title="体验24h" checked="">
       <input type="radio" name="sqms" value="2" title="续费授权">
     </div>
   </div>
	  <!-- <div class="layui-form-item" >
	    <div class="layui-input-block">
	    </div>
	  </div> -->
	  <br />
	  <button class="layui-btn" lay-submit lay-filter="formDemo"   style="margin-left: 45%;">立即提交</button>
	  <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	</form>
	
</div>

<script>
//Demo
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
</script>
      
<?php
include("copyright.php");
?>