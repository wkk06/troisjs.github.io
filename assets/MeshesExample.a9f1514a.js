var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,i=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&n(e,t,a[t]);if(r)for(var t of r(a))s.call(a,t)&&n(e,t,a[t]);return e};import{t as l}from"./tweakpane.6782f195.js";import{A as p,f as d,h,i as c,j as m,$ as f,ab as u,ac as b,ad as P,ae as O,af as g,ag as y,ah as w,e as M,ai as T,aa as j,aj as C,w as S,ak as k,a5 as I,n as B,g as L,k as v,a9 as x,X as z,q as R}from"./trois.module.3daed8be.js";import{r as A,o as D,c as $,w as _,b as K,C as q,A as E}from"./app.a0a6437e.js";const F={Box:{size:1},Circle:{},Cone:{},Cylinder:{},Dodecahedron:{},Icosahedron:{},Octahedron:{},Ring:{},Sphere:{},Tetrahedron:{},Torus:{tube:.2},TorusKnot:{tube:.2},Tube:{radius:.2,points:[new R(-1,1,0),new R(0,-1,0),new R(1,1,0)]}},X={BasicMaterial:{},LambertMaterial:{},PhongMaterial:{},PhysicalMaterial:{},StandardMaterial:{},ToonMaterial:{}},G={components:{AmbientLight:p,Camera:d,PointLight:h,Renderer:c,Scene:m,Box:f,Circle:u,Cone:b,Cylinder:P,Dodecahedron:O,Icosahedron:g,Octahedron:y,Ring:w,Sphere:M,Tetrahedron:T,Torus:j,TorusKnot:C,Tube:S,BasicMaterial:k,LambertMaterial:I,PhongMaterial:B,PhysicalMaterial:L,StandardMaterial:v,ToonMaterial:x},data:()=>({mesh:"Box",material:"PhysicalMaterial",color:"#0060ff",materialSide:z}),computed:{meshProps(){return F[this.mesh]},matProps(){return X[this.material]},meshTweakOptions(){const e={};for(const[a]of Object.entries(F))e[a]=a;return e},matTweakOptions(){const e={};for(const[a]of Object.entries(X))e[a]=a;return e}},mounted(){this.pane=new l,this.pane.addInput(this,"mesh",{options:this.meshTweakOptions}),this.pane.addInput(this,"material",{options:this.matTweakOptions}),this.pane.addInput(this,"color");this.$refs.renderer.onBeforeRender((()=>{const e=this.$refs.mesh.mesh;e.rotation.x+=.01,e.rotation.y+=.013}))},unmounted(){this.pane.dispose()},methods:{}};G.render=function(e,r,o,s,n,l){const p=A("Camera"),d=A("AmbientLight"),h=A("PointLight"),c=A("Scene"),m=A("Renderer");return D(),$(m,{ref:"renderer",antialias:"","orbit-ctrl":{enableDamping:!0,dampingFactor:.05},resize:""},{default:_((()=>[K(p,{position:{z:4}}),K(c,{background:"#ffffff"},{default:_((()=>[K(d,{color:"#808080"}),K(h,{position:{y:10,z:10}}),(D(),$(q(n.mesh),E({ref:"mesh",rotation:{y:Math.PI/4,z:Math.PI/4}},l.meshProps),{default:_((()=>{return[(D(),$(q(n.material),{ref:"mat",color:n.color,props:(e=i({},l.matProps),r={side:n.materialSide},a(e,t(r)))},null,8,["color","props"]))];var e,r})),_:1},16,["rotation"]))])),_:1})])),_:1},8,["orbit-ctrl"])};export default G;
