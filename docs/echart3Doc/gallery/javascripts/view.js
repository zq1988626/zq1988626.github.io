! function() {
	function enableMask() {
		$toggleBtn.html("开启交互"), $(document.body).append($mask), maskEnabled = !0
	}

	function disableMask() {
		$toggleBtn.html("关闭交互"), $mask.remove(), maskEnabled = !1
	}
	var configs = {};
	_.each((location.search || "").substr(1).split("&"), function(n) {
		var a = n.split("=");
		configs[a[0]] = a[1]
	});
	var myChart, app = {},
		name, gui, run = function(code) {
			if(clearTimeout(app.timeTicket), clearInterval(app.timeTicket), app.config = null, myChart && myChart.dispose(), myChart = echarts.init(document.getElementById("view-chart")), eval(code), "object" == typeof option && myChart.setOption(option, !0), app.config) {
				gui = new dat.GUI, $(gui.domElement).css({
					position: "absolute",
					right: 5,
					top: 0,
					zIndex: 1e3
				}), $(".right-container").append(gui.domElement);
				var configParameters = app.configParameters || {};
				for(var name in app.config) {
					var value = app.config[name];
					if("onChange" !== name && "onFinishChange" !== name) {
						var isColor = !1,
							controller;
						if(configParameters[name] && (configParameters[name].options ? controller = gui.add(app.config, name, configParameters[name].options) : null != configParameters[name].min && (controller = gui.add(app.config, name, configParameters[name].min, configParameters[name].max))), "string" == typeof obj) try {
							var colorArr = echarts.color.parse(value);
							isColor = !!colorArr, isColor && (value = echarts.color.stringify(colorArr, "rgba"))
						} catch(e) {}
						controller || (controller = gui[isColor ? "addColor" : "add"](app.config, name)), app.config.onChange && controller.onChange(app.config.onChange), app.config.onFinishChange && controller.onFinishChange(app.config.onFinishChange)
					}
				}
			}
		};
	if(configs.edit) {
		var $editButton = $('<a class="btn btn-default btn-sm">编辑示例</a>').click(function() {
			window.open("./editor.html?c=" + configs.c)
		});
		$("#view-main .control-panel").append($editButton)
	}
	if(configs.reset) {
		var $resetButton = $('<a class="btn btn-default btn-sm">重置</a>').click(function() {
			run()
		});
		$("#view-main .control-panel").append($resetButton)
	}
	if(configs.mask) {
		var maskEnabled = !0,
			$toggleBtn = $('<a id="view-toggle-interable" class="btn btn-default btn-sm">开启交互</a>'),
			$mask = $('<div id="view-mask"></div>');
		$("#view-main .control-panel").append($toggleBtn), $toggleBtn.click(function() {
			maskEnabled ? disableMask() : enableMask()
		}), enableMask()
	}
	configs.c && $.ajax("./data/" + configs.c + ".js", {
		dataType: "text",
		success: function(n) {
			run(n)
		}
	}).fail(function() {}), $(window).resize(function() {
		myChart && myChart.resize()
	})
}();