import{j as e}from"./jsx-runtime-C79o4nij.js";import{r as f}from"./iframe-DJRBywMH.js";import{c}from"./cn-DWDuF9m2.js";import{B as l}from"./Button-BhQH-Zsq.js";import"./preload-helper-PPVm8Dsz.js";const h={sm:{width:400,height:200,buttonSize:"sm",textSize:"text-base"},md:{width:500,height:200,buttonSize:"md",textSize:"text-lg"},lg:{width:500,height:200,buttonSize:"md",textSize:"text-lg"}},m=({size:o="md",message:i,buttonText:t="확인",onClick:d})=>{const{width:u,height:p,buttonSize:g,textSize:x}=h[o];return e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black/50 z-50",children:e.jsxs("div",{className:c("bg-black-900 rounded-lg shadow-lg flex flex-col items-center justify-center gap-10 p-6 text-center"),style:{width:u,height:p},children:[e.jsx("p",{className:c("text-white whitespace-pre-line",x),children:i}),e.jsx(l,{variant:"primary",size:g,onClick:d,children:t})]})})};m.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},message:{required:!0,tsType:{name:"string"},description:""},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"확인"',computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const y={title:"COMPONENTS/Modal",component:m,tags:["autodocs"],parameters:{docs:{story:{inline:!1,iframeHeight:700}}},argTypes:{size:{control:{type:"radio"},options:["sm","md","lg"]},message:{control:"text"},buttonText:{control:"text"},onClick:{action:"clicked"}}},s={args:{size:"lg",message:"큰 크기 모달입니다.",buttonText:"확인"}},r={args:{size:"md",message:"중간 크기 모달입니다.",buttonText:"확인"}},a={args:{size:"sm",message:"작은 크기 모달입니다",buttonText:"닫기"}},n={render:o=>{const[i,t]=f.useState(!1);return e.jsxs("div",{children:[e.jsx(l,{variant:"primary",size:"md",onClick:()=>t(!0),children:"모달 열기"}),i&&e.jsx(m,{...o,onClick:()=>t(!1),message:"이 모달은 스토리에서 열고 닫을 수 있습니다.",buttonText:"닫기"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    message: "큰 크기 모달입니다.",
    buttonText: "확인"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    message: "중간 크기 모달입니다.",
    buttonText: "확인"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    message: "작은 크기 모달입니다",
    buttonText: "닫기"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button variant="primary" size="md" onClick={() => setOpen(true)}>
          모달 열기
        </Button>
        {open && <Modal {...args} onClick={() => setOpen(false)} message="이 모달은 스토리에서 열고 닫을 수 있습니다." buttonText="닫기" />}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const j=["Large","Meidum","Small","Interactive"];export{n as Interactive,s as Large,r as Meidum,a as Small,j as __namedExportsOrder,y as default};
