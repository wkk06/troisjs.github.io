import{A as e,f as s,i as t,h as a,j as r,e as n,k as i,a4 as o}from"./trois.module.3daed8be.js";import{r as l,o as d,c as p,w as m,b as u}from"./app.a0a6437e.js";const c={components:{AmbientLight:e,Camera:s,Renderer:t,PointLight:a,Scene:r,Sphere:n,StandardMaterial:i,Texture:o}};c.render=function(e,s,t,a,r,n){const i=l("Camera"),o=l("AmbientLight"),c=l("PointLight"),_=l("Texture"),g=l("StandardMaterial"),h=l("Sphere"),f=l("Scene"),b=l("Renderer");return d(),p(b,{ref:"renderer",resize:"",antialias:"","orbit-ctrl":{autoRotate:!0,enableDamping:!0,dampingFactor:.05}},{default:m((()=>[u(i,{position:{z:10}}),u(f,{background:"#000000"},{default:m((()=>[u(o,{intensity:.5},null,8,["intensity"]),u(c,{position:{y:50,z:0}}),u(c,{color:"#ff6000",intensity:.75,position:{y:-50,z:0}},null,8,["intensity"]),u(h,{ref:"mesh",radius:2.5,"width-segments":200,"height-segments":200},{default:m((()=>[u(g,{props:{displacementScale:.2}},{default:m((()=>[u(_,{src:"/assets/textures/Wood_Tiles_002_basecolor.jpg"}),u(_,{src:"/assets/textures/Wood_Tiles_002_height.png",name:"displacementMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_normal.jpg",name:"normalMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_roughness.jpg",name:"roughnessMap"}),u(_,{src:"/assets/textures/Wood_Tiles_002_ambientOcclusion.jpg",name:"aoMap"})])),_:1},8,["props"])])),_:1},8,["radius"])])),_:1})])),_:1},8,["orbit-ctrl"])};export default c;
