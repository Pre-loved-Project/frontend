import{j as e}from"./jsx-runtime-WCUlJgU3.js";import{r as a}from"./iframe-DQmesXW6.js";import{P as r}from"./fetcher-C5_YxBpZ.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-1rUGQtyX.js";import"./Modal-D0OOPrHB.js";import"./cn-DWDuF9m2.js";import"./Button-8NsaNKcV.js";import"./ProfileImageChangeInput-hSWpVyi0.js";import"./image-Tbb71Bsx.js";import"./use-merged-ref-DyLTLGX9.js";import"./Input-DLafmIPa.js";import"./TextField-BRW8nKiw.js";import"./TextBox-BVQBDpZ9.js";import"./DropDown-4xHm1Edl.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
