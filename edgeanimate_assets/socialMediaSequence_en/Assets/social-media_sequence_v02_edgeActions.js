
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("Title_BodyText").html("Meet <span style='font-family: GothamMedium;'>Peter Smith</span>, a government employee who frequently uses social media. Observe his Facebook page, Twitter feed and LinkedIn profile to spot information he has posted that could be used to craft a malicious e-mail and compromise a government network.");sym.stop();parent.showClose();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Title_BoxHoldCopy}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","click",function(sym,e){top.timerReset();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();sym.getSymbol("login-screen-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_login-screen-button}","click",function(sym,e){sym.play("social-media");sym.getSymbol("login-screen-button").stop("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){sym.stop();sym.getSymbol("social-media-hexagon").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_social-media-hexagon}","click",function(sym,e){sym.play("linkedin");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20000,function(sym,e){sym.stop();sym.getSymbol("facebook-next-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_facebook-next-button}","click",function(sym,e){sym.play();sym.getSymbol("facebook-next-button").stop("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29000,function(sym,e){sym.stop();sym.getSymbol("twitter-next-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_twitter-next-button}","click",function(sym,e){sym.getSymbol("twitter-next-button").play("start");sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39000,function(sym,e){sym.stop();sym.getSymbol("youve-got-mail-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_mail-hidden-button}","click",function(sym,e){sym.play();sym.getSymbol("youve-got-mail-button").stop("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",20100,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",29100,function(sym,e){sym.$("twitter-next-button").fadeOut("500");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",39100,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",50000,function(sym,e){sym.stop();sym.getSymbol("view-best-practices-button").play("waiting");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_view-best-practices-button}","click",function(sym,e){sym.getSymbol("bet-practices-overlay").play("close-end-screen");parent.hideClose();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",48000,function(sym,e){sym.getSymbol("bet-practices-overlay").play("end-screen");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'BG-png-normal'
(function(symbolName){})("BG-png-normal");
//Edge symbol end:'BG-png-normal'

//=========================================================

//Edge symbol: 'login-screen_click-to-continue_button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.play("after-login-screen");});
//Edge binding end
})("login-screen_click-to-continue_button");
//Edge symbol end:'login-screen_click-to-continue_button'

//=========================================================

//Edge symbol: 'login-screen-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("login-screen-button");
//Edge symbol end:'login-screen-button'

//=========================================================

//Edge symbol: 'social-media-hex'
(function(symbolName){})("social-media-hex");
//Edge symbol end:'social-media-hex'

//=========================================================

//Edge symbol: 'social-media-hexagon'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
})("social-media-hexagon");
//Edge symbol end:'social-media-hexagon'

//=========================================================

//Edge symbol: 'bubble-arrow_linked-in-01'
(function(symbolName){})("bubble-arrow_linked-in-01");
//Edge symbol end:'bubble-arrow_linked-in-01'

//=========================================================

//Edge symbol: 'text-bubble-01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",18000,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02").html("<span style='font-family: GothamMedium;'>Peter</span> identifies himself as a government employee working for the Department of Commerce. ");});
//Edge binding end
})("text-bubble-01");
//Edge symbol end:'text-bubble-01'

//=========================================================

//Edge symbol: 'linkedin_text-bubble_02'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-01").html("<span style='font-family: GothamMedium;'>Peter’s</span> colleagues are identified – his executive assistant is a prime target as her account provides another point of entry to access <span style='font-family: GothamMedium;'>Peter’s</span> information.");});
//Edge binding end
})("linkedin_text-bubble_02");
//Edge symbol end:'linkedin_text-bubble_02'

//=========================================================

//Edge symbol: 'facebook-next-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1898,function(sym,e){sym.play("waiting");});
//Edge binding end
})("facebook-next-button");
//Edge symbol end:'facebook-next-button'

//=========================================================

//Edge symbol: 'facebook-text-bubble-02'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy").html("Providing information about <span style='font-family: GothamMedium;'>Peter’s</span> location can enable malicious actors to craft a phishing e-mail that seems legitimate.");});
//Edge binding end
})("facebook-text-bubble-02");
//Edge symbol end:'facebook-text-bubble-02'

//=========================================================

//Edge symbol: 'facebook-text-bubble-01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02").html("Even the pictures that <span style='font-family: GothamMedium;'>Peter</span> posts can be a source of information for malicious actors, giving clues to passwords or answers to security questions for password resets.");});
//Edge binding end
})("facebook-text-bubble-01");
//Edge symbol end:'facebook-text-bubble-01'

//=========================================================

//Edge symbol: 'twitter-next-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
})("twitter-next-button");
//Edge symbol end:'twitter-next-button'

//=========================================================

//Edge symbol: 'twitter-text-bubble-01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy2").html("<span style='font-family: GothamMedium;'>Peter</span> mentions work projects. This information is useful for crafting malicious e-mails, and tailoring content to be relevant, credible and timely.");});
//Edge binding end
})("twitter-text-bubble-01");
//Edge symbol end:'twitter-text-bubble-01'

//=========================================================

//Edge symbol: 'twitter-text-bubble-02'
(function(symbolName){})("twitter-text-bubble-02");
//Edge symbol end:'twitter-text-bubble-02'

//=========================================================

//Edge symbol: 'youve-got-mail-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("youve-got-mail-button");
//Edge symbol end:'youve-got-mail-button'

