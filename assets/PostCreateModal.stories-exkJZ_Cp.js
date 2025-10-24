import{j as e}from"./jsx-runtime-DuQ7uIwd.js";import{r as a}from"./iframe-DaT0DpmT.js";import{P as r}from"./fetcher-CU9G3k9g.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-CHGqCpFc.js";import"./Modal-C-ekly4K.js";import"./cn-DWDuF9m2.js";import"./Button-KCwFyi-b.js";import"./ProfileImageChangeInput-BbYgNwMT.js";import"./image-DhPH5JbM.js";import"./use-merged-ref-DHGlSaDd.js";import"./Input-Do9DU_A3.js";import"./TextField-Ckj_KvR9.js";import"./TextBox-CjpNy8oj.js";import"./DropDown-QU-MimCI.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
