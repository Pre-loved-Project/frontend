import{j as e}from"./jsx-runtime-CnUSzrWD.js";import{r as a}from"./iframe-BVCCEsvP.js";import{P as r}from"./fetcher-BPUEs9zC.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-lcx8nujw.js";import"./Modal-CyXOt4cM.js";import"./cn-DWDuF9m2.js";import"./Button-YPjx9BiM.js";import"./ProfileImageChangeInput-BzhdPXhA.js";import"./image-CRpM0ORs.js";import"./use-merged-ref-Dh3j9dym.js";import"./Input-AG7tQvR5.js";import"./TextField-4XZfR7g4.js";import"./TextBox-pKd-RsKC.js";import"./DropDown-DfgkJIup.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const y=["Main"];export{t as Main,y as __namedExportsOrder,P as default};
