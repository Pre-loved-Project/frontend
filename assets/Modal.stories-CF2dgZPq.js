import{j as t}from"./jsx-runtime-BfjiPOCJ.js";import{r as a}from"./iframe-CZvypwl7.js";import{M as o}from"./Modal-C46JcsKZ.js";import{B as i}from"./Button-Cr0QnKUL.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";const x={title:"COMPONENTS/Modal",component:o,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:700}}},argTypes:{message:{control:"text"},buttonText:{control:"text"},onClick:{action:"clicked"}}},e={render:n=>{const[s,r]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{variant:"primary",onClick:()=>r(!0),children:"모달 열기"}),s&&t.jsx(o,{...n,onClick:()=>r(!1),message:"이 모달은 스토리에서 열고 닫을 수 있습니다.",buttonText:"닫기"})]})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button variant="primary" onClick={() => setOpen(true)}>
          모달 열기
        </Button>
        {open && <Modal {...args} onClick={() => setOpen(false)} message="이 모달은 스토리에서 열고 닫을 수 있습니다." buttonText="닫기" />}
      </div>;
  }
}`,...e.parameters?.docs?.source}}};const f=["Interactive"];export{e as Interactive,f as __namedExportsOrder,x as default};
