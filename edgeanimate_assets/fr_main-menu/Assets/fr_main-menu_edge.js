
(function($,Edge,compId){var _=null,y=true,n=false,x1='GothamBook',x75='rgb(0, 0, 0)',x3='2.0.1',e52='${_servicesIcon}',cl='clip',e23='${_scenarioIcon2}',x46='servicesIcon',d='display',x5='2.0.1.268',i='none',x18='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',x98='Text2Copy2',x86='Rectangle2',e20='${_subIcon1}',e71='${_surveyIcon}',e61='${_quizIcon}',e101='${_Text2Copy2}',x49='212px',e27='${_subIcon2}',x100='subIcon1_label_smb',x87='rgba(191,30,46,1.00)',e70='${_Text3Copy2}',fs='font-size',ta='text-align',e15='${_Stage}',x80='100px',x72='624px',x92='subIcon2_label_smb',c='color',x74='Rectangle',zx='scaleX',x56='216px',x51='servicesIcon_smb',qoq='easeOutQuad',x48='122px',x4='2.0.0',x69='surveyIcon_smb',p='px',o='opacity',x14='rgba(0,0,0,1.00)',x65='98px',x103='-120px',x39='332px',e22='${_surveyIcon_smb}',e84='${_Rectangle}',e44='${_scenarioIcon}',x63='surveyIcon',e30='${_subIcon3}',x88='Text2Copy',e62='${_Text3Copy}',x40='Text3',e85='${_Text2}',b='block',x81='Text2',a='Base State',x16='hidden',x73='160px',e43='${_Text3}',lf='left',x78='36px',x34='452px',x33='60px',bg='background-color',x53='quizIcon',x36='auto',tp='top',ov='overflow',x79='487px',zy='scaleY',t='transform',e94='${_Text2Copy}',x6='rgba(0,0,0,0)',g='image',x55='77px',x107='scene-title',x90='162px',x96='rgba(243,120,32,1.00)',x42='scenarioIcon_smb',x105='rgba(255,255,255,1.00)',x104='870px',e102='${_Rectangle3}',e29='${_social-media-button}',x='text',dt='Default Timeline',x97='443px',m='rect',x32='0px',x66='224px',h='height',x38='209px',x95='Rectangle3',e93='${_Rectangle2}',x58='Text3Copy',e19='${_subIcon3_label}',x91='419px',x77='161px',x67='Text3Copy2',x83='subIcon3_label_smb',s='style',x2='GothamMed',e24='${_scene-title}',x11='rgba(255,255,255,1)',x76='rgba(11,148,68,1.00)',e21='${_hotel-button}',e28='${_quizIcon_smb}',x12='stage',po='center',l='normal',e17='${_subIcon1_label_smb}',e45='${symbolSelector}',x31='scenarioIcon',w='width',x35='390px',x57='298px',e25='${_airport-button}',e26='${_subIcon2_label_smb}',x60='quizIcon_smb',ff='font-family',x13='pointer';var im='images/';var g47='servicesIcon.png',g64='surveyIcon.png',g37='scenarioIcon.png',g7='csec-languageSceneBackground.jpg',g9='subIcon2.png',g8='subIcon1.png',g54='quizIcon.png',g10='subIcon3.png';var s50="OUR<br>SERVICES",s89="LA CYBERSÉCURITÉ ET <br>MÉDIAS SOCIAUX  ",s59="RÉPONDEZ AU<br>QUESTIONNAIRE",s99="LA CYBERSÉCURITÉ ET LES <br>TECHNOLOGIES SANS FIL",s82="LA CYBERSÉCURITÉ ET LES VOYAGES À L’ÉTRANGER ",s41="EXPLOREZ 3 <br>SCÉNARIOS",s106="LA CYBERSÉCURITÉ AU <br>GOUVERNEMENT DU CANADA ",s68="RÉPONDEZ AU <br>SONDAGE";var fonts={};fonts[x1]='<style>@font-face {     font-family: GothamBook;    src: url(\'../../../fonts/GothamBook.otf\'); }</style>';fonts[x2]='<style>@font-face {     font-family: GothamMed;    src: url(\'../../../fonts/GothamMedium.otf\'); }</style>';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'csec-languageSceneBackground',t:g,r:['0','0','1280px','683px','auto','auto'],f:[x6,im+g7,'0px','0px']},{id:'scene-title',t:m,r:['325px','67','auto','auto','auto','auto'],tf:[]},{id:'subIcon1_label_smb',t:m,r:['612px','225px','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)'],cu:['pointer']},{id:'subIcon1',t:g,r:['737px','234px','92px','80px','auto','auto'],f:[x6,im+g8,'0px','0px']},{id:'subIcon2_label_smb',t:m,r:['564px','141px','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)'],tf:[]},{id:'subIcon2',t:g,r:['687px','184px','94px','80px','auto','auto'],f:[x6,im+g9,'0px','0px']},{id:'subIcon3_label',t:m,r:['518px','57px','auto','auto','auto','auto'],cl:['rect(0px 624pxpx 160pxpx 0px)']},{id:'subIcon3',t:g,r:['581px','31px','94px','80px','auto','auto'],f:[x6,im+g10,'0px','0px']},{id:'quizIcon_smb',t:m,r:['573px','344px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'surveyIcon_smb',t:m,r:['250px','246px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'scenarioIcon2',t:m,r:['411px','145px','auto','auto','auto','auto'],tf:[[],[],[],['0.46449','0.46449']]},{id:'hotel-button',v:i,t:m,r:['641px','97px','348px','80px','auto','auto'],f:[x11],s:[0,"rgb(0, 0, 0)",i]},{id:'social-media-button',v:i,t:m,r:['690px','181px','348px','80px','auto','auto'],f:[x11],s:[0,"rgb(0, 0, 0)",i]},{id:'airport-button',v:i,t:m,r:['739px','264px','348px','80px','auto','auto'],f:[x11],s:[0,"rgb(0, 0, 0)",i]}],sI:[{id:'subIcon2_label_smb',sN:'subIcon2_label_smb'},{id:'scenarioIcon2',sN:'scenarioIcon_smb'},{id:'surveyIcon_smb',sN:'surveyIcon_smb'},{id:'quizIcon_smb',sN:'quizIcon_smb'},{id:'subIcon3_label',sN:'subIcon3_label_smb'},{id:'subIcon1_label_smb',sN:'subIcon1_label_smb'},{id:'scene-title',sN:'scene-title'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1480,a:y,tt:[]}}},"scenarioIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x31,t:g,r:[x32,x33,x34,x35,x36,x36],f:[x6,im+g37,x32,x32]},{r:[x33,x38,x39,x36,x36,x36],n:[x2,36,x11,l,i,l],id:x40,text:s41,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"servicesIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x46,t:g,r:[x32,x33,x34,x35,x36,x36],f:[x6,im+g47,x32,x32]},{r:[x48,x49,x36,x36,x36,x36],n:[x2,40,x11,l,i,l],id:x40,text:s50,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"quizIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x53,t:g,r:[x32,x33,x34,x35,x36,x36],f:[x6,im+g54,x32,x32]},{r:[x55,x56,x57,x36,x36,x36],n:[x2,36,x11,l,i,l],id:x58,text:s59,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"surveyIcon_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x63,t:g,r:[x32,x33,x34,x35,x36,x36],f:[x6,im+g64,x32,x32]},{r:[x65,x66,x36,x36,x36,x36],n:[x2,36,x11,l,i,l],id:x67,text:s68,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"subIcon3_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x72,x73,x36,x36],o:0.85,id:x74,s:[0,x75,i],t:m,f:[x76]},{r:[x77,x78,x79,x80,x36,x36],n:[x2,30,x11,l,i,l],id:x81,text:s82,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"subIcon2_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x72,x73,x36,x36],o:0.85,id:x86,s:[0,x75,i],t:m,f:[x87]},{n:[x2,30,x11,l,i,l],t:x,id:x88,text:s89,align:lf,r:[x90,x78,x91,x80,x36,x36]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}},"subIcon1_label_smb":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x32,x32,x72,x73,x36,x36],o:0.85,id:x95,s:[0,x75,i],t:m,f:[x96]},{r:[x90,x78,x97,x80,x36,x36],n:[x2,30,x11,l,i,l],id:x98,text:s99,align:lf,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"scene-title":{v:x3,mv:x4,b:x5,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x103,x32,x104,x36,x36,x36],n:[x2,48,x105,l,i,l],id:x81,text:s106,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:y,tt:[]}}}};var S1=symbols[x12];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e15).P(bg,x14,c).P(w,1280).P(h,683).P(ov,x16);A1.A(e17).P(tp,225).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(lf,612,_,_,p).P("cursor",x13).P(cl,[0,0,160,0],_,x18).T(1.077,[0,624,160,0],0.403,qoq);A1.A(e19).P(tp,57).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(lf,518,_,_,p).P(cl,[0,0,160,0],_,x18).T(0.526,[0,624,160,0],0.403,qoq);A1.A(e20).P(h,80).P(w,92).P(lf,591).T(0.802,735,0.276,qoq).P(tp,313).T(0.802,265,0.276);A1.A(e21).P(o,0,_,_,"").P(d,i).T(0,i).T(1.48,b);A1.A(e22).P("filter.grayscale",0,"subproperty",_,"").P(zy,0.46449,t).P(zx,0.46449,t).P(lf,250,_,_,p).P(tp,240).T(0,279,0.25,qoq);A1.A(e23).P(zx,0.46449,t,_,"").P(lf,411,_,_,p).P(zy,0.46449,t,_,"").P(tp,119,_,_,p).T(0,158,0.25,qoq);A1.A(e24).P(d,b).T(0,b).P(o,1,_,_,"").T(0,0,0.526,qoq).P(zy,1,t).T(0,1.01,0.526);A1.A(e25).P(tp,264).P(o,0,_,_,"").P(lf,739,_,_,p).P(d,i).T(0,i).T(1.48,b);A1.A(e26).P(tp,141).P(zy,0.49989,t,_,"").P(zx,0.49989,t).P(o,1).P(lf,564,_,_,p).P(cl,[0,0,160,0],_,x18).T(0.802,[0,624,160,0],0.403,qoq);A1.A(e27).P(h,80).P(w,94).P(tp,323).T(0.526,181,0.276,qoq).P(lf,590).T(0.526,687,0.276);A1.A(e28).P("filter.grayscale",0,"subproperty",_,"").P(zy,0.46449,t).P(zx,0.46449,t).P(lf,573,_,_,p).P(tp,240).T(0,278,0.25,qoq);A1.A(e29).P(tp,181).P(o,0,_,_,"").P(lf,690,_,_,p).P(d,i).T(0,i).T(1.48,b);A1.A(e30).P(h,80).P(w,94).P(tp,323).T(0.25,97,0.276,qoq).P(lf,593).T(0.25,641,0.276);var S2=symbols[x42];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e43).P(tp,209).P(ta,po).P(fs,36).P("line-height",42).P(lf,60).P(w,332);A2.A(e44).P(lf,0).P(tp,0);A2.A(e45).P(h,390).P(w,452);var S3=symbols[x51];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e43).P("line-height",56).P(ta,po).P(tp,212).P(lf,122).P(fs,40);A3.A(e52).P(lf,0).P(tp,0);A3.A(e45).P(h,390).P(w,452);var S4=symbols[x60];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e61).P(tp,0).P(lf,0);A4.A(e62).P(tp,216).P(ta,po).P(fs,36).P("line-height",42).P(lf,77).P(w,298);A4.A(e45).P(h,390).P(w,452);var S5=symbols[x69];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e70).P(tp,224).P(ta,po).P("line-height",42).P(lf,98).P(fs,36);A5.A(e71).P(lf,0).P(tp,0);A5.A(e45).P(h,390).P(w,452);var S6=symbols[x83];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e84).P(bg,x76,c).P(tp,0).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A6.A(e85).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,161).P(w,487);A6.A(e45).P(h,160).P(w,624);var S7=symbols[x92];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e93).P(tp,0).P(bg,x87,c).P(h,160).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A7.A(e94).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,162).P(w,419);A7.A(e45).P(h,160).P(w,624);var S8=symbols[x100];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e101).P(tp,36).P("line-height",45).P(h,100).P(ff,x2).P(lf,162).P(w,443);A8.A(e102).P(tp,0).P(bg,x96,c).P(o,0.85,_,_,"").P(lf,0,_,_,p).P(w,624);A8.A(e45).P(h,160).P(w,624);var S9=symbols[x107];var tl8=S9.tl[dt].tt,st9=S9.s[a]={},A9=A(_,tl8,st9);A9.A(e85).P(tp,0).P(ta,po).P(w,870).P(c,x105,c).P(ff,x2).P(lf,-120).P(fs,48);A9.A(e45).P(h,114).P(w,629);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-2548275");