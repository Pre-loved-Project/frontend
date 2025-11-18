import{j as e}from"./jsx-runtime-E-rhhbft.js";import{r as a}from"./iframe-COb4l5bp.js";import{P as r}from"./fetcher-CGZ6OeFE.js";import"./preload-helper-B4AOKawx.js";import"./Modal-DnaS0cII.js";import"./cn-DWDuF9m2.js";import"./Button-DZ0CB0b9.js";import"./ProfileImageChangeInput-DrvmtcoY.js";import"./image-pskdCtBF.js";import"./Input-EAfXJo0Q.js";import"./TextField-BbPTi81z.js";import"./TextBox-mpkOdh6o.js";import"./DropDown-Dk2D8ChU.js";const j={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
