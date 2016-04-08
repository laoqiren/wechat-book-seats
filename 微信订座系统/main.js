window.onload = function(){
    /*function mygetElementsByClassName(tagName, className){
        var tag = document.getElementsByTagName(tagName);
        var tagAll = [];自定义兼容性的getElementsByTagName()方法
        for (var i = 0; i < tag.length; i++) {
            if (tag[i].className.indexOf(className) != -1) {
                tagAll[tagAll.length] = tag[i];
            }
        }
        return tagAll;
    }*/
    var alert1 = document.getElementById("alert1");
    var alert3 = document.getElementById("alert3");
    var alert2 = document.getElementById("alert2");
    var others =document.getElementById("others");
    var wrapper = document.getElementById("wrapper");
   /* var pWidth = document.documentElement.clientWidth;  //获取屏幕尺寸
    var pHeight = document.documentElement.clientHeight;
    var body = document.body;
    body.style.height = pHeight + "px";
    var sWidth = document.documentElement.scrollWidth;//获取页面尺寸
    var sHeight = document.documentElement.scrollHeight;
    //这遮罩层覆盖整个页面
    alert1.style.height = sHeight + "px";
    alert1.style.width = sWidth + "px";*/
    //自定义弹出框绝对定位
    /*var userInputs = mygetElementsByClassName("input","userInput");
    var userInitial = new Array;
    for(var i=0;i<userInputs.length;i++){
        (function(i){
            userInitial[i] = userInputs[i].value;
            userInputs[i].onfocus = function(){
                if(userInputs[i].value==userInitial[i])
                    userInputs[i].value = "";
            }
            userInputs[i].onblur = function(){
                if(userInputs[i].value == ""){
                    userInputs[i].value = userInitial[i];
                }
            }
        })(i);
    }*/
    /*alert2.style.top = (pHeight-0.51*pHeight)/2 + "px";
    alert2.style.left = (pWidth - 0.92*pWidth)/2 + "px";
    others.style.top=alert3.style.top=alert2.style.top;
    others.style.left=alert3.style.left=alert2.style.left;
    if((\d{1,3}\.){3}\d{1,3})
    */
    /*for(var i=0;i<divs.length;i++){
        if(0<=i&&i<=3){
            divs[i].style.backgroundPosition = "1% 1%"
        }
    }*/
    var divs = wrapper.getElementsByTagName("div");
    divs[0].style.backgroundPosition = "0% 0%";
    divs[1].style.backgroundPosition = "35% 0%";
    divs[2].style.backgroundPosition = "70% 0%";
    divs[3].style.backgroundPosition = "105% 0%";
    divs[4].style.backgroundPosition = "0% 25%";
    divs[5].style.backgroundPosition = "35% 25%";
    divs[6].style.backgroundPosition = "70% 25%";
    divs[7].style.backgroundPosition = "105% 25%";
    divs[8].style.backgroundPosition = "0% 50%";
    divs[9].style.backgroundPosition = "35% 50%";
    divs[10].style.backgroundPosition = "70% 50%";
    divs[11].style.backgroundPosition = "105% 50%";
    divs[12].style.backgroundPosition = "0% 75%";
    divs[13].style.backgroundPosition = "35% 75%";
    divs[14].style.backgroundPosition = "70% 75%";
    divs[15].style.backgroundPosition = "105% 75%";
    divs[16].style.backgroundPosition = "0% 100%";
    divs[17].style.backgroundPosition = "35% 100%";
    divs[18].style.backgroundPosition = "70% 100%";
    divs[19].style.backgroundPosition = "105% 100%";
    var submit1 = document.getElementById("submit1");
    var submit2 = document.getElementById("submit2");
    var forms = document.getElementsByTagName("form");
    var users,sum=0; //本微信号用户所选的座位
    var userHasSelected; //表示已选座位是否为当前用户所选的标记
    //与弹出框有关的函数，传入已经被选的座位号数组
    for(var i=0;i<divs.length;i++){
        divs[i].setAttribute("userSelected","false");
    }
    function alertAll(selectedList){
        var flag1=flag2=0; //falg1表示
        var length = selectedList.length;
        //设置所有座位默认为未选
        for(var i=0;i<divs.length;i++){
            divs[i].setAttribute("selected","false");
        }
        //对已选座位的div的selected属性值设为true
        for(var k=0;k<length;k++){
            divs[selectedList[k]-1].setAttribute("selected","true");
        }
        var i = 0;
        var username,name,span;
        for(i;i<divs.length;i++){
            //如果座位未被选
            if(divs[i].getAttribute("selected")=="false"){
                //如果未选，不显示卡通图像
                divs[i].getElementsByTagName("img")[0].style.display = "none";
                (function(i){
                    if(sum!=0){
                        divs[i].onclick = function(){
                            alert("只能定一个");
                        }
                    }
                    else{
                        divs[i].onclick = function(){
                            alert1.style.display = "block";
                            alert2.style.display = "block";
                            submit1.onclick = function(){
                            alert2.style.display = "none";
                            flag1 = 1;//falg1表示提交成功与否，成功则显示成功提示，否则，显示输入错误
                            username = "我的";
                            /*if(username.length>5){
                                username = username.substr(0,4);
                            }*/
                            name = document.createTextNode(username);
                            span = document.createElement("span");
                            if(flag1){
                                span.appendChild(name);
                                others.style.backgroundImage = "url('succed.png')";
                                others.style.display = "block";
                                /*alert(selectedList);
                                alert(selectedList);
                                alertAll(selectedList);*/
                                divs[i].appendChild(span);
                                divs[i].setAttribute("userSelected","true");
                                selectedList.push(i+1);
                                users = i;
                                sum++;
                                //divs[i].setAttribute("selected","true");
                                //divs[i].getElementsByTagName("img")[0].style.display = "inline-block";
                               alertAll(selectedList);
                            }
                            else{
                                others.style.backgroundImage = "url('false_id.png')";
                                others.style.display = "block";
                            }
                            forms[0].reset();
                            }
                        }
                    }
                })(i);
            }
            //如果座位被选，显示卡通图片
            else{
                if(divs[i].getAttribute("userSelected")=="false"){
                    divs[i].getElementsByTagName("img")[0].style.display = "inline-block";
                }
                (function(i){
                    divs[i].onclick = function(){
                        alert1.style.display = "block";
                        userHasSelected = "false"; //默认不是当前用户所选
                            //判断当前用户所选集合里是否有被点击座位，若有，则退订功能出现
                        if(i==users){
                            alert3.style.display = "block";
                            userHasSelected = "true";
                            flag2 = 1;
                            if(flag2){
                                submit2.onclick = function(){
                                    var index1 = selectedList.indexOf(i+1);
                                    span = divs[i].getElementsByTagName("span")[0];
                                    divs[i].removeChild(span);
                                    divs[i].setAttribute("userSelected","false");
                                    selectedList.splice(index1,1);
                                    users = undefined;
                                    sum = 0;
                                    alert3.style.display = "none";
                                    others.style.backgroundImage = "url('exitsucced.png')";
                                    others.style.display = "block";
                                    alertAll(selectedList);
                                }
                            }
                            forms[1].reset();
                        }
                        //否则，显示已经被别人选中
                        if(userHasSelected=="false"){
                            others.style.backgroundImage = "url('late.png')";
                            others.style.display = "block";
                        }
                    }   
                })(i);
            }
        }
        //for(var i=0;i<divs.length;i++){
            //divs[i].onclick = function(){
                //alert1.style.display = "block";
                //if(event.target.getAttribute("selected")=="false"){
                    //alert2.style.display = "block";
                //}
                //else{
                    //alert3.style.display = "block";
                //}
           // }
       // }
    }
    alertAll([1,8,9,15,17]);
    //点击弹出框以外区域，弹出层消失
    alert1.onclick = function(){
        alert1.style.display = "none";
        alert2.style.display = "none";
        alert3.style.display = "none";
        others.style.display = "none";
    }
    
}