import{j as e}from"./jsx-runtime-BYFBh30D.js";import{c as m}from"./cn-DWDuF9m2.js";import{n as p}from"./image-BgWm1i-Q.js";import"./iframe-DQ-EVDol.js";import"./preload-helper-B4AOKawx.js";import"./use-merged-ref-C2IYhZhD.js";const n=({type:o,content:s,isMine:i})=>{const c=m("max-w-[80%] break-words rounded-2xl px-4 py-2 text-white","text-[14px] xl:text-[16px]",i?"bg-gradient-to-r from-[#5097fa] to-[#5363ff]":"bg-[#9fa6b2]");return e.jsx(e.Fragment,{children:o==="image"?e.jsx(p,{src:s,width:200,height:200,alt:"chat image",className:"h-auto max-w-[50%] rounded-2xl object-cover"}):e.jsx("div",{className:c,children:s})})};n.__docgenInfo={description:"",methods:[],displayName:"Message",props:{type:{required:!0,tsType:{name:"union",raw:'"text" | "image"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"image"'}]},description:""},content:{required:!0,tsType:{name:"string"},description:""},isMine:{required:!0,tsType:{name:"boolean"},description:""}}};const h={title:"Entities/Chat/Message",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","image"]},content:{control:"text"},isMine:{control:"boolean"}}},t={args:{type:"text",content:"네, 아직 있습니다. 상태는 아주 좋아요 🙂",isMine:!0}},a={args:{type:"text",content:"안녕하세요! 이 물건 아직 있나요?",isMine:!1}},r={args:{type:"image",content:"https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",isMine:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "네, 아직 있습니다. 상태는 아주 좋아요 🙂",
    isMine: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "안녕하세요! 이 물건 아직 있나요?",
    isMine: false
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image",
    content: "https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",
    isMine: true
  }
}`,...r.parameters?.docs?.source}}};const y=["MyText","OtherText","Image"];export{r as Image,t as MyText,a as OtherText,y as __namedExportsOrder,h as default};
