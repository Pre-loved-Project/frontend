import{j as e}from"./jsx-runtime-DecQm7fW.js";import{r as a}from"./iframe-DbTJhULz.js";import{P as r}from"./fetcher-Cy9oQ-0Q.js";import"./preload-helper-B4AOKawx.js";import"./auth.store-CDRp_oPK.js";import"./Modal-B8CiQnqz.js";import"./cn-DWDuF9m2.js";import"./Button-BKd2E4MB.js";import"./ProfileImageChangeInput-DYG0rASX.js";import"./image-DCZgdKme.js";import"./use-merged-ref-Bgo7eGv8.js";import"./Input-D1jR_4ob.js";import"./TextField-1C23O5Lz.js";import"./TextBox-BXP8F7qR.js";import"./DropDown-C4PIVxLh.js";const O={title:"Post/PostCreateModal",component:r,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:900}}}},t={render:()=>{const[s,o]=a.useState(!0),n=()=>o(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),className:"mb-4 rounded bg-blue-500 px-4 py-2 text-white",children:"게시물 추가 모달 열기"}),s&&e.jsx(r,{onClose:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
