(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(14),r=n(34),c=n(1),o=n.n(c),l=n(2),u=n(38),s=n(7),i=n.n(s),m="/api/blogs",p=null,d=function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(m);case 2:return t=e.sent,console.log("getall",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat(m,"/").concat(t));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("blogsrvice:",t.id),n=Object(u.a)({},t,{likes:t.likes+1}),e.next=4,i.a.put("".concat(m,"/").concat(t.id),n);case 4:return a=e.sent,console.log("response.data",a.data),e.abrupt("return",a.data);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E={getAll:d,create:function(){var e=Object(l.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},console.log(n),e.next=4,i.a.post(m,t,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){p="bearer ".concat(e),console.log(p)},deleteBlog:f,updateLike:g,updateComment:function(){var e=Object(l.a)(o.a.mark(function e(t,n){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("add comment service:",t),console.log("blogto comment.id",n.id),e.next=4,i.a.put("".concat(m,"/").concat(n.id,"/comments"),t);case 4:return a=e.sent,console.log("response.data from server",a.data),e.abrupt("return",a.data);case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},v=function(e){return console.log("like",e),function(){var t=Object(l.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.updateLike(e);case 2:a=t.sent,console.log("updating likes...",a),n({type:"UPVOTE_BLOG",data:a});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return console.log("create blog"),e.concat(t.data);case"DELETE_BLOG":var n=t.data;return e.filter(function(e){return e.id!==n});case"UPVOTE_BLOG":var a=t.data;return e.map(function(e){return e.id!==a.id?e:a});case"ADD_COMMENT":console.log("add comment",t.data);var r=t.data;return e.map(function(e){return e.id!==r.id?e:r});default:return e}},h=function(e){return console.log("note: ",e),function(t){t({type:"SET_NOTIFICATION",data:e})}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTIFICATION":return console.log("notification"),t.data;default:return e}},N=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("dispatching",e),n({type:"SET_USER",data:e});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return console.log("this is the user state",t.data),t.data;case"INIT_USER":return console.log("init user from reducer"),t.data;default:return e}},y=function(){var e=Object(l.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/users");case 2:return t=e.sent,console.log("userservice",t.data),e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete("".concat("/api/users","/").concat(t));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updated this user::",t.name),e.next=3,i.a.put("".concat("/api/users","/").concat(t.id),t);case 3:return n=e.sent,console.log("response.data",n.data),e.abrupt("return",n.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j={getAll:y,createUser:function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/users",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),deleteUser:k,updateUser:x},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return console.log("init users from reducer"),t.data;case"NEW_USER":return e.concat(t.data);default:return e}},S=n(35),U=Object(a.combineReducers)({blogs:b,notification:w,user:O,users:C}),T=Object(a.createStore)(U,Object(S.composeWithDevTools)(Object(a.applyMiddleware)(r.a))),B=n(0),_=n.n(B),I=n(17),L=n.n(I),A=n(3),R=n(4),D=n(13),G=function(e){var t=e.user;return _.a.createElement(_.a.Fragment,null,_.a.createElement("li",null,_.a.createElement(R.c,{to:"/blogs"},"Blogs")),_.a.createElement("li",null,_.a.createElement(R.c,{to:"/users"},"Users")),_.a.createElement("li",null,_.a.createElement(R.c,{to:"/logout"},"Log out")),_.a.createElement("li",null,_.a.createElement(R.c,{to:"/"},null!==t?"Hello, ".concat(t.username):"")))},M=function(){return _.a.createElement(_.a.Fragment,null,_.a.createElement("li",null,_.a.createElement(R.c,{to:"/signup",className:"btn pink"},"Sign up")),_.a.createElement("li",null,_.a.createElement(R.c,{to:"/login",className:"btn pink"},"Log in")))},W=function(e){var t=e.user;return _.a.createElement("nav",{className:"nav-wrapper red lighten-2"},_.a.createElement("div",{className:"container"},_.a.createElement(R.b,{to:"/",className:"brand-logo left"},"Bloglist"),_.a.createElement("ul",{className:"right"},null!==t?_.a.createElement(G,{user:t}):_.a.createElement(M,null))))},z={notificationChange:h},F=Object(A.b)(function(e){return{notification:e.notification}},z)(function(e){var t={border:"solid",padding:10,borderWidth:1};return _.a.createElement("div",{style:t},e.notification?e.notification:t.border="")}),J=n(19),V=function(e){var t=Object(B.useState)(""),n=Object(J.a)(t,2),a=n[0],r=n[1];return{type:e,value:a,onChange:function(e){r(e.target.value)}}},P={login:function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},H={setUser:N,notificationChange:h},q=Object(D.f)(Object(A.b)(function(e){return{user:e.user}},H)(function(e){var t=V("text"),n=V("password"),a=function(){var a=Object(l.a)(o.a.mark(function a(r){var c;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,a.next=4,P.login({username:t.value,password:n.value});case 4:c=a.sent,E.setToken(c.token),window.localStorage.setItem("loggedBlogAppUser",JSON.stringify(c)),console.log(c.name,"logged in"),e.setUser(c),e.history.push("/"),a.next=17;break;case 12:a.prev=12,a.t0=a.catch(1),e.notificationChange("Something went wrong: ",a.t0.message),setTimeout(function(){return e.notificationChange("")},4e3),console.log("Something went wrong! ",a.t0.message);case 17:case"end":return a.stop()}},a,null,[[1,12]])}));return function(e){return a.apply(this,arguments)}}();return _.a.createElement("div",{className:"container section"},_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col s12 m10"},_.a.createElement("h1",null,"Log in"),_.a.createElement("form",{onSubmit:a},_.a.createElement("div",null,"username",_.a.createElement("input",t)),_.a.createElement("div",null,"password",_.a.createElement("input",n)),_.a.createElement("button",{className:"btn",type:"submit"},"login")))))})),K={setUser:N},Q=Object(D.f)(Object(A.b)(function(e){return{user:e.user}},K)(function(e){console.log(e);return window.localStorage.removeItem("loggedBlogAppUser"),e.setUser(null),console.log("".concat(e.user.username," logged out")),e.history.push("/login"),_.a.createElement("div",null,_.a.createElement("p",null,"logout"))})),X=Object(A.b)(null,{notificationChange:h})(function(e){var t=V("text"),n=V("text"),a=V("password"),r=function(){var t=Object(l.a)(o.a.mark(function t(n){var a,r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a={name:n.target.name.value,username:n.target.username.value,password:n.target.password.value},t.prev=2,t.next=5,j.createUser(a);case 5:r=t.sent,e.notificationChange("".concat(r.name,", thank you for signing up for our services!")),setTimeout(function(){return e.notificationChange("")},6e3),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(2),e.notificationChange("".concat(t.t0.message,"!")),setTimeout(function(){return e.notificationChange("")},6e3),console.log(t.t0);case 15:case"end":return t.stop()}},t,null,[[2,10]])}));return function(e){return t.apply(this,arguments)}}();return _.a.createElement("div",{className:"container section"},_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col s12 m10"},_.a.createElement("h1",null,"Sign up for our wonderful service "),_.a.createElement("h3",null,"- almost free!"),_.a.createElement("form",{onSubmit:r},_.a.createElement("div",null,"Name",_.a.createElement("input",Object.assign({name:"name"},t))),_.a.createElement("div",null,_.a.createElement("div",null,"Username",_.a.createElement("input",Object.assign({name:"username"},n))),"Password",_.a.createElement("input",Object.assign({name:"password"},a))),_.a.createElement("button",{className:"btn",type:"submit"},"Sign up")))))}),Y=Object(A.b)(function(e){return{users:e.users}},{})(function(e){return _.a.createElement("div",{className:"container"},_.a.createElement("h1",null,"Users"),_.a.createElement("table",{className:"striped"},_.a.createElement("thead",null,_.a.createElement("tr",null,_.a.createElement("th",null,"Username"),_.a.createElement("th",null,"Blogs created"))),_.a.createElement("tbody",null,e.users.map(function(e){return _.a.createElement("tr",{key:e.id},_.a.createElement("td",null,_.a.createElement(R.b,{to:"/users/".concat(e.id)},e.username)),_.a.createElement("td",null,e.blogs.length))}))))}),Z={deleteBlog:function(e){if(console.log("delete blog"),window.confirm("Are you sure???"))return function(){var t=Object(l.a)(o.a.mark(function t(n){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.deleteBlog(e);case 2:n({type:"DELETE_BLOG",data:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},updateLike:v},$=Object(A.b)(function(e){return{blogs:e.blogs}},Z)(function(e){return _.a.createElement("div",null,_.a.createElement("ul",{className:"collection"},e.blogs.map(function(t){return _.a.createElement("li",{className:"collection-item",key:t.id},_.a.createElement(R.b,{to:"/blogs/".concat(t.id)},t.title),_.a.createElement("button",{className:"btn btn-small secondary-content valign-wrapper pink",onClick:function(){return e.deleteBlog(t.id)}},_.a.createElement("i",{className:"material-icons"},"delete")),_.a.createElement("button",{className:"btn btn-small secondary-content valign-wrapper pink",onClick:function(){return e.updateLike(t)}},t.likes,_.a.createElement("i",{className:"material-icons right"},"thumb_up")))})))}),ee=function(){return _.a.createElement("div",{className:"container"},_.a.createElement("h1",null,"Blogs"),_.a.createElement($,null))},te=_.a.forwardRef(function(e,t){var n=Object(B.useState)(!1),a=Object(J.a)(n,2),r=a[0],c=a[1],o={display:r?"none":""},l={display:r?"":"none"},u=function(){c(!r)};return Object(B.useImperativeHandle)(t,function(){return{toggleVisibility:u}}),_.a.createElement("div",null,_.a.createElement("div",{style:o},_.a.createElement("button",{className:"btn",onClick:u},e.buttonLabel)),_.a.createElement("div",{style:l,className:"togglableContent"},e.children,_.a.createElement("button",{className:"btn",onClick:u},"cancel")))}),ne={addComment:function(e,t){return console.log("action creator",e,"blog to add comment to: ",t),function(){var n=Object(l.a)(o.a.mark(function n(a){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.updateComment(e,t);case 2:r=n.sent,console.log("updating comments...new blog:",r),a({type:"ADD_COMMENT",data:r});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},updateLike:v},ae=Object(A.b)(function(e){return{users:e.users}},ne)(function(e){var t=e.blog,n=_.a.createRef();return void 0===t?_.a.createElement("p",null,"loading..."):_.a.createElement("div",{className:"container section"},_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col s12 m10"},_.a.createElement("h1",null,t.title),_.a.createElement("p",null,"by ",t.author),_.a.createElement("span",null," added by "),_.a.createElement(R.b,{to:"/users/".concat(t.user.id)},t.user.username),_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col"},_.a.createElement("button",{className:"btn pink",onClick:function(){return e.updateLike(t)}},t.likes," ",_.a.createElement("i",{className:"material-icons right"},"thumb_up")),_.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"http://".concat(t.url),className:"btn pink"},"Read it here!"))),_.a.createElement("ul",{className:"collection with-header"},_.a.createElement("li",{className:"collection-header"},_.a.createElement("h4",null,"Comments")),t.comments.map(function(e){return _.a.createElement("li",{className:"collection-item",key:e._id},e.comment)})),_.a.createElement(te,{buttonLabel:"Add comment",ref:n},_.a.createElement("form",{onSubmit:function(n){n.preventDefault(),console.log(n.target.comment.value);var a={comment:n.target.comment.value};e.addComment(a,t)}},_.a.createElement("input",{name:"comment"}),_.a.createElement("button",{className:"btn",type:"submit"},"add comment"))))))}),re=Object(A.b)(null,{createBlog:function(e){return console.log("creating blog.."),function(){var t=Object(l.a)(o.a.mark(function t(n){var a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.create(e);case 2:a=t.sent,n({type:"NEW_BLOG",data:a});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},notificationChange:h})(function(e){var t=_.a.createRef(),n=function(){var n=Object(l.a)(o.a.mark(function n(a){var r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),r={title:a.target.title.value,author:a.target.author.value,url:a.target.url.value,likes:0},n.prev=2,n.next=5,e.createBlog(r);case 5:e.notificationChange("".concat(r.title," was created")),setTimeout(function(){return e.notificationChange("")},4e3),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(2),e.notificationChange("".concat(n.t0.message,"!")),setTimeout(function(){return e.notificationChange("")},6e3);case 13:return n.prev=13,t.current.toggleVisibility(),n.finish(13);case 16:case"end":return n.stop()}},n,null,[[2,9,13,16]])}));return function(e){return n.apply(this,arguments)}}();return _.a.createElement(te,{buttonLabel:"New blog",ref:t},_.a.createElement("h2",null,"Create new blog"),_.a.createElement("div",{className:"row "},_.a.createElement("div",{className:"col s12"},_.a.createElement("form",{onSubmit:n},_.a.createElement("div",{className:"input-field"},"Title",_.a.createElement("input",{name:"title"})),_.a.createElement("div",{className:"input-field"},"Author",_.a.createElement("input",{name:"author"})),_.a.createElement("div",{className:"input-field"},"Url",_.a.createElement("input",{id:"url",name:"url"})),_.a.createElement("div",null,_.a.createElement("input",{className:"btn",type:"submit",value:"Create"}))))))}),ce={notificationChange:h},oe=Object(A.b)(function(e){return{notification:e.notification}},ce)(function(){return _.a.createElement("div",{className:"container section"},_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col s12 m10"},_.a.createElement("h1",null,"Blog app"),_.a.createElement(re,null),_.a.createElement($,null))))}),le=function(e){var t=e.user;return void 0===t?_.a.createElement("p",null,"nothing to show yet...loading..."):_.a.createElement("div",{className:"container section"},_.a.createElement("div",{className:"row"},_.a.createElement("div",{className:"col s12 m10"},_.a.createElement("h1",null,t.name," ",t.username),_.a.createElement("ul",{className:"collection with-header"},_.a.createElement("li",{className:"collection-header"},_.a.createElement("h4",null,"Blogs added")),t.blogs.map(function(e){return _.a.createElement("li",{className:"collection-item",key:e.id},_.a.createElement("span",null,_.a.createElement(R.b,{to:"../blogs/".concat(e.id)},e.title),"  "),_.a.createElement("span",null,"by ",e.author," "),_.a.createElement("span",{className:"btn pink secondary-content"},e.likes,_.a.createElement("i",{className:"material-icons small  right"},"thumb_up")))})))))},ue={initializeBlogs:function(){return console.log("initialize blogs"),function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.getAll();case 2:n=e.sent,console.log("dispatching",n),t({type:"INIT_BLOGS",data:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},setUser:N,initUser:function(){return function(){var e=Object(l.a)(o.a.mark(function e(t){var n,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("init user..."),(n=window.localStorage.getItem("loggeBlogAppUser"))?(a=JSON.parse(n),console.log("inituser",a),t({type:"INIT_USER",data:a})):console.log("no user in localstorage");case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},initUsers:function(){return function(){var e=Object(l.a)(o.a.mark(function e(t){var n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("init users..."),e.next=3,j.getAll();case 3:n=e.sent,console.log(n),t({type:"INIT_USERS",data:n});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},se=Object(A.b)(function(e){return{user:e.user,blogs:e.blogs,users:e.users,notification:e.notification}},ue)(function(e){console.log("get state user from app",e),Object(B.useEffect)(function(){e.initializeBlogs()},[]),Object(B.useEffect)(function(){e.initUsers()},[]),Object(B.useEffect)(function(){e.initUser()},[]);return _.a.createElement("div",{className:"App"},_.a.createElement(R.a,null,_.a.createElement(W,{user:e.user}),_.a.createElement(F,null),_.a.createElement(D.c,null,_.a.createElement(D.a,{exact:!0,path:"/",render:function(){return _.a.createElement(oe,null)}}),_.a.createElement(D.a,{exact:!0,path:"/users",render:function(){return _.a.createElement(Y,null)}}),_.a.createElement(D.a,{exact:!0,path:"/users/:id",render:function(t){var n,a=t.match;return _.a.createElement(le,{user:(n=a.params.id,e.users.find(function(e){return e.id===n}))})}}),_.a.createElement(D.a,{exact:!0,path:"/blogs",render:function(){return _.a.createElement(ee,null)}}),_.a.createElement(D.a,{exact:!0,path:"/blogs/:id",render:function(t){var n,a=t.match;return _.a.createElement(ae,{blog:(n=a.params.id,e.blogs.find(function(e){return e.id===n}))})}}),_.a.createElement(D.a,{path:"/signup",render:function(){return _.a.createElement(X,null)}}),_.a.createElement(D.a,{path:"/logout",render:function(){return _.a.createElement(Q,null)}}),_.a.createElement(D.a,{path:"/login",render:function(){return _.a.createElement(q,null)}}))),_.a.createElement("div",{height:"200"}))});L.a.render(_.a.createElement(A.a,{store:T},_.a.createElement(se,null)),document.getElementById("root")),T.subscribe(function(){var e=T.getState();console.log("this is index.js, current status of store: ",e)})}},[[39,1,2]]]);
//# sourceMappingURL=main.9fb6bd33.chunk.js.map