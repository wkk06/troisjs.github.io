import{A as e,a as s,d as t,c as a,S as r,n as i,e as n,o}from"./trois.module.be5bbac6.js";import{r as d,o as l,c,w as p,a as u}from"./app.6a81f61a.js";import"./OrbitControls.9727ee0a.js";const m={components:{AmbientLight:e,Camera:s,Renderer:t,PointLight:a,Scene:r,Sphere:i,StandardMaterial:n,Texture:o},mounted(){const e=this.$refs.renderer,s=this.$refs.mesh.mesh;e.onBeforeRender((()=>{s.rotation.x+=.01,s.rotation.y+=.011}))}};m.render=function(e,s,t,a,r,i){const n=d("Camera"),o=d("AmbientLight"),m=d("PointLight"),_=d("Texture"),h=d("StandardMaterial"),f=d("Sphere"),g=d("Scene"),b=d("Renderer");return l(),c(b,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":""},{default:p((()=>[u(n,{position:{z:10}}),u(g,{background:"#000000"},{default:p((()=>[u(o,{intensity:.5},null,8,["intensity"]),u(m,{position:{y:50,z:0}}),u(m,{color:"#ff6000",intensity:.75,position:{y:-50,z:0}},null,8,["intensity"]),u(f,{ref:"mesh",radius:2.5,"width-segments":200,"height-segments":200},{default:p((()=>[u(h,{"displacement-scale":.2},{default:p((()=>[u(_,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),u(_,{src:"/assets/textures/Wood_Tiles_002_height.png",id:"displacementMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",id:"normalMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",id:"roughnessMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",id:"aoMap"})])),_:1},8,["displacement-scale"])])),_:1},8,["radius"])])),_:1})])),_:1},512)};export default m;
