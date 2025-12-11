import{j as e}from"./jsx-runtime-CVKMP0PI.js";import{r as a}from"./iframe-DZQziBTF.js";import{P as r}from"./PostCreateModal-L50RKzqb.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";import"./TextField-Dtfopzky.js";import"./TextBox-DQ7BszNn.js";import"./DropDown-yPuC3e8u.js";import"./Button-D6PE6sZL.js";import"./image-BSnIzF5a.js";import"./fetcher-UjKcR3hy.js";import"./uploadImage-DY3jjQGe.js";const g={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
