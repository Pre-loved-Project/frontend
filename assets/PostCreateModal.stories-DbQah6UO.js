import{j as e}from"./jsx-runtime-8V5VlNE9.js";import{r as a}from"./iframe-BhUX973e.js";import{P as r}from"./fetcher-CY7aLHXU.js";import"./preload-helper-B4AOKawx.js";import"./Modal-DEvZgceg.js";import"./cn-DWDuF9m2.js";import"./Button-DBe_j1TG.js";import"./ProfileImageChangeInput-BqpZoMdK.js";import"./image-D0uaGq29.js";import"./Input-C4f8M6dl.js";import"./TextField-BjOOkPks.js";import"./TextBox-BMUwWhVr.js";import"./DropDown-vt8xZDKt.js";const j={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
