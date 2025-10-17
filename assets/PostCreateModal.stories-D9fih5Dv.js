import{j as e}from"./jsx-runtime-Bwy1-9DV.js";import{r as a}from"./iframe-Bcq0JOlb.js";import{P as r}from"./fetcher-DCn1jA11.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-BpS5Io_y.js";import"./Modal-BWHYqS5i.js";import"./cn-DWDuF9m2.js";import"./Button-vckROqM5.js";import"./ProfileImageChangeInput-BPzAPa3l.js";import"./image-yh4790uw.js";import"./use-merged-ref-CwlWid4z.js";import"./Input-BQgF73G8.js";import"./TextField-CiyLcp2I.js";import"./TextBox-V4IBFEDc.js";import"./DropDown-BWJpJP7h.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const P=["Main"];export{t as Main,P as __namedExportsOrder,O as default};
