$wnd.com_esofthead_mycollab_widgetset_MyCollabWidgetSet.runAsyncCallback9("function HEb(a){return a.g}\nfunction JEb(a,b){CDb(a,b);--a.i}\nfunction Ald(){Md.call(this)}\nfunction FXd(){Pe.call(this);this.G=u3e}\nfunction Ov(a){return (et(),dt).Ee(a,'col')}\nfunction yvc(a,b){_5b(a.a,new pFc(new FFc(Qkb),'openPopup'),RJ(NJ(Kob,1),nDe,1,3,[(_ae(),b?$ae:Zae)]))}\nfunction IEb(a,b){if(b<0){throw new Vae('Cannot access a row with a negative index: '+b)}if(b>=a.i){throw new Vae(kIe+b+lIe+a.i)}}\nfunction LEb(a,b){if(a.i==b){return}if(b<0){throw new Vae('Cannot set number of rows to '+b)}if(a.i<b){NEb((vxb(),a.G),b-a.i,a.g);a.i=b}else{while(a.i>b){JEb(a,a.i-1)}}}\nfunction MEb(a,b){kDb();JDb.call(this);DDb(this,new dEb(this));GDb(this,new AFb(this));EDb(this,new oFb(this));KEb(this,b);LEb(this,a)}\nfunction nFb(a,b,c){var d,e;b=b>1?b:1;e=a.a.childNodes.length;if(e<b){for(d=e;d<b;d++){Vr(a.a,Ov($doc))}}else if(!c&&e>b){for(d=e;d>b;d--){cs(a.a,a.a.lastChild)}}}\nfunction NEb(a,b,c){var d=$doc.createElement('td');d.innerHTML=hLe;var e=$doc.createElement('tr');for(var f=0;f<c;f++){var g=d.cloneNode(true);e.appendChild(g)}a.appendChild(e);for(var h=1;h<b;h++){a.appendChild(e.cloneNode(true))}}\nfunction zld(a){if((!a.U&&(a.U=Sc(a)),YJ(YJ(a.U,6),219)).c&&((!a.U&&(a.U=Sc(a)),YJ(YJ(a.U,6),219)).v==null||Cde('',(!a.U&&(a.U=Sc(a)),YJ(YJ(a.U,6),219)).v))){return (!a.U&&(a.U=Sc(a)),YJ(YJ(a.U,6),219)).a}return (!a.U&&(a.U=Sc(a)),YJ(YJ(a.U,6),219)).v}\nfunction KEb(a,b){var c,d,e,f;if(a.g==b){return}if(b<0){throw new Vae('Cannot set number of columns to '+b)}if(a.g>b){for(c=0;c<a.i;c++){for(d=a.g-1;d>=b;d--){mDb(a,c,d);e=oDb(a,c,d,false);f=wFb(a.G,c);f.removeChild(e)}}}else{for(c=0;c<a.i;c++){for(d=a.g;d<b;d++){yDb(a,c,d)}}}a.g=b;nFb(a.I,b,false)}\nvar o3e='showDefaultCaption',p3e='setColor',q3e='setOpen',r3e='background',s3e={47:1,7:1,12:1,26:1,29:1,33:1,31:1,30:1,3:1},t3e='com.vaadin.client.ui.colorpicker',u3e='v-colorpicker',M3e='v-default-caption-width';ttb(1,null,{});_.gC=function X(){return this.cZ};ttb(135,9,bIe);_.wf=function cBb(a){return Tb(this,a,(bD(),bD(),aD))};ttb(827,27,mIe);_.wf=function KDb(a){return Tb(this,a,(bD(),bD(),aD))};ttb(264,42,oIe);_.wf=function rEb(a){return Tb(this,a,(bD(),bD(),aD))};ttb(644,827,mIe,MEb);_.Jg=function OEb(){var a;a=(vxb(),ow($doc));Os(a,hLe);return a};_.Kg=function PEb(a){return HEb(this)};_.Lg=function QEb(){return this.i};_.Mg=function REb(a,b){IEb(this,a);if(b<0){throw new Vae('Cannot access a column with a negative index: '+b)}if(b>=this.g){throw new Vae(iIe+b+jIe+this.g)}};_.Ng=function SEb(a){IEb(this,a)};_.g=0;_.i=0;var eS=Pbe(pCe,'Grid',644);ttb(110,164,sIe);_.wf=function YEb(a){return Tb(this,a,(bD(),bD(),aD))};ttb(385,9,DIe);_.wf=function YFb(a){return Ub(this,a,(bD(),bD(),aD))};ttb(812,33,s3e);_.cd=function Bld(){return false};_.fd=function Cld(){return !this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)};_.Tc=function Dld(){return !this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)};_.Vc=function Eld(){aK(this.hd(),52)&&YJ(this.hd(),52).wf(this)};_.Xc=function Fld(a){Ed(this,a);if(a.Xi(XKe)){this._l();(!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).c&&((!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).v==null||Cde('',(!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).v))&&this.am((!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).a)}if(a.Xi(mLe)||a.Xi(vSe)||a.Xi(o3e)){this.am(zld(this));(!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).c&&((!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).v==null||!(!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).v.length)&&!(!this.U&&(this.U=Sc(this)),YJ(YJ(this.U,6),219)).J.length?this.hd().fc(M3e):this.hd().kc(M3e)}};var tdb=Pbe(t3e,'AbstractColorPickerConnector',812);ttb(219,6,{6:1,37:1,219:1,3:1},FXd);_.a=null;_.b=false;_.c=false;var Rkb=Pbe(r_e,'ColorPickerState',219);YBe(_p)(9);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabWidgetSet-9.js\n")