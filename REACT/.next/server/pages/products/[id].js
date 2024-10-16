(()=>{var e={};e.id=304,e.ids=[304,888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},7736:e=>{e.exports={product:"product_product__k3_pl",container:"product_container__0OrCE",image:"product_image__cQBEu",middle:"product_middle__qRfIG",text:"product_text__zc1wb"}},4135:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>N,default:()=>j,getServerSideProps:()=>k,getStaticPaths:()=>P,getStaticProps:()=>S,reportWebVitals:()=>C,routeModule:()=>O,unstable_getServerProps:()=>A,unstable_getServerSideProps:()=>R,unstable_getStaticParams:()=>I,unstable_getStaticPaths:()=>q,unstable_getStaticProps:()=>E});var s={};r.r(s),r.d(s,{default:()=>_,getStaticPaths:()=>b,getStaticProps:()=>w});var a=r(7093),i=r(5244),n=r(1323),o=r(5949),l=r(8161),c=r(997),d=r(580),u=r.n(d),p=r(6689);r(9905);var h=r(4829),m=r(5675),g=r.n(m);r(7736),r(1664);var x=r(8955),f=r.n(x);let y=({images:e,open:t})=>(0,c.jsxs)("div",{style:{width:"400px",height:"auto",marginLeft:"auto",marginRight:"auto"},id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[c.jsx("ol",{className:"carousel-indicators",children:e.map((e,t)=>c.jsx("li",{"data-target":"#carouselExampleIndicators","data-slide-to":t.toString(),className:0===t?"active":""},t))}),c.jsx("div",{className:"carousel-inner",children:e.map((r,s)=>c.jsx("div",{onClick:t,className:`carousel-item ${e[0]==r?"active":""}`,children:c.jsx(g(),{className:"d-block w-100",src:r.image,alt:"First slide",style:{width:"50%"}})},s))}),(0,c.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev",children:[c.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"Previous"})]}),(0,c.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next",children:[c.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),c.jsx("span",{className:"sr-only",children:"Next"})]})]});y.propTypes={images:u().any.isRequired,open:u().any.isRequired};let v=({product:e})=>{let[t,r]=(0,p.useState)(!1),[s,a]=(0,p.useState)(0);(0,p.useEffect)(()=>{r(!1),a(0)},[]);let i=(0,p.useCallback)(e=>{a(e),r(!0)},[]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"row",children:[c.jsx("div",{style:{cursor:"pointer"},className:"col text-center",children:c.jsx(y,{images:e.images,open:i})}),(0,c.jsxs)("div",{className:"col",children:[c.jsx("h1",{children:e.name}),(0,c.jsxs)("h2",{children:["฿",e.price]})," ",c.jsx("hr",{}),c.jsx("p",{children:"At KMITL Union Shop, we take pride in offering a wide range of clothing and products that are customized for the KMITL family and guests. Our goal is to provide high-quality items that reflect the spirit of our community and enhance your experience."}),c.jsx("p",{children:"Thank you for being a part of our KMITL family, and we look forward to serving you!"}),c.jsx(h.Z,{id:e.id,image:e.images[0].image,price:e.price,name:e.name,size:40,children:c.jsx("div",{type:"button",className:"btn btn-primary btn-lg btn-block",children:"Add To Cart!"})})]})]}),c.jsx("br",{}),t&&c.jsx(f(),{src:e.images.map(e=>e.image),currentIndex:s,onClose:()=>{a(0),r(!1)},backgroundStyle:{backgroundColor:"rgba(0,0,0,0.9)"}})]})},w=async e=>{try{let t=await fetch(`http://localhost:8000/api/product-detail/${e.params.id}`);if(!t.ok)throw Error(`Failed to fetch product details, received status ${t.status}`);return{props:{product:await t.json()}}}catch(e){return console.error("Failed to fetch product details:",e),{props:{product:null},notFound:!0}}},b=async()=>{try{let e=await fetch("http://localhost:8000/api/product-list");if(!e.ok)throw Error(`Failed to fetch product list, received status ${e.status}`);return{paths:(await e.json()).map(e=>e.id.toString()).map(e=>({params:{id:e}})),fallback:!1}}catch(e){return console.error("Failed to fetch product list:",e),{paths:[],fallback:!1}}},_=v;v.propTypes={product:u().any.isRequired};let j=(0,n.l)(s,"default"),S=(0,n.l)(s,"getStaticProps"),P=(0,n.l)(s,"getStaticPaths"),k=(0,n.l)(s,"getServerSideProps"),N=(0,n.l)(s,"config"),C=(0,n.l)(s,"reportWebVitals"),E=(0,n.l)(s,"unstable_getStaticProps"),q=(0,n.l)(s,"unstable_getStaticPaths"),I=(0,n.l)(s,"unstable_getStaticParams"),A=(0,n.l)(s,"unstable_getServerProps"),R=(0,n.l)(s,"unstable_getServerSideProps"),O=new a.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/products/[id]",pathname:"/products/[id]",bundlePath:"",filename:""},components:{App:l.default,Document:o.default},userland:s})},4829:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var s=r(997),a=r(580),i=r.n(a),n=r(6689),o=r(9905);require("react-spinners/BeatLoader");let l=({children:e,name:t,id:r,price:a,image:i,size:l,action:c="add",useSpinner:d=!0})=>{let[u,p]=(0,n.useState)(!1);(0,o.useStoreActions)(e=>e.cart.setCart);let h=(0,o.useStoreState)(e=>e.auth.token),m=(0,o.useStoreActions)(e=>e.cart.addToCartGuest),g=(0,o.useStoreActions)(e=>e.cart.addItem),x=(0,o.useStoreActions)(e=>e.toaster.setNotification),f=(0,o.useStoreActions)(e=>e.toaster.popNotification);return s.jsx(s.Fragment,{children:!1===u?s.jsx("a",{onClick:function(e){e.preventDefault(),!1===u&&(d&&p(!0),""!==h?g({action:c,id:r,token:h,callback:p,popNotification:f}):(m({name:t,id:r,price:a,image:i,quantity:"add"===c?1:-1}),setTimeout(function(){f()},5e3),p(!1)),x({message:`${t} was ${"add"===c?"added to":"removed from"} cart!`,img:i}))},children:e}):s.jsx("div",{className:"text-center",children:s.jsx("div",{className:"spinner-border",role:"status",style:{height:l,width:l,color:"#c23616"},children:s.jsx("span",{className:"sr-only",children:"Loading..."})})})})};l.propTypes={children:i().any.isRequired,name:i().any.isRequired,id:i().any.isRequired,price:i().any.isRequired,image:i().any.isRequired,size:i().any.isRequired,action:i().any.isRequired,useSpinner:i().any.isRequired};let c=l},8245:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let s=function(e){return e&&e.__esModule?e:{default:e}}(r(6689)),a=r(3288);class i extends s.default.Component{constructor(e){super(e),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleClick=this.handleClick.bind(this),this.handleWheel=this.handleWheel.bind(this),this.callOnClose=this.callOnClose.bind(this),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("wheel",this.handleWheel),this.state={currentIndex:void 0===this.props.currentIndex?0:this.props.currentIndex}}componentWillUnmount(){document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("wheel",this.handleWheel)}changeImage(e){let t=this.state.currentIndex+e;t>this.props.src.length-1?t=0:t<0&&(t=this.props.src.length-1),this.setState({currentIndex:t})}callOnClose(){void 0!==this.props.onClose&&this.props.onClose()}handleKeyDown(e){"Escape"===e.key&&this.callOnClose(),["ArrowLeft","h"].includes(e.key)&&this.changeImage(-1),["ArrowRight","l"].includes(e.key)&&this.changeImage(1)}handleClick(e){e.target&&"ReactSimpleImageViewer"===e.target.id&&this.callOnClose()}handleWheel(e){e.wheelDeltaY>0?this.changeImage(-1):this.changeImage(1)}render(){let{src:e}=this.props,{currentIndex:t}=this.state;return s.default.createElement(a.Wrapper,{id:"ReactSimpleImageViewer",onKeyDown:this.handleKeyDown,onClick:this.handleClick,className:"react-simple-image-viewer__modal",style:this.props.backgroundStyle},s.default.createElement(a.Close,{className:"react-simple-image-viewer__close",onClick:this.callOnClose},"\xd7"),e.length>1&&s.default.createElement(a.Prev,{className:"react-simple-image-viewer__previous",onClick:()=>this.changeImage(-1)},"❮"),e.length>1&&s.default.createElement(a.Next,{className:"react-simple-image-viewer__next",onClick:()=>this.changeImage(1)},"❯"),s.default.createElement(a.Content,{className:"react-simple-image-viewer__modal-content"},s.default.createElement(a.Slide,{className:"react-simple-image-viewer__slide"},s.default.createElement(a.Image,{src:e[t],alt:""}))))}}t.default=i},8955:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)Object.prototype.hasOwnProperty.call(t,r)||(t[r]=e[r])}(r(8245))},3288:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});let s=function(e){return e&&e.__esModule?e:{default:e}}(r(7518));t.Wrapper=s.default.div`
  z-index: 1;
  display: flex;
  align-items: center;
  position: fixed;
  padding: 0px 60px 0px 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  box-sizing: border-box;
