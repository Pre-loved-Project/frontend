import{j as e}from"./jsx-runtime-CnTK47Ve.js";import{r as a}from"./iframe-Ccpr-w5h.js";import{P as r}from"./fetcher-Dudle4u8.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BG3IdWMs.js";import"./Modal-Dz6sTIwW.js";import"./cn-DWDuF9m2.js";import"./Button-DwiKns-J.js";import"./ProfileImageChangeInput-DZ4zjD4t.js";import"./image-Cyre_igG.js";import"./use-merged-ref-VYcjLuR1.js";import"./Input-MlX4s5nT.js";import"./TextField-BXkNu5bs.js";import"./TextBox-JQNOGGuo.js";import"./DropDown-DjoMeuNY.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);
    return <>
        <button onClick={() => setOpen(true)} className="mb-4 rounded bg-blue-500 px-4 py-2 text-white">
          게시물 추가 모달 열기
        </button>

        {open && <PostCreateModal onClose={handleClose} />}
      </>;
  }
}`,...t.parameters?.docs?.source}}};const P=["Main"];export{t as Main,P as __namedExportsOrder,O as default};
