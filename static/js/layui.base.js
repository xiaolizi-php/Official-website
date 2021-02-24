var layer = layui.layer,
    form = layui.form,
    element = layui.element,
    laydate = layui.laydate,
    upload = layui.upload,
    table = layui.table;
var countdown=60;
// 閫氱敤鎻愪氦
form.on('submit(*)', function (data) {
    var index = layer.msg('鎻愪氦涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $(data.elem).attr('disabled', true);
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            } else {
                $(data.elem).attr('disabled', false);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 鐖剁獥鍙ｉ€氱敤鎻愪氦
form.on('submit(i)', function (data) {
    var index = layer.msg('鎻愪氦涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1) {
                setTimeout(function () {
                    parent.location.reload();
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 閫氱敤寮€鍏�
form.on('switch(*)', function (data) {
    var index = layer.msg('淇敼涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    // 鍙傛暟
    var obj = {};
    obj[$(this).attr('name')] = this.checked == true ? 1 : 0;
    obj['_verify'] = 0;
    $.ajax({
        url: $(this).data('url'),
        type: 'post',
        dataType: 'json',
        data: obj,
        success: function (result) {
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
});
// 閫氱敤鍏ㄩ€�
form.on('checkbox(*)', function (data) {
    $('.layui-table tbody input[lay-skin="primary"]').each(function (index, item) {
        item.checked = data.elem.checked;
    });
    form.render('checkbox');
});
// 閫氱敤鎻愪氦
$('.ajax-submit').on('click', function () {
    var than = $(this);
    var form = $(this).parents('form');
    var index = layer.msg('鎻愪氦涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    than.attr('disabled', true);
    $.ajax({
        url: form.attr('action'),
        type: form.attr('method'),
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            } else {
                than.attr('disabled', false);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 閫氱敤寮傛
$('.ajax-action').on('click', function () {
    var url = $(this).attr('href');
    var index = layer.msg('璇锋眰涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.href = result.url;
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 閫氱敤鏇存柊
$('.ajax-update').on('blur', function () {
    // 鍙傛暟
    var obj = {};
    obj[$(this).attr('name')] = $(this).val();
    obj['_verify'] = 0;
    $.ajax({
        url: $(this).data('url'),
        type: 'post',
        dataType: 'json',
        data: obj,
        success: function (result) {
            if (result.code === 1) {
                layer.msg(result.msg);
                setTimeout(function () {
                    location.reload();
                }, 1000);
            }
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 閫氱敤鍒犻櫎
$('.ajax-delete').on('click', function () {
    var url = $(this).attr('href');
    layer.confirm('纭畾鍒犻櫎锛�', {
        icon: 3,
        title: '鎻愮ず'
    }, function (index) {
        var index = layer.msg('鍒犻櫎涓紝璇风◢鍊�', {
            icon: 16,
            time: false,
            shade: 0.3
        });
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            success: function (result) {
                if (result.code === 1 && result.url != '') {
                    setTimeout(function () {
                        location.href = result.url;
                    }, 1000);
                }
                layer.close(index);
                layer.msg(result.msg);
            },
            error: function (xhr, state, errorThrown) {
                layer.close(index);
                layer.msg(state + '锛�' + errorThrown);
            }
        });
    });
    return false;
});
// 閫氱敤璇︽儏
$('.ajax-detail').on('click', function () {
    var title = $(this).html();
    var url = $(this).attr('href');
    var index = layer.open({
        title: title,
        type: 2,
        content: url,
        success: function (layero, index) {
            setTimeout(function () {
                layer.tips('鐐瑰嚮姝ゅ杩斿洖', '.layui-layer-setwin .layui-layer-close', {
                    tips: 3
                });
            }, 500)
        }
    })
    layer.full(index);
    return false;
});
// 閫氱敤绐楀彛
$('.ajax-iframe').on('click', function() {
    var title = $(this).html();
    var url = $(this).attr('href');
    var width = $(this).data('width');
    var height = $(this).data('height');
    var index = layer.open({
        title: title,
        type: 2,
        area: [width, height],
        content: url,
    })
    return false;
});
// 閫氱敤鎼滅储
$('.ajax-search').on('click', function () {
    var form = $(this).parents('form');
    var url = form.attr('action');
    var query = form.serialize();
    query = query.replace(/(&|^)(\w*?\d*?\-*?_*?)*?=?((?=&)|(?=$))/g, '');
    query = query.replace(/^&/g, '');
    if (url.indexOf('?') > 0) {
        url += '&' + query;
    } else {
        url += '?' + query;
    }
    location.href = url;
    return false;
});
// 閫氱敤鎵归噺
$('.ajax-batch').on('click', function () {
    var url = $(this).attr('href');
    var val = [];
    $('.layui-table tbody input[lay-skin="primary"]:checked').each(function (i) {
        val[i] = $(this).val();
    });
    if (val === undefined || val.length == 0) {
        layer.msg('璇烽€夋嫨鏁版嵁');
        return false;
    }
    var index = layer.msg('璇锋眰涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    // 鍙傛暟
    var obj = {};
    obj[$('.layui-table tbody input[lay-skin="primary"]:checked').attr('name')] = val;
    obj['_verify'] = 0;
    $.ajax({
        url: url,
        type: 'post',
        dataType: 'json',
        data: obj,
        success: function (result) {
            if (result.code === 1 && result.url != '') {
                setTimeout(function () {
                    location.reload();
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 娣诲姞鍥炬爣
$('.ajax-icon').on('click', function () {
    var url = $(this).attr('href');
    var index = layer.open({
        title: '閫夋嫨鍥炬爣',
        type: 2,
        area: ['100%', '100%'],
        content: url
    });
    return false;
});
// 閫氱敤涓婁紶
upload.render({
    elem: '.ajax-images',
    url: '/admin/index/uploadImage',
    done: function (result) {
        // 涓婁紶瀹屾瘯鍥炶皟
        if (result.code === 1) {
            this.item.prev('input').val(result.url);
        } else {
            layer.msg(result.msg);
        }
    }
});
upload.render({
    elem: '.ajax-file',
    url: '/admin/index/uploadFile',
    accept: 'file', // 鏅€氭枃浠�
    done: function (result) {
        // 涓婁紶瀹屾瘯鍥炶皟
        if (result.code === 1) {
            this.item.prev('input').val(result.url);
        } else {
            layer.msg(result.msg);
        }
    }
});
upload.render({
    elem: '.ajax-video',
    url: '/admin/index/uploadVideo',
    accept: 'video', // 瑙嗛鏂囦欢
    done: function (result) {
        // 涓婁紶瀹屾瘯鍥炶皟
        if (result.code === 1) {
            this.item.prev('input').val(result.url);
        } else {
            layer.msg(result.msg);
        }
    }
});
// 閫氱敤鐩稿唽
upload.render({
    elem: '.ajax-photos',
    url: '/admin/index/uploadImage',
    multiple: true,
    done: function (result) {
        // 涓婁紶瀹屾瘯鍥炶皟
        if (result.code === 1) {
            var html = '<div class="layui-form-item"><label class="layui-form-label"></label><div class="layui-input-block"><input type="text" name="photo[]" value="' + result.url + '" autocomplete="off" readonly class="layui-input"><button type="button" class="layui-btn layui-btn-primary layui-btn-position delete-photo"><i class="fa fa-times-circle"></i></button></div></div>';
            this.item.parents('.layui-form-item').after(html);
        } else {
            layer.msg(result.msg);
        }
    }
});
// 鍒犻櫎鐩稿唽
$('.layui-form').delegate('.delete-photo', 'click', function () {
    $(this).parents('.layui-form-item').remove();
});
// 閫夋嫨鍥炬爣
$('.icon-library .fa').on('click', function () {
    $('input[name=icon]', window.parent.document).val($(this).attr('class'));
    parent.layer.closeAll();
});
form.verify({
    username: function (value, item) { // value锛氳〃鍗曠殑鍊笺€乮tem锛氳〃鍗曠殑DOM瀵硅薄
        if (!new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s路]+$").test(value)) {
            return '鐢ㄦ埛鍚嶄笉鑳芥湁鐗规畩瀛楃';
        }
        if (/(^\_)|(\__)|(\_+$)/.test(value)) {
            return '鐢ㄦ埛鍚嶉灏句笉鑳藉嚭鐜颁笅鍒掔嚎\'_\'';
        }
        if (/^\d+\d+\d$/.test(value)) {
            return '鐢ㄦ埛鍚嶄笉鑳藉叏涓烘暟瀛�';
        }
    },

    //鎴戜滑鏃㈡敮鎸佷笂杩板嚱鏁板紡鐨勬柟寮忥紝涔熸敮鎸佷笅杩版暟缁勭殑褰㈠紡
    //鏁扮粍鐨勪袱涓€煎垎鍒唬琛細[姝ｅ垯鍖归厤銆佸尮閰嶄笉绗︽椂鐨勬彁绀烘枃瀛梋
    password: [
        /^[\S]{6,12}$/
        , '瀵嗙爜蹇呴』6鍒�12浣嶏紝涓斾笉鑳藉嚭鐜扮┖鏍�'
    ],
    http: function(value){
        if (value.indexOf("http") != -1 ) {
            return '绉佹湁鍩熷悕涓笉鑳藉惈鏈塰ttps://';
        }
    }
});
//涓嬭浇杩滅▼鏂囦欢
$('.downfile a').on('click', function () {
    var url = 'http://'+$(this).attr('url');
    if(url=="undefined"|| url== null || url==''){
        layer.msg('鏂囦欢涓嶅瓨鍦�')
    }else{
        var $form = $('<form method="GET"></form>');
        $form.attr('action', url);
        $form.appendTo($('body'));
        $form.submit();
    }
    return false;
});
// 鏀粯鎻愪氦
form.on('submit(f)', function (data) {
    var index = layer.msg('鎻愪氦涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    return true;
});
// 娉ㄥ唽瀹樼綉
form.on('submit(inj)', function (data) {
    var index = layer.msg('鎻愪氦涓紝璇风◢鍊�', {
        icon: 16,
        time: false,
        shade: 0.3
    });
    $.ajax({
        url: data.form.action,
        type: data.form.method,
        dataType: 'json',
        data: $(data.form).serialize(),
        success: function (result) {
            if (result.code === 1) {
                setTimeout(function () {
                    parent.location.reload();
                }, 1000);
            }
            layer.close(index);
            layer.msg(result.msg);
        },
        error: function (xhr, state, errorThrown) {
            layer.close(index);
            layer.msg(state + '锛�' + errorThrown);
        }
    });
    return false;
});
// 鍙戦€佹敞鍐屾墜鏈洪獙璇佺爜
$('.getPhoneCode').on('click', function () {
    var url=$(this).attr('url');
    var mobile=$("#telphone").val();
    if(mobile=='' || mobile==null){
        layer.msg('璇疯緭鍏ユ墜鏈哄彿鐮�');
        return false;
    }
    settime();
    $.ajax({
        type: "post",
        url: url,
        data: {mobile:mobile},
        dataType: "json",
        async:false,
        success:function(data){
            layer.msg('鍙戦€佹垚鍔�');
            settime();
        },
        error:function(err){
            console.log(err);
        }
    });
});
function settime() {
    var _generate_code = $(".generate_code");
    _generate_code.addClass('layui-btn-disabled');
    if (countdown == 0) {
        _generate_code.removeClass('layui-btn-disabled');
        _generate_code.val("鑾峰彇楠岃瘉鐮�");
        countdown = 60;
        return false;
    } else {
        _generate_code.addClass('layui-btn-disabled');
        _generate_code.val("閲嶆柊鍙戦€�(" + countdown + ")");
        countdown--;
    }
    setTimeout(function() {
        settime();
    },1000);
}
function checkIsMobile(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM ) { // 绉诲姩绔幆澧冧笅鏁堟灉
        return true;
    }
    return false;
}