function HistoryManager() {
    this.listener = null;
    this.adapterIframe = null;
    this._initialize();
}

~(function() {
    var flag = false,
        isIE = !!window.ActiveXObject && /msie (\d)/i.test(navigator.userAgent) ? RegExp['$1'] : false,
        $pointer = this;

    this.makeIEHistory = function(url) {
        if (!url) {
            return ;
        }

        var frameDoc = $pointer.adapterIframe.contentWindow.document;

        frameDoc.open();
        frameDoc.write([
            "<html>",
            "<head>",
            "<script type='text/javascript'>",
            "function pageLoaded() {",
            "try {top.window.historyManager.fireOnHashChange(\""+url+"\");} catch(ex) {}",
            "}",
            "</script>",
            "</head>",
            "<body onload='pageLoaded();'>",
            "<input type='value' value='"+url+"' id='history'/>",
            "</body>",
            "</html>"
        ].join(""));
        frameDoc.title = document.title;
        frameDoc.close();
    }

    this.fireOnHashChange = function(url) {
        location.hash = "#" + url.replace(/^#/, "");

        if (window.onhashchange) {
            window.onhashchange();
        }
    }

    this.add = function(url) {
        flag = true;

        if (isIE && isIE < 8) {
            $pointer.makeIEHistory(url);
        } else {
            location.hash = "#" + url;
        }
    }

    this.fire = function(url) {
        if (!url) {
            url = document.location.hash.slice(1);
        }

        $pointer.listener(url);
    }

    this.addListener = function(fn) {
        $pointer.listener = typeof fn === 'function' ? fn : function() {};
    }

    this._initialize = function() {
        if (isIE && isIE < 8) {
            $pointer.adapterIframe = document.getElementById("HISTORY_ADAPTER");
            $pointer.makeIEHistory();
        }

        window.onhashchange = function() {
            if (flag) {
                flag = false;
                return ;
            }

            $pointer.fire();
        }
    }

}).call(HistoryManager.prototype);