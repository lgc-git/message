import"./index-DXSXjyv2.js";/* empty css                *//* empty css                  *//* empty css                 */import{ah as m,a2 as g,n as f,q as E,E as l}from"./element-BerO0hGz.js";import{t as y,v as w,M as n,E as c,J as p,x}from"./vue-DUrGHEPY.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vxe-DFL6dZ20.js";const S={lock:!0,text:"加载中..."},d=(t,e={})=>{let s;return async(...a)=>{try{return s=m.service({...S,...e}),await t(...a)}finally{s.close()}}},b={code:0,data:{list:[]},message:"获取成功"};function v(t){return new Promise(e=>{setTimeout(()=>{e({...b,data:{list:t}})},1e3)})}function A(){return new Promise((t,e)=>{setTimeout(()=>{e(new Error("发生错误"))},1e3)})}const h={class:"app-container"},k=`
  <path class="path" d="
    M 30 15
    L 28 17
    M 25.61 25.61
    A 15 15, 0, 0, 1, 15 30
    A 15 15, 0, 1, 1, 27.99 7.5
    L 15 15
  " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
`,L=y({__name:"use-fullscreen-loading",setup(t){const e={text:"即将发生错误...",background:"#F56C6C20",svg:k,svgViewBox:"-10, -10, 50, 50"};async function s(){const o=await d(v)([1,2,3]);l.success(`${o.message}，传参为 ${o.data.list.toString()}`)}async function a(){try{await d(A,e)()}catch(o){l.error(o.message)}}return(o,r)=>{const u=g,i=E,_=f;return x(),w("div",h,[n(u,{title:"示例说明",type:"primary",description:"通过将要执行的函数传递给 composable，让 composable 自动开启全屏 loading，函数执行结束后自动关闭 loading","show-icon":""}),n(_,{header:"示例",shadow:"never"},{default:c(()=>[n(i,{type:"primary",onClick:s},{default:c(()=>r[0]||(r[0]=[p(" 查询成功 ")])),_:1,__:[0]}),n(i,{type:"danger",onClick:a},{default:c(()=>r[1]||(r[1]=[p(" 查询失败 ")])),_:1,__:[1]})]),_:1})])}}}),O=C(L,[["__scopeId","data-v-2bfb0bde"]]);export{O as default};
