
    <div class="layui-layout footer layui-hide-xs">
        <div class="layui-col-md3 mt40">
            <h4 class="title">解决方案</h4>
            <div class="tag-cloud t-a-c">
            </div>
        </div>
        <div class="layui-col-md3 mt40">
            <h4 class="title">相关服务</h4>
            <div class="tag-cloud t-a-c">
                <a href="/authorize.html" title="在线授权" target="_blank">在线授权</a>
                <a href="/baojia.html" title="产品报价" target="_blank">产品报价</a>
            </div>
        </div>
        <div class="layui-col-md3 mt40">
            <h4 class="title">关于我们</h4>
            <div class="tag-cloud t-a-c">
                <a href="/about.html" title="公司简介" target="_blank">公司简介</a>
                <a href="" title="公司动态" target="_blank">公司动态</a>
            </div>
        </div>
        <div class="layui-col-md3 mt40">
            <h4 class="title">联系我们</h4>
            <div class="tag-cloud t-a-c">
                <a href="javascript:void(0);" title="公司地址" target="_blank"></a>
                <a href="javascript:void(0);" title="服务热线" target="_blank">服务热线：15293420572</a>
                <a href="javascript:void(0);" title="服务热线" target="_blank">QQ客服：2498131909 </a>
            </div>
        </div>
    </div>
    <div class="copyright">
        <h4 class="title">合作伙伴</h4>
        <div class="cooperation">
            <a class="mlm" href="#" target="_blank">演示站</a>
        </div>
        <h4 class="title layui-hide-xs">相关备案及证件号</h4>
        <div class="cooperation">
            <a class="mlm" href="javascript:void(0);" target="_blank">Copyright © 2020 - 2021 星轩网络科技有限公司 版权所有</a>
            <a class="mlm" href="https://beian.miit.gov.cn/" target="_blank"></a>
            <a href="http://www.beian.gov.cn/" target="_blank"><img src="/static/img/police-badge.png"> </a>
            <a class="mlm" href="javascript:void(0);" target="_blank"><script type="text/javascript">document.write(unescape("%3Cspan id='cnzz_stat_icon_1278725704'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1278725704%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));</script></a>
            <a class="mlm" href="javascript:void(0);" target="_blank"></a>
        </div>
    </div>
	<script src="/static/libs/layui/layui.all.js"></script>
	<script src="/static/js/jquery.min.js"></script>
	<script src="/static/js/layui.base.js"></script>
	<script src="/static/js/home.base.js"></script>
	<script src="https://www.qingxiaoyun.com/static/index/js/swiper.min.js"></script>
	<script src="https://www.qingxiaoyun.com/static/index/js/scrollreveal.min.js"></script>
	<script>
	    if(checkIsMobile()){
	        var height=130;
	    }else{
	        var height=450;
	    }
	    layui.use(['carousel'], function(){
	        var carousel = layui.carousel;
	        carousel.render({
	            elem: '#index_carousel'
	            ,width: '100%'
	            ,height:height
	            ,arrow: 'always'
	        });
	    });
	</script>