//=========================================================

//Edge symbol: 'email-text-bubble-01'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02").html("Malicious actors used “social-engineering” to guess the password to <span style='font-family: GothamMedium;'>Peter’s</span> personal e-mail account.");});
//Edge binding end
})("email-text-bubble-01");
//Edge symbol end:'email-text-bubble-01'

//=========================================================

//Edge symbol: 'email-text-bubble-02'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy2").html("<span style='font-family: GothamMedium;'>Peter</span> used a check-in feature on Facebook. Malicious actors can use this information to make an e-mail appear genuine.");});
//Edge binding end
})("email-text-bubble-02");
//Edge symbol end:'email-text-bubble-02'

//=========================================================

//Edge symbol: 'email-text-bubble-03'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy").html("Malicious actors were able to identify <span style='font-family: GothamMedium;'>Peter’s</span> work colleagues after they were mentioned online.");});
//Edge binding end
})("email-text-bubble-03");
//Edge symbol end:'email-text-bubble-03'

//=========================================================

//Edge symbol: 'email-text-bubble-04'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy3").html("<span style='font-family: GothamMedium;'>Peter</span> proudly shared his title and department online.");});
//Edge binding end
})("email-text-bubble-04");
//Edge symbol end:'email-text-bubble-04'

//=========================================================

//Edge symbol: 'email-text-bubble-05'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.$("linkedin-bubble-copy-02Copy4").html("<span style='font-family: GothamMedium;'>Peter</span> mentioned this project on Twitter, lending legitimacy to the malicious attachment.");});
//Edge binding end
})("email-text-bubble-05");
//Edge symbol end:'email-text-bubble-05'

//=========================================================

//Edge symbol: 'view-best-practices-button'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2210,function(sym,e){sym.play("waiting");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("view-best-practices-button");
//Edge symbol end:'view-best-practices-button'

//=========================================================

//Edge symbol: 'bet-practices-overlay'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",10500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ViewBestPractices_text}","click",function(sym,e){sym.play("overlay-begin-mid-scene");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_it-practitioners}","click",function(sym,e){sym.setVariable("next-practice-step","it");sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="it"){sym.play("it-practices-mid");};if(nextScene=="managers"){sym.play("manager-practices-mid");};if(nextScene=="everyone"){sym.play("everyone-practices-mid");};if(nextScene=="back"){sym.play();};if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_managers}","click",function(sym,e){sym.setVariable("next-practice-step","managers");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_everyone}","click",function(sym,e){sym.setVariable("next-practice-step","everyone");sym.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_back-to-scene}","click",function(sym,e){sym.setVariable("next-practice-step","back");sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop("start");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",13500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("mid-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",11000,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="it"){sym.play("it-practices-end");};if(nextScene=="managers"){sym.play("manager-practices-end");};if(nextScene=="everyone"){sym.play("everyone-practices-end");};if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_back-to-best-practices}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",500,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_exitBtn-Main}","click",function(sym,e){sym.play("overlay-begin-mid-scene");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_exit}","click",function(sym,e){sym.setVariable("next-practice-step","exit");sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15500,function(sym,e){if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("mid-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",15500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("mid-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",17500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("mid-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",19500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("end-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",21500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("end-scene-practices");};});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",23500,function(sym,e){var nextScene=sym.getVariable("next-practice-step");if(nextScene=="exit"){window.open("../../../en_main-menu.html","contentContainer");sym.stop();}else{sym.play("end-scene-practices");};});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_exitBtn-MainCopy}","click",function(sym,e){sym.play("into-end-scene-practices");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ViewBestPractices_textCopy}","click",function(sym,e){sym.play("into-end-scene-practices");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5500,function(sym,e){sym.play("into-end-scene-practices");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
})("bet-practices-overlay");
//Edge symbol end:'bet-practices-overlay'

//=========================================================

//Edge symbol: 'best-practices-menu'
(function(symbolName){})("best-practices-menu");
//Edge symbol end:'best-practices-menu'

//=========================================================

//Edge symbol: 'best-practices-bgackground'
(function(symbolName){})("best-practices-bgackground");
//Edge symbol end:'best-practices-bgackground'

//=========================================================

//Edge symbol: 'back-to-scene-button'
(function(symbolName){})("back-to-scene-button");
//Edge symbol end:'back-to-scene-button'

//=========================================================

//Edge symbol: 'return-to-menu-button'
(function(symbolName){})("return-to-menu-button");
//Edge symbol end:'return-to-menu-button'

//=========================================================

//Edge symbol: 'back-to-practices-button'
(function(symbolName){})("back-to-practices-button");
//Edge symbol end:'back-to-practices-button'

//=========================================================

//Edge symbol: 'best-practices_IT-practitioners'
(function(symbolName){})("best-practices_IT-practitioners");
//Edge symbol end:'best-practices_IT-practitioners'

//=========================================================

//Edge symbol: 'best-practices_managers'
(function(symbolName){})("best-practices_managers");
//Edge symbol end:'best-practices_managers'

//=========================================================

//Edge symbol: 'best-practices_everyone'
(function(symbolName){})("best-practices_everyone");
//Edge symbol end:'best-practices_everyone'

//=========================================================

//Edge symbol: 'Preloader'
(function(symbolName){})("Preloader");
//Edge symbol end:'Preloader'
})(jQuery,AdobeEdge,"EDGE-8632800");