`,t.Content=s.default.div`
  margin: auto;
  padding: 0;
  width: auto;
  height: auto;
  max-height: 100%;
  text-align: center;
`,t.Slide=s.default.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,t.Image=s.default.img`
  max-height: 100%;
  max-width: 100%;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
`,t.Close=s.default.span`
  color: white;
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 40px;
  font-weight: bold;
  opacity: .2;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`,t.Navigation=s.default.span`
  height: 80%;
  color: white;
  cursor: pointer;
  position: absolute;
  font-size: 60px;
  line-height: 60px;
  font-weight: bold;
  display: flex;
  align-items: center;
  opacity: .2;
  padding: 0 15px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;

  &:hover {
    opacity: 1;
  }
`,t.Prev=s.default(t.Navigation)`
  left: 0;
`,t.Next=s.default(t.Navigation)`
  right: 0;
`},5949:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var s=r(997),a=r(6859),i=r.n(a),n=r(6177);class o extends i(){render(){return(0,s.jsxs)(a.Html,{children:[(0,s.jsxs)(a.Head,{children:[s.jsx("script",{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${n.vt}`}),s.jsx("script",{dangerouslySetInnerHTML:{__html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${n.vt}', {
              page_path: window.location.pathname,
            });
          `}})]}),(0,s.jsxs)("body",{children:[s.jsx(a.Main,{}),s.jsx(a.NextScript,{})]})]})}}},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},9905:e=>{"use strict";e.exports=require("easy-peasy")},9034:e=>{"use strict";e.exports=require("framer-motion")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},580:e=>{"use strict";e.exports=require("prop-types")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},3082:e=>{"use strict";e.exports=require("react-ga")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[567,16,859,161],()=>r(4135));module.exports=s})();