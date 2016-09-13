/****************************
 /*
 /*    Developer: Narayana Swamy
 /*    emailID: narayanaswamy14@gmail.com
 /*
 /*****************************/

d3 = d3||{};
(function(){

    "use strict";

    d3.imageMap = function(){

        var height,width,onDragCallback;
        var container;
        var canvas,canvasAccessObj,pixelData,circle;
        var diameter,radius;
        var slidingBar = d3.buildSlider();
        var levels,size;
        var scale = d3.scale.linear();
        var currentLvl,imageName,mode,selectionLength,setImageSize;

        var obj = function(selection){

            slidingBar.width(diameter)
                .height(15)
                .partitions(levels)
                .onDragCallback(obj.onDragCallback);

            selection.each(function(){

                container = d3.select(this);

                container
                    .attr('width',diameter)
                    .attr('height',diameter+200);

                var cg = container.append('g')
                    .attr('class','cg');

                if(mode == 'slider')
                    var sg = container.append('g')
                        .attr('class','sg')
                        .attr('transform','translate('+0+','+diameter+')')
                        .call(slidingBar);

                obj.renderCircle(diameter/2,diameter/2,diameter/2,0,0);

                scale = scale.range([diameter/2,diameter]).domain([currentLvl-1,currentLvl]);

            })

        };
        obj.buildCanvas= function(){

            var img = document.getElementById('myimage');

            var unit = 0,width=0;height=0;

            if(img.width<img.height){
                unit = img.width/size[0];
                width = size[0];
                height = parseInt(img.height/unit);
            }else{
                unit = img.height/size[1];
                height = size[1];
                width = parseInt(img.width/unit);
            }

            img.height = height;
            img.width = width;
            diameter = d3.max([width,height]);
            canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            canvas.getContext('2d').drawImage(img, 0, 0, width, height);
            canvasAccessObj = canvas.getContext('2d');

            levels = Math.floor(Math.log2(diameter));
            currentLvl = levels;

            return obj;

        };
        obj.onDragCallback = function(_){


            if(diameter/2 <= 2) return;


            if(parseInt(scale(_)) < parseInt(diameter/2)){

                if(!slidingBar.startStop()) return;

                slidingBar.startStop(false);

                selectionLength = container
                    .select('.cg')
                    .selectAll('circle')
                    .size();

                container
                    .select('.cg')
                    .selectAll('circle')
                    .each(obj.breakCircle);

                diameter = diameter/2;
                currentLvl = currentLvl-1;

                scale.range([diameter/2,diameter]).domain([currentLvl-1,currentLvl]);

            }else{
                if(diameter>20)
                    obj.renderCircleGroup(scale(_)/2);
            }

            return true;
        };
        obj.renderCircleGroup = function(r){

            container
                .selectAll('circle')
                .attr('r',r);

        };
        obj.breakCircle = function(d,i){
            var c = d3.select(this);
            var t_x = parseFloat(c.attr('cx'));
            var t_y = parseFloat(c.attr('cy'));
            var t_r = mode=='slider'?diameter/2:(c.attr('r'));

            if(t_r <2) return;

            var r_ = (t_r/2);


            if(mode=='slider'){
                //SliderMode
                c.transition().duration(5).attr('r',r_)
                    .attr('cx',t_x+(r_))
                    .attr('cy',t_y-(r_))
                    .each("end",function(){
                        setTimeout(obj.renderCircle(t_x-(r_),t_y-(r_),r_,t_x,t_y,true),0);
                        setTimeout(obj.renderCircle(t_x-(r_),t_y+(r_),r_,t_x,t_y,true),0);
                        setTimeout(obj.renderCircle(t_x+(r_),t_y+(r_),r_,t_x,t_y,true),0);

                        if(i === selectionLength-1){
                            setTimeout(function(){
                                slidingBar.startStop(true);
                            },1000);
                        }
                    });

            }else{

                //PlayMode
                if(c.classed('notHovered')){
                    c.classed('Hovered',true);
                    if(d3.mouse(this)[0] > t_x)
                    {
                        if(d3.mouse(this)[1] < t_y){

                            c.transition().duration(10)
                                .attr('r',r_)
                                .attr('cx',t_x+(r_))
                                .attr('cy',t_y-(r_))
                                .each("end",function(){
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                });
                        }else{

                            c.transition().duration(10)
                                .attr('r',r_)
                                .attr('cx',t_x+(r_))
                                .attr('cy',t_y+(r_))
                                .each('end',function(){
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                });
                        }
                    }else{
                        if(d3.mouse(this)[1] < t_y){
                            c.transition().duration(10)
                                .attr('r',r_)
                                .attr('cx',t_x-(r_))
                                .attr('cy',t_y-(r_))
                                .each('end',function(){
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                });
                        }else{
                            c.transition().duration(10)
                                .attr('r',r_)
                                .attr('cx',t_x-(r_))
                                .attr('cy',t_y+(r_))
                                .each('end',function(){
                                    setTimeout(obj.renderCircle(t_x-(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y-(r_),r_,t_x,t_y,true),0);
                                    setTimeout(obj.renderCircle(t_x+(r_),t_y+(r_),r_,t_x,t_y,true),0);
                                });
                        }
                    }
                }
            }
        };
        obj.renderCircle = function(x,y,r,p_x,p_y,v){
            var pixelData = canvas.getContext('2d').getImageData(parseInt(x), parseInt(y), 1, 1).data;

            setTimeout(function(){

                circle = container.select('.cg')
                    .append('circle')
                    .attr('cx',x)
                    .attr('cy',y)
                    .attr('r',r)
                    //.attr('shape-rendering','auto')
                    .style('fill',function() {
                        return 'rgb('+pixelData[0]+','+pixelData[1]+','+pixelData[2]+')';
                    })
                    .style('stroke',function() {
                        return 'rgb('+pixelData[0]+','+pixelData[1]+','+pixelData[2]+')';
                    })
                    .attr('class','Hovered');

                if(mode==='play'){
                    circle.on('mouseover',function(){
                            if(mode=='play')
                                obj.breakCircle.bind(this)();
                        })
                        .on('mouseout',function(d){
                            if(mode=='play'){
                                d3.select(this).classed('Hovered',false);
                                d3.select(this).classed('notHovered',true);
                            }
                        });
                }
            },0);


            return;

        };
        obj.height = function(_){
            if(!arguments.length) return height;
            height = _;
            return obj;
        };
        obj.width = function(_){
            if(!arguments.length) return width;
            width = _;
            return obj;
        };
        obj.imageName = function(_){
            if(!arguments.length) return imageName;
            imageName = _;
            return obj;
        };
        obj.setMode = function(_){
            if(!arguments.length) return setMode;
            mode = _;
            return obj;
        };
        obj.setImageSize = function(_){
            if(!arguments.length) return size;
            size = _;
            return obj;
        };

        return obj;
    }
})()