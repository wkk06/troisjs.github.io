import{v as r}from"./app.6a81f61a.js";var a=r((function(r,a){!function(){var t=.5*(Math.sqrt(3)-1),e=(3-Math.sqrt(3))/6,o=1/6,i=(Math.sqrt(5)-1)/4,n=(5-Math.sqrt(5))/20;function f(r){var a;a="function"==typeof r?r:r?function(){var r=0,a=0,t=0,e=1,o=s();r=o(" "),a=o(" "),t=o(" ");for(var i=0;i<arguments.length;i++)(r-=o(arguments[i]))<0&&(r+=1),(a-=o(arguments[i]))<0&&(a+=1),(t-=o(arguments[i]))<0&&(t+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*e;return r=a,a=t,t=o-(e=0|o)}}(r):Math.random,this.p=v(a),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var t=0;t<512;t++)this.perm[t]=this.p[255&t],this.permMod12[t]=this.perm[t]%12}function v(r){var a,t=new Uint8Array(256);for(a=0;a<256;a++)t[a]=a;for(a=0;a<255;a++){var e=a+~~(r()*(256-a)),o=t[a];t[a]=t[e],t[e]=o}return t}function s(){var r=4022871197;return function(a){a=a.toString();for(var t=0;t<a.length;t++){var e=.02519603282416938*(r+=a.charCodeAt(t));e-=r=e>>>0,r=(e*=r)>>>0,r+=4294967296*(e-=r)}return 2.3283064365386963e-10*(r>>>0)}}f.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(r,a){var o,i,n=this.permMod12,f=this.perm,v=this.grad3,s=0,h=0,l=0,u=(r+a)*t,p=Math.floor(r+u),M=Math.floor(a+u),m=(p+M)*e,c=r-(p-m),d=a-(M-m);c>d?(o=1,i=0):(o=0,i=1);var g=c-o+e,y=d-i+e,A=c-1+2*e,w=d-1+2*e,q=255&p,x=255&M,D=.5-c*c-d*d;if(D>=0){var U=3*n[q+f[x]];s=(D*=D)*D*(v[U]*c+v[U+1]*d)}var b=.5-g*g-y*y;if(b>=0){var F=3*n[q+o+f[x+i]];h=(b*=b)*b*(v[F]*g+v[F+1]*y)}var S=.5-A*A-w*w;if(S>=0){var j=3*n[q+1+f[x+1]];l=(S*=S)*S*(v[j]*A+v[j+1]*w)}return 70*(s+h+l)},noise3D:function(r,a,t){var e,i,n,f,v,s,h,l,u,p,M=this.permMod12,m=this.perm,c=this.grad3,d=.3333333333333333*(r+a+t),g=Math.floor(r+d),y=Math.floor(a+d),A=Math.floor(t+d),w=(g+y+A)*o,q=r-(g-w),x=a-(y-w),D=t-(A-w);q>=x?x>=D?(v=1,s=0,h=0,l=1,u=1,p=0):q>=D?(v=1,s=0,h=0,l=1,u=0,p=1):(v=0,s=0,h=1,l=1,u=0,p=1):x<D?(v=0,s=0,h=1,l=0,u=1,p=1):q<D?(v=0,s=1,h=0,l=0,u=1,p=1):(v=0,s=1,h=0,l=1,u=1,p=0);var U=q-v+o,b=x-s+o,F=D-h+o,S=q-l+2*o,j=x-u+2*o,C=D-p+2*o,N=q-1+.5,P=x-1+.5,T=D-1+.5,_=255&g,k=255&y,z=255&A,B=.6-q*q-x*x-D*D;if(B<0)e=0;else{var E=3*M[_+m[k+m[z]]];e=(B*=B)*B*(c[E]*q+c[E+1]*x+c[E+2]*D)}var G=.6-U*U-b*b-F*F;if(G<0)i=0;else{var H=3*M[_+v+m[k+s+m[z+h]]];i=(G*=G)*G*(c[H]*U+c[H+1]*b+c[H+2]*F)}var I=.6-S*S-j*j-C*C;if(I<0)n=0;else{var J=3*M[_+l+m[k+u+m[z+p]]];n=(I*=I)*I*(c[J]*S+c[J+1]*j+c[J+2]*C)}var K=.6-N*N-P*P-T*T;if(K<0)f=0;else{var L=3*M[_+1+m[k+1+m[z+1]]];f=(K*=K)*K*(c[L]*N+c[L+1]*P+c[L+2]*T)}return 32*(e+i+n+f)},noise4D:function(r,a,t,e){var o,f,v,s,h,l,u,p,M,m,c,d,g,y,A,w,q,x=this.perm,D=this.grad4,U=(r+a+t+e)*i,b=Math.floor(r+U),F=Math.floor(a+U),S=Math.floor(t+U),j=Math.floor(e+U),C=(b+F+S+j)*n,N=r-(b-C),P=a-(F-C),T=t-(S-C),_=e-(j-C),k=0,z=0,B=0,E=0;N>P?k++:z++,N>T?k++:B++,N>_?k++:E++,P>T?z++:B++,P>_?z++:E++,T>_?B++:E++;var G=N-(l=k>=3?1:0)+n,H=P-(u=z>=3?1:0)+n,I=T-(p=B>=3?1:0)+n,J=_-(M=E>=3?1:0)+n,K=N-(m=k>=2?1:0)+2*n,L=P-(c=z>=2?1:0)+2*n,O=T-(d=B>=2?1:0)+2*n,Q=_-(g=E>=2?1:0)+2*n,R=N-(y=k>=1?1:0)+3*n,V=P-(A=z>=1?1:0)+3*n,W=T-(w=B>=1?1:0)+3*n,X=_-(q=E>=1?1:0)+3*n,Y=N-1+4*n,Z=P-1+4*n,$=T-1+4*n,rr=_-1+4*n,ar=255&b,tr=255&F,er=255&S,or=255&j,ir=.6-N*N-P*P-T*T-_*_;if(ir<0)o=0;else{var nr=x[ar+x[tr+x[er+x[or]]]]%32*4;o=(ir*=ir)*ir*(D[nr]*N+D[nr+1]*P+D[nr+2]*T+D[nr+3]*_)}var fr=.6-G*G-H*H-I*I-J*J;if(fr<0)f=0;else{var vr=x[ar+l+x[tr+u+x[er+p+x[or+M]]]]%32*4;f=(fr*=fr)*fr*(D[vr]*G+D[vr+1]*H+D[vr+2]*I+D[vr+3]*J)}var sr=.6-K*K-L*L-O*O-Q*Q;if(sr<0)v=0;else{var hr=x[ar+m+x[tr+c+x[er+d+x[or+g]]]]%32*4;v=(sr*=sr)*sr*(D[hr]*K+D[hr+1]*L+D[hr+2]*O+D[hr+3]*Q)}var lr=.6-R*R-V*V-W*W-X*X;if(lr<0)s=0;else{var ur=x[ar+y+x[tr+A+x[er+w+x[or+q]]]]%32*4;s=(lr*=lr)*lr*(D[ur]*R+D[ur+1]*V+D[ur+2]*W+D[ur+3]*X)}var pr=.6-Y*Y-Z*Z-$*$-rr*rr;if(pr<0)h=0;else{var Mr=x[ar+1+x[tr+1+x[er+1+x[or+1]]]]%32*4;h=(pr*=pr)*pr*(D[Mr]*Y+D[Mr+1]*Z+D[Mr+2]*$+D[Mr+3]*rr)}return 27*(o+f+v+s+h)}},f._buildPermutationTable=v,a.SimplexNoise=f,r.exports=f}()}));export{a as s};
