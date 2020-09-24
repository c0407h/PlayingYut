
    $(document).ready(function(){
    	   
    	var bodyHtml = $("body").html();

    	$("#infor").on("click", function(){
    	      $("body").append( "<div id=\"information\"><br/><h1>윷 놀 이 규 칙</h1><br/> 1. 2개의 팀으로 구성되어 있고 순서를 정한다.<br/>2. 움직일 말을 클릭하면 윷 판으로 말이 이동한다. <br/>3. 던지기를 눌러 윷이 정해지게 되면 윷판에 나가있는 말을 클릭하여 전진한다.<br/>4. 4개의 말이 윷판을 돌아 모두 들어오게 되면 승리!<br/><input type=\"button\" id=\"backbnt\" value=\"X\"></div>");
    	      $("#backbnt").off("click");
    	      $("#backbnt").on("click", function(){
    	         $("#information").remove();
    	      });
    	   
    	   });
    	   
    	 $("#startbnt").on("click", function(){
    		 $("body").append(
    				   "<div class=\"back\">"
    			        + "<div class=\"back1\">"
    			        + "<div class=\"po1\"></div>"
    			        + "<div class=\"po2\"></div>"
    			        + "<div class=\"po3\"></div>"
    			        + "<div class=\"po4\"></div>" 
    			        + "<div class=\"po5\"></div>"
    			        + "<div class=\"po6\"></div>"
    			        + "<div class=\"po7\"></div>"
    			        + "<div class=\"po8\"></div>"
    			        + "<div class=\"po9\"></div>"
    			        + "<div class=\"po10\"></div>"
    			        + "<div class=\"po11\"></div>"
    			        + "<div class=\"po12\"></div>"
    			        + "<div class=\"po13\"></div>"
    			        + "<div class=\"po14\"></div>"
    			        + "<div class=\"po15\"></div>"
    			        + "<div class=\"po16\"></div>"
    			        + "<div class=\"po17\"></div>"
    			        + "<div class=\"po18\"></div>"
    			        + "<div class=\"po19\"></div>"
    			        + "<div class=\"po20\"></div>"
    			        + "<div class=\"po21\"></div>"
    			        + "<div class=\"po22\"></div>"
    			        + "<div class=\"po23\"></div>"
    			        + "<div class=\"po24\"></div>"
    			        + "<div class=\"po25\"></div>"
    			        + "<div class=\"po26\"></div>"
    			        + "<div class=\"po27\"></div>"
    			        + "<div class=\"po28\"></div>"
    			        + "<div class=\"po29\"></div>"
    			        + "<div class=\"po30\"></div>"
    			        + "<div class=\"po31\"></div>"
    			        + "</div>"
    			        + "<div id=\"yut\">"
    			        + "<div id=\"yut1\"></div>"
    			        + "<div id=\"yut2\"></div>"
    			        + "<div id=\"yut3\"></div>"
    			        + "<div id=\"yut4\"></div>"
    			        + "<div id=\"yut_back\"></div>"
    			        + "</div>"
    			        + "<div id=\"waiting\">"
    			        + "<div class=\"player1\" gbn=\"0\" size=\"1\"></div>"
    			        + "<div class=\"player1\" gbn=\"1\" size=\"1\"></div>"
    			        + "<div class=\"player1\" gbn=\"2\" size=\"1\"></div>"
    			        + "<div class=\"player1\" gbn=\"3\" size=\"1\"></div>"
    			        + "<br/>"
    			        + "<div class=\"player2\" gbn=\"0\" size=\"1\"></div>"
    			        + "<div class=\"player2\" gbn=\"1\" size=\"1\"></div>"
    			        + "<div class=\"player2\" gbn=\"2\" size=\"1\"></div>"
    			        + "<div class=\"player2\" gbn=\"3\" size=\"1\"></div>"
    			        + "</div>"
    			        + "<input type=\"button\" id=\"btn\" value=\"던지기\" />"
    			        + "<input type=\"text\" id=\"txt\" value=\"\" disabled=\"disabled\" />"
    			        + "</div>"
    				 );
    
        
        var array_yut = ['도', '개', '걸', '윷', '모'];
        var player1 = [-1, -1, -1, -1];
        var player2 = [-1, -1, -1, -1];
        var rnd = -1;
        var size = [50, 75, 100, 125];

        // 현재 위치가 6번이나 11번인지 확인하기 위한 Flag.
        var isP1Pos6or11 = [0, 0, 0, 0];
        var isP2Pos6or11 = [0, 0, 0, 0];

        function end() {
            alert("빨강팀 승!!!! (확인을 누르면 다시 시작합니다.)");
            location.reload();
        }
        function end1() {
            alert("파랑팀 승!!!! (확인을 누르면 다시 시작합니다.)");
            location.reload();
        }
		
        
        $(document).ready(function () {
            // waiting 안의 div를 클릭 했을 때,  

            $("#waiting").on("click", "div", function () {
			

				console.log($(this));
				console.log("gbn : " + $(this).attr("gbn"));
                // 여기서 this = waiting      player을   "" 빈값으로 변경 하여 waiting 안의 div 를 class에 해당하는 속성의 값을 취득 
                if ($(this).attr("class") == "player1") {
                    if ($(".po1 .player1").length == 0) {
                        var html = "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + $(this).attr("gbn") + "\" size=\"" + $(this).attr("size") + "\"></div>";

                        $(".po1").append(html);

                        player1[$(this).attr("gbn")] = 1;

                        $(this).remove();
                    }
                } else {
                    if ($(".po1 .player2").length == 0) {

                        var html = "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + $(this).attr("gbn") + "\" size=\"" + $(this).attr("size") + "\"></div>";

                        $(".po1").append(html);

                        player2[$(this).attr("gbn")] = 1;

                        $(this).remove();
                    }
                }
            });

            $("#btn").on("click", function () {
                random();
            });


            $(document).keyup(function (e) {
                if (e.keyCode == '32') {
                    random();
                }
            });


            $(".back > .back1 > div ").on("click", "div", function () {
            	
            	var html = "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + $(this).attr("gbn") + "\" size=\"" + $(this).attr("size") + "\"></div>";
            	/*                 var html = "<div class=  gbn=  size= ></div>"; */

            	                if (rnd > -1) {

            	                    if ($(this).attr("class") == "player1") {
            	                        // 윷 던진 후 이동하기 전의 플레이어 위치
            	                        var beforePos = player1[$(this).attr("gbn")];
            	                        // 던진 윷의 결과를 바탕으로 이동 후의 플레이어 위치
            	                        var num = player1[$(this).attr("gbn")] + rnd + 1;
            	                        // 이동했을 때 골인 확인 Flag. 크게돌경우
            	                        var isGoal = false;
            	                        if ((beforePos <= 20 && num > 20) || num >= 31) {
            	                            // num >= 31일 경우 골인.
            	                            // 또는 이전 위치가 20보다 작거나 같고 윷을 던져서 20보다 커졌을 경우에 골인.
            	                            isGoal = true;
            	                        }
            	                        else if ((20 < beforePos && beforePos <= 25) && num > 25) {
            	                            // 이전 위치가 오른쪽 대각선 경로에 있었는데
            	                            // 윷을 던진 후 대각선 경로의 마지막 위치보다 값이 커졌을 경우,
            	                            // 위치 값 - 10을 해주어 아랫라인으로 이동.
            	                            num -= 10;
            	                        }
            	                        console.log("------>" + $(this).attr("gbn"));
            	        
            	                        
            	                        if (isP1Pos6or11[$(this).attr("gbn")] == true) {
            	                            // 이전 포지션이 6번이면 포지션 20,
            	                            // 이전 포지션 11번이면 포지션 25로 표현하기 위해 + 14.
            	                            num += 14;
            	                            isP1Pos6or11[$(this).attr("gbn")] = false;
            	                        }
            	                        if ($(".po" + num + " .player1").length > 0) {
            	                            var plusSize = $(".po" + num + " .player1").attr("size") * 1 + $(this).attr("size") * 1;
            	                            $(".po" + num + " .player1").attr("size", plusSize);
            	                            player1[$(this).attr("gbn")] = num;
            	                         
            	                        } else {
            	                            if (isGoal == true) {
            	                                num = 31;
            	                                
            	                                var html = "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + $(this).attr("gbn") + "\" size=\"1\"></div>";
            	                                
            	                                for(var i = 0 ; i < player1.length ; i++) {
    												if(i != $(this).attr("gbn") && player1[i] == player1[$(this).attr("gbn")]) {
		            	                                html += "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + i + "\" size=\"1\"></div>";
    												}
    											}
            	                                
            	                                $(".po31").append(html);
            	                            } else {
            	                                switch (num) {
            	                                    case 6:
            	                                        $(".po" + num).append(html);
            	                                        isP1Pos6or11[$(this).attr("gbn")] = true;
            	                                        console.log(num);
            	                                        break;
            	                                    case 23:
            	                                        $(".po28").append(html);
            	                                        num = num + 5;
            	                                        console.log(num);
            	                                        break;
            	                                    case 11:
            	                                        $(".po" + num).append(html);
            	                                        isP1Pos6or11[$(this).attr("gbn")] = true;
            	                                        console.log(num);
            	                                        break;
            	                                    default:
            	                                        $(".po" + num).append(html);
            	                                   
            	                                        break;
            	                                }
            	                            }
											for(var i = 0 ; i < player1.length ; i++) {
												if(i != $(this).attr("gbn") && player1[i] == player1[$(this).attr("gbn")]) {
		            	                            player1[i] = num;
												}
											}
											
            	                            player1[$(this).attr("gbn")] = num;
           									
            	                        }
            	         				
            	                        if(player1[$(this).attr("gbn")] != 31 && $(".po" + player1[$(this).attr("gbn")] + " .player2").length > 0) {
            	                        	for(var i = 0 ; i < player2.length ; i++) {
            	                        		if(player2[i] == player1[$(this).attr("gbn")]) {
            	                        			player2[i] = -1;
            	                        			
            	                        			var html = "<div class=\"player2\" gbn=\"" + i + "\" size=\"1\"></div>";
            	                        			
	            	                        		$("#waiting").append(html);
	            	                        		
	            	                        		$(".back1 .player2[gbn='" + i + "']").remove();
            	                        		}   
            	                        	}
            	                        }
            	                        
            	                    }else{
            	                        // 윷 던진 후 이동하기 전의 플레이어 위치
            	                        var beforePos = player2[$(this).attr("gbn")];
            	                        // 던진 윷의 결과를 바탕으로 이동 후의 플레이어 위치
            	                        var num = player2[$(this).attr("gbn")] + rnd + 1;
            	                        // 이동했을 때 골인 확인 Flag. 크게돌경우
            	                        var isGoal = false;
            	                        if ((beforePos <= 20 && num > 20) || num >= 31) {
            	                            // num >= 31일 경우 골인.
            	                            // 또는 이전 위치가 20보다 작거나 같고 윷을 던져서 20보다 커졌을 경우에 골인.
            	                            isGoal = true;
            	                        }
            	                        else if ((20 < beforePos && beforePos <= 25) && num > 25) {
            	                            // 이전 위치가 오른쪽 대각선 경로에 있었는데
            	                            // 윷을 던진 후 대각선 경로의 마지막 위치보다 값이 커졌을 경우,
            	                            // 위치 값 - 10을 해주어 아랫라인으로 이동.
            	                            num -= 10;
            	                        }
            	                        console.log("------>" + $(this).attr("gbn"));
            	                        if (isP2Pos6or11[$(this).attr("gbn")] == true) {
            	                            // 이전 포지션이 6번이면 포지션 20,
            	                            // 이전 포지션 11번이면 포지션 25로 표현하기 위해 + 14.
            	                            num += 14;
            	                            isP2Pos6or11[$(this).attr("gbn")] = false;
            	                        }
            	                        if ($(".po" + num + " .player2").length > 0) {
            	                            var plusSize = $(".po" + num + " .player2").attr("size") * 1 + $(this).attr("size") * 1;
            	                            $(".po" + num + " .player2").attr("size", plusSize);
            	                            player2[$(this).attr("gbn")] = num;
            	                         
            	                        } else {
            	                            if (isGoal == true) {
            	                                num = 31;
            	                                
            	                                var html = "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + $(this).attr("gbn") + "\" size=\"1\"></div>";
            	                                
            	                                for(var i = 0 ; i < player2.length ; i++) {
    												if(i != $(this).attr("gbn") && player2[i] == player2[$(this).attr("gbn")]) {
		            	                                html += "<div class=\"" + $(this).attr("class") + "\" gbn=\"" + i + "\" size=\"1\"></div>";
    												}
    											}
            	                                
            	                                $(".po31").append(html);
            	                            } else {
            	                                switch (num) {
            	                                    case 6:
            	                                        $(".po" + num).append(html);
            	                                        isP2Pos6or11[$(this).attr("gbn")] = true;
            	                                        //num = num + 14;
            	                                         
            	                                        console.log(num);
            	                                        break;
            	                                    case 23:
            	                                        $(".po28").append(html);
            	                                        num = num + 5;
            	                                        
            	                                        console.log(num);
            	                                        break;
            	                                    case 11:
            	                                        $(".po" + num).append(html);
            	                                        isP2Pos6or11[$(this).attr("gbn")] = true;
            	                                        //num = num + 14;
            	                                       
            	                                        console.log(num);
            	                                        break;
            	                                    default:
            	                                        $(".po" + num).append(html);
            	                                   
            	                                        break;
            	                                }
            	                            }
            	                            
											for(var i = 0 ; i < player2.length ; i++) {
												if(i != $(this).attr("gbn") && player2[i] == player2[$(this).attr("gbn")]) {
		            	                            player2[i] = num;
												}
											}
											
            	                            player2[$(this).attr("gbn")] = num;
           									
            	                        }
            	                        
            	                        if(player1[$(this).attr("gbn")] > player2[$(this).attr("gbn")]){
            	                        	if(player2[$(this).attr("gbn")]==player1[$(this).attr("gbn")]){
            	                        		$("#waiting").append(player1[$(this).attr("gbn")]);
            	                        	}
            	                        		
            	                        }
            	                        if(player2[$(this).attr("gbn")] != 31 && $(".po" + player2[$(this).attr("gbn")] + " .player1").length > 0) {
            	                        	for(var i = 0 ; i < player1.length ; i++) {
            	                        		if(player1[i] == player2[$(this).attr("gbn")]) {
            	                        			player1[i] = -1;
            	                        			
            	                        			var html = "<div class=\"player1\" gbn=\"" + i + "\" size=\"1\"></div>";
            	                        			
	            	                        		$("#waiting").append(html);
	            	                        		
	            	                        		$(".back1 .player1[gbn='" + i + "']").remove();
            	                        		}
            	                        	}
            	                        }

            	                    }

                     $(this).remove(); 
                    rnd = -1;
                }


                
	            if($(".po31 .player1").length == 4) {
	                end();
	                
	            }
	            if($(".po31 .player2").length == 4) {
	                end1();
	            }
	
            }); // player click end

        }); // document ready end

        function random() {
            rnd = Math.floor(Math.random() * array_yut.length);

            console.log(array_yut[rnd]);

            $("#txt").val(array_yut[rnd] + "(이)가 나왔습니다.");

            $("#yut1, #yut2, #yut3, #yut4").css("background-image", "url('../image/yut.png')");

            switch (array_yut[rnd]) {
                case '도':
                    $("#yut2").css("background-image", "url('../image/yut_back.png')");
                    break;
                case '개':
                    $("#yut3, #yut4").css("background-image", "url('../image/yut_back.png')");
                    break;
                case '걸':
                    $("#yut2, #yut3, #yut4").css("background-image", "url('../image/yut_back.png')");
                    break;
                case '윷':
                    $("#yut1, #yut2, #yut3, #yut4").css("background-image", "url('../image/yut_back.png')");
                    break;
                case '모':
                    $("#yut1, #yut2, #yut3, #yut4").css("background-image", "url('../image/yut.png')");
                    break;
            }

        }
});
});