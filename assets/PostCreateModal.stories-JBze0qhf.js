import{j as e}from"./jsx-runtime-DdZ_B4qM.js";import{r as a}from"./iframe-3bukjaob.js";import{P as r}from"./fetcher-BpIh_C7h.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-DrU9cwos.js";import"./Modal-PAVHj2Bh.js";import"./cn-DWDuF9m2.js";import"./Button-BjPo5DJ1.js";import"./ProfileImageChangeInput-BaGTQvC1.js";import"./image-CJPLQNgf.js";import"./use-merged-ref-DLt39zro.js";import"./Input-DC9eWQl5.js";import"./TextField-Dpt1DKiK.js";import"./TextBox-CNmSXNiS.js";import"./DropDown-BQjCm1Xz.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
