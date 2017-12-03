(function(doc, win){
    // 获取html标签
    var docEl = doc.documentElement,
        // 设置监听参数，手机则监听 orientationchange，电脑则监听resize
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        reCalc = function(){
            // 获取页面宽度
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return ;
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
        if(!addEventListener) return ;
    win.addEventListener(resizeEvt, reCalc);
    doc.addEventListener("DOMContentLoaded", reCalc);
})(document, window)