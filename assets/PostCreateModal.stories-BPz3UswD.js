import{j as e}from"./jsx-runtime-DpcqaxiH.js";import{r as a}from"./iframe-DOEmD7QD.js";import{P as r}from"./fetcher-BVWKl_4K.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-Do-2l1qR.js";import"./Modal-C0Lk9ZV1.js";import"./cn-DWDuF9m2.js";import"./Button-DR56knSZ.js";import"./ProfileImageChangeInput-kiP3JsLS.js";import"./image-C8R2Q8od.js";import"./use-merged-ref-CkNzotqh.js";import"./Input-BR0RDubS.js";import"./TextField-BrYC4eOp.js";import"./TextBox-C-h-0ltz.js";import"./DropDown-5EaqFUGk.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
