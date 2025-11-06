import{j as e}from"./jsx-runtime-08QGGh8s.js";import{c as n}from"./cn-DWDuF9m2.js";import"./iframe-Hkz5MOcK.js";import"./preload-helper-B4AOKawx.js";const c=({type:i,content:s,isMine:o})=>{const m=n("break-words rounded-2xl px-4 py-2 text-white text-[14px]",o?"bg-gradient-to-r from-[#5097fa] to-[#5363ff]":"bg-[#9fa6b2]");return e.jsx(e.Fragment,{children:i==="image"?e.jsx("img",{src:s,alt:"chat image",className:n("block rounded-2xl object-cover","h-auto w-auto max-w-[250px]",o?"ml-auto":"mr-auto")}):e.jsx("div",{className:m,children:s})})};c.__docgenInfo={description:"",methods:[],displayName:"Message",props:{type:{required:!0,tsType:{name:"union",raw:'"text" | "image"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"image"'}]},description:""},content:{required:!0,tsType:{name:"string"},description:""},isMine:{required:!0,tsType:{name:"boolean"},description:""}}};const u={title:"Entities/Chat/Message",component:c,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","image"]},content:{control:"text"},isMine:{control:"boolean"}}},t={args:{type:"text",content:"네, 아직 있습니다. 상태는 아주 좋아요 🙂",isMine:!0}},a={args:{type:"text",content:"안녕하세요! 이 물건 아직 있나요?",isMine:!1}},r={args:{type:"image",content:"https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",isMine:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const x=["MyText","OtherText","Image"];export{r as Image,t as MyText,a as OtherText,x as __namedExportsOrder,u as default};
