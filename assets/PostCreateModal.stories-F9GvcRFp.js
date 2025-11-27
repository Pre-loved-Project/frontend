import{j as e}from"./jsx-runtime-DApYsRMF.js";import{r as a}from"./iframe-BWbEv7Hx.js";import{P as r}from"./PostCreateModal-BSxSmip7.js";import"./preload-helper-B4AOKawx.js";import"./cn-DWDuF9m2.js";import"./TextField-BkDRwkdW.js";import"./TextBox-DACoEp7M.js";import"./DropDown-Clu_ourx.js";import"./Button-CrP2mez_.js";import"./image-73OmjgxQ.js";import"./use-merged-ref-CHEWQx5d.js";import"./fetcher-DMpYzMuA.js";import"./uploadImage-DY3jjQGe.js";const j={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
