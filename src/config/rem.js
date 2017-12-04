(function(doc, win){
    // 获取html标签
    var docEl = doc.documentElement,
        body = doc.body,
        // 设置监听参数，手机则监听 orientationchange，电脑则监听resize
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        reCalc = function(){
            // 获取页面宽度
            var clientWidth = docEl.clientWidth;
            if(!clientWidth) return ;
            console.log(clientWidth);
            if( clientWidth > 800 ){
                docEl.style.fontSize = 20 * (800 / 320) + 'px';
                body.style.width = '800px';
                body.style.margin = '0 auto';
                body.style.position = 'relative';
                return;    
            }
            docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        };
        if(!addEventListener) return ;
    win.addEventListener(resizeEvt, reCalc);
    doc.addEventListener("DOMContentLoaded", reCalc);
})(document, window)