import{M as r}from"./Message-Cy0v2abM.js";import"./jsx-runtime-DcAV_ceR.js";import"./iframe-CPktaBor.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";import"./image-DkYNTNnk.js";const m={title:"Entities/Chat/Message",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{type:{control:{type:"select"},options:["text","image"]},content:{control:"text"},isMine:{control:"boolean"}}},e={args:{type:"text",content:"네, 아직 있습니다. 상태는 아주 좋아요 🙂",isMine:!0}},t={args:{type:"text",content:"안녕하세요! 이 물건 아직 있나요?",isMine:!1}},a={args:{type:"image",content:"https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",isMine:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "네, 아직 있습니다. 상태는 아주 좋아요 🙂",
    isMine: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "text",
    content: "안녕하세요! 이 물건 아직 있나요?",
    isMine: false
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    type: "image",
    content: "https://chalddackimage.blob.core.windows.net/chalddackimage/bf6828c2-3151-433a-b582-ff954f7be6c1-mid.jpeg",
    isMine: true
  }
}`,...a.parameters?.docs?.source}}};const d=["MyText","OtherText","Image"];export{a as Image,e as MyText,t as OtherText,d as __namedExportsOrder,m as default};
