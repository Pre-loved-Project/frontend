import{j as e}from"./jsx-runtime-B-Y_HS_P.js";import{r as a}from"./iframe-BdhuXiDO.js";import{P as r}from"./fetcher-CF7sSEdr.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BNmd-mz-.js";import"./Modal-C0nrmiu7.js";import"./cn-DWDuF9m2.js";import"./Button-2QU9WgmR.js";import"./ProfileImageChangeInput-B2QcQc5u.js";import"./image-BaqFXIaU.js";import"./use-merged-ref-jwzFGux8.js";import"./Input-DmQ7Ez5n.js";import"./TextField-Bba4l9lX.js";import"./TextBox-S3N_tTmh.js";import"./DropDown-B3_hK229.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
