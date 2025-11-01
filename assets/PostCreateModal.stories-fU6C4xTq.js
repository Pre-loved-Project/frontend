import{j as e}from"./jsx-runtime-BphFXWt6.js";import{r as a}from"./iframe-BwaaLhCp.js";import{P as r}from"./fetcher-DCkyQTQx.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-C_ILoj7a.js";import"./Modal-Bfoi_Bg-.js";import"./cn-DWDuF9m2.js";import"./Button-oqve7cCu.js";import"./ProfileImageChangeInput-DOQjn7_h.js";import"./image-BQVp9pId.js";import"./image-select-ojOJEipE.js";import"./Input-FoHDXgMa.js";import"./TextField-BQZTxb4a.js";import"./TextBox-DANT5OuM.js";import"./DropDown-Vi8xnMBp.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
