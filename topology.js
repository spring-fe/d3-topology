/** 
 *基于D3.js拓扑图
 *
 */

"use strict";

///Width and height
var w = $("#topology_container").width();
var h = $("#topology_container").height();
var isFirstLoad = true;

//Original data
var dataset = {
	nodes: [
		{ 
			node_id:1,
			type:"router",
			name:"router",
			status:"ok",
			x:477,
			y:98,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:2,
			type:"collection",
			name:"collection",
			x:300,
			y:280,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:3,
			type:"switchDevice",
			name:"switchDevice",
			x:285,
			y:115,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:4,
			type:"switchDevice",
			name:"switchDevice",
			x:712,
			y:78,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:5,
			type:"collection",
			name:"collection",
			x:400,
			y:380,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:6,
			type:"router",
			name:"router",
			x:90,
			y:680,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:7,
			type:"switchDevice",
			name:"switchDevice",
			x:500,
			y:780,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:8,
			type:"router",
			name:"router",
			x:910,
			y:380,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:9,
			type:"router",
			name:"router",
			x:800,
			y:180,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		},
		{ 
			node_id:10,
			type:"switchDevice",
			name:"switchDevice",
			x:515,
			y:554,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		}
	],
	paths: [
		{ 
			source: 0, 
			target: 1, 
			lines:[
				{
					traffic_status:"normal",
					contact:'1',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
				
			]
		},
		{ 
			source: 0, 
			target: 2, 
			lines:[
				{
					traffic_status:"normal",
					contact:'2',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'3',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 0, 
			target: 3, 
			lines:[
				{
					traffic_status:"normal",
					contact:'4',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 0, 
			target: 4,
			lines:[
				{
					traffic_status:"high",
					contact:'5',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"down",
					contact:'6',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 1, 
			target: 5, 
			lines:[
				{
					traffic_status:"normal",
					contact:'7',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'8',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"high",
					contact:'9',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 2, 
			target: 5, 
			lines:[
				{
					traffic_status:"down",
					contact:'10',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'11',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'12',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'13',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 9, 
			target: 5, 
			lines:[
				{
					traffic_status:"high",
					contact:'14',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 3, 
			target: 4, 
			lines:[
				{
					traffic_status:"high",
					contact:'15',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
				
			]
		},
		{ 
			source: 5, 
			target: 8, 
			lines:[
				{
					traffic_status:"normal",
					contact:'16',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 5, 
			target: 9, 
			lines:[
				{
					traffic_status:"down",
					contact:'17',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
				
			]
		},
		{ 
			source: 6, 
			target: 7, 
			lines:[
				{
					traffic_status:"down",
					contact:'18',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'19',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'20',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"high",
					contact:'21',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
				
			]
		},
		{ 
			source: 7, 
			target: 8, 
			lines:[
				{
					traffic_status:"normal",
					contact:'22',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				},
				{
					traffic_status:"normal",
					contact:'23',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		},
		{ 
			source: 8, 
			target: 9, 
			lines:[
				{
					traffic_status:"normal",
					contact:'24',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
			]
		}
	]
};


function Topology(){
	this.config = {
		lineColorMap: {
			down: 'red',
			normal: 'green',
			high: 'yellow'
		}
	}
}

Topology.prototype.draw = function(){
	var self = this;
	/*$.ajax({
		url:'http://10.138.77.242:8360/topology/to_json/',
		method: 'get'
    }).done(function(data){
    	dataset = data;
    	
    	
    })*/
   self.initForce();
    self.createElem();//创建元素
    Topology.bindEvent.apply(self);//事件绑定
};



Topology.prototype.initForce = function(){
	var self = this;
	//Initialize a default force layout, using the nodes and edges in dataset
	self.force = d3.layout.force()
	.nodes(dataset.nodes)
	.links(dataset.paths)
	.size([w, h])
	.linkDistance(function(){
		return 300;
	})
	.charge([-100])
	.on("tick",tick)
	.on("end",tickEnd)
	.start();

	this.drag = this.force.drag()
	.on("dragstart",function(d){
		d3.event.sourceEvent.stopPropagation();
	})
	.on("drag",function(){
		//self.stopTick(5);
	});
	
	function tick(){
		self.link.selectAll("line")
		.each(function(d){
			var elem = d3.select(this),
			offset = self.getOffset(d,elem,6);
			elem
			.attr("x1", function(d,i) {
				return d.source.x + offset.offsetX; 
        	})
        	.attr("y1", function(d,i) {
        		return d.source.y + offset.offsetY;
        	})
        	.attr("x2", function(d,i) {
        		return d.target.x + offset.offsetX;
        	})
        	.attr("y2", function(d,i) { 
        		return d.target.y + offset.offsetY;
        	});
	})
        
	self.node
	.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
	}

	function tickEnd(){
		if(isFirstLoad){
			isFirstLoad = false;
			self.refresh(self);
		}
	}
}

Topology.prototype.createElem = function(){
	var self = this;
	//Create SVG element
	var svg = d3.select("#topology_container")
	.append("svg")
	.attr("id","network-topology")
	.attr("width", w)
	.attr("height", h)
	.call(this.zoom);

	var container = svg.append("g")
	.attr("class","container");
	self.linkContainer = container.append("g")
	.attr("id","line_container");

	self.nodeContainer = container.append("g")
	.attr("id","node_container");		


	self.link = self.linkContainer.selectAll(".link")
    .data(dataset.paths)
    .enter()
    .append("g")
    .attr("class","link")
    .each(function(d){
    	self.addLines(d3.select(this),d);
    });

	self.node = self.nodeContainer.selectAll(".node")
    .data(dataset.nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(this.drag);

    self.addNodeChildren(self.node);
}

Topology.prototype.closeAlarm = function(){
	$("#alarm").css("display","none");
}

Topology.prototype.zoom = d3.behavior.zoom()
	.scaleExtent([0.1,10])
	.on("zoom",function(){
		d3.select(".container")
		.attr("transform","translate("+d3.event.translate+")"+
			"scale("+d3.event.scale+")");
	});

Topology.prototype.getLinePos = function(index){
	var direction,num;
    if(index%2 == 1){
    	direction = 'up';
    }else{
    	direction = 'down';
    }
    num = Math.floor((index + 1) / 2);
    return direction + "_" + num;
};

//计算线相对于中心线的偏移量(x坐标偏移量和y坐标偏移量)
Topology.prototype.getOffset = function(d,elem,space){
	var linePos = elem.attr("data-pos"),
    	x1 = d.source.x,
    	y1 = d.source.y,
    	x2 = d.target.x,
    	y2 = d.target.y,
    	x,y,posArr,stepOffsetX,stepOffsetY,offsetX,offsetY;

    x = Math.abs(x2 - x1);
   	y = Math.abs(y2 - y1);
   	stepOffsetX = Math.ceil(space * y / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
   	stepOffsetY = Math.ceil(space * x / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)));
   
    posArr = linePos.split("_");
    offsetX = parseInt(posArr[1]) * stepOffsetX;
    offsetY = parseInt(posArr[1]) * stepOffsetY;

    if((x2 - x1) * (y2 - y1) > 0){
    	if(posArr[0] == 'up'){
    		offsetX = -offsetX;
    	}else{
    		offsetY = -offsetY;
    	}
    }else{
    	if(posArr[0] == 'up'){
    		offsetX = -offsetX;
    		offsetY = -offsetY;
    	}
   	}
    
    return {offsetX:offsetX,offsetY:offsetY};
};

//eventpos为鼠标在浏览器页面的位置,offset为鼠标位置到弹框的距离
Topology.prototype.getTipPos = function(eventpos,offset){
	
	var docScrollTop = $(document).scrollTop(),
	    docScrollLeft = $(document).scrollLeft(),
	    visibleHeight = $(window).height(),
	    visibleWidth = $(window).width(),
	    tipWidth = $("#show-tips").width(),
	    tipHeight = $("#show-tips").height(),
	    left = eventpos.x - docScrollLeft + offset,
	    top = eventpos.y - docScrollTop- offset;

	if(eventpos.x - docScrollLeft + tipWidth + offset >= visibleWidth){
		left = eventpos.x - docScrollLeft - tipWidth - offset;
	}

	if(eventpos.y - docScrollTop + tipHeight - offset >= visibleHeight){
		top = eventpos.y - docScrollTop - tipHeight + offset;
	}

	return {"left":left,"top":top};
}

//展示提示框
Topology.prototype.toShowTip = function(data,eventpos,type){
	Topology.hideTip();

    var tip = $("#show-tips"),
	tipList = tip.find("ul"),
	title = tip.find("h6"),
	tipPos;

	if(type == 'node'){
		title.text("节点信息");
	}else{
		title.text("连线信息");
	}
	for(name in data){
		var value;
		if(name == 'url'){
			value = '<a target="_blank" href="'+data[name]+'">360公司官网</a>';
		}else{
			value = data[name];
		}
		var li = "<li><label class=wd-break>"+name+":</label><span class=wd-break>"+value+"<i></i></span><input type='text'/></li>";
		
		tipList.append(li);
	}

	tipPos = this.getTipPos(eventpos, 10);
	tip.css({"left":tipPos.left,"top":tipPos.top});

	Topology.showTip();
};


//给路径添加一条或多条线
Topology.prototype.addLines = function(pathG,d){
	var position,line;

    for(var i = 0;i < d.lines.length;i++){
    	position = this.getLinePos(i);

    	line = pathG.append("line")
    	.attr("stroke",this.config.lineColorMap[d.lines[i].traffic_status])
    	.attr("data-pos",position+'_'+i);
    }
};

//节点添加内容
Topology.prototype.addNodeChildren = function(node){
	var self = this;
	node.append("image")
	.attr("class","node-icon")
	.attr("transform","translate("+-26+","+-26+")")
	.each(function(d){
		self.setImage(d3.select(this),d.type);
	});

	node.append("text")
	.each(function(d){
		if(d.type=="collection"){
			d3.select(this).attr("transform","translate("+-20+","+42+")");
		}else{
			d3.select(this).attr("transform","translate("+-20+","+34+")");
		}
	})
	.text(function(d){
		return d.name;
	})
}

//添加节点图标
Topology.prototype.setImage = function(elem,type){
	switch(type){
		case "router":
			elem
			.attr("xlink:href","images/router.svg")
			.attr("width",55)
			.attr("height",55);
			break;
		case "switchDevice":
			elem
				.attr("xlink:href","images/switch.svg")
				.attr("width",45)
				.attr("height",45);
			break;
		case "collection":
			elem
				.attr("xlink:href","images/building.svg")
				.attr("width",55)
				.attr("height",55);
		}
};


Topology.prototype.stopTick = function(n){
	for(var i = 0;i < n;++i){
		this.force.tick();
	}
	this.force.stop();
};

//更新拓扑图数据
Topology.prototype.refresh = function(self){
	var defer = $.Deferred();

	setTimeout(function(){
		toRefresh();
	},1000);

	function toRefresh(){
		var promise = updateData();
		promise.done(updateTopo);
	}

	function updateData(){
		/*$.ajax({
			url:'http://10.138.77.242:8360/topology/to_json/',
			method: 'get'
    	}).done(function(data){
    		dataset = data;
    		self.force.links(dataset.paths)
    		defer.resolve();
    	});*/
		var nodeLen = dataset.nodes.length;
		var pathsLen = dataset.paths.length;

    	var newNode = {
 			node_id:10,
			type:"switchDevice",
			name:"switchDevice",
			x:200,
			y:700,
			fixed:true,
			info:{//节点详细信息
				hostname:'',
				ip:'10.1.1.1',
				desc:'description'
			}
		};
		dataset.nodes.push(newNode);

		dataset.paths[pathsLen-1].lines = [
			{
				traffic_status:"normal",
				contact:'',//联系信息
                local_point:"ip:'',name:''",
                remote_point:"ip:'',name:''",
                traffic:''//流量信息
			},
			{
				traffic_status:"normal",
				contact:'',//联系信息
                local_point:"ip:'',name:''",
                remote_point:"ip:'',name:''",
                traffic:''//流量信息
			},
			{
				traffic_status:"normal",
				contact:'',//联系信息
                local_point:"ip:'',name:''",
                remote_point:"ip:'',name:''",
                traffic:''//流量信息
			},
			{
				traffic_status:"normal",
				contact:'',//联系信息
                local_point:"ip:'',name:''",
                remote_point:"ip:'',name:''",
                traffic:''//流量信息
			}
		]
		dataset.paths.push({
			source: 10, 
			target: 1, 
			lines:[
				{
					traffic_status:"normal",
					contact:'1',//联系信息
                    local_point:"ip:'',name:''",
                    remote_point:"ip:'',name:''",
                    url:"http://www.360.com/",
                    traffic:''//流量信息
				}
				
			]
		})
		setTimeout(function(){
			defer.resolve();
		},1000)

    	return defer.promise();
	}

	function updateTopo(){
		self.force
		.links(dataset.paths)
		.nodes(dataset.nodes);

		self.link.remove();

		self.link = self.linkContainer.selectAll(".link")
    		.data(dataset.paths)
    		.enter()
    		.append("g")
    		.attr("class","link")
    		.each(function(d){
    			self.addLines(d3.select(this),d);
    		});
    	
    	//self.link.exit().remove;
    	
    	self.node.remove();
    	self.node = self.nodeContainer.selectAll(".node")
	    .data(dataset.nodes)
	    .enter()
	    .append("g")
	    .attr("class", "node")
	    .call(self.drag);

    	self.addNodeChildren(self.node);

		self.force.start();
	}
}

//事件绑定
Topology.bindEvent = function(){
	var selfColor,elem,lineData,linePos,nodeInfo,
		self = this;

	d3.select("#line_container")
	.on("click",function(){
		d3.event.stopPropagation();
		linePos = elem.attr("data-pos").split('_')[2];
		lineData = elem.datum().lines[linePos];

		//相对于浏览器页面的坐标
		var point = {
    		x:d3.event.pageX,
    		y:d3.event.pageY
    	}
    	self.toShowTip(lineData,point,'line');
	})
	.on("mouseover",function(){
		elem = d3.select(d3.event.target);
		
		selfColor = elem.attr("stroke");
		elem.attr("stroke","white");
		
	})
	.on("mouseout",function(){
		elem.attr("stroke",selfColor);
	});

	d3.select("#node_container")
	.on("click",function(){
		if(d3.event.defaultPrevented) return;
		d3.event.stopPropagation();

		nodeInfo = d3.select(d3.event.target).datum().info;
    	var point = {
    		x:d3.event.pageX,
    		y:d3.event.pageY
    	}

    	self.toShowTip(nodeInfo,point,'node');
    });

	$("#network-topology").click(function(){
		Topology.hideTip();
	})
	

    $("#alarm")
    .on("click",".close",function(){
    	self.closeAlarm();
    })
    .on("click","#status",function(){
    	var statusElem = $(this);
    	if(statusElem.html() == "收起告警"){
    		$("#alarm #content").slideUp(function(){
    			statusElem.html("展开告警");
    			$("#alarm").animate({width:'100px'});
    		});
    	}else{
    		$("#alarm").animate({width:'500px'},function(){
    			$("#alarm #content").slideDown(function(){
    				statusElem.html("收起告警");
    			});
    		});
    	}
    });

    //处理input没有focus情况
    function hideInput(){
    	$("#show-tips").find("input").each(function(){
    		if($(this).css("display") != "none"){
    			$(this).css("display","none").prev().css("display","inline-block");
    		}
    	})
    }
    $("#show-tips").on("click",".close",function(){
    	Topology.hideTip();
    }).on("click","i",function(e){
    	e.stopPropagation();
    	hideInput();
    	$(this).closest('span').css("display","none").next().css("display","inline-block");
    }).on("blur","input",function(){
    	//update function
    	//get data
    	$(this).css("display","none").prev().css("display","inline-block");
    }).on("click", "input",function(e){
    	e.stopPropagation();
    }).on("click",function(){
    	hideInput();
    });
    $("#syn").click(function(){
		alert('同步成功');
	});
}

//展示提示框,工具函数
Topology.showTip = function(){
	var display = $("#show-tips").css("display");
	if(display == "none"){
		$("#show-tips").css("display","block");
	}
}
//隐藏提示框且提示框内容置空
Topology.hideTip = function(){
	var display = $("#show-tips").css("display");
	if(display == "block"){
		$("#show-tips")
		.css("display","none")
		.find("ul")
		.empty();
	}
}

function TopoApiService(){
	$.ajaxSetup({
		dataType:'json',
		contentType:'application/json;charset=utf-8',
		statusCode:{
			400:function(e){
				console.log(e.responseJSON.errmsg);
			},
			404:function(){
				console.log("请求资源不存在!");
			}
		}
	})
}

TopoApiService.prototype.apiFactory = function(){
	return {
		gettopo: function(){
			return $.ajax({
				url:'/topo/gettopo',
				method:'POST'
			})
		},
		updatetopo: function(data){
			return $.ajax({
				url:'/topo/updatetopo',
				method:'POST',
				data:JSON.stringify(data)
			})
		}
	}
}
var topology = new Topology();
topology.draw();
