(this["webpackJsonpset-flow"]=this["webpackJsonpset-flow"]||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"domain":"dev-zyox3zqn.us.auth0.com","clientId":"BnFVT4p5d2Sfy12SRUoQRqS0JNqzuWe4"}')},39:function(e,t,a){},41:function(e,t,a){e.exports=a.p+"static/media/loading.c5590569.svg"},42:function(e,t,a){e.exports=a.p+"static/media/logo.c31ae9c2.png"},43:function(e,t,a){e.exports=a.p+"static/media/logo-icon.96943f7b.png"},44:function(e,t,a){e.exports=a.p+"static/media/logo-text.f3d94296.png"},48:function(e,t,a){e.exports=a(80)},57:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(40),c=a.n(s),i=a(15),r=a(7),o=a(41),m=a.n(o),u=function(){return l.a.createElement("div",{className:"spinner"},l.a.createElement("img",{src:m.a,alt:"Loading"}))},g=(a(81),a(82),a(83),a(84)),d=a(9),h=function(){var e=Object(d.b)().loginWithRedirect;return l.a.createElement("button",{className:"Auth0Button myButton",onClick:function(){return e()}},"START JAMMIN'")},E=function(){var e=Object(d.b)().logout;return l.a.createElement("button",{className:"Auth0Button myButton",onClick:function(){return e()}},"Log Out")},f=a(85),p=a(86),N=(a(57),a(42)),S=a.n(N),y=function(){return l.a.createElement("div",null,l.a.createElement(f.a,{className:"jumbo"},l.a.createElement(p.a,{style:{marginTop:"30px",padding:"0px",backgroundColor:"transparent"}},l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("img",{src:S.a,alt:"SetFlow Logo",width:"281px"})),l.a.createElement("p",{className:"d-flex justify-content-center section"},"THE ULTIMATE SETLIST ORGINIZATION TOOL FOR MUSICIANS")),l.a.createElement(f.a,null,l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("p",{className:"d-flex justify-content-center"},l.a.createElement(h,null,"Auth0 Login")),l.a.createElement("p",{className:"d-flex justify-content-center"},l.a.createElement(E,{class:"center",color:"secondary"},"Auth0 Login")))))))},v=a(16),b=a(17),x=a(19),k=a(18),C=a(47),G=a(87),j=a(88),O=a(89),T=a(90),I=a(91),B=a(92),L=a(43),A=a.n(L),R=a(44),w=a.n(R),M=(a(58),function(){var e=Object(n.useState)(!1),t=Object(C.a)(e,2),a=(t[0],t[1],Object(d.b)()),s=(a.user,a.isAuthenticated),c=a.loginWithRedirect;a.logout;return l.a.createElement("div",null,l.a.createElement(G.a,{light:!0,expand:"md"},l.a.createElement(j.a,{href:"/main"},l.a.createElement("img",{src:A.a,alt:"Logo Icon",width:"50px"}),l.a.createElement("img",{src:w.a,alt:"Logo Text",width:"100px"})),l.a.createElement(O.a,{className:"ml-auto navbuttons",navbar:!0},l.a.createElement(T.a,null,l.a.createElement(I.a,{className:"navbuttons",tag:i.b,to:"/main",exact:!0,activeClassName:"router-link-exact-active"},"Home")),s&&l.a.createElement(T.a,null,l.a.createElement(I.a,{className:"navbuttons",tag:i.b,to:"/edit",exact:!0,activeClassName:"router-link-exact-active"},"Edit Gigs & Sets")),s&&l.a.createElement(T.a,null,l.a.createElement(I.a,{className:"navbuttons",tag:i.b,to:"/launched",exact:!0,activeClassName:"router-link-exact-active"},"Launched Gigs")),!s&&l.a.createElement(T.a,null,l.a.createElement(B.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:function(){return c()},style:{fontWeight:"500",color:"#cea935",fontSize:"20px"}},"Log in")))))}),U=(a(61),function(e){var t=e.handleLaunchClick;return l.a.createElement(B.a,{className:"LaunchBtn",outline:!0,size:"sm",onClick:t},"\ud83d\ude80 Launch")}),D=a(93),W=a(94),P=a(95),z=function(e){return e.gigs?l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,{className:"title"},"My Gigs"))),l.a.createElement(P.a,null,e.gigs.map((function(t){return l.a.createElement("div",{className:"textBody"},l.a.createElement("li",{className:"gigItem",id:t.name,key:t._id,onClick:function(){return e.handleGigClick(t._id)}},t.name),l.a.createElement(U,{handleLaunchClick:e.handleLaunchClick}))})))):l.a.createElement("div",{className:"d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,{className:"title"},"My Gigs"))),l.a.createElement("div",{className:"textBody"},l.a.createElement(P.a,{className:"gigtext"},l.a.createElement("strong",null,"No Gigs Added."))))},F=function(e){return e.currentGig?l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"}),l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,e.currentGig.name),l.a.createElement("h5",null,"Setlists:")),l.a.createElement(P.a,null,l.a.createElement("ol",null,e.currentGig.setlists.map((function(t){return l.a.createElement("li",{className:"setlistlistItem",id:t.id,key:t.id,onClick:function(){return e.setlistClickTop(t._id)}},t.name)}))))):l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"Gig Name"),l.a.createElement("h5",null,"Setlists:"))),l.a.createElement("div",{className:"textBody"},l.a.createElement(P.a,null,l.a.createElement("i",null,"No Setlist have been added to this gig."))))},H=function(){return l.a.createElement("i",{className:"textBody"},"To create a Gig or Setlist, go to the 'Edit Gigs & Sets Page'.")},J=function(e){return e.setlists?l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"My Setlists"))),l.a.createElement(P.a,{className:"textBody"},e.setlists.map((function(t){return l.a.createElement("li",{className:"setlistItem",id:t.id,key:t.id,onClick:function(){return e.allSetlistClick(t._id)}}," ",t.name)})))):l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"My Setlists"))),l.a.createElement("div",{className:"textBody"},l.a.createElement(P.a,null,l.a.createElement(H,null))))},q=function(e){return e.currentSetlist1?l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"}),l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"Songs:")),l.a.createElement(P.a,{className:"textBody"},l.a.createElement("ol",null,e.currentSetlist1.map((function(e){return l.a.createElement("li",{className:"setlistlistItem",id:e.id,key:e.id},e.songName)}))))):l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"SetList Name"),l.a.createElement("h5",null,"Songs:"))),l.a.createElement(P.a,{className:"textBody"},l.a.createElement("i",null,"No songs have been added to this setlist.")))},_=function(e){return e.currentSetlist2?l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"}),l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"Songs:")),l.a.createElement(P.a,{className:"textBody"},l.a.createElement("ol",null,e.currentSetlist2.map((function(e){return l.a.createElement("li",{className:"setlistlistItem",id:e.id,key:e.id},e.songName)}))))):l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"SetList Name"),l.a.createElement("h5",null,"Songs:"))),l.a.createElement(P.a,{className:"textBody"},l.a.createElement("i",null,"No songs have been added to this setlist.")))},Y=a(96),Q=a(97),V=a(6),Z=a.n(V),$=function(e){var t=e.songTitle,a=e.songArtist,n=e.handleSongSubmit,s=e.onChange;return l.a.createElement("div",{className:"SetlistCard d-flex flex-column"},l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(D.a,{body:!0,className:"titleBg"},l.a.createElement(W.a,null,"Add a Song to Your Setlist"))),l.a.createElement("div",{className:"textBody"},l.a.createElement(g.a,{id:"songInput",name:"songTitle",value:t,onChange:s,placeholder:"Song Title"}),l.a.createElement(g.a,{id:"artistInput",name:"songArtist",value:a,onChange:s,placeholder:"Artist Name"}),l.a.createElement(B.a,{onClick:n},"Submit")))},K=function(e){return Z.a.post("/api/users/findorcreate",{email:e})},X=function(e){return Z.a.get("/api/gigs/"+e)},ee=function(){return Z.a.get("/api/gigs/")},te=function(e){return Z.a.post("/api/gigs/",e)},ae=function(e){return Z.a.get("api/setlists/"+e)},ne=function(e){return Z.a.get("/api/gigs/"+e)},le=function(){return Z.a.get("/api/setlists/")},se=function(e){return Z.a.post("/api/setlists/",e)},ce=function(e){return Z.a.get("/api/lyrics/setlists/"+e)},ie=(a(39),function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={gigs:[],currentGig:null,launchedGig:null,toLaunchPage:!1,currentSetlist1:null,currentSetlist2:null,setlists:[],songs:[]},e.handleLaunchClick=function(t){ne(t).then((function(t){e.setState({launchedGig:t.data}),e.setRedirect(),e.renderRedirect()})).catch((function(e){return console.log(e)}))},e.setRedirect=function(){e.setState({toLaunchPage:!0})},e.renderRedirect=function(){if(e.state.toLaunchPage)return l.a.createElement(r.a,{to:"/launched"})},e.handleGigClick=function(t){ne(t).then((function(t){e.setState({currentGig:t.data})})).catch((function(e){return console.log(e)}))},e.setlistClickTop=function(t){ce(t).then((function(t){e.setState({currentSetlist1:t.data})})).catch((function(e){return console.log(e)}))},e.allSetlistClick=function(t){ce(t).then((function(t){e.setState({currentSetlist2:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;K(this.props.email).then((function(t){e.setState({gigs:t.data.gigs,setlists:t.data.setlists})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(M,null),l.a.createElement(f.a,null,l.a.createElement(Y.a,null,l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"giglist"},l.a.createElement(z,{className:"gigcard",handleGigClick:this.handleGigClick,gigs:this.state.gigs,setlists:this.state.setlists,currentGig:this.state.currentGig,launchedGig:this.state.launchedGig,handleLaunchClick:this.handleLaunchClick,setRedirect:this.setRedirect,renderRedirect:this.renderRedirect}),l.a.createElement(H,null))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"gigsetlist"},l.a.createElement(F,{setlists:this.state.setlists,gigs:this.state.gigs,currentGig:this.state.currentGig,setlistClickTop:this.setlistClickTop}))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"setlistsongs"},l.a.createElement(q,{currentSetlist1:this.state.currentSetlist1})))),l.a.createElement(Y.a,null,l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"allsetlists"},l.a.createElement(J,{currentSetlist2:this.state.currentSetlist2,allSetlistClick:this.allSetlistClick,setlists:this.state.setlists}),l.a.createElement(H,null))),l.a.createElement(Q.a,null,l.a.createElement(D.a,{className:"setlistsongs"},l.a.createElement(_,{currentSetlist2:this.state.currentSetlist2}))))))}}]),a}(n.Component)),re=Object(d.c)(ie,{onRedirecting:function(){return l.a.createElement(u,null)}}),oe=a(27),me=a(46),ue=a(98),ge=a(99),de=function(e){return l.a.createElement("div",{className:"inputBody"},l.a.createElement(ue.a,{className:"gigInput mb-3"},l.a.createElement(g.a,{placeholder:"Name",name:"gigName",value:e.gigName,onChange:e.onChange}),l.a.createElement(ge.a,{addonType:"prepend"},l.a.createElement(B.a,{onClick:e.gigSubmit},"Submit"))))},he=function(e){return l.a.createElement("div",{className:"inputBody"},l.a.createElement(ue.a,{className:"setlistInput mb-3"},l.a.createElement(g.a,{placeholder:"Name",name:"setlistName",value:e.setlistName,onChange:e.onChange}),l.a.createElement(ge.a,{addonType:"prepend"},l.a.createElement(B.a,{onClick:e.setSubmit},"Submit"))))},Ee=(a(78),function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={currentGig:null,currentSetlist1:null,currentSetlist2:null,gigName:"",setlistName:"",songTitle:"",songArtist:"",gigs:[],setlists:[],songs:[]},e.handleGigClick=function(t){ne(t).then((function(t){e.setState({currentGig:t.data})})).catch((function(e){return console.log(e)}))},e.setlistClickTop=function(t){ce(t).then((function(t){e.setState({currentSetlist1:t.data})})).catch((function(e){return console.log(e)}))},e.allSetlistClick=function(t){ce(t).then((function(t){e.setState({currentSetlist2:t.data})})).catch((function(e){return console.log(e)}))},e.handleInput=function(t){var a=t.target,n=a.name,l=a.value;console.log("EventTarget:",t.target),e.setState(Object(me.a)({},n,l)),console.log("name:",n,"value:",l)},e.handleGigSubmit=function(t){t.preventDefault(),te({name:e.state.gigName,user:e.props.email}).then((function(t){console.log("response for HandleSubmit:",t.data),e.setState({gigs:[].concat(Object(oe.a)(e.state.gigs),[t.data])})})).catch((function(e){return console.log(e)}))},e.handleSetlistSubmit=function(t){t.preventDefault(),se({name:e.state.setlistName,user:e.props.email}).then((function(t){console.log("response for HandleSubmit:",t.data),e.setState({setlists:[].concat(Object(oe.a)(e.state.setlists),[t.data])})})).catch((function(e){return console.log(e)}))},e.loadSetlists=function(){ae().then((function(t){return e.setState({setlists:t.data})})).catch((function(e){return console.log(e)}))},e.loadGigs=function(){X().then((function(t){return e.setState({gigs:t.data})})).catch((function(e){return console.log(e)}))},e.handleSongSubmit=function(t){t.preventDefault();var a={title:e.state.songTitle,artist:e.state.songArtist};console.log("songObject: ",a),Z.a.post("/api/lyrics/get-lyrics",a).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),e.setState({songTitle:"",songArtist:""})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;K(this.props.email).then((function(t){e.setState({gigs:t.data.gigs,setlists:t.data.setlists})}))}},{key:"render",value:function(){return console.log("THis is the CRUD email prop from auth0",this.props.email),l.a.createElement("div",{className:"bg"},l.a.createElement(M,null),l.a.createElement(f.a,null,l.a.createElement(Y.a,null,l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"giglist"},l.a.createElement(z,{className:"gigcard",handleGigClick:this.handleGigClick,gigs:this.state.gigs,setlists:this.state.setlists,currentGig:this.state.currentGig}),l.a.createElement("div",{className:"btn-title"},"Add Gig:"),l.a.createElement(de,{gigSubmit:this.handleGigSubmit,gigName:this.state.gigName,onChange:this.handleInput}))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"gigsetlist"},l.a.createElement(F,{setlists:this.state.setlists,gigs:this.state.gigs,currentGig:this.state.currentGig,setlistClickTop:this.setlistClickTop}))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"setlistsongs"},l.a.createElement(J,{currentSetlist1:this.state.currentSetlist1,setlists:this.state.setlists})))),l.a.createElement(Y.a,null,l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"allsetlists"},l.a.createElement(J,{currentSetlist2:this.state.currentSetlist2,allSetlistClick:this.allSetlistClick,setlists:this.state.setlists}),l.a.createElement(he,{setSubmit:this.handleSetlistSubmit,setlistName:this.state.setlistName,onChange:this.handleInput}))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"setlistsongs"},l.a.createElement(_,{currentSetlist2:this.state.currentSetlist2}))),l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"addsongs"},l.a.createElement($,{handleSongSubmit:this.handleSongSubmit,songTitle:this.state.songTitle,songArtist:this.state.songArtist,onChange:this.handleInput}))))))}}]),a}(n.Component)),fe=Object(d.c)(Ee,{onRedirecting:function(){return l.a.createElement(u,null)}}),pe=function(){return l.a.createElement(D.a,{body:!0},l.a.createElement("h5",null,"Top Down"),l.a.createElement(P.a,null,l.a.createElement("p",null,"If you ain't got no money take yo'broke ass home You say: If you ain't got no money take yo'broke ass home G-L-A-M-O-R-O-U-S, yeah G-L-A-M-O-R-O-U-S We flying the first class Up in the sky Poppin' champagne Livin' my life In the fast lane And I won't change For the glamorous, oh the flossy flossy The glamorous, The glamorous, glamorous (the glamorous life) ...")),l.a.createElement("h5",null,"Top Down"),l.a.createElement(P.a,null,l.a.createElement("p",null,"If you ain't got no money take yo'broke ass home You say: If you ain't got no money take yo'broke ass home G-L-A-M-O-R-O-U-S, yeah G-L-A-M-O-R-O-U-S We flying the first class Up in the sky Poppin' champagne Livin' my life In the fast lane And I won't change For the glamorous, oh the flossy flossy The glamorous, The glamorous, glamorous (the glamorous life) ...")))},Ne=function(e){Object(x.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={gigs:[],currentGig:null,setlists:[],currentSetlist:null,songs:[]},e.handleSetlistClick=function(t){ce(t).then((function(t){e.setState({currentSetlist:t.data})})).catch((function(e){return console.log(e)}))},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;ee().then((function(t){return e.setState({gigs:t.data})})).catch((function(e){return console.log(e)})),le().then((function(t){return e.setState({setlists:t.data})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(M,null),l.a.createElement(f.a,null,l.a.createElement(Y.a,null,l.a.createElement(Q.a,{sm:"4"},l.a.createElement(D.a,{className:"gigsetlist"},l.a.createElement(F,{setlists:this.state.setlists,gigs:this.state.gigs,currentGig:this.state.currentGig}))),l.a.createElement(Q.a,null,l.a.createElement(D.a,{className:"lyrics"},l.a.createElement(pe,{data:this.state}))))))}}]),a}(n.Component),Se=Object(d.c)(Ne,{onRedirecting:function(){return l.a.createElement(u,null)}}),ye=a(11),ve=Object(ye.a)(),be=function(){var e=Object(d.b)().user;return l.a.createElement(i.a,{history:ve},l.a.createElement(r.d,null,l.a.createElement(r.b,{exact:!0,path:"/",component:y}),l.a.createElement(r.b,{path:"/main"},l.a.createElement(re,{email:e?e.email:null})),l.a.createElement(r.b,{path:"/edit"},l.a.createElement(fe,{email:e?e.email:null})),l.a.createElement(r.b,{path:"/launched",component:Se})))};a(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=a(23);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,{domain:xe.domain,clientId:xe.clientId,audience:xe.audience,redirectUri:"http://localhost:3000/main",onRedirectCallback:function(e){ve.push(e&&e.returnTo?e.returnTo:window.location.pathname)}},l.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.7d93ba97.chunk.js.map