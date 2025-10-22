import{j as e}from"./jsx-runtime-B8-IMwyg.js";import{r as a}from"./iframe-BoCKv2TB.js";import{P as r}from"./fetcher-BUV5BYxy.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-DnRQNG8P.js";import"./Modal-BNZUmwuX.js";import"./cn-DWDuF9m2.js";import"./Button-RTYdNYLu.js";import"./ProfileImageChangeInput-OeWNtgG_.js";import"./image-CNua8bfX.js";import"./use-merged-ref-CvR-BoNe.js";import"./Input-CBd4G3b8.js";import"./TextField-B2FDi96W.js";import"./TextBox-QU0huI6n.js";import"./DropDown-5-vlDBHj.js";import"./delete-DpU2ogCQ.js";const P={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
