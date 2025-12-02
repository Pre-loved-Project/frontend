import{j as e}from"./jsx-runtime-D-utVvNy.js";import{c as o}from"./cn-DWDuF9m2.js";import"./iframe-ZQ11aTVI.js";import"./preload-helper-B4AOKawx.js";const i=({type:c,content:s,isMine:n})=>{const m=o("break-words rounded-2xl px-4 py-2 text-white text-[14px]",n?"bg-gradient-to-r from-[#5097fa] to-[#5363ff]":"bg-[#9fa6b2]");return e.jsx(e.Fragment,{children:c==="image"?e.jsx("img",{src:s,alt:"chat image",className:o("block rounded-2xl object-cover","h-auto w-auto max-w-[250px]",n?"ml-auto":"mr-auto")}):e.jsx("div",{className:m,children:s})})};i.__docgenInfo={description:"",methods:[],displayName:"Message",props:{messageId:{required:!0,tsType:{name:"number"},description:""},type:{required:!0,tsType:{name:"union",raw:'"text" | "image" | "system"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"image"'},{name:"literal",value:'"system"'}]},description:""},content:{required:!0,tsType:{name:"string"},description:""},sendAt:{required:!0,tsType:{name:"string"},description:""},isMine:{required:!0,tsType:{name:"boolean"},description:""},isRead:{required:!0,tsType:{name:"boolean"},description:""}}};const g={title:"Entities/Chat/Message",component:i,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","image"]},content:{control:"text"},isMine:{control:"boolean"}}},t={args:{type:"text",content:"네, 아직 있습니다. 상태는 아주 좋아요 🙂",isMine:!0}},r={args:{type:"text",content:"안녕하세요! 이 물건 아직 있나요?",isMine:!1}},a={args:{type:"image",content:"https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",isMine:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "네, 아직 있습니다. 상태는 아주 좋아요 🙂",
    isMine: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "안녕하세요! 이 물건 아직 있나요?",
    isMine: false
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image",
    content: "https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",
    isMine: true
  }
}`,...a.parameters?.docs?.source}}};const x=["MyText","OtherText","Image"];export{a as Image,t as MyText,r as OtherText,x as __namedExportsOrder,g as default};
