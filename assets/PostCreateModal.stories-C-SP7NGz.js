import{j as e}from"./jsx-runtime-BY-lmGnn.js";import{r as a}from"./iframe-DQ3Xn4hg.js";import{P as r}from"./fetcher-sPuUw8PQ.js";import"./preload-helper-B4AOKawx.js";import"./Modal-DbOdZR02.js";import"./cn-DWDuF9m2.js";import"./Button-BRitsd1q.js";import"./ProfileImageChangeInput-VrvIKKJM.js";import"./Input-C35rgB-F.js";import"./TextField-CYgItx-U.js";import"./TextBox-Be9GwNjm.js";import"./DropDown-BNUeOvh3.js";const g={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
