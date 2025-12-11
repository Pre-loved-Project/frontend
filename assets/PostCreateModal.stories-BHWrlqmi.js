import{j as e}from"./jsx-runtime-BswGAHwJ.js";import{r as a}from"./iframe-Bjgk5DWC.js";import{P as r}from"./PostCreateModal-vrOXFzmT.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";import"./TextField-B5_xj_wa.js";import"./TextBox-BOs7zwsB.js";import"./DropDown-DsnKr6n9.js";import"./Button-DXNA-56d.js";import"./image-DJVgYtnN.js";import"./fetcher-CZp6-9RZ.js";import"./uploadImage-DY3jjQGe.js";const g={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const j=["Main"];export{t as Main,j as __namedExportsOrder,g as default};
