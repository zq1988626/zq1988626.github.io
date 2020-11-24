(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(function () {
            return (root.zUtils = factory());
        });
    } else {
        root.zUtils = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
     var debounce = function(fn,delay){
        delay = isNaN(delay) && 500;
        var timer = null; // 声明计时器
        return function () {
            var context = this;
            var args = arguments;
            clearTimeout(timer);
            //立即执行
            if(delay<0){
                fn.apply(context, args);
                return;
            }
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        };
     };

    return {
        debounce:debounce
    };
}));