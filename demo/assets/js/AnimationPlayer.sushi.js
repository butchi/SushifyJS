window.licker=window.licker||{},function(鮨){function 鮭(){this.currentFrame=0,this.curveArr=[]}鮭.prototype.play=function(){},鮭.prototype.drawFrame=function(鮭){var 鯛,鯖=鮨.movieData[鮭];if(this.curveArr=[],鯖)for(鮨.$canvas.children().remove(),鯛=0;鯛<鯖.length;鯛++){var 鰻=new 鮨.Curve(鯖[鯛],this.maxFreq);this.curveArr.push(鰻),鰻.draw()}this.currentFrame=鮭},鮭.prototype.redraw=function(){this.drawFrame(this.currentFrame)},鮨.AnimationPlayer=鮭}(window.licker);