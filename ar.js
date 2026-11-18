(()=>{var $o="160",ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Dc=1,Eu=2;var fh=1,wu=2,yn=3,Hn=0,Be=1,Ze=2;var Fn=0,Fi=1,Uc=2,Nc=3,Oc=4,Tu=5,Qn=100,Au=101,Ru=102,Fc=103,Bc=104,Cu=200,Pu=201,Lu=202,Iu=203,no=204,io=205,Du=206,Uu=207,Nu=208,Ou=209,Fu=210,Bu=211,zu=212,ku=213,Hu=214,Vu=0,Gu=1,Wu=2,mr=3,Xu=4,qu=5,Yu=6,Zu=7,jo=0,Ju=1,Ku=2,Bn=0,$u=1,ju=2,Qu=3,td=4,ed=5,nd=6;var ph=300,ki=301,Hi=302,so=303,ro=304,jr=306,ao=1e3,nn=1001,oo=1002,Fe=1003,zc=1004;var ba=1005;var Ye=1006,id=1007;var fs=1008;var zn=1009,sd=1010,rd=1011,Qo=1012,mh=1013,Nn=1014,On=1015,ps=1016,gh=1017,_h=1018,ni=1020,ad=1021,sn=1023,od=1024,cd=1025,ii=1026,Vi=1027,ld=1028,xh=1029,hd=1030,yh=1031,vh=1033,Sa=33776,Ea=33777,wa=33778,Ta=33779,kc=35840,Hc=35841,Vc=35842,Gc=35843,Mh=36196,Wc=37492,Xc=37496,qc=37808,Yc=37809,Zc=37810,Jc=37811,Kc=37812,$c=37813,jc=37814,Qc=37815,tl=37816,el=37817,nl=37818,il=37819,sl=37820,rl=37821,Aa=36492,al=36494,ol=36495,ud=36283,cl=36284,ll=36285,hl=36286;var gr=2300,_r=2301,Ra=2302,ul=2400,dl=2401,fl=2402;var bh=3e3,si=3001,dd=3200,fd=3201,tc=0,pd=1,Je="",de="srgb",Mn="srgb-linear",ec="display-p3",Qr="display-p3-linear",xr="linear",ie="srgb",yr="rec709",vr="p3";var fi=7680;var pl=519,md=512,gd=513,_d=514,Sh=515,xd=516,yd=517,vd=518,Md=519,co=35044,nc=35048;var ml="300 es",lo=1035,vn=2e3,Mr=2001,un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=1234567,os=Math.PI/180,ms=180/Math.PI;function hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function ic(i,t){return(i%t+t)%t}function bd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Sd(i,t,e){return i!==t?(e-i)/(t-i):0}function cs(i,t,e){return(1-e)*i+e*t}function Ed(i,t,e,n){return cs(i,t,1-Math.exp(-e*n))}function wd(i,t=1){return t-Math.abs(ic(i,t*2)-t)}function Td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cd(i,t){return i+Math.random()*(t-i)}function Pd(i){return i*(.5-Math.random())}function Ld(i){i!==void 0&&(gl=i);let t=gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Id(i){return i*os}function Dd(i){return i*ms}function ho(i){return(i&i-1)===0&&i!==0}function Ud(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function br(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Nd(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ls={DEG2RAD:os,RAD2DEG:ms,generateUUID:hn,clamp:be,euclideanModulo:ic,mapLinear:bd,inverseLerp:Sd,lerp:cs,damp:Ed,pingpong:wd,smoothstep:Td,smootherstep:Ad,randInt:Rd,randFloat:Cd,randFloatSpread:Pd,seededRandom:Ld,degToRad:Id,radToDeg:Dd,isPowerOfTwo:ho,ceilPowerOfTwo:Ud,floorPowerOfTwo:br,setQuaternionFromProperEuler:Nd,normalize:Qt,denormalize:ln},tt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},qt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=s[0],m=s[3],f=s[6],v=s[1],_=s[4],E=s[7],L=s[2],T=s[5],A=s[8];return r[0]=o*x+a*v+c*L,r[3]=o*m+a*_+c*T,r[6]=o*f+a*E+c*A,r[1]=l*x+h*v+u*L,r[4]=l*m+h*_+u*T,r[7]=l*f+h*E+u*A,r[2]=d*x+p*v+g*L,r[5]=d*m+p*_+g*T,r[8]=d*f+p*E+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,p=l*r-o*c,g=e*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ca.makeScale(t,e)),this}rotate(t){return this.premultiply(Ca.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ca.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ca=new qt;function Eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Od(){let i=gs("canvas");return i.style.display="block",i}var _l={};function ls(i){i in _l||(_l[i]=!0,console.warn(i))}var xl=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yl=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),zs={[Mn]:{transfer:xr,primaries:yr,toReference:i=>i,fromReference:i=>i},[de]:{transfer:ie,primaries:yr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qr]:{transfer:xr,primaries:vr,toReference:i=>i.applyMatrix3(yl),fromReference:i=>i.applyMatrix3(xl)},[ec]:{transfer:ie,primaries:vr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(yl),fromReference:i=>i.applyMatrix3(xl).convertLinearToSRGB()}},Fd=new Set([Mn,Qr]),te={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Fd.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=zs[t].toReference,s=zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return zs[i].primaries},getTransfer:function(i){return i===Je?xr:zs[i].transfer}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,Sr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=gs("canvas")),pi.width=t.width,pi.height=t.height;let n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=gs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bi(e[n]/255)*255):e[n]=Bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Bd=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=hn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(La(s[o].image)):r.push(La(s[o]))}else r=La(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function La(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Sr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var zd=0,We=class i extends un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=nn,s=nn,r=Ye,o=fs,a=sn,c=zn,l=i.DEFAULT_ANISOTROPY,h=Je){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=hn(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===si?de:Je),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ao:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ao:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===de?si:bh}set encoding(t){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===si?de:Je}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=ph;We.DEFAULT_ANISOTROPY=1;var Se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],g=c[9],x=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,E=(p+1)/2,L=(f+1)/2,T=(h+d)/4,A=(u+x)/4,B=(g+m)/4;return _>E&&_>L?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=T/n,r=A/n):E>L?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=T/s,r=B/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=B/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uo=class extends un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===si?de:Je),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new We(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends uo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fo=class extends We{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Pe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==d||l!==p||h!==g){let m=1-a,f=c*d+l*p+h*g+u*x,v=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let L=Math.sqrt(_),T=Math.atan2(L,f*v);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}let E=a*v;if(c=c*m+d*E,l=l*m+p*E,h=h*m+g*E,u=u*m+x*E,m===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=L,l*=L,h*=L,u*=L}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*p-l*d,t[e+1]=c*g+h*d+l*u-a*p,t[e+2]=l*g+h*p+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u+d*p*g;break;case"YZX":this._x=d*h*u+l*p*g,this._y=l*p*u+d*h*g,this._z=l*h*g-d*p*u,this._w=l*h*u-d*p*g;break;case"XZY":this._x=d*h*u-l*p*g,this._y=l*p*u-d*h*g,this._z=l*h*g+d*p*u,this._w=l*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ia.copy(this).projectOnVector(t),this.sub(Ia)}reflect(t){return this.sub(Ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ia=new P,vl=new Pe,Sn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ks.copy(n.boundingBox)),ks.applyMatrix4(t.matrixWorld),this.union(ks)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ji),Hs.subVectors(this.max,ji),mi.subVectors(t.a,ji),gi.subVectors(t.b,ji),_i.subVectors(t.c,ji),Pn.subVectors(gi,mi),Ln.subVectors(_i,gi),Zn.subVectors(mi,_i);let e=[0,-Pn.z,Pn.y,0,-Ln.z,Ln.y,0,-Zn.z,Zn.y,Pn.z,0,-Pn.x,Ln.z,0,-Ln.x,Zn.z,0,-Zn.x,-Pn.y,Pn.x,0,-Ln.y,Ln.x,0,-Zn.y,Zn.x,0];return!Da(e,mi,gi,_i,Hs)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,mi,gi,_i,Hs))?!1:(Vs.crossVectors(Pn,Ln),e=[Vs.x,Vs.y,Vs.z],Da(e,mi,gi,_i,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},pn=[new P,new P,new P,new P,new P,new P,new P,new P],je=new P,ks=new Sn,mi=new P,gi=new P,_i=new P,Pn=new P,Ln=new P,Zn=new P,ji=new P,Hs=new P,Vs=new P,Jn=new P;function Da(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Jn.fromArray(i,r);let a=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=t.dot(Jn),l=e.dot(Jn),h=n.dot(Jn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var kd=new Sn,Qi=new P,Ua=new P,ri=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);let e=Qi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ua.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Ua)),this.expandByPoint(Qi.copy(t.center).sub(Ua))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},mn=new P,Na=new P,Gs=new P,In=new P,Oa=new P,Ws=new P,Fa=new P,Gi=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Na.copy(t).add(e).multiplyScalar(.5),Gs.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Na);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Gs),a=In.dot(this.direction),c=-In.dot(Gs),l=In.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Na).addScaledVector(Gs,d),p}intersectSphere(t,e){mn.subVectors(t.center,this.origin);let n=mn.dot(this.direction),s=mn.dot(mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,s,r){Oa.subVectors(e,t),Ws.subVectors(n,t),Fa.crossVectors(Oa,Ws);let o=this.direction.dot(Fa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;In.subVectors(this.origin,t);let c=a*this.direction.dot(Ws.crossVectors(In,Ws));if(c<0)return null;let l=a*this.direction.dot(Oa.cross(In));if(l<0||c+l>o)return null;let h=-a*In.dot(Fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,g=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hd,t,Vd)}lookAt(t,e,n){let s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Dn.crossVectors(n,Ve),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Dn.crossVectors(n,Ve)),Dn.normalize(),Xs.crossVectors(Ve,Dn),s[0]=Dn.x,s[4]=Xs.x,s[8]=Ve.x,s[1]=Dn.y,s[5]=Xs.y,s[9]=Ve.y,s[2]=Dn.z,s[6]=Xs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],v=n[3],_=n[7],E=n[11],L=n[15],T=s[0],A=s[4],B=s[8],M=s[12],S=s[1],O=s[5],W=s[9],rt=s[13],I=s[2],F=s[6],V=s[10],$=s[14],K=s[3],Y=s[7],et=s[11],it=s[15];return r[0]=o*T+a*S+c*I+l*K,r[4]=o*A+a*O+c*F+l*Y,r[8]=o*B+a*W+c*V+l*et,r[12]=o*M+a*rt+c*$+l*it,r[1]=h*T+u*S+d*I+p*K,r[5]=h*A+u*O+d*F+p*Y,r[9]=h*B+u*W+d*V+p*et,r[13]=h*M+u*rt+d*$+p*it,r[2]=g*T+x*S+m*I+f*K,r[6]=g*A+x*O+m*F+f*Y,r[10]=g*B+x*W+m*V+f*et,r[14]=g*M+x*rt+m*$+f*it,r[3]=v*T+_*S+E*I+L*K,r[7]=v*A+_*O+E*F+L*Y,r[11]=v*B+_*W+E*V+L*et,r[15]=v*M+_*rt+E*$+L*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*p-n*c*p)+x*(+e*c*p-e*l*d+r*o*d-s*o*p+s*l*h-r*c*h)+m*(+e*l*u-e*a*p-r*o*u+n*o*p+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],v=u*m*l-x*d*l+x*c*p-a*m*p-u*c*f+a*d*f,_=g*d*l-h*m*l-g*c*p+o*m*p+h*c*f-o*d*f,E=h*x*l-g*u*l+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*c-h*x*c-g*a*d+o*x*d+h*a*m-o*u*m,T=e*v+n*_+s*E+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return t[0]=v*A,t[1]=(x*d*r-u*m*r-x*s*p+n*m*p+u*s*f-n*d*f)*A,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*f+n*c*f)*A,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*p-n*c*p)*A,t[4]=_*A,t[5]=(h*m*r-g*d*r+g*s*p-e*m*p-h*s*f+e*d*f)*A,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*f-e*c*f)*A,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*p+e*c*p)*A,t[8]=E*A,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*A,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*p-e*a*p)*A,t[12]=L*A,t[13]=(h*x*s-g*u*s+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*A,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*A,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,v=c*l,_=c*h,E=c*u,L=n.x,T=n.y,A=n.z;return s[0]=(1-(x+f))*L,s[1]=(p+E)*L,s[2]=(g-_)*L,s[3]=0,s[4]=(p-E)*T,s[5]=(1-(d+f))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+_)*A,s[9]=(m-v)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);let l=1/r,h=1/o,u=1/a;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=vn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),p,g;if(a===vn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=vn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,p=(n+s)*h,g,x;if(a===vn)g=(o+r)*u,x=-2*u;else if(a===Mr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xi=new P,Qe=new ee,Hd=new P(0,0,0),Vd=new P(1,1,1),Dn=new P,Xs=new P,Ve=new P,Ml=new ee,bl=new Pe,Tr=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tr.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Gd=0,Sl=new P,yi=new Pe,gn=new ee,qs=new P,ts=new P,Wd=new P,Xd=new Pe,El=new P(1,0,0),wl=new P(0,1,0),Tl=new P(0,0,1),qd={type:"added"},Yd={type:"removed"},Le=class i extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new Tr,n=new Pe,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new qt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.multiply(yi),this}rotateOnWorldAxis(t,e){return yi.setFromAxisAngle(t,e),this.quaternion.premultiply(yi),this}rotateX(t){return this.rotateOnAxis(El,t)}rotateY(t){return this.rotateOnAxis(wl,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(El,t)}translateY(t){return this.translateOnAxis(wl,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?qs.copy(t):qs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(ts,qs,this.up):gn.lookAt(qs,ts,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(gn),this.quaternion.premultiply(yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Wd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Xd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Le.DEFAULT_UP=new P(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new P,_n=new P,Ba=new P,xn=new P,vi=new P,Mi=new P,Al=new P,za=new P,ka=new P,Ha=new P,Ys=!1,ei=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),_n.subVectors(n,e),Ba.subVectors(t,e);let o=tn.dot(tn),a=tn.dot(_n),c=tn.dot(Ba),l=_n.dot(_n),h=_n.dot(Ba),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getUV(t,e,n,s,r,o,a,c){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xn.x),c.addScaledVector(o,xn.y),c.addScaledVector(a,xn.z),c)}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),_n.subVectors(t,e),tn.cross(_n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),tn.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ys===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ys=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;vi.subVectors(s,n),Mi.subVectors(r,n),za.subVectors(t,n);let c=vi.dot(za),l=Mi.dot(za);if(c<=0&&l<=0)return e.copy(n);ka.subVectors(t,s);let h=vi.dot(ka),u=Mi.dot(ka);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(vi,o);Ha.subVectors(t,r);let p=vi.dot(Ha),g=Mi.dot(Ha);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Mi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Al.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Al,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(vi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function Va(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=ic(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Va(o,r,t+1/3),this.g=Va(o,r,t),this.b=Va(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=de){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bi(t.r),this.g=Bi(t.g),this.b=Bi(t.b),this}copyLinearToSRGB(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return te.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=de){te.fromWorkingColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Zs);let n=cs(Un.h,Zs.h,e),s=cs(Un.s,Zs.s,e),r=cs(Un.l,Zs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Vt;Vt.NAMES=wh;var Zd=0,En=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=hn(),this.name="",this.type="Material",this.blending=Fi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dn=class extends En{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var pe=new P,Js=new tt,me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==co&&(t.usage=this.usage),t}};var Ar=class extends me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Rr=class extends me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends me{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Jd=0,qe=new ee,Ga=new Le,bi=new P,Ge=new Sn,es=new Sn,Me=new P,ge=class i extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Rr:Ar)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Kt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(Ge.min,es.min),Ge.expandByPoint(Me),Me.addVectors(Ge.max,es.max),Ge.expandByPoint(Me)):(Ge.expandByPoint(es.min),Ge.expandByPoint(es.max))}Ge.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Me.fromBufferAttribute(a,l),c&&(bi.fromBufferAttribute(t,l),Me.add(bi)),s=Math.max(s,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new me(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new P,h[S]=new P;let u=new P,d=new P,p=new P,g=new tt,x=new tt,m=new tt,f=new P,v=new P;function _(S,O,W){u.fromArray(s,S*3),d.fromArray(s,O*3),p.fromArray(s,W*3),g.fromArray(o,S*2),x.fromArray(o,O*2),m.fromArray(o,W*2),d.sub(u),p.sub(u),x.sub(g),m.sub(g);let rt=1/(x.x*m.y-m.x*x.y);isFinite(rt)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-x.y).multiplyScalar(rt),v.copy(p).multiplyScalar(x.x).addScaledVector(d,-m.x).multiplyScalar(rt),l[S].add(f),l[O].add(f),l[W].add(f),h[S].add(v),h[O].add(v),h[W].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let S=0,O=E.length;S<O;++S){let W=E[S],rt=W.start,I=W.count;for(let F=rt,V=rt+I;F<V;F+=3)_(n[F+0],n[F+1],n[F+2])}let L=new P,T=new P,A=new P,B=new P;function M(S){A.fromArray(r,S*3),B.copy(A);let O=l[S];L.copy(O),L.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(B,O);let rt=T.dot(h[S])<0?-1:1;c[S*4]=L.x,c[S*4+1]=L.y,c[S*4+2]=L.z,c[S*4+3]=rt}for(let S=0,O=E.length;S<O;++S){let W=E[S],rt=W.start,I=W.count;for(let F=rt,V=rt+I;F<V;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let f=0;f<h;f++)d[g++]=l[p++]}return new me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rl=new ee,Kn=new Gi,Ks=new ri,Cl=new P,Si=new P,Ei=new P,wi=new P,Wa=new P,$s=new P,js=new tt,Qs=new tt,tr=new tt,Pl=new P,Ll=new P,Il=new P,er=new P,nr=new P,Jt=class extends Le{constructor(t=new ge,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){$s.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Wa.fromBufferAttribute(u,t),o?$s.addScaledVector(Wa,h):$s.addScaledVector(Wa.sub(e),h))}e.add($s)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Kn.copy(t.ray).recast(t.near),!(Ks.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(Ks,Cl)===null||Kn.origin.distanceToSquared(Cl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),Kn.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Kn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,L=_;E<L;E+=3){let T=a.getX(E),A=a.getX(E+1),B=a.getX(E+2);s=ir(this,f,t,n,l,h,u,T,A,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=a.getX(m),_=a.getX(m+1),E=a.getX(m+2);s=ir(this,o,t,n,l,h,u,v,_,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=v,L=_;E<L;E+=3){let T=E,A=E+1,B=E+2;s=ir(this,f,t,n,l,h,u,T,A,B),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let v=m,_=m+1,E=m+2;s=ir(this,o,t,n,l,h,u,v,_,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Kd(i,t,e,n,s,r,o,a){let c;if(t.side===Be?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Hn,a),c===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nr);return l<e.near||l>e.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Si),i.getVertexPosition(c,Ei),i.getVertexPosition(l,wi);let h=Kd(i,t,e,n,Si,Ei,wi,er);if(h){s&&(js.fromBufferAttribute(s,a),Qs.fromBufferAttribute(s,c),tr.fromBufferAttribute(s,l),h.uv=ei.getInterpolation(er,Si,Ei,wi,js,Qs,tr,new tt)),r&&(js.fromBufferAttribute(r,a),Qs.fromBufferAttribute(r,c),tr.fromBufferAttribute(r,l),h.uv1=ei.getInterpolation(er,Si,Ei,wi,js,Qs,tr,new tt),h.uv2=h.uv1),o&&(Pl.fromBufferAttribute(o,a),Ll.fromBufferAttribute(o,c),Il.fromBufferAttribute(o,l),h.normal=ei.getInterpolation(er,Si,Ei,wi,Pl,Ll,Il,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new P,materialIndex:0};ei.getNormal(Si,Ei,wi,u.normal),h.face=u}return h}var wn=class i extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(h,3)),this.setAttribute("uv",new Kt(u,2));function g(x,m,f,v,_,E,L,T,A,B,M){let S=E/A,O=L/B,W=E/2,rt=L/2,I=T/2,F=A+1,V=B+1,$=0,K=0,Y=new P;for(let et=0;et<V;et++){let it=et*O-rt;for(let mt=0;mt<F;mt++){let X=mt*S-W;Y[x]=X*v,Y[m]=it*_,Y[f]=I,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[f]=T>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(mt/A),u.push(1-et/B),$+=1}}for(let et=0;et<B;et++)for(let it=0;it<A;it++){let mt=d+it+F*et,X=d+it+F*(et+1),st=d+(it+1)+F*(et+1),Z=d+(it+1)+F*et;c.push(mt,X,Z),c.push(X,st,Z),K+=6}a.addGroup(p,K,M),p+=K,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function $d(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){return i.getRenderTarget()===null?i.outputColorSpace:te.workingColorSpace}var jd={clone:Wi,merge:Oe},Qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends En{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qd,this.fragmentShader=tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=$d(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cr=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ce=class extends Cr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ti=-90,Ai=1,po=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(Ti,Ai,t,e);s.layers=this.layers,this.add(s);let r=new Ce(Ti,Ai,t,e);r.layers=this.layers,this.add(r);let o=new Ce(Ti,Ai,t,e);o.layers=this.layers,this.add(o);let a=new Ce(Ti,Ai,t,e);a.layers=this.layers,this.add(a);let c=new Ce(Ti,Ai,t,e);c.layers=this.layers,this.add(c);let l=new Ce(Ti,Ai,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pr=class extends We{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mo=class extends bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===si?de:Je),this.texture=new Pr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wn(5,5,5),r=new Tn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Fn});r.uniforms.tEquirect.value=e;let o=new Jt(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Ye),new po(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Xa=new P,ef=new P,nf=new qt,en=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Xa.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Xa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$n=new ri,sr=new P,xs=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,o=new en){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],v=s[13],_=s[14],E=s[15];if(n[0].setComponents(c-r,d-l,m-p,E-f).normalize(),n[1].setComponents(c+r,d+l,m+p,E+f).normalize(),n[2].setComponents(c+o,d+h,m+g,E+v).normalize(),n[3].setComponents(c-o,d-h,m-g,E-v).normalize(),n[4].setComponents(c-a,d-u,m-x,E-_).normalize(),e===vn)n[5].setComponents(c+a,d+u,m+x,E+_).normalize();else if(e===Mr)n[5].setComponents(a,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sf(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,d=l.usage,p=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,u){let d=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),p.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let x=0,m=g.length;x<m;x++){let f=g[x];e?i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(u,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var ai=class i extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let _=0;_<l;_++){let E=_*u-r;g.push(E,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){let _=v+l*f,E=v+l*(f+1),L=v+1+l*(f+1),T=v+1+l*f;p.push(_,E,T),p.push(E,L,T)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,af=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ff=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_f=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Pf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Of=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$f=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,vp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Mp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,im=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,um=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Am=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:rf,alphahash_pars_fragment:af,alphamap_fragment:of,alphamap_pars_fragment:cf,alphatest_fragment:lf,alphatest_pars_fragment:hf,aomap_fragment:uf,aomap_pars_fragment:df,batching_pars_vertex:ff,batching_vertex:pf,begin_vertex:mf,beginnormal_vertex:gf,bsdfs:_f,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:vf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Sf,color_fragment:Ef,color_pars_fragment:wf,color_pars_vertex:Tf,color_vertex:Af,common:Rf,cube_uv_reflection_fragment:Cf,defaultnormal_vertex:Pf,displacementmap_pars_vertex:Lf,displacementmap_vertex:If,emissivemap_fragment:Df,emissivemap_pars_fragment:Uf,colorspace_fragment:Nf,colorspace_pars_fragment:Of,envmap_fragment:Ff,envmap_common_pars_fragment:Bf,envmap_pars_fragment:zf,envmap_pars_vertex:kf,envmap_physical_pars_fragment:jf,envmap_vertex:Hf,fog_vertex:Vf,fog_pars_vertex:Gf,fog_fragment:Wf,fog_pars_fragment:Xf,gradientmap_pars_fragment:qf,lightmap_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Jf,lights_lambert_pars_fragment:Kf,lights_pars_begin:$f,lights_toon_fragment:Qf,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:ap,lights_fragment_end:op,logdepthbuf_fragment:cp,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:dp,map_pars_fragment:fp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphcolor_vertex:xp,morphnormal_vertex:yp,morphtarget_pars_vertex:vp,morphtarget_vertex:Mp,normal_fragment_begin:bp,normal_fragment_maps:Sp,normal_pars_fragment:Ep,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Ip,packing:Dp,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Op,dithering_pars_fragment:Fp,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Gp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:$p,transmission_fragment:jp,transmission_pars_fragment:Qp,uv_pars_fragment:tm,uv_pars_vertex:em,uv_vertex:nm,worldpos_vertex:im,background_vert:sm,background_frag:rm,backgroundCube_vert:am,backgroundCube_frag:om,cube_vert:cm,cube_frag:lm,depth_vert:hm,depth_frag:um,distanceRGBA_vert:dm,distanceRGBA_frag:fm,equirect_vert:pm,equirect_frag:mm,linedashed_vert:gm,linedashed_frag:_m,meshbasic_vert:xm,meshbasic_frag:ym,meshlambert_vert:vm,meshlambert_frag:Mm,meshmatcap_vert:bm,meshmatcap_frag:Sm,meshnormal_vert:Em,meshnormal_frag:wm,meshphong_vert:Tm,meshphong_frag:Am,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Pm,meshtoon_frag:Lm,points_vert:Im,points_frag:Dm,shadow_vert:Um,shadow_frag:Nm,sprite_vert:Om,sprite_frag:Fm},vt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},cn={basic:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Oe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Oe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Oe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Oe([vt.points,vt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Oe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Oe([vt.common,vt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Oe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Oe([vt.sprite,vt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Oe([vt.common,vt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Oe([vt.lights,vt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};cn.physical={uniforms:Oe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var rr={r:0,b:0,g:0};function Bm(i,t,e,n,s,r,o){let a=new Vt(0),c=r===!0?0:1,l,h,u=null,d=0,p=null;function g(m,f){let v=!1,_=f.isScene===!0?f.background:null;_&&_.isTexture&&(_=(f.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new Jt(new wn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Wi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=te.getTransfer(_.colorSpace)!==ie,(u!==_||d!==_.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Jt(new ai(2,2),new Tn({name:"BackgroundMaterial",uniforms:Wi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=te.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,f){m.getRGB(rr,Th(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),c=f,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function zm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(I,F,V,$,K){let Y=!1;if(o){let et=x($,V,F);l!==et&&(l=et,p(l.object)),Y=f(I,$,V,K),Y&&v(I,$,V,K)}else{let et=F.wireframe===!0;(l.geometry!==$.id||l.program!==V.id||l.wireframe!==et)&&(l.geometry=$.id,l.program=V.id,l.wireframe=et,Y=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,B(I,F,V,$),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,F,V){let $=V.wireframe===!0,K=a[I.id];K===void 0&&(K={},a[I.id]=K);let Y=K[F.id];Y===void 0&&(Y={},K[F.id]=Y);let et=Y[$];return et===void 0&&(et=m(d()),Y[$]=et),et}function m(I){let F=[],V=[],$=[];for(let K=0;K<s;K++)F[K]=0,V[K]=0,$[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:$,object:I,attributes:{},index:null}}function f(I,F,V,$){let K=l.attributes,Y=F.attributes,et=0,it=V.getAttributes();for(let mt in it)if(it[mt].location>=0){let st=K[mt],Z=Y[mt];if(Z===void 0&&(mt==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),mt==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),st===void 0||st.attribute!==Z||Z&&st.data!==Z.data)return!0;et++}return l.attributesNum!==et||l.index!==$}function v(I,F,V,$){let K={},Y=F.attributes,et=0,it=V.getAttributes();for(let mt in it)if(it[mt].location>=0){let st=Y[mt];st===void 0&&(mt==="instanceMatrix"&&I.instanceMatrix&&(st=I.instanceMatrix),mt==="instanceColor"&&I.instanceColor&&(st=I.instanceColor));let Z={};Z.attribute=st,st&&st.data&&(Z.data=st.data),K[mt]=Z,et++}l.attributes=K,l.attributesNum=et,l.index=$}function _(){let I=l.newAttributes;for(let F=0,V=I.length;F<V;F++)I[F]=0}function E(I){L(I,0)}function L(I,F){let V=l.newAttributes,$=l.enabledAttributes,K=l.attributeDivisors;V[I]=1,$[I]===0&&(i.enableVertexAttribArray(I),$[I]=1),K[I]!==F&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,F),K[I]=F)}function T(){let I=l.newAttributes,F=l.enabledAttributes;for(let V=0,$=F.length;V<$;V++)F[V]!==I[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function A(I,F,V,$,K,Y,et){et===!0?i.vertexAttribIPointer(I,F,V,K,Y):i.vertexAttribPointer(I,F,V,$,K,Y)}function B(I,F,V,$){if(n.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();let K=$.attributes,Y=V.getAttributes(),et=F.defaultAttributeValues;for(let it in Y){let mt=Y[it];if(mt.location>=0){let X=K[it];if(X===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){let st=X.normalized,Z=X.itemSize,at=e.get(X);if(at===void 0)continue;let nt=at.buffer,yt=at.type,At=at.bytesPerElement,bt=n.isWebGL2===!0&&(yt===i.INT||yt===i.UNSIGNED_INT||X.gpuType===mh);if(X.isInterleavedBufferAttribute){let St=X.data,R=St.stride,ot=X.offset;if(St.isInstancedInterleavedBuffer){for(let J=0;J<mt.locationSize;J++)L(mt.location+J,St.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let J=0;J<mt.locationSize;J++)E(mt.location+J);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let J=0;J<mt.locationSize;J++)A(mt.location+J,Z/mt.locationSize,yt,st,R*At,(ot+Z/mt.locationSize*J)*At,bt)}else{if(X.isInstancedBufferAttribute){for(let St=0;St<mt.locationSize;St++)L(mt.location+St,X.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let St=0;St<mt.locationSize;St++)E(mt.location+St);i.bindBuffer(i.ARRAY_BUFFER,nt);for(let St=0;St<mt.locationSize;St++)A(mt.location+St,Z/mt.locationSize,yt,st,Z*At,Z/mt.locationSize*St*At,bt)}}else if(et!==void 0){let st=et[it];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(mt.location,st);break;case 3:i.vertexAttrib3fv(mt.location,st);break;case 4:i.vertexAttrib4fv(mt.location,st);break;default:i.vertexAttrib1fv(mt.location,st)}}}}T()}function M(){W();for(let I in a){let F=a[I];for(let V in F){let $=F[V];for(let K in $)g($[K].object),delete $[K];delete F[V]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;let F=a[I.id];for(let V in F){let $=F[V];for(let K in $)g($[K].object),delete $[K];delete F[V]}delete a[I.id]}function O(I){for(let F in a){let V=a[F];if(V[I.id]===void 0)continue;let $=V[I.id];for(let K in $)g($[K].object),delete $[K];delete V[I.id]}}function W(){rt(),h=!0,l!==c&&(l=c,p(l.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:W,resetDefaultState:rt,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:E,disableUnusedAttributes:T}}function km(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Hm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,E=o||t.has("OES_texture_float"),L=_&&E,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:T}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new en,a=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:n,_=v*4,E=f.clippingState||null;c.value=E,E=h(g,d,_,p);for(let L=0;L!==_;++L)E[L]=e[L];f.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let f=p+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,E=p;_!==x;++_,E+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,E),m[E+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Gm(i){let t=new WeakMap;function e(o,a){return a===so?o.mapping=ki:a===ro&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===so||a===ro)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new mo(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lr=class extends Cr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ui=4,Dl=[.125,.215,.35,.446,.526,.582],ti=20,qa=new Lr,Ul=new Vt,Ya=null,Za=0,Ja=0,jn=(1+Math.sqrt(5))/2,Ri=1/jn,Nl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,jn,Ri),new P(0,jn,-Ri),new P(Ri,0,jn),new P(-Ri,0,jn),new P(jn,Ri,0),new P(-jn,Ri,0)],Ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,Za,Ja),t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),Za=this._renderer.getActiveCubeFace(),Ja=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ps,format:sn,colorSpace:Mn,depthBuffer:!1},s=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=Xm(r,t,e)}return s}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,s){let a=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ul),h.toneMapping=Bn,h.autoClear=!1;let p=new dn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),g=new Jt(new wn,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ul),x=!0);for(let f=0;f<6;f++){let v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let _=this._cubeSize;ar(s,v*_,f>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Jt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nl[(s-1)%Nl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Jt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);let f=[],v=0;for(let A=0;A<ti;++A){let B=A/x,M=Math.exp(-B*B/2);f.push(M),A===0?v+=M:A<m&&(v+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;let E=this._sizeLods[s],L=3*E*(s>_-Ui?s-_+Ui:0),T=4*(this._cubeSize-E);ar(e,L,T,3*E,2*E),c.setRenderTarget(e),c.render(u,qa)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-Ui+1+Dl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ui?c=Dl[o-i+Ui-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let T=0;T<p;T++){let A=T%3*2/3-1,B=T>2?0:-1,M=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];v.set(M,x*g*T),_.set(d,m*g*T);let S=[T,T,T,T,T,T];E.set(S,f*g*T)}let L=new ge;L.setAttribute("position",new me(v,x)),L.setAttribute("uv",new me(_,m)),L.setAttribute("faceIndex",new me(E,f)),t.push(L),s>Ui&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(i,t,e){let n=new bn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Xm(i,t,e){let n=new Float32Array(ti),s=new P(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Fl(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Bl(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===so||c===ro,h=c===ki||c===Hi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new Ir(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ir(i));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let _=0,E=v.length;_<E;_+=3){let L=v[_+0],T=v[_+1],A=v[_+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){let v=g.array;x=g.version;for(let _=0,E=v.length/3-1;_<E;_+=3){let L=_+0,T=_+1,A=_+2;d.push(L,T,T,A,A,L)}}else return;let m=new(Eh(d)?Rr:Ar)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jm(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),e.update(g,r,1)}function u(p,g,x){if(x===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,g,a,p*c,x),e.update(g,r,x)}function d(p,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<x;f++)this.render(p[f]/c,g[f]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let f=0;for(let v=0;v<x;v++)f+=g[v];e.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $m(i,t){return i[0]-t[0]}function jm(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Qm(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new Se,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let I=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",I)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,L=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],B=0;v===!0&&(B=1),_===!0&&(B=2),E===!0&&(B=3);let M=h.attributes.position.count*B,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let O=new Float32Array(M*S*4*g),W=new wr(O,M,S,g);W.type=On,W.needsUpdate=!0;let rt=B*4;for(let F=0;F<g;F++){let V=L[F],$=T[F],K=A[F],Y=M*S*4*F;for(let et=0;et<V.count;et++){let it=et*rt;v===!0&&(o.fromBufferAttribute(V,et),O[Y+it+0]=o.x,O[Y+it+1]=o.y,O[Y+it+2]=o.z,O[Y+it+3]=0),_===!0&&(o.fromBufferAttribute($,et),O[Y+it+4]=o.x,O[Y+it+5]=o.y,O[Y+it+6]=o.z,O[Y+it+7]=0),E===!0&&(o.fromBufferAttribute(K,et),O[Y+it+8]=o.x,O[Y+it+9]=o.y,O[Y+it+10]=o.z,O[Y+it+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:W,size:new tt(M,S)},r.set(h,x),h.addEventListener("dispose",I)}let m=0;for(let v=0;v<d.length;v++)m+=d[v];let f=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",f),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let _=0;_<p;_++)g[_]=[_,0];n[h.id]=g}for(let _=0;_<p;_++){let E=g[_];E[0]=_,E[1]=d[_]}g.sort(jm);for(let _=0;_<8;_++)_<p&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort($m);let x=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let _=0;_<8;_++){let E=a[_],L=E[0],T=E[1];L!==Number.MAX_SAFE_INTEGER&&T?(x&&h.getAttribute("morphTarget"+_)!==x[L]&&h.setAttribute("morphTarget"+_,x[L]),m&&h.getAttribute("morphNormal"+_)!==m[L]&&h.setAttribute("morphNormal"+_,m[L]),s[_]=T,f+=T):(x&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),s[_]=0)}let v=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function t0(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Dr=class extends We{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:ii,h!==ii&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ii&&(n=Nn),n===void 0&&h===Vi&&(n=ni),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Rh=new We,Ch=new Dr(1,1);Ch.compareFunction=Sh;var Ph=new wr,Lh=new fo,Ih=new Pr,zl=[],kl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Gl=new Float32Array(4);function Yi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zl[s];if(r===void 0&&(r=new Float32Array(s),zl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=kl[t];e===void 0&&(e=new Int32Array(t),kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),xe(e,t)}}function i0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),xe(e,t)}}function s0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),xe(e,t)}}function r0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),xe(e,n)}}function a0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Vl.set(n),i.uniformMatrix3fv(this.addr,!1,Vl),xe(e,n)}}function o0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;Hl.set(n),i.uniformMatrix4fv(this.addr,!1,Hl),xe(e,n)}}function c0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function l0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),xe(e,t)}}function h0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),xe(e,t)}}function u0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),xe(e,t)}}function d0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function f0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),xe(e,t)}}function p0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),xe(e,t)}}function m0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),xe(e,t)}}function g0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ch:Rh;e.setTexture2D(t||r,s)}function _0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Lh,s)}function x0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ih,s)}function y0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function v0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return a0;case 35676:return o0;case 5124:case 35670:return c0;case 35667:case 35671:return l0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return d0;case 36294:return f0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return y0}}function M0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){let e=Yi(t,this.size,2);i.uniform2fv(this.addr,e)}function S0(i,t){let e=Yi(t,this.size,3);i.uniform3fv(this.addr,e)}function E0(i,t){let e=Yi(t,this.size,4);i.uniform4fv(this.addr,e)}function w0(i,t){let e=Yi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function T0(i,t){let e=Yi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){let e=Yi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function I0(i,t){i.uniform1uiv(this.addr,t)}function D0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Rh,r[o])}function F0(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Lh,r[o])}function B0(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ih,r[o])}function z0(i,t,e){let n=this.cache,s=t.length,r=ta(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),xe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ph,r[o])}function k0(i){switch(i){case 5126:return M0;case 35664:return b0;case 35665:return S0;case 35666:return E0;case 35674:return w0;case 35675:return T0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return I0;case 36294:return D0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}var go=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=v0(e.type)}},_o=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}},xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function Wl(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){let n=i.name,s=n.length;for(Ka.lastIndex=0;;){let r=Ka.exec(n),o=Ka.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Wl(e,l===void 0?new go(a,i,t):new _o(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new xo(a),Wl(e,u)),e=u}}}var zi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);H0(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var V0=37297,G0=0;function W0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function X0(i){let t=te.getPrimaries(te.workingColorSpace),e=te.getPrimaries(i),n;switch(t===e?n="":t===vr&&e===yr?n="LinearDisplayP3ToLinearSRGB":t===yr&&e===vr&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case Qr:return[n,"LinearTransferOETF"];case de:case ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ql(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+W0(i.getShaderSource(t),o)}else return s}function q0(i,t){let e=X0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Y0(i,t){let e;switch(t){case $u:e="Linear";break;case ju:e="Reinhard";break;case Qu:e="OptimizedCineon";break;case td:e="ACESFilmic";break;case nd:e="AgX";break;case ed:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Z0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ni).join(`
`)}function K0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ni(i){return i!==""}function Yl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(j0,tg)}var Q0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function tg(i,t){let e=zt[t];if(e===void 0){let n=Q0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yo(e)}var eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(eg,ng)}function ng(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ig(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function sg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function ag(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:t="ENVMAP_BLENDING_MULTIPLY";break;case Ju:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=ig(e),l=sg(e),h=rg(e),u=ag(e),d=og(e),p=e.isWebGL2?"":Z0(e),g=J0(e),x=K0(r),m=s.createProgram(),f,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ni).join(`
`),f.length>0&&(f+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ni).join(`
`),v.length>0&&(v+=`
`)):(f=[Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),v=[p,Kl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?zt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,q0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=yo(o),o=Yl(o,e),o=Zl(o,e),a=yo(a),a=Yl(a,e),a=Zl(a,e),o=Jl(o),a=Jl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let E=_+f+o,L=_+v+a,T=Xl(s,s.VERTEX_SHADER,E),A=Xl(s,s.FRAGMENT_SHADER,L);s.attachShader(m,T),s.attachShader(m,A),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function B(W){if(i.debug.checkShaderErrors){let rt=s.getProgramInfoLog(m).trim(),I=s.getShaderInfoLog(T).trim(),F=s.getShaderInfoLog(A).trim(),V=!0,$=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,A);else{let K=ql(s,T,"vertex"),Y=ql(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+K+`
`+Y)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(I===""||F==="")&&($=!1);$&&(W.diagnostics={runnable:V,programLog:rt,vertexShader:{log:I,prefix:f},fragmentShader:{log:F,prefix:v}})}s.deleteShader(T),s.deleteShader(A),M=new zi(s,m),S=$0(s,m)}let M;this.getUniforms=function(){return M===void 0&&B(this),M};let S;this.getAttributes=function(){return S===void 0&&B(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,V0)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var lg=0,vo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Mo(t),e.set(t,n)),n}},Mo=class{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}};function hg(i,t,e,n,s,r,o){let a=new _s,c=new vo,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,S,O,W,rt){let I=W.fog,F=rt.geometry,V=M.isMeshStandardMaterial?W.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),K=$&&$.mapping===jr?$.image.height:null,Y=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let et=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=et!==void 0?et.length:0,mt=0;F.morphAttributes.position!==void 0&&(mt=1),F.morphAttributes.normal!==void 0&&(mt=2),F.morphAttributes.color!==void 0&&(mt=3);let X,st,Z,at;if(Y){let De=cn[Y];X=De.vertexShader,st=De.fragmentShader}else X=M.vertexShader,st=M.fragmentShader,c.update(M),Z=c.getVertexShaderID(M),at=c.getFragmentShaderID(M);let nt=i.getRenderTarget(),yt=rt.isInstancedMesh===!0,At=rt.isBatchedMesh===!0,bt=!!M.map,St=!!M.matcap,R=!!$,ot=!!M.aoMap,J=!!M.lightMap,ht=!!M.bumpMap,N=!!M.normalMap,Mt=!!M.displacementMap,ut=!!M.emissiveMap,b=!!M.metalnessMap,y=!!M.roughnessMap,U=M.anisotropy>0,Q=M.clearcoat>0,j=M.iridescence>0,k=M.sheen>0,wt=M.transmission>0,gt=U&&!!M.anisotropyMap,Et=Q&&!!M.clearcoatMap,It=Q&&!!M.clearcoatNormalMap,Ot=Q&&!!M.clearcoatRoughnessMap,ct=j&&!!M.iridescenceMap,Gt=j&&!!M.iridescenceThicknessMap,C=k&&!!M.sheenColorMap,lt=k&&!!M.sheenRoughnessMap,xt=!!M.specularMap,dt=!!M.specularColorMap,Rt=!!M.specularIntensityMap,Wt=wt&&!!M.transmissionMap,Yt=wt&&!!M.thicknessMap,kt=!!M.gradientMap,_t=!!M.alphaMap,D=M.alphaTest>0,ft=!!M.alphaHash,pt=!!M.extensions,Dt=!!F.attributes.uv1,Ct=!!F.attributes.uv2,Zt=!!F.attributes.uv3,jt=Bn;return M.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(jt=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:st,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:At,instancing:yt,instancingColor:yt&&rt.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:nt===null?i.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Mn,map:bt,matcap:St,envMap:R,envMapMode:R&&$.mapping,envMapCubeUVHeight:K,aoMap:ot,lightMap:J,bumpMap:ht,normalMap:N,displacementMap:d&&Mt,emissiveMap:ut,normalMapObjectSpace:N&&M.normalMapType===pd,normalMapTangentSpace:N&&M.normalMapType===tc,metalnessMap:b,roughnessMap:y,anisotropy:U,anisotropyMap:gt,clearcoat:Q,clearcoatMap:Et,clearcoatNormalMap:It,clearcoatRoughnessMap:Ot,iridescence:j,iridescenceMap:ct,iridescenceThicknessMap:Gt,sheen:k,sheenColorMap:C,sheenRoughnessMap:lt,specularMap:xt,specularColorMap:dt,specularIntensityMap:Rt,transmission:wt,transmissionMap:Wt,thicknessMap:Yt,gradientMap:kt,opaque:M.transparent===!1&&M.blending===Fi,alphaMap:_t,alphaTest:D,alphaHash:ft,combine:M.combine,mapUv:bt&&x(M.map.channel),aoMapUv:ot&&x(M.aoMap.channel),lightMapUv:J&&x(M.lightMap.channel),bumpMapUv:ht&&x(M.bumpMap.channel),normalMapUv:N&&x(M.normalMap.channel),displacementMapUv:Mt&&x(M.displacementMap.channel),emissiveMapUv:ut&&x(M.emissiveMap.channel),metalnessMapUv:b&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:gt&&x(M.anisotropyMap.channel),clearcoatMapUv:Et&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:C&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:lt&&x(M.sheenRoughnessMap.channel),specularMapUv:xt&&x(M.specularMap.channel),specularColorMapUv:dt&&x(M.specularColorMap.channel),specularIntensityMapUv:Rt&&x(M.specularIntensityMap.channel),transmissionMapUv:Wt&&x(M.transmissionMap.channel),thicknessMapUv:Yt&&x(M.thicknessMap.channel),alphaMapUv:_t&&x(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(N||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Dt,vertexUv2s:Ct,vertexUv3s:Zt,pointsUvs:rt.isPoints===!0&&!!F.attributes.uv&&(bt||_t),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:rt.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:jt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ze,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pt&&M.extensions.derivatives===!0,extensionFragDepth:pt&&M.extensions.fragDepth===!0,extensionDrawBuffers:pt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)S.push(O),S.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function E(M){let S=g[M.type],O;if(S){let W=cn[S];O=jd.clone(W.uniforms)}else O=M.uniforms;return O}function L(M,S){let O;for(let W=0,rt=l.length;W<rt;W++){let I=l[W];if(I.cacheKey===S){O=I,++O.usedTimes;break}}return O===void 0&&(O=new cg(i,S,M,r),l.push(O)),O}function T(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:l,dispose:B}}function ug(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,p,g,x,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):e.push(f)}function c(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,d){e.length>1&&e.sort(u||dg),n.length>1&&n.sort(d||$l),s.length>1&&s.sort(d||$l)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function fg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jl,i.set(n,[o])):s>=r.length?(o=new jl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function pg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Vt};break;case"SpotLight":e={position:new P,direction:new P,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function mg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var gg=0;function _g(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i,t){let e=new pg,n=mg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new P);let r=new P,o=new ee,a=new ee;function c(h,u){let d=0,p=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let x=0,m=0,f=0,v=0,_=0,E=0,L=0,T=0,A=0,B=0,M=0;h.sort(_g);let S=u===!0?Math.PI:1;for(let W=0,rt=h.length;W<rt;W++){let I=h[W],F=I.color,V=I.intensity,$=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=F.r*V*S,p+=F.g*V*S,g+=F.b*V*S;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(I.sh.coefficients[Y],V);M++}else if(I.isDirectionalLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){let et=I.shadow,it=n.get(I);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.directionalShadow[x]=it,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=I.shadow.matrix,E++}s.directional[x]=Y,x++}else if(I.isSpotLight){let Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(V*S),Y.distance=$,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,s.spot[f]=Y;let et=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,et.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[f]=et.matrix,I.castShadow){let it=n.get(I);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,s.spotShadow[f]=it,s.spotShadowMap[f]=K,T++}f++}else if(I.isRectAreaLight){let Y=e.get(I);Y.color.copy(F).multiplyScalar(V),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),s.rectArea[v]=Y,v++}else if(I.isPointLight){let Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*S),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let et=I.shadow,it=n.get(I);it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,s.pointShadow[m]=it,s.pointShadowMap[m]=K,s.pointShadowMatrix[m]=I.shadow.matrix,L++}s.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(V*S),Y.groundColor.copy(I.groundColor).multiplyScalar(V*S),s.hemi[_]=Y,_++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_FLOAT_1,s.rectAreaLTC2=vt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=vt.LTC_HALF_1,s.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==x||O.pointLength!==m||O.spotLength!==f||O.rectAreaLength!==v||O.hemiLength!==_||O.numDirectionalShadows!==E||O.numPointShadows!==L||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=f,s.rectArea.length=v,s.point.length=m,s.hemi.length=_,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=T+A-B,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=M,O.directionalLength=x,O.pointLength=m,O.spotLength=f,O.rectAreaLength=v,O.hemiLength=_,O.numDirectionalShadows=E,O.numPointShadows=L,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=M,s.version=gg++)}function l(h,u){let d=0,p=0,g=0,x=0,m=0,f=u.matrixWorldInverse;for(let v=0,_=h.length;v<_;v++){let E=h[v];if(E.isDirectionalLight){let L=s.directional[d];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),d++}else if(E.isSpotLight){let L=s.spot[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(f),g++}else if(E.isRectAreaLight){let L=s.rectArea[x];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),a.identity(),o.copy(E.matrixWorld),o.premultiply(f),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),x++}else if(E.isPointLight){let L=s.point[p];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){let L=s.hemi[m];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function Ql(i,t){let e=new xg(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function yg(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Ql(i,t),e.set(r,[c])):o>=a.length?(c=new Ql(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var bo=class extends En{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},So=class extends En{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(i,t,e){let n=new xs,s=new tt,r=new tt,o=new Se,a=new bo({depthPacking:fd}),c=new So,l={},h=e.maxTextureSize,u={[Hn]:Be,[Be]:Hn,[Ze]:Ze},d=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:vg,fragmentShader:Mg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new ge;g.setAttribute("position",new me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fh;let f=this.type;this.render=function(T,A,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Fn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let rt=f!==yn&&this.type===yn,I=f===yn&&this.type!==yn;for(let F=0,V=T.length;F<V;F++){let $=T[F],K=$.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let Y=K.getFrameExtents();if(s.multiply(Y),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,K.mapSize.y=r.y)),K.map===null||rt===!0||I===!0){let it=this.type!==yn?{minFilter:Fe,magFilter:Fe}:{};K.map!==null&&K.map.dispose(),K.map=new bn(s.x,s.y,it),K.map.texture.name=$.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let et=K.getViewportCount();for(let it=0;it<et;it++){let mt=K.getViewport(it);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),W.viewport(o),K.updateMatrices($,it),n=K.getFrustum(),E(A,B,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===yn&&v(K,B),K.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,O)};function v(T,A){let B=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bn(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,B,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,B,p,x,null)}function _(T,A,B,M){let S=null,O=B.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)S=O;else if(S=B.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=S.uuid,rt=A.uuid,I=l[W];I===void 0&&(I={},l[W]=I);let F=I[rt];F===void 0&&(F=S.clone(),I[rt]=F,A.addEventListener("dispose",L)),S=F}if(S.visible=A.visible,S.wireframe=A.wireframe,M===yn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let W=i.properties.get(S);W.light=B}return S}function E(T,A,B,M,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);let rt=t.update(T),I=T.material;if(Array.isArray(I)){let F=rt.groups;for(let V=0,$=F.length;V<$;V++){let K=F[V],Y=I[K.materialIndex];if(Y&&Y.visible){let et=_(T,Y,M,S);T.onBeforeShadow(i,T,A,B,rt,et,K),i.renderBufferDirect(B,null,rt,et,T,K),T.onAfterShadow(i,T,A,B,rt,et,K)}}}else if(I.visible){let F=_(T,I,M,S);T.onBeforeShadow(i,T,A,B,rt,F,null),i.renderBufferDirect(B,null,rt,F,T,null),T.onAfterShadow(i,T,A,B,rt,F,null)}}let W=T.children;for(let rt=0,I=W.length;rt<I;rt++)E(W[rt],A,B,M,S)}function L(T){T.target.removeEventListener("dispose",L);for(let B in l){let M=l[B],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function Sg(i,t,e){let n=e.isWebGL2;function s(){let D=!1,ft=new Se,pt=null,Dt=new Se(0,0,0,0);return{setMask:function(Ct){pt!==Ct&&!D&&(i.colorMask(Ct,Ct,Ct,Ct),pt=Ct)},setLocked:function(Ct){D=Ct},setClear:function(Ct,Zt,jt,ye,De){De===!0&&(Ct*=ye,Zt*=ye,jt*=ye),ft.set(Ct,Zt,jt,ye),Dt.equals(ft)===!1&&(i.clearColor(Ct,Zt,jt,ye),Dt.copy(ft))},reset:function(){D=!1,pt=null,Dt.set(-1,0,0,0)}}}function r(){let D=!1,ft=null,pt=null,Dt=null;return{setTest:function(Ct){Ct?At(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(Ct){ft!==Ct&&!D&&(i.depthMask(Ct),ft=Ct)},setFunc:function(Ct){if(pt!==Ct){switch(Ct){case Vu:i.depthFunc(i.NEVER);break;case Gu:i.depthFunc(i.ALWAYS);break;case Wu:i.depthFunc(i.LESS);break;case mr:i.depthFunc(i.LEQUAL);break;case Xu:i.depthFunc(i.EQUAL);break;case qu:i.depthFunc(i.GEQUAL);break;case Yu:i.depthFunc(i.GREATER);break;case Zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=Ct}},setLocked:function(Ct){D=Ct},setClear:function(Ct){Dt!==Ct&&(i.clearDepth(Ct),Dt=Ct)},reset:function(){D=!1,ft=null,pt=null,Dt=null}}}function o(){let D=!1,ft=null,pt=null,Dt=null,Ct=null,Zt=null,jt=null,ye=null,De=null;return{setTest:function(ne){D||(ne?At(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!D&&(i.stencilMask(ne),ft=ne)},setFunc:function(ne,Ue,on){(pt!==ne||Dt!==Ue||Ct!==on)&&(i.stencilFunc(ne,Ue,on),pt=ne,Dt=Ue,Ct=on)},setOp:function(ne,Ue,on){(Zt!==ne||jt!==Ue||ye!==on)&&(i.stencilOp(ne,Ue,on),Zt=ne,jt=Ue,ye=on)},setLocked:function(ne){D=ne},setClear:function(ne){De!==ne&&(i.clearStencil(ne),De=ne)},reset:function(){D=!1,ft=null,pt=null,Dt=null,Ct=null,Zt=null,jt=null,ye=null,De=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,d={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,E=null,L=null,T=null,A=null,B=null,M=new Vt(0,0,0),S=0,O=!1,W=null,rt=null,I=null,F=null,V=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Y=0,et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(et)[1]),K=Y>=1):et.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),K=Y>=2);let it=null,mt={},X=i.getParameter(i.SCISSOR_BOX),st=i.getParameter(i.VIEWPORT),Z=new Se().fromArray(X),at=new Se().fromArray(st);function nt(D,ft,pt,Dt){let Ct=new Uint8Array(4),Zt=i.createTexture();i.bindTexture(D,Zt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<pt;jt++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,Ct):i.texImage2D(ft+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ct);return Zt}let yt={};yt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),At(i.DEPTH_TEST),c.setFunc(mr),ut(!1),b(Dc),At(i.CULL_FACE),N(Fn);function At(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function bt(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function St(D,ft){return p[D]!==ft?(i.bindFramebuffer(D,ft),p[D]=ft,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ft),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function R(D,ft){let pt=x,Dt=!1;if(D)if(pt=g.get(ft),pt===void 0&&(pt=[],g.set(ft,pt)),D.isWebGLMultipleRenderTargets){let Ct=D.texture;if(pt.length!==Ct.length||pt[0]!==i.COLOR_ATTACHMENT0){for(let Zt=0,jt=Ct.length;Zt<jt;Zt++)pt[Zt]=i.COLOR_ATTACHMENT0+Zt;pt.length=Ct.length,Dt=!0}}else pt[0]!==i.COLOR_ATTACHMENT0&&(pt[0]=i.COLOR_ATTACHMENT0,Dt=!0);else pt[0]!==i.BACK&&(pt[0]=i.BACK,Dt=!0);Dt&&(e.isWebGL2?i.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function ot(D){return m!==D?(i.useProgram(D),m=D,!0):!1}let J={[Qn]:i.FUNC_ADD,[Au]:i.FUNC_SUBTRACT,[Ru]:i.FUNC_REVERSE_SUBTRACT};if(n)J[Fc]=i.MIN,J[Bc]=i.MAX;else{let D=t.get("EXT_blend_minmax");D!==null&&(J[Fc]=D.MIN_EXT,J[Bc]=D.MAX_EXT)}let ht={[Cu]:i.ZERO,[Pu]:i.ONE,[Lu]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Nu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Iu]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[Ou]:i.ONE_MINUS_DST_COLOR,[Uu]:i.ONE_MINUS_DST_ALPHA,[Bu]:i.CONSTANT_COLOR,[zu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[Hu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ft,pt,Dt,Ct,Zt,jt,ye,De,ne){if(D===Fn){f===!0&&(bt(i.BLEND),f=!1);return}if(f===!1&&(At(i.BLEND),f=!0),D!==Tu){if(D!==v||ne!==O){if((_!==Qn||T!==Qn)&&(i.blendEquation(i.FUNC_ADD),_=Qn,T=Qn),ne)switch(D){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,L=null,A=null,B=null,M.set(0,0,0),S=0,v=D,O=ne}return}Ct=Ct||ft,Zt=Zt||pt,jt=jt||Dt,(ft!==_||Ct!==T)&&(i.blendEquationSeparate(J[ft],J[Ct]),_=ft,T=Ct),(pt!==E||Dt!==L||Zt!==A||jt!==B)&&(i.blendFuncSeparate(ht[pt],ht[Dt],ht[Zt],ht[jt]),E=pt,L=Dt,A=Zt,B=jt),(ye.equals(M)===!1||De!==S)&&(i.blendColor(ye.r,ye.g,ye.b,De),M.copy(ye),S=De),v=D,O=!1}function Mt(D,ft){D.side===Ze?bt(i.CULL_FACE):At(i.CULL_FACE);let pt=D.side===Be;ft&&(pt=!pt),ut(pt),D.blending===Fi&&D.transparent===!1?N(Fn):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);let Dt=D.stencilWrite;l.setTest(Dt),Dt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),U(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(D){W!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),W=D)}function b(D){D!==Su?(At(i.CULL_FACE),D!==rt&&(D===Dc?i.cullFace(i.BACK):D===Eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),rt=D}function y(D){D!==I&&(K&&i.lineWidth(D),I=D)}function U(D,ft,pt){D?(At(i.POLYGON_OFFSET_FILL),(F!==ft||V!==pt)&&(i.polygonOffset(ft,pt),F=ft,V=pt)):bt(i.POLYGON_OFFSET_FILL)}function Q(D){D?At(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function j(D){D===void 0&&(D=i.TEXTURE0+$-1),it!==D&&(i.activeTexture(D),it=D)}function k(D,ft,pt){pt===void 0&&(it===null?pt=i.TEXTURE0+$-1:pt=it);let Dt=mt[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},mt[pt]=Dt),(Dt.type!==D||Dt.texture!==ft)&&(it!==pt&&(i.activeTexture(pt),it=pt),i.bindTexture(D,ft||yt[D]),Dt.type=D,Dt.texture=ft)}function wt(){let D=mt[it];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ot(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function lt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Rt(D){Z.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Z.copy(D))}function Wt(D){at.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),at.copy(D))}function Yt(D,ft){let pt=u.get(ft);pt===void 0&&(pt=new WeakMap,u.set(ft,pt));let Dt=pt.get(D);Dt===void 0&&(Dt=i.getUniformBlockIndex(ft,D.name),pt.set(D,Dt))}function kt(D,ft){let Dt=u.get(ft).get(D);h.get(ft)!==Dt&&(i.uniformBlockBinding(ft,Dt,D.__bindingPointIndex),h.set(ft,Dt))}function _t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},it=null,mt={},p={},g=new WeakMap,x=[],m=null,f=!1,v=null,_=null,E=null,L=null,T=null,A=null,B=null,M=new Vt(0,0,0),S=0,O=!1,W=null,rt=null,I=null,F=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:At,disable:bt,bindFramebuffer:St,drawBuffers:R,useProgram:ot,setBlending:N,setMaterial:Mt,setFlipSided:ut,setCullFace:b,setLineWidth:y,setPolygonOffset:U,setScissorTest:Q,activeTexture:j,bindTexture:k,unbindTexture:wt,compressedTexImage2D:gt,compressedTexImage3D:Et,texImage2D:xt,texImage3D:dt,updateUBOMapping:Yt,uniformBlockBinding:kt,texStorage2D:C,texStorage3D:lt,texSubImage2D:It,texSubImage3D:Ot,compressedTexSubImage2D:ct,compressedTexSubImage3D:Gt,scissor:Rt,viewport:Wt,reset:_t}}function Eg(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function g(b,y){return p?new OffscreenCanvas(b,y):gs("canvas")}function x(b,y,U,Q){let j=1;if((b.width>Q||b.height>Q)&&(j=Q/Math.max(b.width,b.height)),j<1||y===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){let k=y?br:Math.floor,wt=k(j*b.width),gt=k(j*b.height);u===void 0&&(u=g(wt,gt));let Et=U?g(wt,gt):u;return Et.width=wt,Et.height=gt,Et.getContext("2d").drawImage(b,0,0,wt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+wt+"x"+gt+")."),Et}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ho(b.width)&&ho(b.height)}function f(b){return a?!1:b.wrapS!==nn||b.wrapT!==nn||b.minFilter!==Fe&&b.minFilter!==Ye}function v(b,y){return b.generateMipmaps&&y&&b.minFilter!==Fe&&b.minFilter!==Ye}function _(b){i.generateMipmap(b)}function E(b,y,U,Q,j=!1){if(a===!1)return y;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=y;if(y===i.RED&&(U===i.FLOAT&&(k=i.R32F),U===i.HALF_FLOAT&&(k=i.R16F),U===i.UNSIGNED_BYTE&&(k=i.R8)),y===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(k=i.R8UI),U===i.UNSIGNED_SHORT&&(k=i.R16UI),U===i.UNSIGNED_INT&&(k=i.R32UI),U===i.BYTE&&(k=i.R8I),U===i.SHORT&&(k=i.R16I),U===i.INT&&(k=i.R32I)),y===i.RG&&(U===i.FLOAT&&(k=i.RG32F),U===i.HALF_FLOAT&&(k=i.RG16F),U===i.UNSIGNED_BYTE&&(k=i.RG8)),y===i.RGBA){let wt=j?xr:te.getTransfer(Q);U===i.FLOAT&&(k=i.RGBA32F),U===i.HALF_FLOAT&&(k=i.RGBA16F),U===i.UNSIGNED_BYTE&&(k=wt===ie?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function L(b,y,U){return v(b,U)===!0||b.isFramebufferTexture&&b.minFilter!==Fe&&b.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function T(b){return b===Fe||b===zc||b===ba?i.NEAREST:i.LINEAR}function A(b){let y=b.target;y.removeEventListener("dispose",A),M(y),y.isVideoTexture&&h.delete(y)}function B(b){let y=b.target;y.removeEventListener("dispose",B),O(y)}function M(b){let y=n.get(b);if(y.__webglInit===void 0)return;let U=b.source,Q=d.get(U);if(Q){let j=Q[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(b),Object.keys(Q).length===0&&d.delete(U)}n.remove(b)}function S(b){let y=n.get(b);i.deleteTexture(y.__webglTexture);let U=b.source,Q=d.get(U);delete Q[y.__cacheKey],o.memory.textures--}function O(b){let y=b.texture,U=n.get(b),Q=n.get(y);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(U.__webglFramebuffer[j]))for(let k=0;k<U.__webglFramebuffer[j].length;k++)i.deleteFramebuffer(U.__webglFramebuffer[j][k]);else i.deleteFramebuffer(U.__webglFramebuffer[j]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[j])}else{if(Array.isArray(U.__webglFramebuffer))for(let j=0;j<U.__webglFramebuffer.length;j++)i.deleteFramebuffer(U.__webglFramebuffer[j]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let j=0;j<U.__webglColorRenderbuffer.length;j++)U.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[j]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let j=0,k=y.length;j<k;j++){let wt=n.get(y[j]);wt.__webglTexture&&(i.deleteTexture(wt.__webglTexture),o.memory.textures--),n.remove(y[j])}n.remove(y),n.remove(b)}let W=0;function rt(){W=0}function I(){let b=W;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),W+=1,b}function F(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function V(b,y){let U=n.get(b);if(b.isVideoTexture&&Mt(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){let Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(U,b,y);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+y)}function $(b,y){let U=n.get(b);if(b.version>0&&U.__version!==b.version){Z(U,b,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+y)}function K(b,y){let U=n.get(b);if(b.version>0&&U.__version!==b.version){Z(U,b,y);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+y)}function Y(b,y){let U=n.get(b);if(b.version>0&&U.__version!==b.version){at(U,b,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+y)}let et={[ao]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},it={[Fe]:i.NEAREST,[zc]:i.NEAREST_MIPMAP_NEAREST,[ba]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[id]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},mt={[md]:i.NEVER,[Md]:i.ALWAYS,[gd]:i.LESS,[Sh]:i.LEQUAL,[_d]:i.EQUAL,[vd]:i.GEQUAL,[xd]:i.GREATER,[yd]:i.NOTEQUAL};function X(b,y,U){if(U?(i.texParameteri(b,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,et[y.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,it[y.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,it[y.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==nn||y.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(y.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(y.minFilter)),y.minFilter!==Fe&&y.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,mt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===Fe||y.minFilter!==ba&&y.minFilter!==fs||y.type===On&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===ps&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function st(b,y){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",A));let Q=y.source,j=d.get(Q);j===void 0&&(j={},d.set(Q,j));let k=F(y);if(k!==b.__cacheKey){j[k]===void 0&&(j[k]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,U=!0),j[k].usedTimes++;let wt=j[b.__cacheKey];wt!==void 0&&(j[b.__cacheKey].usedTimes--,wt.usedTimes===0&&S(y)),b.__cacheKey=k,b.__webglTexture=j[k].texture}return U}function Z(b,y,U){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);let j=st(b,y),k=y.source;e.bindTexture(Q,b.__webglTexture,i.TEXTURE0+U);let wt=n.get(k);if(k.version!==wt.__version||j===!0){e.activeTexture(i.TEXTURE0+U);let gt=te.getPrimaries(te.workingColorSpace),Et=y.colorSpace===Je?null:te.getPrimaries(y.colorSpace),It=y.colorSpace===Je||gt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Ot=f(y)&&m(y.image)===!1,ct=x(y.image,Ot,!1,s.maxTextureSize);ct=ut(y,ct);let Gt=m(ct)||a,C=r.convert(y.format,y.colorSpace),lt=r.convert(y.type),xt=E(y.internalFormat,C,lt,y.colorSpace,y.isVideoTexture);X(Q,y,Gt);let dt,Rt=y.mipmaps,Wt=a&&y.isVideoTexture!==!0&&xt!==Mh,Yt=wt.__version===void 0||j===!0,kt=L(y,ct,Gt);if(y.isDepthTexture)xt=i.DEPTH_COMPONENT,a?y.type===On?xt=i.DEPTH_COMPONENT32F:y.type===Nn?xt=i.DEPTH_COMPONENT24:y.type===ni?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:y.type===On&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===ii&&xt===i.DEPTH_COMPONENT&&y.type!==Qo&&y.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Nn,lt=r.convert(y.type)),y.format===Vi&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,y.type!==ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ni,lt=r.convert(y.type))),Yt&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,xt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,xt,ct.width,ct.height,0,C,lt,null));else if(y.isDataTexture)if(Rt.length>0&&Gt){Wt&&Yt&&e.texStorage2D(i.TEXTURE_2D,kt,xt,Rt[0].width,Rt[0].height);for(let _t=0,D=Rt.length;_t<D;_t++)dt=Rt[_t],Wt?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,dt.width,dt.height,C,lt,dt.data):e.texImage2D(i.TEXTURE_2D,_t,xt,dt.width,dt.height,0,C,lt,dt.data);y.generateMipmaps=!1}else Wt?(Yt&&e.texStorage2D(i.TEXTURE_2D,kt,xt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,C,lt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,xt,ct.width,ct.height,0,C,lt,ct.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Wt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,xt,Rt[0].width,Rt[0].height,ct.depth);for(let _t=0,D=Rt.length;_t<D;_t++)dt=Rt[_t],y.format!==sn?C!==null?Wt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,dt.width,dt.height,ct.depth,C,dt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,xt,dt.width,dt.height,ct.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,dt.width,dt.height,ct.depth,C,lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,xt,dt.width,dt.height,ct.depth,0,C,lt,dt.data)}else{Wt&&Yt&&e.texStorage2D(i.TEXTURE_2D,kt,xt,Rt[0].width,Rt[0].height);for(let _t=0,D=Rt.length;_t<D;_t++)dt=Rt[_t],y.format!==sn?C!==null?Wt?e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,dt.width,dt.height,C,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,xt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,dt.width,dt.height,C,lt,dt.data):e.texImage2D(i.TEXTURE_2D,_t,xt,dt.width,dt.height,0,C,lt,dt.data)}else if(y.isDataArrayTexture)Wt?(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,xt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,C,lt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,ct.width,ct.height,ct.depth,0,C,lt,ct.data);else if(y.isData3DTexture)Wt?(Yt&&e.texStorage3D(i.TEXTURE_3D,kt,xt,ct.width,ct.height,ct.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,C,lt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,xt,ct.width,ct.height,ct.depth,0,C,lt,ct.data);else if(y.isFramebufferTexture){if(Yt)if(Wt)e.texStorage2D(i.TEXTURE_2D,kt,xt,ct.width,ct.height);else{let _t=ct.width,D=ct.height;for(let ft=0;ft<kt;ft++)e.texImage2D(i.TEXTURE_2D,ft,xt,_t,D,0,C,lt,null),_t>>=1,D>>=1}}else if(Rt.length>0&&Gt){Wt&&Yt&&e.texStorage2D(i.TEXTURE_2D,kt,xt,Rt[0].width,Rt[0].height);for(let _t=0,D=Rt.length;_t<D;_t++)dt=Rt[_t],Wt?e.texSubImage2D(i.TEXTURE_2D,_t,0,0,C,lt,dt):e.texImage2D(i.TEXTURE_2D,_t,xt,C,lt,dt);y.generateMipmaps=!1}else Wt?(Yt&&e.texStorage2D(i.TEXTURE_2D,kt,xt,ct.width,ct.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,C,lt,ct)):e.texImage2D(i.TEXTURE_2D,0,xt,C,lt,ct);v(y,Gt)&&_(Q),wt.__version=k.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function at(b,y,U){if(y.image.length!==6)return;let Q=st(b,y),j=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let k=n.get(j);if(j.version!==k.__version||Q===!0){e.activeTexture(i.TEXTURE0+U);let wt=te.getPrimaries(te.workingColorSpace),gt=y.colorSpace===Je?null:te.getPrimaries(y.colorSpace),Et=y.colorSpace===Je||wt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let It=y.isCompressedTexture||y.image[0].isCompressedTexture,Ot=y.image[0]&&y.image[0].isDataTexture,ct=[];for(let _t=0;_t<6;_t++)!It&&!Ot?ct[_t]=x(y.image[_t],!1,!0,s.maxCubemapSize):ct[_t]=Ot?y.image[_t].image:y.image[_t],ct[_t]=ut(y,ct[_t]);let Gt=ct[0],C=m(Gt)||a,lt=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),dt=E(y.internalFormat,lt,xt,y.colorSpace),Rt=a&&y.isVideoTexture!==!0,Wt=k.__version===void 0||Q===!0,Yt=L(y,Gt,C);X(i.TEXTURE_CUBE_MAP,y,C);let kt;if(It){Rt&&Wt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,dt,Gt.width,Gt.height);for(let _t=0;_t<6;_t++){kt=ct[_t].mipmaps;for(let D=0;D<kt.length;D++){let ft=kt[D];y.format!==sn?lt!==null?Rt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D,0,0,ft.width,ft.height,lt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D,dt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D,0,0,ft.width,ft.height,lt,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D,dt,ft.width,ft.height,0,lt,xt,ft.data)}}}else{kt=y.mipmaps,Rt&&Wt&&(kt.length>0&&Yt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,dt,ct[0].width,ct[0].height));for(let _t=0;_t<6;_t++)if(Ot){Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,ct[_t].width,ct[_t].height,lt,xt,ct[_t].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,dt,ct[_t].width,ct[_t].height,0,lt,xt,ct[_t].data);for(let D=0;D<kt.length;D++){let pt=kt[D].image[_t].image;Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D+1,0,0,pt.width,pt.height,lt,xt,pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D+1,dt,pt.width,pt.height,0,lt,xt,pt.data)}}else{Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,lt,xt,ct[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,dt,lt,xt,ct[_t]);for(let D=0;D<kt.length;D++){let ft=kt[D];Rt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D+1,0,0,lt,xt,ft.image[_t]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,D+1,dt,lt,xt,ft.image[_t])}}}v(y,C)&&_(i.TEXTURE_CUBE_MAP),k.__version=j.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function nt(b,y,U,Q,j,k){let wt=r.convert(U.format,U.colorSpace),gt=r.convert(U.type),Et=E(U.internalFormat,wt,gt,U.colorSpace);if(!n.get(y).__hasExternalTextures){let Ot=Math.max(1,y.width>>k),ct=Math.max(1,y.height>>k);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,k,Et,Ot,ct,y.depth,0,wt,gt,null):e.texImage2D(j,k,Et,Ot,ct,0,wt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),N(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,j,n.get(U).__webglTexture,0,ht(y)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,j,n.get(U).__webglTexture,k),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(b,y,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let Q=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(U||N(y)){let j=y.depthTexture;j&&j.isDepthTexture&&(j.type===On?Q=i.DEPTH_COMPONENT32F:j.type===Nn&&(Q=i.DEPTH_COMPONENT24));let k=ht(y);N(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,Q,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,k,Q,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){let Q=ht(y);U&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,y.width,y.height):N(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let Q=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let j=0;j<Q.length;j++){let k=Q[j],wt=r.convert(k.format,k.colorSpace),gt=r.convert(k.type),Et=E(k.internalFormat,wt,gt,k.colorSpace),It=ht(y);U&&N(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Et,y.width,y.height):N(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),V(y.depthTexture,0);let Q=n.get(y.depthTexture).__webglTexture,j=ht(y);if(y.depthTexture.format===ii)N(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(y.depthTexture.format===Vi)N(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function bt(b){let y=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");At(y.__webglFramebuffer,b)}else if(U){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function St(b,y,U){let Q=n.get(b);y!==void 0&&nt(Q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&bt(b)}function R(b){let y=b.texture,U=n.get(b),Q=n.get(y);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++);let j=b.isWebGLCubeRenderTarget===!0,k=b.isWebGLMultipleRenderTargets===!0,wt=m(b)||a;if(j){U.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[gt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)U.__webglFramebuffer[gt][Et]=i.createFramebuffer()}else U.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)U.__webglFramebuffer[gt]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(k)if(s.drawBuffers){let gt=b.texture;for(let Et=0,It=gt.length;Et<It;Et++){let Ot=n.get(gt[Et]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&N(b)===!1){let gt=k?y:[y];U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Et=0;Et<gt.length;Et++){let It=gt[Et];U.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[Et]);let Ot=r.convert(It.format,It.colorSpace),ct=r.convert(It.type),Gt=E(It.internalFormat,Ot,ct,It.colorSpace,b.isXRRenderTarget===!0),C=ht(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,C,Gt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,U.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(U.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),X(i.TEXTURE_CUBE_MAP,y,wt);for(let gt=0;gt<6;gt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)nt(U.__webglFramebuffer[gt][Et],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else nt(U.__webglFramebuffer[gt],b,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);v(y,wt)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(k){let gt=b.texture;for(let Et=0,It=gt.length;Et<It;Et++){let Ot=gt[Et],ct=n.get(Ot);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),X(i.TEXTURE_2D,Ot,wt),nt(U.__webglFramebuffer,b,Ot,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),v(Ot,wt)&&_(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?gt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,Q.__webglTexture),X(gt,y,wt),a&&y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)nt(U.__webglFramebuffer[Et],b,y,i.COLOR_ATTACHMENT0,gt,Et);else nt(U.__webglFramebuffer,b,y,i.COLOR_ATTACHMENT0,gt,0);v(y,wt)&&_(gt),e.unbindTexture()}b.depthBuffer&&bt(b)}function ot(b){let y=m(b)||a,U=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,j=U.length;Q<j;Q++){let k=U[Q];if(v(k,y)){let wt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(k).__webglTexture;e.bindTexture(wt,gt),_(wt),e.unbindTexture()}}}function J(b){if(a&&b.samples>0&&N(b)===!1){let y=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],U=b.width,Q=b.height,j=i.COLOR_BUFFER_BIT,k=[],wt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(b),Et=b.isWebGLMultipleRenderTargets===!0;if(Et)for(let It=0;It<y.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let It=0;It<y.length;It++){k.push(i.COLOR_ATTACHMENT0+It),b.depthBuffer&&k.push(wt);let Ot=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Ot===!1&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),Et&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[It]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[wt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[wt])),Et){let ct=n.get(y[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,U,Q,0,0,U,Q,j,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,k)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let It=0;It<y.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,gt.__webglColorRenderbuffer[It]);let Ot=n.get(y[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function ht(b){return Math.min(s.maxSamples,b.samples)}function N(b){let y=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Mt(b){let y=o.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function ut(b,y){let U=b.colorSpace,Q=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===lo||U!==Mn&&U!==Je&&(te.getTransfer(U)===ie?a===!1?t.has("EXT_sRGB")===!0&&Q===sn?(b.format=lo,b.minFilter=Ye,b.generateMipmaps=!1):y=Sr.sRGBToLinear(y):(Q!==sn||j!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}this.allocateTextureUnit=I,this.resetTextureUnits=rt,this.setTexture2D=V,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=R,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=N}function wg(i,t,e){let n=e.isWebGL2;function s(r,o=Je){let a,c=te.getTransfer(o);if(r===zn)return i.UNSIGNED_BYTE;if(r===gh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===_h)return i.UNSIGNED_SHORT_5_5_5_1;if(r===sd)return i.BYTE;if(r===rd)return i.SHORT;if(r===Qo)return i.UNSIGNED_SHORT;if(r===mh)return i.INT;if(r===Nn)return i.UNSIGNED_INT;if(r===On)return i.FLOAT;if(r===ps)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ad)return i.ALPHA;if(r===sn)return i.RGBA;if(r===od)return i.LUMINANCE;if(r===cd)return i.LUMINANCE_ALPHA;if(r===ii)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===lo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===ld)return i.RED;if(r===xh)return i.RED_INTEGER;if(r===hd)return i.RG;if(r===yh)return i.RG_INTEGER;if(r===vh)return i.RGBA_INTEGER;if(r===Sa||r===Ea||r===wa||r===Ta)if(c===ie)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ea)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kc||r===Hc||r===Vc||r===Gc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wc||r===Xc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wc)return c===ie?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qc||r===Yc||r===Zc||r===Jc||r===Kc||r===$c||r===jc||r===Qc||r===tl||r===el||r===nl||r===il||r===sl||r===rl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===qc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$c)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qc)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===el)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===il)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rl)return c===ie?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Aa||r===al||r===ol)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Aa)return c===ie?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===al)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ol)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===cl||r===ll||r===hl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===cl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ll)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ni?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Eo=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fe=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tg={type:"move"},hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(l,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wo=class extends un{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,g=null,x=e.getContextAttributes(),m=null,f=null,v=[],_=[],E=new tt,L=null,T=new Ce;T.layers.enable(1),T.viewport=new Se;let A=new Ce;A.layers.enable(2),A.viewport=new Se;let B=[T,A],M=new Eo;M.layers.enable(1),M.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=v[X];return st===void 0&&(st=new hs,v[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=v[X];return st===void 0&&(st=new hs,v[X]=st),st.getGripSpace()},this.getHand=function(X){let st=v[X];return st===void 0&&(st=new hs,v[X]=st),st.getHandSpace()};function W(X){let st=_.indexOf(X.inputSource);if(st===-1)return;let Z=v[st];Z!==void 0&&(Z.update(X.inputSource,X.frame,l||o),Z.dispatchEvent({type:X.type,data:X.inputSource}))}function rt(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",I);for(let X=0;X<v.length;X++){let st=_[X];st!==null&&(_[X]=null,v[X].disconnect(st))}S=null,O=null,t.setRenderTarget(m),p=null,d=null,u=null,s=null,f=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let st={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new bn(p.framebufferWidth,p.framebufferHeight,{format:sn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let st=null,Z=null,at=null;x.depth&&(at=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=x.stencil?Vi:ii,Z=x.stencil?ni:Nn);let nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new bn(d.textureWidth,d.textureHeight,{format:sn,type:zn,depthTexture:new Dr(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let yt=t.properties.get(f);yt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function I(X){for(let st=0;st<X.removed.length;st++){let Z=X.removed[st],at=_.indexOf(Z);at>=0&&(_[at]=null,v[at].disconnect(Z))}for(let st=0;st<X.added.length;st++){let Z=X.added[st],at=_.indexOf(Z);if(at===-1){for(let yt=0;yt<v.length;yt++)if(yt>=_.length){_.push(Z),at=yt;break}else if(_[yt]===null){_[yt]=Z,at=yt;break}if(at===-1)break}let nt=v[at];nt&&nt.connect(Z)}}let F=new P,V=new P;function $(X,st,Z){F.setFromMatrixPosition(st.matrixWorld),V.setFromMatrixPosition(Z.matrixWorld);let at=F.distanceTo(V),nt=st.projectionMatrix.elements,yt=Z.projectionMatrix.elements,At=nt[14]/(nt[10]-1),bt=nt[14]/(nt[10]+1),St=(nt[9]+1)/nt[5],R=(nt[9]-1)/nt[5],ot=(nt[8]-1)/nt[0],J=(yt[8]+1)/yt[0],ht=At*ot,N=At*J,Mt=at/(-ot+J),ut=Mt*-ot;st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ut),X.translateZ(Mt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let b=At+Mt,y=bt+Mt,U=ht-ut,Q=N+(at-ut),j=St*bt/y*b,k=R*bt/y*b;X.projectionMatrix.makePerspective(U,Q,j,k,b,y),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function K(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;M.near=A.near=T.near=X.near,M.far=A.far=T.far=X.far,(S!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,O=M.far);let st=X.parent,Z=M.cameras;K(M,st);for(let at=0;at<Z.length;at++)K(Z[at],st);Z.length===2?$(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),Y(X,M,st)};function Y(X,st,Z){Z===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(Z.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ms*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)};let et=null;function it(X,st){if(h=st.getViewerPose(l||o),g=st,h!==null){let Z=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let at=!1;Z.length!==M.cameras.length&&(M.cameras.length=0,at=!0);for(let nt=0;nt<Z.length;nt++){let yt=Z[nt],At=null;if(p!==null)At=p.getViewport(yt);else{let St=u.getViewSubImage(d,yt);At=St.viewport,nt===0&&(t.setRenderTargetTextures(f,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(f))}let bt=B[nt];bt===void 0&&(bt=new Ce,bt.layers.enable(nt),bt.viewport=new Se,B[nt]=bt),bt.matrix.fromArray(yt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(yt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(At.x,At.y,At.width,At.height),nt===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),at===!0&&M.cameras.push(bt)}}for(let Z=0;Z<v.length;Z++){let at=_[Z],nt=v[Z];at!==null&&nt!==void 0&&nt.update(at,st,l||o)}et&&et(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let mt=new Ah;mt.setAnimationLoop(it),this.setAnimationLoop=function(X){et=X},this.dispose=function(){}}};function Ag(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Th(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,_,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,v,_):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Be&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Be&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*_,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=_*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Be&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let v=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rg(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){let E=_.program;n.uniformBlockBinding(v,E)}function l(v,_){let E=s[v.id];E===void 0&&(g(v),E=h(v),s[v.id]=E,v.addEventListener("dispose",m));let L=_.program;n.updateUBOMapping(v,L);let T=t.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function h(v){let _=u();v.__bindingPointIndex=_;let E=i.createBuffer(),L=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=s[v.id],E=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,A=E.length;T<A;T++){let B=Array.isArray(E[T])?E[T]:[E[T]];for(let M=0,S=B.length;M<S;M++){let O=B[M];if(p(O,T,M,L)===!0){let W=O.__offset,rt=Array.isArray(O.value)?O.value:[O.value],I=0;for(let F=0;F<rt.length;F++){let V=rt[F],$=x(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+I,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,I),I+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,_,E,L){let T=v.value,A=_+"_"+E;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{let B=L[A];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return L[A]=T,!0}else if(B.equals(T)===!1)return B.copy(T),!0}return!1}function g(v){let _=v.uniforms,E=0,L=16;for(let A=0,B=_.length;A<B;A++){let M=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,O=M.length;S<O;S++){let W=M[S],rt=Array.isArray(W.value)?W.value:[W.value];for(let I=0,F=rt.length;I<F;I++){let V=rt[I],$=x(V),K=E%L;K!==0&&L-K<$.boundary&&(E+=L-K),W.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=E,E+=$.storage}}}let T=E%L;return T>0&&(E+=L-T),v.__size=E,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){let _=v.target;_.removeEventListener("dispose",m);let E=o.indexOf(_.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}var ys=class{constructor(t={}){let{canvas:e=Od(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,f=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;let _=this,E=!1,L=0,T=0,A=null,B=-1,M=null,S=new Se,O=new Se,W=null,rt=new Vt(0),I=0,F=e.width,V=e.height,$=1,K=null,Y=null,et=new Se(0,0,F,V),it=new Se(0,0,F,V),mt=!1,X=new xs,st=!1,Z=!1,at=null,nt=new ee,yt=new tt,At=new P,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return A===null?$:1}let R=n;function ot(w,z){for(let G=0;G<w.length;G++){let q=w[G],H=e.getContext(q,z);if(H!==null)return H}return null}try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$o}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",D,!1),e.addEventListener("webglcontextcreationerror",ft,!1),R===null){let z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&z.shift(),R=ot(z,w),R===null)throw ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&R instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,ht,N,Mt,ut,b,y,U,Q,j,k,wt,gt,Et,It,Ot,ct,Gt,C,lt,xt,dt,Rt,Wt;function Yt(){J=new Ym(R),ht=new Hm(R,J,t),J.init(ht),dt=new wg(R,J,ht),N=new Sg(R,J,ht),Mt=new Km(R),ut=new ug,b=new Eg(R,J,N,ut,ht,dt,Mt),y=new Gm(_),U=new qm(_),Q=new sf(R,ht),Rt=new zm(R,J,Q,ht),j=new Zm(R,Q,Mt,Rt),k=new t0(R,j,Q,Mt),C=new Qm(R,ht,b),Ot=new Vm(ut),wt=new hg(_,y,U,J,ht,Rt,Ot),gt=new Ag(_,ut),Et=new fg,It=new yg(J,ht),Gt=new Bm(_,y,U,N,k,d,c),ct=new bg(_,k,ht),Wt=new Rg(R,Mt,ht,N),lt=new km(R,J,Mt,ht),xt=new Jm(R,J,Mt,ht),Mt.programs=wt.programs,_.capabilities=ht,_.extensions=J,_.properties=ut,_.renderLists=Et,_.shadowMap=ct,_.state=N,_.info=Mt}Yt();let kt=new wo(_,R);this.xr=kt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(F,V,!1))},this.getSize=function(w){return w.set(F,V)},this.setSize=function(w,z,G=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,V=z,e.width=Math.floor(w*$),e.height=Math.floor(z*$),G===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(F*$,V*$).floor()},this.setDrawingBufferSize=function(w,z,G){F=w,V=z,$=G,e.width=Math.floor(w*G),e.height=Math.floor(z*G),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,z,G,q){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,z,G,q),N.viewport(S.copy(et).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,z,G,q){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,z,G,q),N.scissor(O.copy(it).multiplyScalar($).floor())},this.getScissorTest=function(){return mt},this.setScissorTest=function(w){N.setScissorTest(mt=w)},this.setOpaqueSort=function(w){K=w},this.setTransparentSort=function(w){Y=w},this.getClearColor=function(w){return w.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(w=!0,z=!0,G=!0){let q=0;if(w){let H=!1;if(A!==null){let Tt=A.texture.format;H=Tt===vh||Tt===yh||Tt===xh}if(H){let Tt=A.texture.type,Pt=Tt===zn||Tt===Nn||Tt===Qo||Tt===ni||Tt===gh||Tt===_h,Ut=Gt.getClearColor(),Nt=Gt.getClearAlpha(),Ht=Ut.r,Ft=Ut.g,Bt=Ut.b;Pt?(p[0]=Ht,p[1]=Ft,p[2]=Bt,p[3]=Nt,R.clearBufferuiv(R.COLOR,0,p)):(g[0]=Ht,g[1]=Ft,g[2]=Bt,g[3]=Nt,R.clearBufferiv(R.COLOR,0,g))}else q|=R.COLOR_BUFFER_BIT}z&&(q|=R.DEPTH_BUFFER_BIT),G&&(q|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",D,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Et.dispose(),It.dispose(),ut.dispose(),y.dispose(),U.dispose(),k.dispose(),Rt.dispose(),Wt.dispose(),wt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",De),kt.removeEventListener("sessionend",ne),at&&(at.dispose(),at=null),Ue.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function D(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let w=Mt.autoReset,z=ct.enabled,G=ct.autoUpdate,q=ct.needsUpdate,H=ct.type;Yt(),Mt.autoReset=w,ct.enabled=z,ct.autoUpdate=G,ct.needsUpdate=q,ct.type=H}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pt(w){let z=w.target;z.removeEventListener("dispose",pt),Dt(z)}function Dt(w){Ct(w),ut.remove(w)}function Ct(w){let z=ut.get(w).programs;z!==void 0&&(z.forEach(function(G){wt.releaseProgram(G)}),w.isShaderMaterial&&wt.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,G,q,H,Tt){z===null&&(z=bt);let Pt=H.isMesh&&H.matrixWorld.determinant()<0,Ut=yu(w,z,G,q,H);N.setMaterial(q,Pt);let Nt=G.index,Ht=1;if(q.wireframe===!0){if(Nt=j.getWireframeAttribute(G),Nt===void 0)return;Ht=2}let Ft=G.drawRange,Bt=G.attributes.position,ue=Ft.start*Ht,He=(Ft.start+Ft.count)*Ht;Tt!==null&&(ue=Math.max(ue,Tt.start*Ht),He=Math.min(He,(Tt.start+Tt.count)*Ht)),Nt!==null?(ue=Math.max(ue,0),He=Math.min(He,Nt.count)):Bt!=null&&(ue=Math.max(ue,0),He=Math.min(He,Bt.count));let ve=He-ue;if(ve<0||ve===1/0)return;Rt.setup(H,q,Ut,G,Nt);let fn,oe=lt;if(Nt!==null&&(fn=Q.get(Nt),oe=xt,oe.setIndex(fn)),H.isMesh)q.wireframe===!0?(N.setLineWidth(q.wireframeLinewidth*St()),oe.setMode(R.LINES)):oe.setMode(R.TRIANGLES);else if(H.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),N.setLineWidth(Xt*St()),H.isLineSegments?oe.setMode(R.LINES):H.isLineLoop?oe.setMode(R.LINE_LOOP):oe.setMode(R.LINE_STRIP)}else H.isPoints?oe.setMode(R.POINTS):H.isSprite&&oe.setMode(R.TRIANGLES);if(H.isBatchedMesh)oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)oe.renderInstances(ue,ve,H.count);else if(G.isInstancedBufferGeometry){let Xt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xa=Math.min(G.instanceCount,Xt);oe.renderInstances(ue,ve,xa)}else oe.render(ue,ve)};function Zt(w,z,G){w.transparent===!0&&w.side===Ze&&w.forceSinglePass===!1?(w.side=Be,w.needsUpdate=!0,Bs(w,z,G),w.side=Hn,w.needsUpdate=!0,Bs(w,z,G),w.side=Ze):Bs(w,z,G)}this.compile=function(w,z,G=null){G===null&&(G=w),m=It.get(G),m.init(),v.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),w!==G&&w.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);let q=new Set;return w.traverse(function(H){let Tt=H.material;if(Tt)if(Array.isArray(Tt))for(let Pt=0;Pt<Tt.length;Pt++){let Ut=Tt[Pt];Zt(Ut,G,H),q.add(Ut)}else Zt(Tt,G,H),q.add(Tt)}),v.pop(),m=null,q},this.compileAsync=function(w,z,G=null){let q=this.compile(w,z,G);return new Promise(H=>{function Tt(){if(q.forEach(function(Pt){ut.get(Pt).currentProgram.isReady()&&q.delete(Pt)}),q.size===0){H(w);return}setTimeout(Tt,10)}J.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let jt=null;function ye(w){jt&&jt(w)}function De(){Ue.stop()}function ne(){Ue.start()}let Ue=new Ah;Ue.setAnimationLoop(ye),typeof self!="undefined"&&Ue.setContext(self),this.setAnimationLoop=function(w){jt=w,kt.setAnimationLoop(w),w===null?Ue.stop():Ue.start()},kt.addEventListener("sessionstart",De),kt.addEventListener("sessionend",ne),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(z),z=kt.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,z,A),m=It.get(w,v.length),m.init(),v.push(m),nt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X.setFromProjectionMatrix(nt),Z=this.localClippingEnabled,st=Ot.init(this.clippingPlanes,Z),x=Et.get(w,f.length),x.init(),f.push(x),on(w,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(K,Y),this.info.render.frame++,st===!0&&Ot.beginShadows();let G=m.state.shadowsArray;if(ct.render(G,w,z),st===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Gt.render(x,w),m.setupLights(_._useLegacyLights),z.isArrayCamera){let q=z.cameras;for(let H=0,Tt=q.length;H<Tt;H++){let Pt=q[H];Ac(x,w,Pt,Pt.viewport)}}else Ac(x,w,z);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(_,w,z),Rt.resetDefaultState(),B=-1,M=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function on(w,z,G,q){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){q&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);let Pt=k.update(w),Ut=w.material;Ut.visible&&x.push(w,Pt,Ut,G,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){let Pt=k.update(w),Ut=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),At.copy(Pt.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(Ut)){let Nt=Pt.groups;for(let Ht=0,Ft=Nt.length;Ht<Ft;Ht++){let Bt=Nt[Ht],ue=Ut[Bt.materialIndex];ue&&ue.visible&&x.push(w,Pt,ue,G,At.z,Bt)}}else Ut.visible&&x.push(w,Pt,Ut,G,At.z,null)}}let Tt=w.children;for(let Pt=0,Ut=Tt.length;Pt<Ut;Pt++)on(Tt[Pt],z,G,q)}function Ac(w,z,G,q){let H=w.opaque,Tt=w.transmissive,Pt=w.transparent;m.setupLightsView(G),st===!0&&Ot.setGlobalState(_.clippingPlanes,G),Tt.length>0&&xu(H,Tt,z,G),q&&N.viewport(S.copy(q)),H.length>0&&Fs(H,z,G),Tt.length>0&&Fs(Tt,z,G),Pt.length>0&&Fs(Pt,z,G),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function xu(w,z,G,q){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let Tt=ht.isWebGL2;at===null&&(at=new bn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?ps:zn,minFilter:fs,samples:Tt?4:0})),_.getDrawingBufferSize(yt),Tt?at.setSize(yt.x,yt.y):at.setSize(br(yt.x),br(yt.y));let Pt=_.getRenderTarget();_.setRenderTarget(at),_.getClearColor(rt),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();let Ut=_.toneMapping;_.toneMapping=Bn,Fs(w,G,q),b.updateMultisampleRenderTarget(at),b.updateRenderTargetMipmap(at);let Nt=!1;for(let Ht=0,Ft=z.length;Ht<Ft;Ht++){let Bt=z[Ht],ue=Bt.object,He=Bt.geometry,ve=Bt.material,fn=Bt.group;if(ve.side===Ze&&ue.layers.test(q.layers)){let oe=ve.side;ve.side=Be,ve.needsUpdate=!0,Rc(ue,G,q,He,ve,fn),ve.side=oe,ve.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(at),b.updateRenderTargetMipmap(at)),_.setRenderTarget(Pt),_.setClearColor(rt,I),_.toneMapping=Ut}function Fs(w,z,G){let q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Tt=w.length;H<Tt;H++){let Pt=w[H],Ut=Pt.object,Nt=Pt.geometry,Ht=q===null?Pt.material:q,Ft=Pt.group;Ut.layers.test(G.layers)&&Rc(Ut,z,G,Nt,Ht,Ft)}}function Rc(w,z,G,q,H,Tt){w.onBeforeRender(_,z,G,q,H,Tt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(_,z,G,q,w,Tt),H.transparent===!0&&H.side===Ze&&H.forceSinglePass===!1?(H.side=Be,H.needsUpdate=!0,_.renderBufferDirect(G,z,q,H,w,Tt),H.side=Hn,H.needsUpdate=!0,_.renderBufferDirect(G,z,q,H,w,Tt),H.side=Ze):_.renderBufferDirect(G,z,q,H,w,Tt),w.onAfterRender(_,z,G,q,H,Tt)}function Bs(w,z,G){z.isScene!==!0&&(z=bt);let q=ut.get(w),H=m.state.lights,Tt=m.state.shadowsArray,Pt=H.state.version,Ut=wt.getParameters(w,H.state,Tt,z,G),Nt=wt.getProgramCacheKey(Ut),Ht=q.programs;q.environment=w.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(w.isMeshStandardMaterial?U:y).get(w.envMap||q.environment),Ht===void 0&&(w.addEventListener("dispose",pt),Ht=new Map,q.programs=Ht);let Ft=Ht.get(Nt);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===Pt)return Pc(w,Ut),Ft}else Ut.uniforms=wt.getUniforms(w),w.onBuild(G,Ut,_),w.onBeforeCompile(Ut,_),Ft=wt.acquireProgram(Ut,Nt),Ht.set(Nt,Ft),q.uniforms=Ut.uniforms;let Bt=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=Ot.uniform),Pc(w,Ut),q.needsLights=Mu(w),q.lightsStateVersion=Pt,q.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function Cc(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=zi.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Pc(w,z){let G=ut.get(w);G.outputColorSpace=z.outputColorSpace,G.batching=z.batching,G.instancing=z.instancing,G.instancingColor=z.instancingColor,G.skinning=z.skinning,G.morphTargets=z.morphTargets,G.morphNormals=z.morphNormals,G.morphColors=z.morphColors,G.morphTargetsCount=z.morphTargetsCount,G.numClippingPlanes=z.numClippingPlanes,G.numIntersection=z.numClipIntersection,G.vertexAlphas=z.vertexAlphas,G.vertexTangents=z.vertexTangents,G.toneMapping=z.toneMapping}function yu(w,z,G,q,H){z.isScene!==!0&&(z=bt),b.resetTextureUnits();let Tt=z.fog,Pt=q.isMeshStandardMaterial?z.environment:null,Ut=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Nt=(q.isMeshStandardMaterial?U:y).get(q.envMap||Pt),Ht=q.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Bt=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,He=!!G.morphAttributes.color,ve=Bn;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=_.toneMapping);let fn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=fn!==void 0?fn.length:0,Xt=ut.get(q),xa=m.state.lights;if(st===!0&&(Z===!0||w!==M)){let Xe=w===M&&q.id===B;Ot.setState(q,w,Xe)}let le=!1;q.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==xa.state.version||Xt.outputColorSpace!==Ut||H.isBatchedMesh&&Xt.batching===!1||!H.isBatchedMesh&&Xt.batching===!0||H.isInstancedMesh&&Xt.instancing===!1||!H.isInstancedMesh&&Xt.instancing===!0||H.isSkinnedMesh&&Xt.skinning===!1||!H.isSkinnedMesh&&Xt.skinning===!0||H.isInstancedMesh&&Xt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Xt.instancingColor===!1&&H.instanceColor!==null||Xt.envMap!==Nt||q.fog===!0&&Xt.fog!==Tt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ot.numPlanes||Xt.numIntersection!==Ot.numIntersection)||Xt.vertexAlphas!==Ht||Xt.vertexTangents!==Ft||Xt.morphTargets!==Bt||Xt.morphNormals!==ue||Xt.morphColors!==He||Xt.toneMapping!==ve||ht.isWebGL2===!0&&Xt.morphTargetsCount!==oe)&&(le=!0):(le=!0,Xt.__version=q.version);let qn=Xt.currentProgram;le===!0&&(qn=Bs(q,z,H));let Lc=!1,$i=!1,ya=!1,Te=qn.getUniforms(),Yn=Xt.uniforms;if(N.useProgram(qn.program)&&(Lc=!0,$i=!0,ya=!0),q.id!==B&&(B=q.id,$i=!0),Lc||M!==w){Te.setValue(R,"projectionMatrix",w.projectionMatrix),Te.setValue(R,"viewMatrix",w.matrixWorldInverse);let Xe=Te.map.cameraPosition;Xe!==void 0&&Xe.setValue(R,At.setFromMatrixPosition(w.matrixWorld)),ht.logarithmicDepthBuffer&&Te.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Te.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,$i=!0,ya=!0)}if(H.isSkinnedMesh){Te.setOptional(R,H,"bindMatrix"),Te.setOptional(R,H,"bindMatrixInverse");let Xe=H.skeleton;Xe&&(ht.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Te.setValue(R,"boneTexture",Xe.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Te.setOptional(R,H,"batchingTexture"),Te.setValue(R,"batchingTexture",H._matricesTexture,b));let va=G.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&ht.isWebGL2===!0)&&C.update(H,G,qn),($i||Xt.receiveShadow!==H.receiveShadow)&&(Xt.receiveShadow=H.receiveShadow,Te.setValue(R,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Yn.envMap.value=Nt,Yn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),$i&&(Te.setValue(R,"toneMappingExposure",_.toneMappingExposure),Xt.needsLights&&vu(Yn,ya),Tt&&q.fog===!0&&gt.refreshFogUniforms(Yn,Tt),gt.refreshMaterialUniforms(Yn,q,$,V,at),zi.upload(R,Cc(Xt),Yn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(zi.upload(R,Cc(Xt),Yn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Te.setValue(R,"center",H.center),Te.setValue(R,"modelViewMatrix",H.modelViewMatrix),Te.setValue(R,"normalMatrix",H.normalMatrix),Te.setValue(R,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Xe=q.uniformsGroups;for(let Ma=0,bu=Xe.length;Ma<bu;Ma++)if(ht.isWebGL2){let Ic=Xe[Ma];Wt.update(Ic,qn),Wt.bind(Ic,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function vu(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Mu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,z,G){ut.get(w.texture).__webglTexture=z,ut.get(w.depthTexture).__webglTexture=G;let q=ut.get(w);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=G===void 0,q.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){let G=ut.get(w);G.__webglFramebuffer=z,G.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,G=0){A=w,L=z,T=G;let q=!0,H=null,Tt=!1,Pt=!1;if(w){let Nt=ut.get(w);Nt.__useDefaultFramebuffer!==void 0?(N.bindFramebuffer(R.FRAMEBUFFER,null),q=!1):Nt.__webglFramebuffer===void 0?b.setupRenderTarget(w):Nt.__hasExternalTextures&&b.rebindTextures(w,ut.get(w.texture).__webglTexture,ut.get(w.depthTexture).__webglTexture);let Ht=w.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Pt=!0);let Ft=ut.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ft[z])?H=Ft[z][G]:H=Ft[z],Tt=!0):ht.isWebGL2&&w.samples>0&&b.useMultisampledRTT(w)===!1?H=ut.get(w).__webglMultisampledFramebuffer:Array.isArray(Ft)?H=Ft[G]:H=Ft,S.copy(w.viewport),O.copy(w.scissor),W=w.scissorTest}else S.copy(et).multiplyScalar($).floor(),O.copy(it).multiplyScalar($).floor(),W=mt;if(N.bindFramebuffer(R.FRAMEBUFFER,H)&&ht.drawBuffers&&q&&N.drawBuffers(w,H),N.viewport(S),N.scissor(O),N.setScissorTest(W),Tt){let Nt=ut.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Nt.__webglTexture,G)}else if(Pt){let Nt=ut.get(w.texture),Ht=z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,Ht)}B=-1},this.readRenderTargetPixels=function(w,z,G,q,H,Tt,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=ut.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ut=Ut[Pt]),Ut){N.bindFramebuffer(R.FRAMEBUFFER,Ut);try{let Nt=w.texture,Ht=Nt.format,Ft=Nt.type;if(Ht!==sn&&dt.convert(Ht)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Bt=Ft===ps&&(J.has("EXT_color_buffer_half_float")||ht.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ft!==zn&&dt.convert(Ft)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===On&&(ht.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-q&&G>=0&&G<=w.height-H&&R.readPixels(z,G,q,H,dt.convert(Ht),dt.convert(Ft),Tt)}finally{let Nt=A!==null?ut.get(A).__webglFramebuffer:null;N.bindFramebuffer(R.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(w,z,G=0){let q=Math.pow(2,-G),H=Math.floor(z.image.width*q),Tt=Math.floor(z.image.height*q);b.setTexture2D(z,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,w.x,w.y,H,Tt),N.unbindTexture()},this.copyTextureToTexture=function(w,z,G,q=0){let H=z.image.width,Tt=z.image.height,Pt=dt.convert(G.format),Ut=dt.convert(G.type);b.setTexture2D(G,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment),z.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,q,w.x,w.y,H,Tt,Pt,Ut,z.image.data):z.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,q,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,Pt,z.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,q,w.x,w.y,Pt,Ut,z.image),q===0&&G.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),N.unbindTexture()},this.copyTextureToTexture3D=function(w,z,G,q,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Tt=w.max.x-w.min.x+1,Pt=w.max.y-w.min.y+1,Ut=w.max.z-w.min.z+1,Nt=dt.convert(q.format),Ht=dt.convert(q.type),Ft;if(q.isData3DTexture)b.setTexture3D(q,0),Ft=R.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)b.setTexture2DArray(q,0),Ft=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,q.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,q.unpackAlignment);let Bt=R.getParameter(R.UNPACK_ROW_LENGTH),ue=R.getParameter(R.UNPACK_IMAGE_HEIGHT),He=R.getParameter(R.UNPACK_SKIP_PIXELS),ve=R.getParameter(R.UNPACK_SKIP_ROWS),fn=R.getParameter(R.UNPACK_SKIP_IMAGES),oe=G.isCompressedTexture?G.mipmaps[H]:G.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,oe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,oe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,w.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,w.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?R.texSubImage3D(Ft,H,z.x,z.y,z.z,Tt,Pt,Ut,Nt,Ht,oe.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ft,H,z.x,z.y,z.z,Tt,Pt,Ut,Nt,oe.data)):R.texSubImage3D(Ft,H,z.x,z.y,z.z,Tt,Pt,Ut,Nt,Ht,oe),R.pixelStorei(R.UNPACK_ROW_LENGTH,Bt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ue),R.pixelStorei(R.UNPACK_SKIP_PIXELS,He),R.pixelStorei(R.UNPACK_SKIP_ROWS,ve),R.pixelStorei(R.UNPACK_SKIP_IMAGES,fn),H===0&&q.generateMipmaps&&R.generateMipmap(Ft),N.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),N.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,N.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===ec?"display-p3":"srgb",e.unpackColorSpace=te.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===de?si:bh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===si?de:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},To=class extends ys{};To.prototype.isWebGL1Renderer=!0;var vs=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ne=new P,Ur=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}setX(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qt(e,this.array),n=Qt(n,this.array),s=Qt(s,this.array),r=Qt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ms=class extends En{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ci,ns=new P,Pi=new P,Li=new P,Ii=new tt,is=new tt,Dh=new ee,or=new P,ss=new P,cr=new P,th=new tt,$a=new tt,eh=new tt,Nr=class extends Le{constructor(t=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new ge;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new Ur(n,3,0,!1)),Ci.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Ci,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),Dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;lr(or.set(-.5,-.5,0),Li,o,Pi,s,r),lr(ss.set(.5,-.5,0),Li,o,Pi,s,r),lr(cr.set(.5,.5,0),Li,o,Pi,s,r),th.set(0,0),$a.set(1,0),eh.set(1,1);let a=t.ray.intersectTriangle(or,ss,cr,!1,ns);if(a===null&&(lr(ss.set(-.5,.5,0),Li,o,Pi,s,r),$a.set(0,1),a=t.ray.intersectTriangle(or,cr,ss,!1,ns),a===null))return;let c=t.ray.origin.distanceTo(ns);c<t.near||c>t.far||e.push({distance:c,point:ns.clone(),uv:ei.getInterpolation(ns,or,ss,cr,th,$a,eh,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function lr(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(is.x=r*Ii.x-s*Ii.y,is.y=s*Ii.x+r*Ii.y):is.copy(Ii),i.copy(t),i.x+=is.x,i.y+=is.y,i.applyMatrix4(Dh)}var Or=class extends me{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new ee,nh=new ee,hr=[],ih=new Sn,Cg=new ee,rs=new Jt,as=new ri,oi=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Or(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),ih.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),as.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(n),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),nh.multiplyMatrices(n,Di),rs.matrixWorld=nh,rs.raycast(t,hr);for(let o=0,a=hr.length;o<a;o++){let c=hr[o];c.instanceId=r,c.object=this,e.push(c)}hr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Or(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var bs=class extends We{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ke=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,p=(o-h)/d;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new tt:new P);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new P,s=[],r=[],o=[],a=new P,c=new ee;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new P)}r[0]=new P,o[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(be(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(be(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ss=class extends Ke{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new tt,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ro=class extends Ss{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function rc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,s(o,a,d,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ur=new P,ja=new rc,Qa=new rc,to=new rc,Co=class extends Ke{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),l=ur);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ja.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),Qa.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),to.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Qa.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),to.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ja.calc(c),Qa.calc(c),to.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function sh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Pg(i,t){let e=1-i;return e*e*t}function Lg(i,t){return 2*(1-i)*i*t}function Ig(i,t){return i*i*t}function us(i,t,e,n){return Pg(i,t)+Lg(i,e)+Ig(i,n)}function Dg(i,t){let e=1-i;return e*e*e*t}function Ug(i,t){let e=1-i;return 3*e*e*i*t}function Ng(i,t){return 3*(1-i)*i*i*t}function Og(i,t){return i*i*i*t}function ds(i,t,e,n,s){return Dg(i,t)+Ug(i,e)+Ng(i,n)+Og(i,s)}var Fr=class extends Ke{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,s.x,r.x,o.x,a.x),ds(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Po=class extends Ke{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ds(t,s.x,r.x,o.x,a.x),ds(t,s.y,r.y,o.y,a.y),ds(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Br=class extends Ke{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lo=class extends Ke{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends Ke{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(us(t,s.x,r.x,o.x),us(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends Ke{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(us(t,s.x,r.x,o.x),us(t,s.y,r.y,o.y),us(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},kr=class extends Ke{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(sh(a,c.x,l.x,h.x,u.x),sh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Do=Object.freeze({__proto__:null,ArcCurve:Ro,CatmullRomCurve3:Co,CubicBezierCurve:Fr,CubicBezierCurve3:Po,EllipseCurve:Ss,LineCurve:Br,LineCurve3:Lo,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Io,SplineCurve:kr}),Uo=class extends Ke{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Do[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Do[s.type]().fromJSON(s))}return this}},Xi=class extends Uo{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Br(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zr(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Fr(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new kr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Ss(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Hr=class i extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new P,h=new tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(a,3)),this.setAttribute("uv",new Kt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},An=class i extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;v(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Kt(u,3)),this.setAttribute("normal",new Kt(d,3)),this.setAttribute("uv",new Kt(p,2));function v(){let E=new P,L=new P,T=0,A=(e-t)/n;for(let B=0;B<=r;B++){let M=[],S=B/r,O=S*(e-t)+t;for(let W=0;W<=s;W++){let rt=W/s,I=rt*c+a,F=Math.sin(I),V=Math.cos(I);L.x=O*F,L.y=-S*n+m,L.z=O*V,u.push(L.x,L.y,L.z),E.set(F,A,V).normalize(),d.push(E.x,E.y,E.z),p.push(rt,1-S),M.push(g++)}x.push(M)}for(let B=0;B<s;B++)for(let M=0;M<r;M++){let S=x[M][B],O=x[M+1][B],W=x[M+1][B+1],rt=x[M][B+1];h.push(S,O,rt),h.push(O,W,rt),T+=6}l.addGroup(f,T,0),f+=T}function _(E){let L=g,T=new tt,A=new P,B=0,M=E===!0?t:e,S=E===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;let O=g;for(let W=0;W<=s;W++){let I=W/s*c+a,F=Math.cos(I),V=Math.sin(I);A.x=M*V,A.y=m*S,A.z=M*F,u.push(A.x,A.y,A.z),d.push(0,S,0),T.x=F*.5+.5,T.y=V*.5*S+.5,p.push(T.x,T.y),g++}for(let W=0;W<s;W++){let rt=L+W,I=O+W;E===!0?h.push(I,I+1,rt):h.push(I+1,I,rt),B+=3}l.addGroup(f,B,E===!0?1:2),f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var No=class i extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Kt(r,3)),this.setAttribute("normal",new Kt(r.slice(),3)),this.setAttribute("uv",new Kt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new P,E=new P,L=new P;for(let T=0;T<e.length;T+=3)p(e[T+0],_),p(e[T+1],E),p(e[T+2],L),c(_,E,L,v)}function c(v,_,E,L){let T=L+1,A=[];for(let B=0;B<=T;B++){A[B]=[];let M=v.clone().lerp(E,B/T),S=_.clone().lerp(E,B/T),O=T-B;for(let W=0;W<=O;W++)W===0&&B===T?A[B][W]=M:A[B][W]=M.clone().lerp(S,W/O)}for(let B=0;B<T;B++)for(let M=0;M<2*(T-B)-1;M++){let S=Math.floor(M/2);M%2===0?(d(A[B][S+1]),d(A[B+1][S]),d(A[B][S])):(d(A[B][S+1]),d(A[B+1][S+1]),d(A[B+1][S]))}}function l(v){let _=new P;for(let E=0;E<r.length;E+=3)_.x=r[E+0],_.y=r[E+1],_.z=r[E+2],_.normalize().multiplyScalar(v),r[E+0]=_.x,r[E+1]=_.y,r[E+2]=_.z}function h(){let v=new P;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let E=m(v)/2/Math.PI+.5,L=f(v)/Math.PI+.5;o.push(E,1-L)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let _=o[v+0],E=o[v+2],L=o[v+4],T=Math.max(_,E,L),A=Math.min(_,E,L);T>.9&&A<.1&&(_<.2&&(o[v+0]+=1),E<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function p(v,_){let E=v*3;_.x=t[E+0],_.y=t[E+1],_.z=t[E+2]}function g(){let v=new P,_=new P,E=new P,L=new P,T=new tt,A=new tt,B=new tt;for(let M=0,S=0;M<r.length;M+=9,S+=6){v.set(r[M+0],r[M+1],r[M+2]),_.set(r[M+3],r[M+4],r[M+5]),E.set(r[M+6],r[M+7],r[M+8]),T.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),B.set(o[S+4],o[S+5]),L.copy(v).add(_).add(E).divideScalar(3);let O=m(L);x(T,S+0,v,O),x(A,S+2,_,O),x(B,S+4,E,O)}}function x(v,_,E,L){L<0&&v.x===1&&(o[_]=v.x-1),E.x===0&&E.z===0&&(o[_]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}};var Vn=class extends Xi{constructor(t){super(t),this.uuid=hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xi().fromJSON(s))}return this}},Fg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Uh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,p;if(n&&(r=Vg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Es(r,o,e,a,c,p,0),o}};function Uh(i,t,e,n,s){let r,o;if(s===Qg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=rh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=rh(r,i[r],i[r+1],o);return o&&ea(o,o.next)&&(Ts(o),o=o.next),o}function ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ea(e,e.next)||ce(e.prev,e,e.next)===0)){if(Ts(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Es(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Yg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?zg(i,n,s,r):Bg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ts(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=kg(ci(i),t,e),Es(i,t,e,n,s,r,2)):o===2&&Hg(i,t,e,n,s,r):Es(ci(i),t,e,n,s,r,1);break}}}function Bg(i){let t=i.prev,e=i,n=i.next;if(ce(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,p=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&Oi(s,a,r,c,o,l,g.x,g.y)&&ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,t,e,n){let s=i.prev,r=i,o=i.next;if(ce(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,f=Oo(p,g,t,e,n),v=Oo(x,m,t,e,n),_=i.prevZ,E=i.nextZ;for(;_&&_.z>=f&&E&&E.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Oi(a,h,c,u,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0||(_=_.prevZ,E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Oi(a,h,c,u,l,d,E.x,E.y)&&ce(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;_&&_.z>=f;){if(_.x>=p&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Oi(a,h,c,u,l,d,_.x,_.y)&&ce(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;E&&E.z<=v;){if(E.x>=p&&E.x<=x&&E.y>=g&&E.y<=m&&E!==s&&E!==o&&Oi(a,h,c,u,l,d,E.x,E.y)&&ce(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function kg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ea(s,r)&&Nh(s,n,n.next,r)&&ws(s,r)&&ws(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ts(n),Ts(n.next),n=i=r),n=n.next}while(n!==i);return ci(n)}function Hg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kg(o,a)){let c=Oh(o,a);o=ci(o,o.next),c=ci(c,c.next),Es(o,t,e,n,s,r,0),Es(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Vg(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Uh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Jg(l));for(s.sort(Gg),r=0;r<s.length;r++)e=Wg(s[r],e);return e}function Gg(i,t){return i.x-t.x}function Wg(i,t){let e=Xg(i,t);if(!e)return t;let n=Oh(e,i);return ci(n,n.next),ci(e,e.next)}function Xg(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Oi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ws(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&qg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function qg(i,t){return ce(i.prev,i,t.prev)<0&&ce(t.next,i,i.next)<0}function Yg(i,t,e,n){let s=i;do s.z===0&&(s.z=Oo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zg(s)}function Zg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Oo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Jg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Oi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(ws(i,t)&&ws(t,i)&&jg(i,t)&&(ce(i.prev,i,t.prev)||ce(i,t.prev,t))||ea(i,t)&&ce(i.prev,i,i.next)>0&&ce(t.prev,t,t.next)>0)}function ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ea(i,t){return i.x===t.x&&i.y===t.y}function Nh(i,t,e,n){let s=fr(ce(i,t,e)),r=fr(ce(i,t,n)),o=fr(ce(e,n,i)),a=fr(ce(e,n,t));return!!(s!==r&&o!==a||s===0&&dr(i,e,t)||r===0&&dr(i,n,t)||o===0&&dr(e,i,n)||a===0&&dr(e,t,n))}function dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fr(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Nh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return ce(i.prev,i,i.next)<0?ce(i,t,i.next)>=0&&ce(i,i.prev,t)>=0:ce(i,t,i.prev)<0||ce(i,i.next,t)<0}function jg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Oh(i,t){let e=new Fo(i.i,i.x,i.y),n=new Fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function rh(i,t,e,n){let s=new Fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ts(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Qg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var kn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ah(t),oh(n,t);let o=t.length;e.forEach(ah);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,oh(n,e[c]);let a=Fg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ah(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function oh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vr=class i extends ge{constructor(t=new Vn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Kt(s,3)),this.setAttribute("uv",new Kt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:t_,_,E=!1,L,T,A,B;f&&(_=f.getSpacedPoints(h),E=!0,d=!1,L=f.computeFrenetFrames(h,!1),T=new P,A=new P,B=new P),d||(m=0,p=0,g=0,x=0);let M=a.extractPoints(l),S=M.shape,O=M.holes;if(!kn.isClockWise(S)){S=S.reverse();for(let R=0,ot=O.length;R<ot;R++){let J=O[R];kn.isClockWise(J)&&(O[R]=J.reverse())}}let rt=kn.triangulateShape(S,O),I=S;for(let R=0,ot=O.length;R<ot;R++){let J=O[R];S=S.concat(J)}function F(R,ot,J){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(ot,J)}let V=S.length,$=rt.length;function K(R,ot,J){let ht,N,Mt,ut=R.x-ot.x,b=R.y-ot.y,y=J.x-R.x,U=J.y-R.y,Q=ut*ut+b*b,j=ut*U-b*y;if(Math.abs(j)>Number.EPSILON){let k=Math.sqrt(Q),wt=Math.sqrt(y*y+U*U),gt=ot.x-b/k,Et=ot.y+ut/k,It=J.x-U/wt,Ot=J.y+y/wt,ct=((It-gt)*U-(Ot-Et)*y)/(ut*U-b*y);ht=gt+ut*ct-R.x,N=Et+b*ct-R.y;let Gt=ht*ht+N*N;if(Gt<=2)return new tt(ht,N);Mt=Math.sqrt(Gt/2)}else{let k=!1;ut>Number.EPSILON?y>Number.EPSILON&&(k=!0):ut<-Number.EPSILON?y<-Number.EPSILON&&(k=!0):Math.sign(b)===Math.sign(U)&&(k=!0),k?(ht=-b,N=ut,Mt=Math.sqrt(Q)):(ht=ut,N=b,Mt=Math.sqrt(Q/2))}return new tt(ht/Mt,N/Mt)}let Y=[];for(let R=0,ot=I.length,J=ot-1,ht=R+1;R<ot;R++,J++,ht++)J===ot&&(J=0),ht===ot&&(ht=0),Y[R]=K(I[R],I[J],I[ht]);let et=[],it,mt=Y.concat();for(let R=0,ot=O.length;R<ot;R++){let J=O[R];it=[];for(let ht=0,N=J.length,Mt=N-1,ut=ht+1;ht<N;ht++,Mt++,ut++)Mt===N&&(Mt=0),ut===N&&(ut=0),it[ht]=K(J[ht],J[Mt],J[ut]);et.push(it),mt=mt.concat(it)}for(let R=0;R<m;R++){let ot=R/m,J=p*Math.cos(ot*Math.PI/2),ht=g*Math.sin(ot*Math.PI/2)+x;for(let N=0,Mt=I.length;N<Mt;N++){let ut=F(I[N],Y[N],ht);nt(ut.x,ut.y,-J)}for(let N=0,Mt=O.length;N<Mt;N++){let ut=O[N];it=et[N];for(let b=0,y=ut.length;b<y;b++){let U=F(ut[b],it[b],ht);nt(U.x,U.y,-J)}}}let X=g+x;for(let R=0;R<V;R++){let ot=d?F(S[R],mt[R],X):S[R];E?(A.copy(L.normals[0]).multiplyScalar(ot.x),T.copy(L.binormals[0]).multiplyScalar(ot.y),B.copy(_[0]).add(A).add(T),nt(B.x,B.y,B.z)):nt(ot.x,ot.y,0)}for(let R=1;R<=h;R++)for(let ot=0;ot<V;ot++){let J=d?F(S[ot],mt[ot],X):S[ot];E?(A.copy(L.normals[R]).multiplyScalar(J.x),T.copy(L.binormals[R]).multiplyScalar(J.y),B.copy(_[R]).add(A).add(T),nt(B.x,B.y,B.z)):nt(J.x,J.y,u/h*R)}for(let R=m-1;R>=0;R--){let ot=R/m,J=p*Math.cos(ot*Math.PI/2),ht=g*Math.sin(ot*Math.PI/2)+x;for(let N=0,Mt=I.length;N<Mt;N++){let ut=F(I[N],Y[N],ht);nt(ut.x,ut.y,u+J)}for(let N=0,Mt=O.length;N<Mt;N++){let ut=O[N];it=et[N];for(let b=0,y=ut.length;b<y;b++){let U=F(ut[b],it[b],ht);E?nt(U.x,U.y+_[h-1].y,_[h-1].x+J):nt(U.x,U.y,u+J)}}}st(),Z();function st(){let R=s.length/3;if(d){let ot=0,J=V*ot;for(let ht=0;ht<$;ht++){let N=rt[ht];yt(N[2]+J,N[1]+J,N[0]+J)}ot=h+m*2,J=V*ot;for(let ht=0;ht<$;ht++){let N=rt[ht];yt(N[0]+J,N[1]+J,N[2]+J)}}else{for(let ot=0;ot<$;ot++){let J=rt[ot];yt(J[2],J[1],J[0])}for(let ot=0;ot<$;ot++){let J=rt[ot];yt(J[0]+V*h,J[1]+V*h,J[2]+V*h)}}n.addGroup(R,s.length/3-R,0)}function Z(){let R=s.length/3,ot=0;at(I,ot),ot+=I.length;for(let J=0,ht=O.length;J<ht;J++){let N=O[J];at(N,ot),ot+=N.length}n.addGroup(R,s.length/3-R,1)}function at(R,ot){let J=R.length;for(;--J>=0;){let ht=J,N=J-1;N<0&&(N=R.length-1);for(let Mt=0,ut=h+m*2;Mt<ut;Mt++){let b=V*Mt,y=V*(Mt+1),U=ot+ht+b,Q=ot+N+b,j=ot+N+y,k=ot+ht+y;At(U,Q,j,k)}}}function nt(R,ot,J){c.push(R),c.push(ot),c.push(J)}function yt(R,ot,J){bt(R),bt(ot),bt(J);let ht=s.length/3,N=v.generateTopUV(n,s,ht-3,ht-2,ht-1);St(N[0]),St(N[1]),St(N[2])}function At(R,ot,J,ht){bt(R),bt(ot),bt(ht),bt(ot),bt(J),bt(ht);let N=s.length/3,Mt=v.generateSideWallUV(n,s,N-6,N-3,N-2,N-1);St(Mt[0]),St(Mt[1]),St(Mt[3]),St(Mt[1]),St(Mt[2]),St(Mt[3])}function bt(R){s.push(c[R*3+0]),s.push(c[R*3+1]),s.push(c[R*3+2])}function St(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return e_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Do[s.type]().fromJSON(s)),new i(n,t.options)}},t_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,c),new tt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],p=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new tt(o,1-c),new tt(l,1-u),new tt(d,1-g),new tt(x,1-f)]:[new tt(a,1-c),new tt(h,1-u),new tt(p,1-g),new tt(m,1-f)]}};function e_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gr=class i extends No{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Wr=class i extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/s,p=new P,g=new tt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let f=0;f<n;f++){let v=f+m,_=v,E=v+n+1,L=v+n+2,T=v+1;a.push(_,E,T),a.push(E,L,T)}}this.setIndex(a),this.setAttribute("position",new Kt(c,3)),this.setAttribute("normal",new Kt(l,3)),this.setAttribute("uv",new Kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Xr=class i extends ge{constructor(t=new Vn([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Kt(s,3)),this.setAttribute("normal",new Kt(r,3)),this.setAttribute("uv",new Kt(o,2));function l(h){let u=s.length/3,d=h.extractPoints(e),p=d.shape,g=d.holes;kn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let v=g[m];kn.isClockWise(v)===!0&&(g[m]=v.reverse())}let x=kn.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let v=g[m];p=p.concat(v)}for(let m=0,f=p.length;m<f;m++){let v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,f=x.length;m<f;m++){let v=x[m],_=v[0]+u,E=v[1]+u,L=v[2]+u;n.push(_,E,L),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return n_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function n_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var As=class i extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new P,d=new P,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let v=[],_=f/n,E=0;f===0&&o===0?E=.5/e:f===n&&c===Math.PI&&(E=-.5/e);for(let L=0;L<=e;L++){let T=L/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+E,1-_),v.push(l++)}h.push(v)}for(let f=0;f<n;f++)for(let v=0;v<e;v++){let _=h[f][v+1],E=h[f][v],L=h[f+1][v],T=h[f+1][v+1];(f!==0||o>0)&&p.push(_,E,T),(f!==n-1||c<Math.PI)&&p.push(E,L,T)}this.setIndex(p),this.setAttribute("position",new Kt(g,3)),this.setAttribute("normal",new Kt(x,3)),this.setAttribute("uv",new Kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ie=class extends En{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Gn=class extends En{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function pr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function i_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var qi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bo=class extends qi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ul,endingEnd:ul}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dl:r=t,a=2*e-n;break;case fl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case dl:o=t,c=2*n-e;break;case fl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*x+.5*g,E=p*m-p*x;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+v*o[l+L]+_*o[c+L]+E*o[u+L];return r}},zo=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*u+o[c+d]*h;return r}},ko=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},rn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ko(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gr:e=this.InterpolantFactoryMethodDiscrete;break;case _r:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return _r;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&i_(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=_r;var li=class extends rn{};li.prototype.ValueTypeName="bool";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=gr;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends rn{};Ho.prototype.ValueTypeName="color";var Vo=class extends rn{};Vo.prototype.ValueTypeName="number";var Go=class extends qi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Pe.slerpFlat(r,0,o,l-a,o,l,c);return r}},Rs=class extends rn{InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.DefaultInterpolation=_r;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends rn{};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=gr;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends rn{};Wo.prototype.ValueTypeName="vector";var ch={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Xo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},s_=new Xo,Cs=class{constructor(t){this.manager=t!==void 0?t:s_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var qo=class extends Cs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ch.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;let a=gs("img");function c(){h(),ch.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}};var qr=class extends Cs{constructor(t){super(t)}load(t,e,n,s){let r=new We,o=new qo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Yr=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Zr=class extends Yr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},eo=new ee,lh=new P,hh=new P,Yo=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;lh.setFromMatrixPosition(t.matrixWorld),e.position.copy(lh),hh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hh),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zo=class extends Yo{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Zo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=uh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function uh(){return(typeof performance=="undefined"?Date:performance).now()}var ac="\\[\\]\\.:\\/",r_=new RegExp("["+ac+"]","g"),oc="[^"+ac+"]",a_="[^"+ac.replace("\\.","")+"]",o_=/((?:WC+[\/:])*)/.source.replace("WC",oc),c_=/(WCOD+)?/.source.replace("WCOD",a_),l_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",oc),h_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",oc),u_=new RegExp("^"+o_+c_+l_+h_+"$"),d_=["material","materials","bones","map"],Jo=class{constructor(t,e,n){let s=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(r_,"")}static parseTrackName(t){let e=u_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);d_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=Jo;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G_=new Float32Array(1);var $r=class{constructor(t,e,n=0,s=1/0){this.ray=new Gi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new _s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ko(t,this,n,e),n.sort(dh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ko(t[s],this,n,e);return n.sort(dh),n}};function dh(i,t){return i.distance-t.distance}function Ko(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Ko(s[r],t,e,!0)}}var Ps=class{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);var Fh={type:"change"},lc={type:"start"},Bh={type:"end"},na=new Gi,zh=new en,f_=Math.cos(70*Ls.DEG2RAD),ia=class extends un{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",k),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",k),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Fh),n.update(),r=s.NONE},this.update=function(){let C=new P,lt=new Pe().setFromUnitVectors(t.up,new P(0,1,0)),xt=lt.clone().invert(),dt=new P,Rt=new Pe,Wt=new P,Yt=2*Math.PI;return function(_t=null){let D=n.object.position;C.copy(D).sub(n.target),C.applyQuaternion(lt),a.setFromVector3(C),n.autoRotate&&r===s.NONE&&O(M(_t)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let ft=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(ft)&&isFinite(pt)&&(ft<-Math.PI?ft+=Yt:ft>Math.PI&&(ft-=Yt),pt<-Math.PI?pt+=Yt:pt>Math.PI&&(pt-=Yt),ft<=pt?a.theta=Math.max(ft,Math.min(pt,a.theta)):a.theta=a.theta>(ft+pt)/2?Math.max(ft,a.theta):Math.min(pt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*l),C.setFromSpherical(a),C.applyQuaternion(xt),D.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0));let Dt=!1;if(n.zoomToCursor&&T){let Ct=null;if(n.object.isPerspectiveCamera){let Zt=C.length();Ct=Y(Zt*l);let jt=Zt-Ct;n.object.position.addScaledVector(E,jt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let Zt=new P(L.x,L.y,0);Zt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0;let jt=new P(L.x,L.y,0);jt.unproject(n.object),n.object.position.sub(jt).add(Zt),n.object.updateMatrixWorld(),Ct=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ct!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ct).add(n.object.position):(na.origin.copy(n.object.position),na.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(na.direction))<f_?t.lookAt(n.target):(zh.setFromNormalAndCoplanarPoint(n.object.up,n.target),na.intersectPlane(zh,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Dt=!0);return l=1,T=!1,Dt||dt.distanceToSquared(n.object.position)>o||8*(1-Rt.dot(n.object.quaternion))>o||Wt.distanceToSquared(n.target)>0?(n.dispatchEvent(Fh),dt.copy(n.object.position),Rt.copy(n.object.quaternion),Wt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Et),n.domElement.removeEventListener("pointerdown",ut),n.domElement.removeEventListener("pointercancel",y),n.domElement.removeEventListener("wheel",j),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",k),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Ps,c=new Ps,l=1,h=new P,u=new tt,d=new tt,p=new tt,g=new tt,x=new tt,m=new tt,f=new tt,v=new tt,_=new tt,E=new P,L=new tt,T=!1,A=[],B={};function M(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function S(C){let lt=Math.abs(C)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*lt)}function O(C){c.theta-=C}function W(C){c.phi-=C}let rt=function(){let C=new P;return function(xt,dt){C.setFromMatrixColumn(dt,0),C.multiplyScalar(-xt),h.add(C)}}(),I=function(){let C=new P;return function(xt,dt){n.screenSpacePanning===!0?C.setFromMatrixColumn(dt,1):(C.setFromMatrixColumn(dt,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(xt),h.add(C)}}(),F=function(){let C=new P;return function(xt,dt){let Rt=n.domElement;if(n.object.isPerspectiveCamera){let Wt=n.object.position;C.copy(Wt).sub(n.target);let Yt=C.length();Yt*=Math.tan(n.object.fov/2*Math.PI/180),rt(2*xt*Yt/Rt.clientHeight,n.object.matrix),I(2*dt*Yt/Rt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(rt(xt*(n.object.right-n.object.left)/n.object.zoom/Rt.clientWidth,n.object.matrix),I(dt*(n.object.top-n.object.bottom)/n.object.zoom/Rt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function K(C,lt){if(!n.zoomToCursor)return;T=!0;let xt=n.domElement.getBoundingClientRect(),dt=C-xt.left,Rt=lt-xt.top,Wt=xt.width,Yt=xt.height;L.x=dt/Wt*2-1,L.y=-(Rt/Yt)*2+1,E.set(L.x,L.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function et(C){u.set(C.clientX,C.clientY)}function it(C){K(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function mt(C){g.set(C.clientX,C.clientY)}function X(C){d.set(C.clientX,C.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let lt=n.domElement;O(2*Math.PI*p.x/lt.clientHeight),W(2*Math.PI*p.y/lt.clientHeight),u.copy(d),n.update()}function st(C){v.set(C.clientX,C.clientY),_.subVectors(v,f),_.y>0?V(S(_.y)):_.y<0&&$(S(_.y)),f.copy(v),n.update()}function Z(C){x.set(C.clientX,C.clientY),m.subVectors(x,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(x),n.update()}function at(C){K(C.clientX,C.clientY),C.deltaY<0?$(S(C.deltaY)):C.deltaY>0&&V(S(C.deltaY)),n.update()}function nt(C){let lt=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),lt=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),lt=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),lt=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),lt=!0;break}lt&&(C.preventDefault(),n.update())}function yt(C){if(A.length===1)u.set(C.pageX,C.pageY);else{let lt=Gt(C),xt=.5*(C.pageX+lt.x),dt=.5*(C.pageY+lt.y);u.set(xt,dt)}}function At(C){if(A.length===1)g.set(C.pageX,C.pageY);else{let lt=Gt(C),xt=.5*(C.pageX+lt.x),dt=.5*(C.pageY+lt.y);g.set(xt,dt)}}function bt(C){let lt=Gt(C),xt=C.pageX-lt.x,dt=C.pageY-lt.y,Rt=Math.sqrt(xt*xt+dt*dt);f.set(0,Rt)}function St(C){n.enableZoom&&bt(C),n.enablePan&&At(C)}function R(C){n.enableZoom&&bt(C),n.enableRotate&&yt(C)}function ot(C){if(A.length==1)d.set(C.pageX,C.pageY);else{let xt=Gt(C),dt=.5*(C.pageX+xt.x),Rt=.5*(C.pageY+xt.y);d.set(dt,Rt)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);let lt=n.domElement;O(2*Math.PI*p.x/lt.clientHeight),W(2*Math.PI*p.y/lt.clientHeight),u.copy(d)}function J(C){if(A.length===1)x.set(C.pageX,C.pageY);else{let lt=Gt(C),xt=.5*(C.pageX+lt.x),dt=.5*(C.pageY+lt.y);x.set(xt,dt)}m.subVectors(x,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(x)}function ht(C){let lt=Gt(C),xt=C.pageX-lt.x,dt=C.pageY-lt.y,Rt=Math.sqrt(xt*xt+dt*dt);v.set(0,Rt),_.set(0,Math.pow(v.y/f.y,n.zoomSpeed)),V(_.y),f.copy(v);let Wt=(C.pageX+lt.x)*.5,Yt=(C.pageY+lt.y)*.5;K(Wt,Yt)}function N(C){n.enableZoom&&ht(C),n.enablePan&&J(C)}function Mt(C){n.enableZoom&&ht(C),n.enableRotate&&ot(C)}function ut(C){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",b),n.domElement.addEventListener("pointerup",y)),It(C),C.pointerType==="touch"?wt(C):U(C))}function b(C){n.enabled!==!1&&(C.pointerType==="touch"?gt(C):Q(C))}function y(C){Ot(C),A.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",b),n.domElement.removeEventListener("pointerup",y)),n.dispatchEvent(Bh),r=s.NONE}function U(C){let lt;switch(C.button){case 0:lt=n.mouseButtons.LEFT;break;case 1:lt=n.mouseButtons.MIDDLE;break;case 2:lt=n.mouseButtons.RIGHT;break;default:lt=-1}switch(lt){case ui.DOLLY:if(n.enableZoom===!1)return;it(C),r=s.DOLLY;break;case ui.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;mt(C),r=s.PAN}else{if(n.enableRotate===!1)return;et(C),r=s.ROTATE}break;case ui.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;et(C),r=s.ROTATE}else{if(n.enablePan===!1)return;mt(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(lc)}function Q(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;X(C);break;case s.DOLLY:if(n.enableZoom===!1)return;st(C);break;case s.PAN:if(n.enablePan===!1)return;Z(C);break}}function j(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(lc),at(C),n.dispatchEvent(Bh))}function k(C){n.enabled===!1||n.enablePan===!1||nt(C)}function wt(C){switch(ct(C),A.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;yt(C),r=s.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;At(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;St(C),r=s.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;R(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(lc)}function gt(C){switch(ct(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ot(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;J(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;N(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Mt(C),n.update();break;default:r=s.NONE}}function Et(C){n.enabled!==!1&&C.preventDefault()}function It(C){A.push(C.pointerId)}function Ot(C){delete B[C.pointerId];for(let lt=0;lt<A.length;lt++)if(A[lt]==C.pointerId){A.splice(lt,1);return}}function ct(C){let lt=B[C.pointerId];lt===void 0&&(lt=new tt,B[C.pointerId]=lt),lt.set(C.pageX,C.pageY)}function Gt(C){let lt=C.pointerId===A[0]?A[1]:A[0];return B[lt]}n.domElement.addEventListener("contextmenu",Et),n.domElement.addEventListener("pointerdown",ut),n.domElement.addEventListener("pointercancel",y),n.domElement.addEventListener("wheel",j,{passive:!1}),this.update()}};var Zi="https://yamx23007-source.github.io/jishan-h5/ar.html",Ee={sandbox:{idx:0,name:"\u9057\u4EA7\u5730\u6C99\u76D8",short:"\u6C99\u76D8",back:"prelude",flat:!0,img:"assets/ar/t-map.jpg",tex:"assets/ar/t-map-tex.jpg",target:"\u529F\u80FD\u5206\u533A\u56FE\uFF08\u7533\u62A5\u4E66\u9644\u56FE 3\uFF0C\u5C40\u90E8\uFF09",desc:"\u529F\u80FD\u5206\u533A\u56FE\u4E0A\u7ACB\u8D77\u4E09\u4E2A\u5206\u533A\uFF0C\u6807\u51FA\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u7684\u4E24\u9547\u516D\u6751\u3002",tip:"\u70B9\u6309\u6751\u540D\u6216\u9547\u540D\uFF0C\u67E5\u770B\u7B80\u4ECB\u3002",lead:"\u7533\u62A5\u4E66\u786E\u5B9A\u7684\u9057\u4EA7\u5730\u8303\u56F4\u662F\u7A37\u5CF0\u9547\u3001\u5316\u5CEA\u9547\u4E24\u4E2A\u4E61\u9547\uFF1B\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\u628A\u5176\u4E2D 6 \u4E2A\u884C\u653F\u6751\u5212\u4E3A\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u3002",legend:[["#EE736C","\u53E4\u677F\u67A3\u6811\u7FA4\u548C\u677F\u67A3\u5386\u53F2\u6587\u5316\u6E38\u89C8\u533A"],["#E6D4A6","\u677F\u67A3\u4EA7\u4E1A\u4F11\u95F2\u89C2\u5149\u533A"],["#85C5C7","\u677F\u67A3\u79CD\u690D\u793A\u8303\u533A"]],src:"\u5E95\u56FE\u4E0E\u5206\u533A\uFF1A\u7533\u62A5\u4E66\u9644\u56FE 3\uFF1B\u6751\u9547\u540D\u5355\u4E0E\u8BB0\u8FF0\uFF1A\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\u3002"},zao:{idx:1,name:"\u63B0\u5F00\u4E00\u9897\u677F\u67A3",short:"\u7CD6\u4E1D",back:"hall3",flat:!0,img:"assets/ar/t-zao.jpg",tex:"assets/ar/t-zao.jpg",target:"\u677F\u67A3\u6210\u719F\uFF08\u7533\u62A5\u4E66\u56FE 16\uFF09",desc:"\u628A\u4E00\u9897\u5236\u5E72\u7684\u677F\u67A3\u63B0\u5F00\uFF0C\u770B\u91D1\u9EC4\u8272\u7684\u7CD6\u4E1D\u62C9\u51FA\u6765\u3002",tip:"\u70B9\u6309\u677F\u67A3\uFF0C\u628A\u5B83\u63B0\u5F00\u3002",before:"\u7A37\u5C71\u677F\u67A3\u76AE\u8584\u8089\u539A\u6838\u513F\u5C0F\u3002\u70B9\u6309\u8FD9\u9897\u5236\u5E72\u7684\u677F\u67A3\uFF0C\u628A\u5B83\u63B0\u5F00\u3002",after:"\u5236\u5E72\u540E\u542B\u7CD6\u91CF\u9AD8\u8FBE 74.3%\uFF0C\u63B0\u5F00\u540E\u80FD\u62C9\u51FA 25\u201430 \u5398\u7C73\u957F\u7684\u91D1\u9EC4\u8272\u7CD6\u4E1D\u3002",stats:[["\u9C9C\u67A3\u542B\u7CD6\u91CF","38.78%"],["\u5236\u5E72\u540E\u542B\u7CD6\u91CF","74.3%"],["\u53EF\u98DF\u90E8\u5206","96.65%"]],thread:"\u7CD6\u4E1D 25\u201430 \u5398\u7C73",src:"\u6570\u636E\u6458\u81EA\u7533\u62A5\u4E66\u300C\u54C1\u79CD\u6BD4\u8F83\u300D\uFF1B\u4E09\u7EF4\u6A21\u578B\u4E3A\u793A\u610F\u3002"},ring:{idx:2,name:"\u6811\u5E72\u4E0A\u7684\u73AF\u5272",short:"\u73AF\u5272",back:"hall6",flat:!1,img:"assets/ar/t-ring.jpg",tex:"assets/ar/t-ring.jpg",target:"\u7A37\u5C71\u677F\u67A3\u73AF\u5272\u6280\u672F\uFF08\u7533\u62A5\u4E66\u56FE 11\uFF09",desc:"\u5256\u5F00\u6811\u5E72\u770B\u517B\u5206\u600E\u4E48\u8D70\uFF0C\u6BD4\u8F83\u73AF\u5272\u524D\u540E\u3002",tip:"\u70B9\u6309\u6811\u5E72\uFF0C\u6BD4\u8F83\u73AF\u5272\u524D\u540E\u3002",states:{before:{k:"\u73AF\u5272\u524D",t:"\u672A\u73AF\u5272\u65F6\uFF0C\u6811\u51A0\u5149\u5408\u4F5C\u7528\u4EA7\u751F\u7684\u517B\u5206\u6CBF\u6811\u5E72\u5411\u6839\u90E8\u6D41\u52A8\uFF1B\u6839\u90E8\u6C72\u53D6\u7684\u517B\u5206\u5411\u4E0A\u8F93\u9001\u3002"},after:{k:"\u73AF\u5272\u540E",t:"\u5728\u6811\u5E72\u4E0A\u5212\u5F00\u4E00\u9053\u300C\u4F24\u75D5\u300D\uFF0C\u4E0D\u5F71\u54CD\u6811\u6839\u6C72\u53D6\u7684\u517B\u5206\u5411\u4E0A\u8F93\u9001\uFF0C\u53C8\u80FD\u8BA9\u6811\u51A0\u5149\u5408\u4F5C\u7528\u4EA7\u751F\u7684\u517B\u5206\u7559\u5728\u679C\u53F6\u8302\u76DB\u7684\u679D\u6761\u4E0A\uFF0C\u786E\u4FDD\u677F\u67A3\u54C1\u8D28\u3002"}},labels:{up:["\u6728\u8D28\u90E8","\u517B\u5206\u5411\u4E0A"],down:["\u6811\u76AE","\u517B\u5206\u5411\u4E0B"],cut:"\u73AF\u5272\u53E3",crown:"\u679D\u6761\u548C\u679C\u5B9E",root:"\u901A\u5411\u6839\u90E8"},src:"\u6587\u5B57\u4F9D\u636E\u7533\u62A5\u4E66\u300C\u677F\u67A3\u6811\u5AC1\u63A5\u73AF\u5272\u6280\u672F\u300D\u7B49\u7AE0\u8282\uFF1B\u5256\u9762\u4E3A\u793A\u610F\u3002"}},Rn=["sandbox","zao","ring"],kh={red:"\u53E4\u677F\u67A3\u6811\u7FA4\u548C\u677F\u67A3\u5386\u53F2\u6587\u5316\u6E38\u89C8\u533A\uFF08\u7EA2\u8272\uFF09",yellow:"\u677F\u67A3\u4EA7\u4E1A\u4F11\u95F2\u89C2\u5149\u533A\uFF08\u9EC4\u8272\uFF09",cyan:"\u677F\u67A3\u79CD\u690D\u793A\u8303\u533A\uFF08\u84DD\u7EFF\u8272\uFF09"},p_="\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u5185\u7684\u884C\u653F\u6751\uFF1B\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\u79F0\uFF0C\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u5185\u5404\u6751\u677F\u67A3\u79CD\u690D\u5386\u53F2\u5747\u8D85\u767E\u5E74\u3002",hc={\u59DA\u6751:{short:"\u59DA\u6751",town:"\u7A37\u5CF0\u9547",h:.15,notes:["\u4EA7\u4E1A\u7279\u8272\uFF1A\u89C4\u6A21\u5316\u79CD\u690D\u3001\u7CBE\u6DF1\u52A0\u5DE5","\u88AB\u8BC4\u4E3A\u7701\u7EA7\u300C\u4E00\u6751\u4E00\u54C1\u300D\u4E13\u4E1A\u6751\uFF08\u677F\u67A3\uFF09","\u519C\u6C11\u5E74\u5747\u6536\u5165 3.2 \u4E07\u5143","108 \u56FD\u9053\u8D2F\u7A7F\u59DA\u6751"]},\u9676\u6881\u6751:{short:"\u9676\u6881",town:"\u7A37\u5CF0\u9547",h:.105,notes:["\u4EA7\u4E1A\u7279\u8272\uFF1A\u519C\u8015\u6587\u5316\u4F20\u627F","\u88AB\u8BC4\u4E3A\u7701\u7EA7\u300C\u4E00\u6751\u4E00\u54C1\u300D\u4E13\u4E1A\u6751\uFF08\u677F\u67A3\uFF09","\u519C\u6C11\u5E74\u5747\u6536\u5165 3.1 \u4E07\u5143"]},\u52A0\u5E84\u6751:{short:"\u52A0\u5E84",town:"\u7A37\u5CF0\u9547",h:.125,notes:[]},\u5409\u5BB6\u5E84\u6751:{short:"\u5409\u5BB6\u5E84",town:"\u7A37\u5CF0\u9547",h:.09,notes:[]},\u5E73\u9647\u6751:{short:"\u5E73\u9647",town:"\u7A37\u5CF0\u9547",h:.075,notes:[]},\u80E1\u5BB6\u5E84\u6751:{short:"\u80E1\u5BB6\u5E84",town:"\u5316\u5CEA\u9547",h:.11,notes:["\u519C\u6C11\u5E74\u5747\u6536\u5165 2.9 \u4E07\u5143"]}},Hh=p_,Vh={\u7A37\u5CF0\u9547:{villages:["\u59DA\u6751","\u9676\u6881\u6751","\u52A0\u5E84\u6751","\u5409\u5BB6\u5E84\u6751","\u5E73\u9647\u6751"]},\u5316\u5CEA\u9547:{villages:["\u80E1\u5BB6\u5E84\u6751"]}},uc="\u300A\u4E2D\u56FD\u91CD\u8981\u519C\u4E1A\u6587\u5316\u9057\u4EA7\u5C71\u897F\u7A37\u5C71\u677F\u67A3\u751F\u4EA7\u7CFB\u7EDF\u4F20\u627F\u53D1\u5C55\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\uFF082026\u20142028 \u5E74\uFF09\u300B\uFF0C\u7A37\u5C71\u53BF\u4EBA\u6C11\u653F\u5E9C\uFF0C2026 \u5E74 3 \u6708";var sa={map:{w:1960,h:1260,aspect:.64286,zones:{red:[{o:[[.1474,.1056],[.1418,.1087],[.0944,.1107],[.0867,.1077],[.0633,.1036],[.027,.0995],[-.0122,.1015],[-.0321,.1061],[-.0612,.1056],[-.0811,.0985],[-.0918,.0913],[-.1031,.0801],[-.1133,.0628],[-.1168,.052],[-.1189,.0362],[-.1168,.0189],[-.1102,.0031],[-.1061,-5e-4],[-.1041,-.0061],[-.0974,-.0143],[-.0883,-.0224],[-.075,-.0449],[-.0689,-.0633],[-.0658,-.0867],[-.0607,-.1077],[-.0536,-.1199],[-.0429,-.1306],[-.0219,-.1418],[-.0092,-.1439],[.0087,-.1429],[.0199,-.1393],[.0434,-.124],[.0628,-.1158],[.0883,-.1107],[.0939,-.1128],[.1046,-.1128],[.1214,-.1082],[.126,-.1026],[.1352,-.1005],[.1398,-.0974],[.148,-.0888],[.1566,-.075],[.1622,-.0577],[.1622,-.0393],[.1536,-.0117],[.152,.0066],[.1541,.0209],[.1673,.0526],[.1684,.0724],[.1663,.0806],[.1597,.0939]],h:[]}],yellow:[{o:[[.0204,-.1791],[.0117,-.1699],[.0026,-.1643],[-.0342,-.1561],[-.0444,-.151],[-.0612,-.1388],[-.0791,-.1352],[-.0939,-.1388],[-.101,-.1429],[-.1107,-.152],[-.1204,-.1714],[-.1398,-.1913],[-.1602,-.202],[-.1893,-.2097],[-.2046,-.2194],[-.2122,-.2276],[-.2214,-.2429],[-.2255,-.2597],[-.2255,-.2704],[-.2199,-.2908],[-.2158,-.2959],[-.2133,-.3031],[-.198,-.3143],[-.1944,-.3209],[-.15,-.3209],[-.1464,-.3143],[-.1077,-.2893],[-.1056,-.2842],[-.101,-.2806],[-.0918,-.2776],[-.0832,-.2719],[-.074,-.273],[-.0316,-.2561],[-.0041,-.249],[.0102,-.2413],[.0209,-.2301],[.0276,-.2158],[.0276,-.1964]],h:[]},{o:[[-.5,.3214],[-.5,-.1837],[-.4821,-.1898],[-.477,-.1842],[-.4724,-.1827],[-.4617,-.1872],[-.4556,-.1857],[-.449,-.1883],[-.4469,-.1867],[-.4485,-.175],[-.4388,-.1668],[-.4332,-.1668],[-.4224,-.1724],[-.4097,-.1709],[-.4031,-.173],[-.3898,-.1628],[-.377,-.1571],[-.3408,-.1648],[-.3367,-.1643],[-.3327,-.1612],[-.327,-.1612],[-.3138,-.1689],[-.3128,-.1776],[-.277,-.1908],[-.2571,-.1939],[-.249,-.1857],[-.2362,-.1862],[-.2357,-.1776],[-.2306,-.1724],[-.2306,-.1648],[-.2255,-.1444],[-.2255,-.1383],[-.2153,-.1189],[-.2163,-.1122],[-.2199,-.1056],[-.2194,-.0969],[-.2153,-.0913],[-.2026,-.0888],[-.198,-.0923],[-.1949,-.099],[-.1929,-.0995],[-.1786,-.0918],[-.152,-.0816],[-.1357,-.0679],[-.1276,-.0689],[-.1173,-.0781],[-.1128,-.0796],[-.1071,-.074],[-.1071,-.0612],[-.1112,-.0398],[-.1194,-.0168],[-.127,-.0026],[-.1423,.0173],[-.1679,.023],[-.174,.0281],[-.173,.0638],[-.1694,.101],[-.1638,.1051],[-.1469,.1087],[-.1245,.1235],[-.1224,.1281],[-.1179,.1316],[-.1026,.1311],[-.073,.1347],[-.0587,.1286],[-.0393,.1352],[-.0306,.1357],[-.0184,.152],[-.0148,.1612],[-.0148,.1643],[-.0214,.176],[-.0337,.1862],[-.05,.1959],[-.0679,.2245],[-.0679,.2434],[-.0704,.25],[-.0704,.2571],[-.076,.2622],[-.0893,.2862],[-.0949,.3061],[-.0959,.3214]],h:[]}],cyan:[{o:[[.4995,.1643],[.4852,.1459],[.4852,.1128],[.4776,.0837],[.4592,.0648],[.4536,.0633],[.4327,.0694],[.4286,.075],[.4311,.0929],[.4276,.0944],[.4153,.0811],[.3954,.0776],[.3918,.0658],[.3888,.0622],[.3612,.052],[.3357,.0393],[.3306,.0408],[.3276,.0439],[.3046,.0852],[.2755,.0969],[.2194,.0811],[.1949,.0827],[.1898,.0867],[.1791,.1061],[.1735,.1107],[.1684,.1184],[.1633,.1214],[.1429,.123],[.1372,.125],[.1337,.1301],[.1316,.149],[.1173,.1485],[.1056,.1316],[.0995,.1199],[.1,.1173],[.1383,.1158],[.1474,.1138],[.151,.1082],[.1607,.1015],[.1709,.0903],[.1786,.0714],[.1786,.049],[.1663,.0189],[.1622,0],[.1628,-.0128],[.1719,-.0383],[.1714,-.0469],[.1735,-.0515],[.1735,-.0612],[.1689,-.0704],[.1684,-.0781],[.1592,-.0903],[.1551,-.1041],[.1459,-.1138],[.1327,-.1138],[.1219,-.1168],[.1138,-.1214],[.0985,-.1209],[.0888,-.1224],[.0811,-.1199],[.074,-.123],[.0689,-.123],[.0633,-.125],[.0592,-.1301],[.0449,-.1367],[.0332,-.1454],[.0082,-.1546],[-.0168,-.151],[-.0342,-.1429],[-.0413,-.1378],[-.0546,-.1224],[-.0633,-.1056],[-.0704,-.0643],[-.077,-.0449],[-.0872,-.0291],[-.0974,-.0179],[-.1087,-.0168],[-.1153,-.0046],[-.1158,0],[-.1133,.0051],[-.1184,.0179],[-.1204,.0332],[-.1184,.0531],[-.1107,.0719],[-.1005,.0857],[-.0821,.1],[-.0648,.1066],[-.0393,.1082],[-.002,.102],[.026,.101],[.0485,.1031],[.0679,.1071],[.0658,.1087],[.0352,.1077],[.0306,.1092],[.0255,.1158],[.0265,.126],[.0133,.1276],[.0077,.1316],[.0041,.152],[.0041,.1617],[.002,.1633],[-.0071,.1622],[-.0117,.1474],[-.025,.1311],[-.0265,.1245],[-.0311,.1209],[-.049,.1214],[-.0602,.1179],[-.0643,.1184],[-.0714,.123],[-.0918,.1235],[-.1097,.1209],[-.1173,.1168],[-.1209,.1117],[-.1281,.1102],[-.1291,.1051],[-.1321,.1015],[-.1602,.0949],[-.1648,.0337],[-.1352,.0255],[-.1219,.0107],[-.1204,.0041],[-.123,-.002],[-.1128,-.0204],[-.1026,-.0515],[-.1005,-.0658],[-.1005,-.0776],[-.102,-.0811],[-.1138,-.0883],[-.1194,-.0862],[-.1276,-.0791],[-.1327,-.0786],[-.1423,-.0862],[-.1816,-.1061],[-.1867,-.1051],[-.1939,-.1082],[-.1985,-.1066],[-.2031,-.1005],[-.2097,-.101],[-.2102,-.1051],[-.2066,-.1179],[-.2071,-.1265],[-.2143,-.1357],[-.2219,-.1648],[-.2189,-.1689],[-.2184,-.1735],[-.223,-.1801],[-.2199,-.1893],[-.2255,-.1954],[-.2383,-.1954],[-.2531,-.2],[-.273,-.1949],[-.2791,-.1969],[-.2837,-.1954],[-.2888,-.1903],[-.3015,-.1847],[-.3097,-.1832],[-.3143,-.1786],[-.3148,-.1755],[-.327,-.1704],[-.3388,-.1735],[-.3781,-.1663],[-.3964,-.1811],[-.401,-.1827],[-.4102,-.1791],[-.4168,-.1796],[-.423,-.1755],[-.4352,-.1765],[-.4393,-.1816],[-.4367,-.1944],[-.4423,-.2005],[-.4474,-.2005],[-.4561,-.1929],[-.4663,-.1893],[-.4709,-.1908],[-.476,-.1974],[-.4806,-.199],[-.4893,-.1954],[-.4934,-.1903],[-.4995,-.1908],[-.5,-.3209],[-.4464,-.3209],[-.4429,-.3143],[-.427,-.3092],[-.4082,-.3143],[-.4046,-.3209],[-.1959,-.3209],[-.199,-.3158],[-.2148,-.3041],[-.225,-.2811],[-.227,-.2714],[-.227,-.2587],[-.224,-.2449],[-.2189,-.2337],[-.2056,-.2179],[-.1934,-.2097],[-.1806,-.2046],[-.1612,-.2005],[-.1408,-.1898],[-.1219,-.1704],[-.1122,-.151],[-.1046,-.1434],[-.0949,-.1372],[-.0811,-.1337],[-.0602,-.1372],[-.0434,-.1495],[-.0332,-.1546],[-.0107,-.1602],[-.0041,-.1602],[.0102,-.1663],[.0296,-.1857],[.0342,-.2015],[.0342,-.2224],[.025,-.2372],[.0117,-.249],[5e-4,-.2546],[-.0255,-.2607],[-.075,-.2801],[-.1066,-.2964],[-.1423,-.3209],[-.0281,-.3209],[-.0296,-.2811],[-.0224,-.2719],[-.0163,-.2694],[-.0092,-.2724],[-.0046,-.2786],[-.0036,-.2929],[-.0082,-.3046],[-.0031,-.3209],[.2908,-.3209],[.2913,-.3102],[.2964,-.3056],[.3087,-.3061],[.3153,-.3097],[.323,-.3082],[.325,-.2929],[.3061,-.2668],[.3051,-.251],[.3168,-.2372],[.3204,-.223],[.3347,-.2143],[.3439,-.2],[.3464,-.1781],[.349,-.1704],[.3582,-.1643],[.3704,-.1628],[.3832,-.1643],[.3878,-.1679],[.3903,-.176],[.3898,-.2122],[.4087,-.226],[.4112,-.2332],[.4204,-.2388],[.4296,-.248],[.4332,-.2684],[.4413,-.274],[.449,-.2842],[.45,-.2934],[.4434,-.3061],[.4459,-.3102],[.4515,-.3138],[.4526,-.3209],[.4995,-.3209]],h:[]}]},villages:[{name:"\u9676\u6881\u6751",p:[-.073,.0526],zone:"red"},{name:"\u59DA\u6751",p:[-.0122,-.0066],zone:"red"},{name:"\u5409\u5BB6\u5E84\u6751",p:[.0974,-.0276],zone:"red"},{name:"\u52A0\u5E84\u6751",p:[.0612,-.0724],zone:"red"},{name:"\u5E73\u9647\u6751",p:[-.024,-.0964],zone:"red"},{name:"\u80E1\u5BB6\u5E84\u6751",p:[-.1592,-.025],zone:"yellow"}],towns:[{name:"\u5316\u5CEA\u9547",p:[-.3551,.1612]},{name:"\u7A37\u5CF0\u9547",p:[.3383,-.0878]}]},zao:{aspect:.66418},ring:{aspect:1.33333,cutY:.224,trunk:[-.4805,.4701]}};var m_=i=>i<0?0:i>1?1:i,Wn=(i,t,e)=>m_((i-t)/e),an={out:i=>1-Math.pow(1-i,3),inOut:i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,back:i=>1+2.70158*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2)},dc=new Map;function mc(i){if(dc.has(i))return dc.get(i);let t=new qr().load(i);return t.colorSpace=de,t.anisotropy=4,dc.set(i,t),t}function ha(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new bs(n);return s.colorSpace=de,s.anisotropy=4,s}var ra=null;function g_(){return ra||(ra=ha(128,128,(i,t,e)=>{let n=i.createRadialGradient(t/2,e/2,0,t/2,e/2,t/2);n.addColorStop(0,"rgba(30,20,10,.55)"),n.addColorStop(.55,"rgba(30,20,10,.22)"),n.addColorStop(1,"rgba(30,20,10,0)"),i.fillStyle=n,i.fillRect(0,0,t,e)}),ra)}function ua(i,t,e){let n=new Jt(new ai(i,t),new dn({map:g_(),transparent:!0,depthWrite:!1,opacity:e==null?1:e}));return n.renderOrder=1,n}function Gh(i,t,e){let n=document.createElement("canvas");n.width=t,n.height=e;let s=new bs(n);s.colorSpace=de;let r=new Image;return r.onload=()=>{n.getContext("2d").drawImage(r,0,0,t,e),s.needsUpdate=!0},r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(i.replace('<svg class="mz"','<svg width="'+t+'" height="'+e+'"')),s}function gc(i){for(let t=i;t;t=t.parent)if(!t.visible)return!1;return!0}var oa=class{constructor(t){this.layer=t,this.items=[],this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("class","leaders"),t.appendChild(this.svg),this._v=new P}add(t){let e=document.createElement(t.onTap?"button":"div");e.className="lb "+(t.cls||""),e.innerHTML=t.html,t.onTap&&(e.type="button",e.addEventListener("click",r=>{r.stopPropagation(),t.onTap()})),t.aria&&e.setAttribute("aria-label",t.aria),this.layer.appendChild(e);let n=document.createElementNS("http://www.w3.org/2000/svg","line");this.svg.appendChild(n);let s={el:e,line:n,obj:t.obj,at:new P().fromArray(t.at||[0,0,0]),align:t.align||"center",lift:t.lift==null?6:t.lift,show:!0,w:0,h:0,x:0,y:0,push:!!t.push,opacity:1};return s.set=r=>{e.innerHTML=r,s.w=0},s.toggle=r=>{s.show=!!r},this.items.push(s),s}clear(){this.items.forEach(t=>{t.el.remove(),t.line.remove()}),this.items=[]}hideAll(){this.items.forEach(t=>{t.el.style.visibility="hidden",t.line.style.visibility="hidden"})}update(t,e,n,s){s=s||0;let r=this._v,o=[];for(let l of this.items){let h=l.show&&l.obj&&gc(l.obj);if(h&&(r.copy(l.at).applyMatrix4(l.obj.matrixWorld).project(t),h=r.z<1&&r.z>-1&&Math.abs(r.x)<1.3&&Math.abs(r.y)<1.3),!h){l.el.style.visibility="hidden",l.line.style.visibility="hidden";continue}l.w||(l.w=l.el.offsetWidth,l.h=l.el.offsetHeight),l.ax=(r.x+1)/2*e,l.ay=(1-r.y)/2*n,l.x=l.align==="left"?l.ax+8:l.align==="right"?l.ax-8-l.w:l.ax-l.w/2,l.y=l.align==="center"?l.ay-l.lift-l.h:l.align==="below"?l.ay+l.lift:l.ay-l.h/2,o.push(l)}let a=o.filter(l=>l.push).sort((l,h)=>h.ay-l.ay),c=[];for(let l of a){let h=!0,u=0;for(;h&&u++<12;){h=!1;for(let d of c)l.x<d.x+d.w+3&&l.x+l.w+3>d.x&&l.y<d.y+d.h+2&&l.y+l.h+2>d.y&&(l.y=d.y-l.h-3,h=!0)}c.push(l)}for(let l of o)l.x=Math.max(4,Math.min(e-l.w-4,l.x)),l.y=Math.max(s+4,Math.min(n-l.h-4,l.y)),l.el.style.visibility="visible",l.el.style.transform="translate3d("+Math.round(l.x)+"px,"+Math.round(l.y)+"px,0)",(l.align==="center"?l.ay-l.lift-(l.y+l.h):0)>4?(l.line.setAttribute("x1",l.ax),l.line.setAttribute("y1",l.ay-l.lift+2),l.line.setAttribute("x2",l.x+l.w/2),l.line.setAttribute("y2",l.y+l.h),l.line.style.visibility="visible"):l.line.style.visibility="hidden"}},Is=34;function _c(i){return .47*Math.pow(Math.sin(Math.PI*i),.62)*(1+.14*(.5-i))}function Wh(i){let t=i-.5;return i>.9&&(t-=.05*Math.pow((i-.9)/.1,2)),i<.06&&(t+=.02*Math.pow((.06-i)/.06,2)),t}function pc(i,t){return .034*Math.pow(Math.sin(Math.PI*t),.5)*(.6*Math.sin(7*i+2.3*Math.sin(3*t))+.25*Math.sin(13*i+5*t+1.3)+.15*Math.sin(23*i-7*t))}var ca=.8;function fc(i,t){let e=[],n=[],s=[];for(let a=0;a<=Is;a++){let c=a/Is,l=Wh(c),h=_c(c);for(let u=0;u<=t;u++){let d=i+Math.PI*u/t,p=h*(1+pc(d,c));e.push(Math.sin(d)*p,l,Math.cos(d)*p*ca),s.push(u/t,c)}}let r=t+1;for(let a=0;a<Is;a++)for(let c=0;c<t;c++){let l=a*r+c,h=l+r;n.push(l,l+1,h,h,l+1,h+1)}let o=new ge;return o.setAttribute("position",new Kt(e,3)),o.setAttribute("uv",new Kt(s,2)),o.setIndex(n),o.computeVertexNormals(),o}function __(){let i=[],t=[];for(let e=0;e<=Is;e++){let n=e/Is,s=Wh(n),r=_c(n);i.push([r*(1+pc(0,n))*ca,s]),t.push([-r*(1+pc(Math.PI,n))*ca,s])}return i.concat(t.reverse())}function x_(i){let t=__(),e=new Vn(t.map(l=>new tt(l[0],l[1]))),n=new Xr(e,1),s=n.attributes.position,r=s.count,o=new Float32Array(r*3),a=new Float32Array(r*2);for(let l=0;l<r;l++){let h=s.getX(l),u=s.getY(l);o[l*3]=.002*i,o[l*3+1]=u,o[l*3+2]=h,a[l*2]=h/.8+.5,a[l*2+1]=u+.5}let c=new ge;return c.setAttribute("position",new me(o,3)),c.setAttribute("uv",new me(a,2)),c.setIndex(n.index),c.computeVertexNormals(),c}var aa=null;function y_(){return aa||(aa=ha(256,256,(i,t,e)=>{let n=i.createRadialGradient(t/2,e/2,10,t/2,e/2,t*.56);n.addColorStop(0,"#efcf8a"),n.addColorStop(.7,"#d9a556"),n.addColorStop(.93,"#b97a33"),n.addColorStop(1,"#6d1a12"),i.fillStyle=n,i.fillRect(0,0,t,e),i.globalAlpha=.18;for(let s=0;s<260;s++){let r=Math.random()*Math.PI*2,o=Math.random()*t*.45;i.strokeStyle=Math.random()<.5?"#fff4cf":"#a8692a",i.lineWidth=1+Math.random(),i.beginPath(),i.moveTo(t/2+Math.cos(r)*o,e/2+Math.sin(r)*o),i.lineTo(t/2+Math.cos(r)*(o+6+Math.random()*12),e/2+Math.sin(r)*(o+6+Math.random()*12)),i.stroke()}}),aa)}var v_="#7a1a1c";function xc({split:i=!0,segs:t=30}={}){let e=new Ie({color:v_,roughness:.42,metalness:.05}),n=new fe;if(!i){let c=new Jt(fc(0,t),e),l=new Jt(fc(Math.PI,t),e);return n.add(c,l),n.userData.skin=e,n}let s=new Ie({map:y_(),roughness:.55,side:Ze}),r=new Ie({color:"#7a4a26",roughness:.7,side:Ze,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),o=[];for(let c of[-1,1]){let l=new fe;l.add(new Jt(fc(c>0?0:Math.PI,t),e)),l.add(new Jt(x_(-c),s));let h=new Jt(new Hr(1,24),r);h.scale.set(.07,.21,1),h.rotation.y=Math.PI/2,h.position.set(-c*.004,-.01,0),l.add(h),o.push(l),n.add(l)}let a=new Jt(new An(.018,.026,.13,8),new Ie({color:"#5a3a1e",roughness:.8}));return a.position.set(-.02,.5,0),a.rotation.z=.28,o[0].add(a),n.userData={halves:o,skin:e},n}var la=class{constructor(t,e){this.n=t,this.seg=e,this.rad=3;let n=(e+1)*this.rad;this.pos=new Float32Array(t*n*3),this.nor=new Float32Array(t*n*3);let s=[];for(let o=0;o<t;o++){let a=o*n;for(let c=0;c<e;c++)for(let l=0;l<this.rad;l++){let h=a+c*this.rad+l,u=a+c*this.rad+(l+1)%this.rad,d=h+this.rad,p=u+this.rad;s.push(h,d,u,u,d,p)}}let r=new ge;r.setAttribute("position",new me(this.pos,3).setUsage(nc)),r.setAttribute("normal",new me(this.nor,3).setUsage(nc)),r.setIndex(s),this.geo=r,this.mat=new Ie({color:"#ffc95a",emissive:"#a86a00",emissiveIntensity:.6,roughness:.2,metalness:.05,transparent:!0,opacity:.95}),this.mesh=new Jt(r,this.mat),this.mesh.frustumCulled=!1,this.ends=[];for(let o=0;o<t;o++){let a,c;for(let l=0;l<50;l++){c=-.36+Math.random()*.68;let h=c+.5,u=_c(h)*ca*.82;if(a=(Math.random()*2-1)*u,(a/.085)**2+((c+.01)/.235)**2>1.1)break}this.ends.push({a:new P(.004,c,a),b:new P(-.004,c+(Math.random()-.5)*.06,a+(Math.random()-.5)*.06),r:.014+Math.random()*.012,sag:.4+Math.random()*.8,ph:Math.random()*6.28})}this._A=new P,this._B=new P,this._P=new P,this._T=new P,this._N=new P,this._Bn=new P,this._Q=new P}update(t,e,n,s,r){let{n:o,seg:a,rad:c,pos:l,nor:h}=this;t.updateMatrix(),e.updateMatrix();let u=this._A,d=this._B,p=this._P,g=this._T,x=this._N,m=this._Bn,f=this._Q,v=0;for(let _=0;_<o;_++){let E=this.ends[_];u.copy(E.a).applyMatrix4(t.matrix),d.copy(E.b).applyMatrix4(e.matrix);let L=u.distanceTo(d),T=Math.max(.45,Math.min(1,Math.sqrt(.3/Math.max(L,.01))));for(let A=0;A<=a;A++){let B=A/a;p.lerpVectors(u,d,B);let M=4*B*(1-B);p.addScaledVector(n,M*L*.06*E.sag),p.z+=Math.sin(s*1.7+E.ph+B*3)*.004*M*r;let S=Math.min(1,B+.02),O=Math.max(0,B-.02);f.lerpVectors(u,d,S).addScaledVector(n,4*S*(1-S)*L*.06*E.sag),g.lerpVectors(u,d,O).addScaledVector(n,4*O*(1-O)*L*.06*E.sag),g.subVectors(f,g).normalize(),x.set(0,0,1),Math.abs(g.z)>.9&&x.set(0,1,0),m.crossVectors(g,x).normalize(),x.crossVectors(m,g).normalize();let W=E.r*T*(.5+.5*(1-M))*(r>0?1:0);for(let rt=0;rt<c;rt++){let I=rt/c*Math.PI*2,F=Math.cos(I),V=Math.sin(I),$=x.x*F+m.x*V,K=x.y*F+m.y*V,Y=x.z*F+m.z*V;l[v]=p.x+$*W,l[v+1]=p.y+K*W,l[v+2]=p.z+Y*W,h[v]=$,h[v+1]=K,h[v+2]=Y,v+=3}}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0}};function Ds(i){let t=a=>a+"-"+i,e=i==="wave"?' transform="rotate(30 54 135)"':"",n=i==="point"?' transform="rotate(-60 170 132)"':"",s="url(#"+t("red")+")",r="url(#"+t("limb")+")",o=i==="wave"||i==="happy"?'<path d="M101 126 Q 112 142 123 126 Q 112 128.5 101 126 Z" fill="#5a1d17" stroke="#3b2318" stroke-width="1.2" stroke-linejoin="round"/><path d="M106.5 134 Q 112 138.5 117.5 134 Q 112 132 106.5 134 Z" fill="#f07a7f"/>':'<path d="M102 127 Q 112 134.5 122 127" stroke="#3b2318" stroke-width="1.9" fill="none" stroke-linecap="round"/>';return'<svg class="mz" viewBox="0 0 224 236" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><defs><radialGradient id="'+t("red")+'" cx="34%" cy="26%" r="80%"><stop offset="0" stop-color="#ff6a5c"/><stop offset=".38" stop-color="#ec1c24"/><stop offset=".8" stop-color="#c50f17"/><stop offset="1" stop-color="#97080f"/></radialGradient><linearGradient id="'+t("limb")+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4333a"/><stop offset="1" stop-color="#b80c14"/></linearGradient><linearGradient id="'+t("face")+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e8bf9f"/><stop offset=".16" stop-color="#f6d8bd"/><stop offset="1" stop-color="#fae3cd"/></linearGradient><linearGradient id="'+t("stem")+'" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8a5030"/><stop offset=".45" stop-color="#6b3a1e"/><stop offset="1" stop-color="#46220f"/></linearGradient><linearGradient id="'+t("leaf")+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5fbf45"/><stop offset="1" stop-color="#2c7a22"/></linearGradient><radialGradient id="'+t("blush")+'"><stop offset="0" stop-color="#f58b95" stop-opacity=".75"/><stop offset="1" stop-color="#f58b95" stop-opacity="0"/></radialGradient></defs><ellipse cx="112" cy="226" rx="54" ry="6.5" fill="rgba(0,0,0,.2)"/><path d="M83 195 C 81 209, 84 221, 96 222 C 107 223, 111 213, 108 198 Z" fill="'+r+'"/><ellipse cx="132" cy="211" rx="19" ry="14" fill="'+s+'"/><ellipse cx="125" cy="205" rx="6" ry="3.2" fill="#fff" opacity=".45"/><g'+n+'><path d="M168 128 C 184 128, 194 138, 193 152 C 193 161, 190 167, 186 172" stroke="'+r+'" stroke-width="21" fill="none" stroke-linecap="round"/><circle cx="185" cy="174" r="12.5" fill="'+s+'"/><ellipse cx="181" cy="169" rx="4.2" ry="2.6" fill="#fff" opacity=".5"/></g><g'+e+'><path d="M56 136 C 40 138, 26 136, 25 122 C 24 114, 27 106, 31 100" stroke="'+r+'" stroke-width="21" fill="none" stroke-linecap="round"/><circle cx="32" cy="95" r="14" fill="'+s+'"/><ellipse cx="27" cy="89" rx="5" ry="3" fill="#fff" opacity=".55"/></g><path d="M112 56 C 103 47, 84 43, 70 47 C 52 52, 45 71, 45 93 C 45 121, 48 151, 54 173 C 59 196, 82 206, 112 206 C 142 206, 165 196, 170 173 C 176 151, 179 121, 179 93 C 179 71, 172 52, 154 47 C 140 43, 121 47, 112 56 Z" fill="'+s+'" stroke="#8e0a10" stroke-width="1.6"/><path d="M61 64 C 54 76, 52 92, 54 106" stroke="#fff" stroke-width="7" fill="none" stroke-linecap="round" opacity=".45"/><ellipse cx="78" cy="56" rx="10" ry="4.8" transform="rotate(-16 78 56)" fill="#fff" opacity=".55"/><rect x="63.5" y="73.5" width="97" height="77" rx="32" fill="#a90a12" opacity=".55"/><rect x="66" y="76" width="92" height="72" rx="30" fill="url(#'+t("face")+')"/><ellipse cx="81" cy="129" rx="10.5" ry="6.2" fill="url(#'+t("blush")+')"/><ellipse cx="143" cy="129" rx="10.5" ry="6.2" fill="url(#'+t("blush")+')"/><ellipse cx="92" cy="110" rx="5.5" ry="7" fill="#1d1210"/><ellipse cx="132" cy="110" rx="5.5" ry="7" fill="#1d1210"/><circle cx="90.3" cy="107.2" r="2.1" fill="#fff"/><circle cx="130.3" cy="107.2" r="2.1" fill="#fff"/><ellipse cx="112" cy="119" rx="6.4" ry="4.6" fill="#e9707d"/><ellipse cx="110" cy="117.4" rx="2.3" ry="1.2" fill="#fff" opacity=".6"/>'+o+'<path d="M111 54 C 109 42, 106 32, 110 26 C 114 20, 123 19, 129 25" stroke="url(#'+t("stem")+')" stroke-width="11" fill="none" stroke-linecap="round"/><path d="M117 48 C 126 34, 146 29, 162 35 C 153 47, 134 54, 117 48 Z" fill="url(#'+t("leaf")+')" stroke="#24661c" stroke-width="1"/><path d="M119 47 C 131 41.5, 145 38, 159 35.5" stroke="#2a6e20" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>'}var se=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function yc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Xh(i,t,e){let n=!1;for(let s=0,r=e.length-1;s<e.length;r=s++){let[o,a]=e[s],[c,l]=e[r];a>t!=l>t&&i<(c-o)*(t-a)/(l-a)+o&&(n=!n)}return n}function da(i,t){return i.userData.tap=t,i}function qh(i){let t=Ee[i],e=sa[i==="sandbox"?"map":i].aspect,n=new fe,s=new Jt(new ai(1,e),new dn({map:mc(t.tex)})),r=new Jt(new wn(1.012,e+.012,.008),new Gn({color:"#f4f2ea"}));r.position.z=-.0042;let o=ua(1.35,e+.35,.55);return o.position.set(.02,-.03,-.0095),n.add(o,r,s),n}function M_(i){let t=sa.map,e=t.aspect,n=Ee.sandbox,s=new fe,r=mc(n.tex),o=[],a={cyan:.012,yellow:.02,red:.04},c={red:"#c4564e",yellow:"#bfa772",cyan:"#5c9b9d"},l={generateTopUV(Z,at,nt,yt,At){let bt=St=>new tt(at[St*3]+.5,at[St*3+1]/e+.5);return[bt(nt),bt(yt),bt(At)]},generateSideWallUV(){return[new tt(0,0),new tt(1,0),new tt(1,1),new tt(0,1)]}},h={};for(let Z of["cyan","yellow","red"]){let at=new fe,nt=new dn({map:r}),yt=new Gn({color:c[Z]});for(let At of t.zones[Z]){let bt=new Vn(At.o.map(R=>new tt(R[0],R[1])));At.h.forEach(R=>bt.holes.push(new Xi(R.map(ot=>new tt(ot[0],ot[1])))));let St=new Vr(bt,{depth:a[Z],bevelEnabled:!1,curveSegments:1,UVGenerator:l});at.add(new Jt(St,[nt,yt]))}at.visible=!1,at.scale.z=1e-4,s.add(at),h[Z]=at}let u=t.zones.red[0].o,d=9,p=-9,g=9,x=-9;u.forEach(([Z,at])=>{d=Math.min(d,Z),p=Math.max(p,Z),g=Math.min(g,at),x=Math.max(x,at)});let m=yc(20170301),f=[],v=(Z,at,nt)=>[[nt,0],[-nt,0],[0,nt],[0,-nt]].some(([yt,At])=>!Xh(Z+yt,at+At,u));for(let Z=0;f.length<44&&Z<6e3;Z++){let at=d+m()*(p-d),nt=g+m()*(x-g);!Xh(at,nt,u)||v(at,nt,.014)||t.villages.some(yt=>at>yt.p[0]-.022&&at<yt.p[0]+.07&&Math.abs(nt-yt.p[1])<.02)||f.some(yt=>(yt[0]-at)**2+(yt[1]-nt)**2<.021**2)||f.push([at,nt,.75+m()*.55,m()*6.28])}let _=new Gr(.0105,1);_.scale(1,1,.85);let E=new An(.0015,.0021,.012,5);E.rotateX(Math.PI/2);let L=new oi(_,new Gn({color:"#ffffff"}),f.length),T=new oi(E,new Gn({color:"#5b4330"}),f.length),A=new Vt;f.forEach((Z,at)=>L.setColorAt(at,A.set(["#6d8a46","#7d9850","#5f7c3e","#86a058"][at%4]))),L.visible=T.visible=!1,s.add(L,T);let B=new ee,M=new Pe,S=new P,O=new P,W=new An(.0017,.0017,1,6);W.rotateX(Math.PI/2),W.translate(0,0,.5);let rt=new As(.0078,16,12),I=new Wr(.0045,.0085,24),F=new Gn({color:"#2b251f"}),V=new dn({color:"#2b251f",transparent:!0,opacity:.85}),$=[],K=null;t.villages.forEach((Z,at)=>{let nt=hc[Z.name],yt=new fe;yt.position.set(Z.p[0],Z.p[1],a[Z.zone]);let At=new Jt(W,F);At.scale.z=nt.h;let bt=new Ie({color:"#a8322a",roughness:.4}),St=new Jt(rt,bt);St.position.z=nt.h;let R=new Jt(I,V);R.position.z=.0012,yt.add(At,St,R),yt.visible=!1,s.add(yt);let ot=()=>mt(Z,at);da(St,ot),o.push(St);let J=i.labels.add({html:se(nt.short),cls:"vil",obj:yt,at:[0,0,nt.h+.009],push:!0,onTap:ot,aria:Z.name+"\uFF0C\u67E5\u770B\u7B80\u4ECB"});J.toggle(!1),$.push({pin:yt,head:St,headMat:bt,lb:J,v:Z,info:nt,start:1.75+at*.13})});let Y=t.towns.map(Z=>{let at=Z.name==="\u5316\u5CEA\u9547"?"yellow":"cyan",nt=i.labels.add({html:se(Z.name),cls:"town",obj:s,at:[Z.p[0],Z.p[1],a[at]+.012],lift:0,push:!0,onTap:()=>X(Z.name),aria:Z.name+"\uFF0C\u67E5\u770B\u7B80\u4ECB"});return nt.toggle(!1),nt}),et=new Nr(new Ms({map:Gh(Ds("wave"),224,236),transparent:!0,depthWrite:!1}));et.center.set(.5,.02),et.position.set(.232,.07,a.cyan),et.visible=!1,da(et,()=>i.say("\u5728\u7533\u62A5\u4E66\u9644\u56FE 3 \u4E0A\uFF0C\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u7684\u516D\u4E2A\u6751\u6709\u4E94\u4E2A\u843D\u5728\u7EA2\u8272\u7684\u53E4\u677F\u67A3\u6811\u7FA4\u548C\u677F\u67A3\u5386\u53F2\u6587\u5316\u6E38\u89C8\u533A\u91CC\uFF0C\u80E1\u5BB6\u5E84\u6751\u5728\u897F\u4FA7\u7684\u9EC4\u8272\u533A\u57DF\u3002")),o.push(et),s.add(et);function it(Z){$.forEach((at,nt)=>{at.headMat.color.set(nt===Z?"#e0463a":"#a8322a"),at.lb.el.classList.toggle("on",nt===Z)}),K=Z}function mt(Z,at){it(at);let nt=hc[Z.name],yt=nt.notes.length?'<ul class="nt">'+nt.notes.map(At=>"<li>"+se(At)+"</li>").join("")+"</ul>":"";i.sheet({title:Z.name,sub:nt.town+" \xB7 \u6838\u5FC3\u4FDD\u62A4\u533A\u57DF",body:'<table class="rec"><tr><th>\u4E61\u9547</th><td>'+se(nt.town)+"</td></tr><tr><th>\u529F\u80FD\u5206\u533A</th><td>"+se(kh[Z.zone])+'</td></tr></table><p class="tx">'+se(Hh)+"</p>"+yt,src:"\u6751\u540D\u4E0E\u8BB0\u8FF0\uFF1A"+uc+"\u3002\u4F4D\u7F6E\u4E0E\u5206\u533A\uFF1A\u7533\u62A5\u4E66\u9644\u56FE 3\u3002",onClose:()=>it(null)})}function X(Z){it(null);let at=Vh[Z].villages;i.sheet({title:Z,sub:"\u9057\u4EA7\u5730\u8303\u56F4\u5185\u7684\u4E61\u9547",body:'<p class="tx">\u7533\u62A5\u4E66\u786E\u5B9A\u7684\u9057\u4EA7\u5730\u8303\u56F4\u4E3A\u7A37\u5CF0\u9547\u3001\u5316\u5CEA\u9547\u4E24\u4E2A\u4E61\u9547\u3002</p><p class="tx">\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\u5212\u5B9A\u7684\u6838\u5FC3\u4FDD\u62A4\u533A\u57DF\u4E2D\uFF0C\u5C5E\u4E8E'+se(Z)+"\u7684\u884C\u653F\u6751\u6709 "+at.length+" \u4E2A\uFF1A"+at.map(se).join("\u3001")+"\u3002</p>",src:"\u7533\u62A5\u4E66\uFF1B"+uc+"\u3002"})}let st=0;return{id:"sandbox",root:s,picks:o,start(){st=-1},update(Z,at){st<0&&(st=at);let nt=at-st;[["cyan",0],["yellow",.3],["red",.6]].forEach(([St,R])=>{let ot=Wn(nt,R,.9);h[St].visible=ot>0,h[St].scale.z=Math.max(1e-4,an.back(ot))});let yt=nt-1.35;L.visible=T.visible=yt>0,yt>0&&yt<2.2&&(f.forEach(([St,R,ot,J],ht)=>{let N=an.back(Wn(yt,ht*.025,.45))*ot;M.setFromAxisAngle(O.set(0,0,1),J),B.compose(O.set(St,R,a.red+.012*N),M,S.set(N||1e-4,N||1e-4,N||1e-4)),T.setMatrixAt(ht,B),B.compose(O.set(St,R,a.red+(.012+.009)*N),M,S.set(N||1e-4,N||1e-4,N||1e-4)),L.setMatrixAt(ht,B)}),T.instanceMatrix.needsUpdate=L.instanceMatrix.needsUpdate=!0),$.forEach(St=>{let R=Wn(nt,St.start,.5);St.pin.visible=R>0,St.pin.scale.set(1,1,Math.max(1e-4,an.out(R))),St.lb.toggle(R>.85)}),Y.forEach(St=>St.toggle(nt>2.6));let At=Wn(nt,2.4,.5);et.visible=At>0;let bt=Math.sin(at*2.2)*.003;et.scale.set(.088*an.back(At),.0927*an.back(At),1),et.position.z=a.cyan+Math.max(0,bt)},card(){return'<div class="ch"><b>'+se(n.name)+"</b><span>"+se(n.tip)+'</span></div><p class="cl">'+se(n.lead)+'</p><ul class="lg">'+n.legend.map(Z=>'<li><i style="background:'+Z[0]+'"></i>'+se(Z[1])+"</li>").join("")+'</ul><p class="cs">'+se(n.src)+"</p>"}}}function b_(i){let t=Ee.zao,e=new fe,n=new fe;n.position.set(0,-.03,.105),e.add(n);let s=xc({split:!0,segs:28});s.scale.setScalar(.19),n.add(s);let[r,o]=s.userData.halves,a=new la(26,14);a.mesh.visible=!1,s.add(a.mesh);let c=ua(.3,.22,.85);c.position.set(0,-.03,.0015),e.add(c);let l=[];s.traverse(f=>{f.isMesh&&(da(f,()=>m()),l.push(f))});let h=i.labels.add({html:se(t.thread),cls:"gold",obj:n,at:[0,-.07,.02],align:"below",lift:4});h.toggle(!1);let u=new P(0,0,-1),d=0,p=0,g=0,x=0;function m(){d=d?0:1,i.refresh()}return{id:"zao",root:e,picks:l,start(){g=-1,d=0,p=0,i.refresh()},update(f,v){g<0&&(g=v);let _=v-g,E=an.back(Wn(_,0,.7));n.scale.setScalar(Math.max(1e-4,E)),c.scale.setScalar(Math.max(1e-4,E)*(1+p*1.6)),c.material.opacity=.85-p*.3;let L=d?1/1.7:1/1;p+=Math.sign(d-p)*Math.min(Math.abs(d-p),f*L);let T=an.inOut(p);p===0&&!d?x+=f*.55:x+=(Math.round(x/(Math.PI*2))*Math.PI*2-x)*Math.min(1,f*5),s.rotation.y=x,n.position.z=.105+(1-T)*Math.sin(v*1.6)*.008+T*.02;let A=p>0&&p<.12?Math.sin(p*120)*.012*(1-p/.12):0;r.position.x=-(.003+.8*T)+A,o.position.x=.003+.8*T-A,r.rotation.y=-.55*T,o.rotation.y=.55*T,r.position.z=o.position.z=.1*T,a.mesh.visible=p>.02,a.mesh.visible&&a.update(r,o,u,v,T),h.toggle(p>.85)},card(){let f=d===1;return'<div class="ch"><b>'+se(t.name)+"</b><span>"+se(f?"\u518D\u70B9\u4E00\u4E0B\u5408\u4E0A\u3002":t.tip)+'</span></div><p class="cl">'+se(f?t.after:t.before)+'</p><div class="st">'+t.stats.map(v=>"<div><b>"+se(v[1])+"</b><span>"+se(v[0])+"</span></div>").join("")+'</div><div class="ca"><button class="pill solid" data-act="split">'+(f?"\u5408\u4E0A":"\u63B0\u5F00")+'</button></div><p class="cs">'+se(t.src)+"</p>"},bind(f){let v=f.querySelector('[data-act="split"]');v&&(v.onclick=m)}}}function S_(i){let t=Ee.ring,e=sa.ring,n=new fe,s=.42,r=.6,o=-.62,a=.012,c=.04,l=e.cutY,h=.035,u=.05,d=.006,p=s/2-h-u-d,g=1e3,x=ha(Math.round(s*g),Math.round((r-o)*g),(N,Mt,ut)=>{let b=Q=>(Q+s/2)*g,y=(Q,j,k)=>{N.fillStyle=k,N.fillRect(b(Q),0,b(j)-b(Q),ut)};y(-s/2,s/2,"#4a3324"),y(-s/2+h,s/2-h,"#b8743c"),y(-p-d,p+d,"#7d9a4c"),y(-p,p,"#e7d4a4");let U=yc(11);N.globalAlpha=.22,N.strokeStyle="#a88a55";for(let Q=0;Q<70;Q++){let j=b(-p+U()*p*2);N.lineWidth=1+U()*1.5,N.beginPath(),N.moveTo(j,0),N.bezierCurveTo(j+(U()-.5)*8,ut/3,j+(U()-.5)*8,ut*2/3,j+(U()-.5)*6,ut),N.stroke()}N.globalAlpha=.25,N.strokeStyle="#8c5427";for(let Q of[-1,1])for(let j=0;j<16;j++){let k=b(Q*(p+d+U()*u));N.lineWidth=1,N.beginPath(),N.moveTo(k,0),N.lineTo(k+(U()-.5)*6,ut),N.stroke()}N.globalAlpha=.5,N.strokeStyle="#231710";for(let Q of[-1,1])for(let j=0;j<46;j++){let k=b(Q*(s/2-U()*h)),wt=U()*ut,gt=20+U()*70;N.lineWidth=1.5+U()*2,N.beginPath(),N.moveTo(k,wt),N.lineTo(k+(U()-.5)*6,wt+gt),N.stroke()}N.globalAlpha=1});x.anisotropy=8;let m=new Ie({color:"#4a3324",roughness:.9}),f=new Jt(new wn(s,r-o,c-a),[m,m,m,m,new Ie({map:x,roughness:.85}),m]);f.position.set(0,(r+o)/2,(c+a)/2);let v=ua(s+.16,r-o+.16,.55);v.position.set(.015,(r+o)/2-.012,.0015),n.add(v,f);let _=[da(f,()=>ht(R==="after"?"before":"after"))],E=new Ie({color:"#1f140d",roughness:1}),L=h+u+.002,T=.022,A=c-a+.004,B=[-1,1].map(N=>{let Mt=new wn(1,T,A);Mt.translate(-.5*N,0,0);let ut=new Jt(Mt,E);return ut.position.set(N*(s/2+.001),l,(c+a)/2),ut.scale.x=1e-4,ut.visible=!1,n.add(ut),ut}),M=new As(1,10,8),S=40,O=30,W=new oi(M,new Ie({color:"#4f9fd8",emissive:"#16486e",emissiveIntensity:.5,roughness:.35}),S),rt=new oi(M,new Ie({color:"#f2b23a",emissive:"#7a4800",emissiveIntensity:.55,roughness:.3}),O);W.frustumCulled=rt.frustumCulled=!1,n.add(W,rt);let I=yc(5),F=Array.from({length:S},()=>({x:(I()*2-1)*(p-.012),y:o+I()*(r-o),v:.14+I()*.06})),V=Array.from({length:O},()=>({x:(I()<.5?-1:1)*(p+d+.01+I()*(u-.02)),y:o+I()*(r-o),v:.11+I()*.05,stop:!1,hold:0,fade:1,stack:I()*.05})),$=new ee,K=new Pe,Y=new P,et=new P,it=l+T/2+.008,mt=new fe,X=new Jt(new An(.004,.005,.34,6),new Ie({color:"#5a3a1e",roughness:.8}));X.rotation.z=Math.PI/2,X.position.set(0,r+.075,.03),mt.add(X);let st=[-.11,0,.11].map(N=>{let Mt=xc({split:!1,segs:18});Mt.scale.setScalar(.055),Mt.position.set(N,r+.04,.032);let ut=new Jt(new An(.0018,.0018,.03,4),X.material);return ut.position.set(N,r+.064,.032),mt.add(Mt,ut),Mt});n.add(mt);let Z=t.labels,at=i.labels.add({html:"<b>"+Z.up[0]+"</b>"+Z.up[1]+" \u2191",cls:"blue",obj:n,at:[-s/2,-.28,c],align:"right"}),nt=i.labels.add({html:"<b>"+Z.down[0]+"</b>"+Z.down[1]+" \u2193",cls:"gold",obj:n,at:[s/2,.43,c],align:"left"}),yt=i.labels.add({html:Z.cut,cls:"cut",obj:n,at:[s/2+.005,l,c],align:"left"}),At=i.labels.add({html:Z.crown,cls:"plain",obj:n,at:[0,r+.09,.03],lift:4}),bt=i.labels.add({html:Z.root+" \u2193",cls:"plain",obj:n,at:[0,o,c],align:"below",lift:6});[at,nt,yt,At,bt].forEach(N=>N.toggle(!1));let R="before",ot=0,J=0;function ht(N){R=N,i.refresh()}return{id:"ring",root:n,picks:_,start(){J=-1},update(N,Mt){J<0&&(J=Mt);let ut=Mt-J,b=an.out(Wn(ut,0,.8));f.scale.set(1,Math.max(1e-4,b),1),f.position.y=r-(r-o)*b/2,v.material.opacity=.55*b,mt.visible=ut>.6,mt.scale.setScalar(Math.max(1e-4,an.back(Wn(ut,.6,.5))));let y=ut>.9;at.toggle(y),nt.toggle(y),At.toggle(y),bt.toggle(y);let U=R==="after"?1:0;ot+=Math.sign(U-ot)*Math.min(Math.abs(U-ot),N/.7),B.forEach(k=>{k.visible=ot>.001,k.scale.x=Math.max(1e-4,an.out(ot)*L)}),yt.toggle(y&&ot>.6);let Q=ot>.6;st.forEach((k,wt)=>k.scale.setScalar(.055*(Q?1.08+.04*Math.sin(Mt*3+wt):1)));let j=ut>.8;F.forEach((k,wt)=>{j&&(k.y+=k.v*N,k.y>r-.01&&(k.y=o+.01));let gt=j?Math.min(1,(k.y-o)/.05,(r-k.y)/.05):0;$.compose(Y.set(k.x,k.y,c+.004),K,et.setScalar(.0062*Math.max(1e-4,gt))),W.setMatrixAt(wt,$)}),V.forEach((k,wt)=>{if(j){if(k.stop)k.hold+=N,Q?k.hold>2.4&&(k.fade-=N/.4,k.fade<=0&&(k.stop=!1,k.y=r-.01,k.fade=0)):k.stop=!1;else{let Et=k.y-k.v*N;Q&&k.y>=it&&Et<it+k.stack?(k.y=it+k.stack,k.stop=!0,k.hold=0):k.y=Et,k.y<o+.01&&(k.y=r-.01,k.fade=0)}!k.stop&&k.fade<1&&(k.fade=Math.min(1,k.fade+N/.4))}let gt=j?Math.min(k.fade,(k.y-o)/.05+0):0;$.compose(Y.set(k.x,k.y,c+.004),K,et.setScalar(.007*Math.max(1e-4,Math.min(1,gt)))),rt.setMatrixAt(wt,$)}),W.instanceMatrix.needsUpdate=rt.instanceMatrix.needsUpdate=!0},card(){let N=t.states[R];return'<div class="ch"><b>'+se(t.name)+"</b><span>"+se(t.tip)+'</span></div><div class="seg" role="tablist">'+["before","after"].map(Mt=>'<button role="tab" aria-selected="'+(Mt===R)+'" data-st="'+Mt+'">'+se(t.states[Mt].k)+"</button>").join("")+'</div><p class="cl">'+se(N.t)+'</p><p class="cs">'+se(t.src)+"</p>"},bind(N){N.querySelectorAll("[data-st]").forEach(Mt=>{Mt.onclick=()=>ht(Mt.dataset.st)})}}}var vc={sandbox:M_,zao:b_,ring:S_};var Yh=(()=>{let i=document.currentScript,t=i&&/[?&]v=([\w-]+)/.exec(i.src);return t?t[1]:""})(),he=(i,t=document)=>t.querySelector(i),Ji=(i,t=document)=>Array.from(t.querySelectorAll(i)),ke=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Xn=(i,t)=>'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"'+(t||"")+">"+i+"</svg>",ze={back:Xn('<path d="M15 5l-7 7 7 7"/>'),cam:Xn('<path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.6"/>'),cube:Xn('<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>'),img:Xn('<rect x="3.5" y="4.5" width="17" height="15" rx="1.5"/><circle cx="9" cy="10" r="1.8"/><path d="M20.5 16l-5-5-8.5 8.5"/>'),x:Xn('<path d="M6 6l12 12M18 6L6 18"/>'),l:Xn('<path d="M15 5l-7 7 7 7"/>'),r:Xn('<path d="M9 5l7 7-7 7"/>'),copy:Xn('<rect x="8" y="8" width="12" height="12" rx="1.5"/><path d="M16 8V5.5A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16H8"/>')},$e=document.getElementById("ar"),E_=navigator.userAgent,tu=/MicroMessenger/i.test(E_),w_=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),eu=window.isSecureContext;function Zh(i){history.pushState({ar:1},"","#"+i),Os()}function T_(){return!!(history.state&&history.state.ar)}function A_(){let i="";eu?tu&&(i='<div class="env"><p>\u5728\u5FAE\u4FE1\u91CC\u5982\u679C\u76F8\u673A\u6253\u4E0D\u5F00\uFF0C\u8BF7\u70B9\u53F3\u4E0A\u89D2\u300C\xB7\xB7\xB7\u300D\uFF0C\u9009\u62E9\u300C\u5728\u6D4F\u89C8\u5668\u6253\u5F00\u300D\u3002</p></div>'):i='<div class="env"><p>\u5F53\u524D\u7F51\u5740\u4E0D\u662F https\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u7F51\u9875\u6253\u5F00\u76F8\u673A\u3002\u76F8\u673A\u626B\u63CF\u8BF7\u6539\u7528\u516C\u7F51\u5730\u5740\uFF1A</p><div class="url"><code>'+Zi+'</code><button class="pill" data-copy>'+ze.copy+"\u590D\u5236</button></div></div>";let t=Rn.map((e,n)=>{let s=Ee[e];return'<li class="sc" id="sc-'+e+'"><button class="th" data-card="'+e+'" aria-label="\u663E\u793A\u8BC6\u522B\u56FE\uFF1A'+ke(s.target)+'"><img src="'+s.img+'" alt=""><span class="n">'+(n+1)+'</span></button><div class="tx"><b>'+ke(s.name)+"</b><p>"+ke(s.desc)+"</p><small>\u8BC6\u522B\u56FE\uFF1A"+ke(s.target)+'</small><div class="acts"><button class="pill solid" data-view="'+e+'">'+ze.cube+'\u76F4\u63A5\u770B\u4E09\u7EF4</button><button class="pill" data-card="'+e+'">'+ze.img+"\u663E\u793A\u8BC6\u522B\u56FE</button></div></div></li>"}).join("");return'<div class="home"><header class="bar"><a class="back" href="./#map">'+ze.back+'\u6570\u5B57\u9986</a><div class="ttl">AR \u4F53\u9A8C</div><span class="sp"></span></header><main class="wrap"><section class="intro"><div class="mz">'+Ds("point")+'</div><div><div class="no">\u6570\u5B57\u9986 \xB7 AR</div><h1>\u626B\u63CF\u8BC6\u522B\u56FE</h1><p>\u7528\u624B\u673A\u76F8\u673A\u5BF9\u51C6\u4E0B\u9762\u4E09\u5F20\u8BC6\u522B\u56FE\uFF0C\u56FE\u4E0A\u4F1A\u7ACB\u8D77\u4E09\u7EF4\u5185\u5BB9\u3002\u8BC6\u522B\u56FE\u53EF\u4EE5\u6253\u5370\u51FA\u6765\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53E6\u4E00\u53F0\u624B\u673A\u6216\u7535\u8111\u4E0A\u6253\u5F00\u3002</p></div></section><button class="btn-main" data-cam>'+ze.cam+"\u6253\u5F00\u76F8\u673A\u626B\u63CF</button>"+i+'<ol class="scs">'+t+'</ol><p class="foot">\u6253\u5370\u7248\u8BC6\u522B\u56FE\uFF1A<a href="assets/ar/ar-cards.pdf" target="_blank" rel="noopener">\u7A37\u5C71\u677F\u67A3 AR \u8BC6\u522B\u56FE\uFF08PDF\uFF0CA4 \u4E09\u9875\uFF09</a><br>\u8BC6\u522B\u56FE\u53D6\u81EA\u7533\u62A5\u4E66\u56FE\u7247\u3002\u4E09\u7EF4\u5185\u5BB9\u4F9D\u636E\u7533\u62A5\u4E66\u548C\u4E09\u5E74\u884C\u52A8\u8BA1\u5212\u5236\u4F5C\uFF0C\u6A21\u578B\u4E3A\u793A\u610F\u3002</p></main></div>'}function R_(){_a(),cu(),su();let i=he(".home",$e);i||($e.insertAdjacentHTML("afterbegin",A_()),i=he(".home",$e),C_(i)),i.hidden=!1,document.title="AR \u4F53\u9A8C \xB7 \u7A37\u5C71\u677F\u67A3\u6570\u5B57\u9986"}function C_(i){he("[data-cam]",i).onclick=()=>pu(),Ji("[data-view]",i).forEach(e=>{e.onclick=()=>Zh(e.dataset.view)}),Ji("[data-card]",i).forEach(e=>{e.onclick=()=>Zh("card-"+e.dataset.card)});let t=he("[data-copy]",i);t&&(t.onclick=()=>nu(Zi,t))}function nu(i,t){let e=()=>{let s=t.innerHTML;t.textContent="\u5DF2\u590D\u5236",setTimeout(()=>{t.innerHTML=s},1600)},n=()=>{let s=t.parentNode.querySelector("code");if(s){let r=document.createRange();r.selectNodeContents(s);let o=getSelection();o.removeAllRanges(),o.addRange(r)}};try{navigator.clipboard.writeText(i).then(e,n)}catch(s){n()}}function iu(i){_a(),cu();let t=he(".home",$e);t&&(t.hidden=!0);let e=he(".cards",$e);e||($e.insertAdjacentHTML("beforeend",'<div class="cards"></div>'),e=he(".cards",$e));let n=Rn.indexOf(i),s=Ee[i];e.innerHTML='<div class="cbar"><button class="x" data-close aria-label="\u5173\u95ED">'+ze.x+"</button><span>\u8BC6\u522B\u56FE "+(n+1)+' / 3</span><span class="sp"></span></div><figure><img src="'+s.img+'" alt="\u8BC6\u522B\u56FE\uFF1A'+ke(s.target)+'"><figcaption><b>'+ke(s.name)+"</b>"+ke(s.target)+'</figcaption></figure><p class="tip">\u53E6\u4E00\u53F0\u624B\u673A\u6253\u5F00\u672C\u9875\uFF0C\u70B9\u300C\u6253\u5F00\u76F8\u673A\u626B\u63CF\u300D\uFF0C\u5BF9\u51C6\u8FD9\u5F20\u56FE\u3002\u5C4F\u5E55\u8C03\u4EAE\u4E00\u4E9B\u66F4\u5BB9\u6613\u8BC6\u522B\u3002</p><div class="cnav"><button class="pill" data-go="'+Rn[(n+2)%3]+'">'+ze.l+'\u4E0A\u4E00\u5F20</button><button class="pill" data-go="'+Rn[(n+1)%3]+'">\u4E0B\u4E00\u5F20'+ze.r+"</button></div>",e.hidden=!1,he("[data-close]",e).onclick=()=>ru(),Ji("[data-go]",e).forEach(r=>{r.onclick=()=>{history.replaceState(history.state,"","#card-"+r.dataset.go),Ki="card-"+r.dataset.go,iu(r.dataset.go)}})}function su(){let i=he(".cards",$e);i&&(i.hidden=!0)}function ru(){if(T_())return history.back();if($t&&$t.kind==="viewer"){location.href="./#"+Ee[$t.id].back;return}history.replaceState(null,"",location.pathname+location.search),Os()}var re,Jh,au,Kh,we,ma,Lt={};function P_(){if(re)return;$e.insertAdjacentHTML("beforeend",'<div class="stage" hidden><div class="cam"></div><div class="gl"></div><div class="lbl"></div><div class="hud"><div class="top"><button class="x" data-exit aria-label="\u8FD4\u56DE">'+ze.back+'</button><div class="ttl"></div><button class="pill dark" data-tocam hidden>'+ze.cam+'\u76F8\u673A\u626B\u63CF</button></div><div class="tabs" hidden role="tablist">'+Rn.map(e=>'<button role="tab" data-tab="'+e+'">'+ke(Ee[e].short)+"</button>").join("")+'</div><p class="hint" hidden>\u62D6\u52A8\u65CB\u8F6C \xB7 \u53CC\u6307\u7F29\u653E \xB7 \u70B9\u6309\u67E5\u770B</p><div class="scan" hidden><div class="frame"><i></i><i></i><i></i><i></i></div><p>\u628A\u8BC6\u522B\u56FE\u653E\u8FDB\u6846\u91CC</p><div class="thumbs">'+Rn.map(e=>'<img src="'+Ee[e].img+'" alt="">').join("")+'</div></div><div class="msg" hidden></div><div class="say" hidden><div class="mz">'+Ds("happy")+'</div><p class="bub"></p></div><div class="card" hidden></div><div class="sheet" hidden role="dialog" aria-modal="false"></div></div></div>'),re=he(".stage",$e),Jh=he(".gl",re),au=he(".cam",re),Kh=he(".lbl",re),["top","ttl","tabs","hint","scan","msg","say","card","sheet"].forEach(e=>{Lt[e]=he("."+e,re)}),Lt.tocam=he("[data-tocam]",re),we=new ys({antialias:!0,alpha:!0,powerPreference:"high-performance"}),we.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),we.setClearColor(0,0),Jh.appendChild(we.domElement),ma=new oa(Kh),he("[data-exit]",re).onclick=()=>ru(),Lt.tocam.onclick=()=>pu(),Ji("[data-tab]",re).forEach(e=>{e.onclick=()=>{(!$t||e.dataset.tab!==$t.id)&&(history.replaceState(history.state,"","#"+e.dataset.tab),Ki=e.dataset.tab,wc(e.dataset.tab))}});let i=null,t=we.domElement;t.addEventListener("pointerdown",e=>{i={x:e.clientX,y:e.clientY,t:performance.now()}}),t.addEventListener("pointerup",e=>{i&&Math.hypot(e.clientX-i.x,e.clientY-i.y)<9&&performance.now()-i.t<600&&L_(e.clientX,e.clientY),i=null}),window.addEventListener("resize",Tc)}function ou(i){P_(),re.hidden=!1,re.classList.toggle("ar",i==="ar");let t=he(".home",$e);t&&(t.hidden=!0),su()}function cu(){re&&(re.hidden=!0)}var $h=new $r,jh=new tt;function L_(i,t){let e=$t;if(!e)return;let n=we.domElement.getBoundingClientRect();jh.set((i-n.left)/n.width*2-1,-(t-n.top)/n.height*2+1),$h.setFromCamera(jh,e.camera);let s=[];e.entries.forEach(o=>{o.live&&o.obj.picks.forEach(a=>{gc(a)&&s.push(a)})});let r=$h.intersectObjects(s,!1);for(let o of r){let a=o.object;for(;a&&!a.userData.tap;)a=a.parent;if(a){a.userData.tap();return}}}var Cn=null,Qh=0,Sc=!1;function I_(){return $t&&$t.entries.find(i=>i.id===$t.activeId&&($t.kind==="viewer"||i.live))}function ga(){Sc=!1;let i=I_();if(!i){Lt.card.hidden=!0;return}Lt.card.innerHTML=i.obj.card(),i.obj.bind&&i.obj.bind(Lt.card),Lt.card.hidden=!Lt.sheet.hidden,fu()}function D_(){Sc||(Sc=!0,requestAnimationFrame(ga))}function U_({title:i,sub:t,body:e,src:n,onClose:s}){if(Cn){let r=Cn;Cn=null,r()}Lt.sheet.innerHTML='<div class="sh-h"><div><b>'+ke(i)+"</b><span>"+ke(t||"")+'</span></div><button class="x" data-close aria-label="\u5173\u95ED">'+ze.x+'</button></div><div class="sh-b">'+e+"</div>"+(n?'<p class="cs">'+ke(n)+"</p>":""),Lt.sheet.hidden=!1,Lt.card.hidden=!0,Cn=s||null,he("[data-close]",Lt.sheet).onclick=N_}function N_(){if(Lt.sheet.hidden=!0,Cn){let i=Cn;Cn=null,i()}ga()}function O_(i){he(".bub",Lt.say).textContent=i,Lt.say.hidden=!1,clearTimeout(Qh),Qh=setTimeout(()=>{Lt.say.hidden=!0},8e3)}F_();function F_(){document.addEventListener("click",i=>{Lt.say&&!Lt.say.hidden&&i.target.closest(".say")&&(Lt.say.hidden=!0)})}function lu(){return{labels:ma,refresh:D_,sheet:U_,say:O_}}function hu(i){i.add(new Zr(16775920,9274483,1.15));let t=new Jr(16777215,1.6);t.position.set(.6,1.3,.9),i.add(t)}function B_(i){i.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(e=>e.dispose())})}var $t=null,pa=new Kr;function uu(){let i=$t;if(!i)return;let t=Math.min(pa.getDelta(),.1),e=pa.elapsedTime;i.controls&&i.controls.update(),i.intro&&i.intro(t),i.entries.forEach(n=>{n.live&&n.obj.update(t,e)}),we.render(i.scene,i.camera),ma.update(i.camera,re.clientWidth,re.clientHeight,i.minY||0)}function _a(){let i=$t;i&&($t=null,we&&we.setAnimationLoop(null),i.tracker&&i.tracker.stop(),i.controls&&i.controls.dispose(),B_(i.scene),ma.clear(),Lt.sheet&&(Lt.sheet.hidden=!0,Cn=null),Lt.say&&(Lt.say.hidden=!0),["scan","msg","card","hint","tabs"].forEach(t=>{Lt[t]&&(Lt[t].hidden=!0)}),clearTimeout(fa),we&&we.clear())}var du={sandbox:{c:[0,.02,.02],w:.9,wide:1.1,h:.5,el:62},zao:{c:[0,-.02,.06],w:.74,wide:1,h:.5,el:55},ring:{c:[0,.02,.03],w:.98,h:1.5,el:6}};function wc(i){ou("viewer"),_a();let t=Ee[i],e=new vs;hu(e);let n=new fe,s=vc[i](lu());n.add(qh(i),s.root),t.flat&&(n.rotation.x=-Math.PI/2),e.add(n),e.updateMatrixWorld(!0);let r=new Ce(40,1,.01,30),o=new ia(r,we.domElement);o.enableDamping=!0,o.dampingFactor=.08,o.enablePan=!1,o.rotateSpeed=.7,o.zoomSpeed=.8,t.flat?(o.minPolarAngle=.12,o.maxPolarAngle=1.36):(o.minPolarAngle=.85,o.maxPolarAngle=2.1,o.minAzimuthAngle=-1.05,o.maxAzimuthAngle=1.05);let a=du[i],c=new P().fromArray(a.c).applyMatrix4(n.matrixWorld);o.target.copy(c),$t={kind:"viewer",id:i,scene:e,camera:r,controls:o,holder:n,activeId:i,entries:[{id:i,obj:s,live:!0}],fitted:!1},Lt.ttl.textContent=t.name,Lt.tocam.hidden=!1,Lt.tabs.hidden=!1,Ji("[data-tab]",re).forEach(d=>d.setAttribute("aria-selected",d.dataset.tab===i)),Lt.hint.hidden=!1,clearTimeout(Lt.hint._t),Lt.hint._t=setTimeout(()=>{Lt.hint.hidden=!0},3500),document.title=t.name+" \xB7 AR \u4F53\u9A8C",s.start(),ga(),Tc();let l=0,h=r.position.distanceTo(c),u=r.position.clone().sub(c).normalize();$t.intro=d=>{l=Math.min(1,l+d/1.3);let p=1-Math.pow(1-l,3);r.position.copy(c).addScaledVector(u,h*(1.35-.35*p)),l>=1&&($t.intro=null)},pa.getDelta(),we.setAnimationLoop(uu)}function z_(){let i=re.clientWidth,t=re.clientHeight,e=0;[Lt.top,Lt.tabs].forEach(r=>{r&&!r.hidden&&(e=Math.max(e,r.getBoundingClientRect().bottom))});let n={x:0,y:e,w:i,h:t-e},s=Lt.card.hidden?Lt.sheet.hidden?null:Lt.sheet:Lt.card;if(s){let r=s.getBoundingClientRect();r.width<i*.6?(n.x=r.right,n.w=i-r.right):n.h=Math.max(120,r.top-e)}return n}function fu(){let i=$t;if(!i||i.kind!=="viewer")return;let t=re.clientWidth,e=re.clientHeight,n=i.camera,s=z_();if(n.aspect=t/e,n.setViewOffset(t,e,t/2-(s.x+s.w/2),e/2-(s.y+s.h/2),t,e),n.updateProjectionMatrix(),!i.fitted){i.fitted=!0;let r=du[i.id],o=Math.tan(Ls.degToRad(n.fov)/2),a=r.wide&&s.w/s.h>.9?r.wide:r.w,c=Math.max(a/2/(o*s.w/e),r.h/2/(o*s.h/e))*1.06,l=Ls.degToRad(r.el);n.position.copy(i.controls.target).add(new P(0,Math.sin(l)*c,Math.cos(l)*c)),i.controls.minDistance=c*.4,i.controls.maxDistance=c*2.2,n.lookAt(i.controls.target),i.controls.update()}}function Tc(){if(!re||re.hidden)return;let i=re.clientWidth,t=re.clientHeight;$t&&($t.minY=Lt.top.querySelector(".x").getBoundingClientRect().bottom),we.setSize(i,t,!1),we.domElement.style.width=i+"px",we.domElement.style.height=t+"px",$t&&$t.kind==="viewer"&&fu(),$t&&$t.tracker&&$t.tracker.resize()}var fa=0;function pu(){_u(),location.hash!=="#scan"&&(history.pushState({ar:1},"","#scan"),Ki="scan")}function mu(i,t){Lt.msg.innerHTML='<div class="box">'+i+(t?'<div class="mb">'+t+"</div>":"")+"</div>",Lt.msg.hidden=!1,Lt.scan.hidden=!0}function k_(){return Rn.map(i=>'<button class="pill" data-fb="'+i+'">'+ze.cube+ke(Ee[i].short)+"</button>").join("")}function H_(){Ji("[data-fb]",Lt.msg).forEach(e=>{e.onclick=()=>{history.replaceState(history.state,"","#"+e.dataset.fb),Ki=e.dataset.fb,wc(e.dataset.fb)}});let i=he("[data-retry]",Lt.msg);i&&(i.onclick=()=>_u());let t=he("[data-copy]",Lt.msg);t&&(t.onclick=()=>nu(Zi,t))}function Mc(i,t){let e='<p class="sub">\u4E5F\u53EF\u4EE5\u4E0D\u7528\u76F8\u673A\uFF0C\u76F4\u63A5\u770B\u4E09\u7EF4\uFF1A</p>',n;i==="insecure"?n='<b>\u9700\u8981 https \u5730\u5740</b><p>\u5F53\u524D\u7F51\u5740\u4E0D\u662F https\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5141\u8BB8\u7F51\u9875\u6253\u5F00\u76F8\u673A\u3002\u8BF7\u7528\u624B\u673A\u6D4F\u89C8\u5668\u6253\u5F00\uFF1A</p><div class="url"><code>'+Zi+'</code><button class="pill" data-copy>'+ze.copy+"\u590D\u5236</button></div>":i==="unsupported"?n="<b>\u8FD9\u4E2A\u6D4F\u89C8\u5668\u4E0D\u80FD\u6253\u5F00\u76F8\u673A</b><p>"+(tu?"\u8BF7\u70B9\u53F3\u4E0A\u89D2\u300C\xB7\xB7\xB7\u300D\uFF0C\u9009\u62E9\u300C\u5728\u6D4F\u89C8\u5668\u6253\u5F00\u300D\uFF0C\u518D\u8BD5\u4E00\u6B21\u3002":"\u8BF7\u6362\u7528\u7CFB\u7EDF\u6D4F\u89C8\u5668\uFF08Safari\u3001Chrome \u7B49\uFF09\u518D\u8BD5\u4E00\u6B21\u3002")+"</p>":i==="denied"?n='<b>\u6CA1\u6709\u62FF\u5230\u76F8\u673A\u6743\u9650</b><p>\u8BF7\u5728\u6D4F\u89C8\u5668\u6216\u7CFB\u7EDF\u8BBE\u7F6E\u91CC\u5141\u8BB8\u672C\u7F51\u9875\u4F7F\u7528\u76F8\u673A\uFF0C\u7136\u540E\u70B9\u300C\u91CD\u8BD5\u300D\u3002\u5982\u679C\u672C\u9875\u662F\u5D4C\u5728\u5176\u4ED6\u7F51\u9875\u6216\u5E94\u7528\u91CC\u6253\u5F00\u7684\uFF0C\u8BF7\u7528\u624B\u673A\u6D4F\u89C8\u5668\u76F4\u63A5\u6253\u5F00\uFF1A</p><div class="url"><code>'+Zi+'</code><button class="pill" data-copy>'+ze.copy+'\u590D\u5236</button></div><div class="mb"><button class="pill solid" data-retry>\u91CD\u8BD5</button></div>':i==="nocam"?n="<b>\u6CA1\u6709\u627E\u5230\u53EF\u7528\u7684\u76F8\u673A</b><p>\u8FD9\u53F0\u8BBE\u5907\u4E0A\u6CA1\u6709\u53EF\u7528\u7684\u540E\u7F6E\u6216\u524D\u7F6E\u76F8\u673A\u3002</p>":i==="load"?n='<b>\u8BC6\u522B\u7A0B\u5E8F\u6CA1\u6709\u52A0\u8F7D\u6210\u529F</b><p>\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u70B9\u300C\u91CD\u8BD5\u300D\u3002</p><div class="mb"><button class="pill solid" data-retry>\u91CD\u8BD5</button></div>':n="<b>\u76F8\u673A\u6CA1\u6709\u6253\u5F00</b><p>"+ke(t||"")+'</p><div class="mb"><button class="pill solid" data-retry>\u91CD\u8BD5</button></div>',mu(n+e,k_()),H_()}function V_(i){return new Promise((t,e)=>{if(window.MINDAR&&window.MINDAR.IMAGE&&window.MINDAR.IMAGE.Controller)return t();let n=document.createElement("script");n.src=i,n.async=!0,n.onload=()=>t(),n.onerror=()=>e(new Error("script")),document.head.appendChild(n)})}var Us=null,Ns=null;function gu(){Us||(Us=V_("ar-track.js?v="+Yh).catch(i=>{throw Us=null,i}),Us.catch(()=>{})),Ns||(Ns=fetch("assets/ar/targets.mind?v="+Yh).then(i=>{if(!i.ok)throw new Error("targets "+i.status);return i.arrayBuffer()}).catch(i=>{throw Ns=null,i}),Ns.catch(()=>{}))}var Ec=class{constructor(t,e,n,s){this.box=t,this.camera=e,this.entries=n,this.ev=s,this.stopped=!1}async start(t){t("\u6B63\u5728\u6253\u5F00\u76F8\u673A\u2026\u2026");let e;try{e=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}})}catch(a){let c=a&&a.name;throw Object.assign(new Error(c),{kind:c==="NotAllowedError"||c==="SecurityError"||c==="PermissionDeniedError"?"denied":c==="NotFoundError"||c==="OverconstrainedError"||c==="DevicesNotFoundError"?"nocam":"other",detail:c})}if(this.stopped){e.getTracks().forEach(a=>a.stop());return}this.stream=e;let n=this.video=document.createElement("video");n.setAttribute("autoplay",""),n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.muted=!0,n.playsInline=!0,this.box.appendChild(n),n.srcObject=e,await new Promise(a=>{n.readyState>=1&&n.videoWidth?a():n.addEventListener("loadedmetadata",a,{once:!0})});try{await n.play()}catch(a){}n.setAttribute("width",n.videoWidth),n.setAttribute("height",n.videoHeight),t("\u6B63\u5728\u52A0\u8F7D\u8BC6\u522B\u7A0B\u5E8F\u2026\u2026");let s;try{gu(),await Us,s=await Ns}catch(a){throw Object.assign(new Error("load"),{kind:"load"})}if(this.stopped)return;let r=window.MINDAR.IMAGE.Controller;this.controller=new r({inputWidth:n.videoWidth,inputHeight:n.videoHeight,maxTrack:1,filterMinCF:1e-4,filterBeta:.005,warmupTolerance:3,missTolerance:8,onUpdate:a=>this.onUpdate(a)});let{dimensions:o}=this.controller.addImageTargetsFromBuffer(s.slice(0));this.post=o.map(([a,c])=>new ee().compose(new P(a/2,c/2,0),new Pe,new P(a,a,a))),this.resize(),t("\u6B63\u5728\u51C6\u5907\u8BC6\u522B\u2026\u2026"),await new Promise(a=>setTimeout(a,30)),this.controller.dummyRun(n),!this.stopped&&(this.controller.processVideo(n),this.ev.ready())}onUpdate(t){if(t.type!=="updateMatrix"||this.stopped)return;let e=this.entries.find(s=>s.idx===t.targetIndex);if(!e)return;let n=e.anchor;t.worldMatrix?(n.matrix.fromArray(t.worldMatrix).multiply(this.post[t.targetIndex]),n.visible=!0,e.live||(e.live=!0,this.ev.found(e))):(n.visible=!1,e.live&&(e.live=!1,this.ev.lost(e)))}resize(){let t=this.video,e=this.controller;if(!t||!e)return;let n=re,s=n.clientWidth,r=n.clientHeight;t.setAttribute("width",t.videoWidth),t.setAttribute("height",t.videoHeight);let o=t.videoWidth/t.videoHeight,a=s/r,c,l;o>a?(l=r,c=l*o):(c=s,l=c/o);let h=e.getProjectionMatrix(),u=e.inputWidth/e.inputHeight,d=u>a?t.width/e.inputWidth:t.height/e.inputHeight,p;u>a?p=r*d:p=s/e.inputWidth*e.inputHeight*d;let g=r/p,x=this.camera;x.fov=2*Math.atan(1/h[5]*g)*180/Math.PI,x.near=h[14]/(h[10]-1),x.far=h[14]/(h[10]+1),x.aspect=s/r,x.clearViewOffset(),x.updateProjectionMatrix(),Object.assign(t.style,{position:"absolute",top:-(l-r)/2+"px",left:-(c-s)/2+"px",width:c+"px",height:l+"px"})}stop(){if(this.stopped=!0,this.controller)try{this.controller.stopProcessVideo(),this.controller.worker&&this.controller.worker.terminate()}catch(t){}this.stream&&this.stream.getTracks().forEach(t=>t.stop()),this.video&&this.video.remove()}};function _u(){ou("ar"),_a();let i=new vs;hu(i);let t=new Ce(45,1,10,1e5),e=Rn.map(o=>{let a=new fe;a.matrixAutoUpdate=!1,a.visible=!1;let c=vc[o](lu());return a.add(c.root),i.add(a),{id:o,idx:Ee[o].idx,obj:c,anchor:a,live:!1,lostAt:0,seen:!1}}),n=$t={kind:"ar",scene:i,camera:t,entries:e,activeId:null,tracker:null};if(Lt.ttl.textContent="\u626B\u63CF\u8BC6\u522B\u56FE",Lt.tocam.hidden=!0,Lt.tabs.hidden=!0,Lt.hint.hidden=!0,document.title="\u76F8\u673A\u626B\u63CF \xB7 AR \u4F53\u9A8C",Tc(),pa.getDelta(),we.setAnimationLoop(uu),!eu)return Mc("insecure");if(!w_)return Mc("unsupported");gu();let s=o=>mu('<div class="spin"></div><p>'+ke(o)+"</p>");(n.tracker=new Ec(au,t,e,{ready(){$t===n&&(Lt.msg.hidden=!0,bc(!0))},found(o){$t===n&&(clearTimeout(fa),(!o.seen||performance.now()-o.lostAt>3e3)&&o.obj.start(),document.documentElement.dataset.arFound=o.id,o.seen=!0,n.activeId=o.id,Lt.ttl.textContent=Ee[o.id].name,bc(!1),ga())},lost(o){$t===n&&(o.lostAt=performance.now(),clearTimeout(fa),fa=setTimeout(()=>{$t!==n||n.entries.some(a=>a.live)||(n.activeId=null,Lt.card.hidden=!0,Lt.sheet.hidden=!0,Cn=null,Lt.ttl.textContent="\u626B\u63CF\u8BC6\u522B\u56FE",bc(!0))},800))}})).start(s).catch(o=>{$t===n&&Mc(o.kind||"other",o.detail||o.message)})}function bc(i){Lt.scan.hidden=!i}var Ki=null;function Os(){let i=decodeURIComponent(location.hash.slice(1)),t=he(".home",$e);if(!(i===Ki&&(i!==""||t&&!t.hidden))){if(Ki=i,Ee[i])return wc(i);if(i.indexOf("card-")===0&&Ee[i.slice(5)])return iu(i.slice(5));if(i==="scan"){if($t&&$t.kind==="ar")return;try{history.replaceState(null,"",location.pathname+location.search)}catch(e){}}R_()}}window.addEventListener("popstate",Os);window.addEventListener("hashchange",Os);Os();})();
