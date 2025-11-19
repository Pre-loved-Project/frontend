import{j as e}from"./jsx-runtime-BpH9r2M4.js";import{r as a}from"./iframe-DJBkG6rC.js";import{P as r}from"./fetcher-DXOiZEFx.js";import"./preload-helper-B4AOKawx.js";import"./Modal-C8gnF8Lx.js";import"./cn-DWDuF9m2.js";import"./Button-BcNAM3cR.js";import"./ProfileImageChangeInput-wz2V0_v7.js";import"./image-yhuWVlBA.js";import"./Input-DvQtv2Qq.js";import"./TextField-CTP0EH2K.js";import"./TextBox-qF7IqN4H.js";import"./DropDown-DB6pNslZ.js";const j={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const M=["Main"];export{t as Main,M as __namedExportsOrder,j as default};
